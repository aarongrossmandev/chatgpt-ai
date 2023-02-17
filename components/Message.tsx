import { DocumentData } from "firebase/firestore";

type MessageProps = {
  message: DocumentData
}


function Message({ message }: MessageProps) {
  const isChatGPT = message.user.name === "ChatGPT";

  return (
    <div className={`py-5 ${isChatGPT && 'bg-primary-hover'}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">

        { /* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={message.user.avatar}
          alt="chatgpt avatar"
          className="h-8 w-8" />
        <p className="pt-1 text-sm">
          {message.text}
        </p>
      </div>
    </div>
  )
}

export default Message