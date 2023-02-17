/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-screen px-2'>
      <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>

      <div className='flex space-x-4 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className='h-6 w-6' />
            <h2>Examples</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>"How do I make a HTTP request in Javascript?"</p>
            <p className='infoText'>"What are some good ideas for a birthday party for an adult?"</p>
            <p className='infoText'>"What tools do I need to change the oil in my car?"</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className='h-6 w-6' />
            <h2>Capabilities</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>Remembers what user said earlier in the conversation</p>
            <p className='infoText'>Change the ChatGPT Model to use</p>
            <p className='infoText'>Allows user to provide follow-up corrections</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className='h-6 w-6' />
            <h2>Limitations</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>May occasionally generate incorrect information</p>
            <p className='infoText'>May occasionally produce harmful instructions or biased content</p>
            <p className='infoText'>Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </main>
  )
}
