'use client'
import { db } from '@/firebase';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast';
import ModelSelection from './ModelSelection';
import useSWR from 'swr';

type Props = {
  chatId: string;
}

function ChatInput({ chatId }: Props) {
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState("");

  const { data: model } = useSWR('model', {
    fallbackData: 'text-davinci-003'
  })


  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      }
    }

    await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
      message
    )

    // toast notification to say Loading...
    const notification = toast.loading('ChatGPT processing...')

    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session
      }),
    }).then(() => {
      // Toast notifcation to say successful
      toast.success('Heres what it had to say', {
        id: notification,
      })
    })

  }

  return (
    <div className='bg-primary-hover rounded-lg text-sm mx-auto md:w-3/4 w-[95%] border border-primary-bg mb-4 mt-2'>
      <form
        onSubmit={sendMessage}
        className='p-5 space-x-5 flex'>
        <input
          className='focus:outline-none flex-1 bg-transparent disabled:cursor-not-allowed disabled:text-gray-300 placeholder-primary-text'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder='Type your message here...'
        />
        <button
          className='hover:bg-[#11A37F]/50 text-white font-bold px-3 py-1.5 rounded disabled:text-gray-200 disabled:cursor-not-allowed 
          transition-all duration-300 ease-in-out'
          disabled={!prompt || !session}
          type="submit">
          <PaperAirplaneIcon className='w-4 h-4 -rotate-45' />
        </button>
      </form>
    </div>
  )
}

export default ChatInput