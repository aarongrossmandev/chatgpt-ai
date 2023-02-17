'use client';
import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat"
import ChatRow from "./ChatRow";
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ModelSelection from "./ModelSelection";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import ThemeChanger from "./ThemeChanger";
import useMediaQuery from "@/lib/useMediaQuery";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";


function SideBar() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 850px)");
  const [active, setActive] = useState(false);
  const { data: session } = useSession();

  const [chats, loading] = useCollection(
    session && query(collection(db, 'users', session.user?.email!, 'chats'),
      orderBy("createdAt", 'desc'))
  );

  const handleClick = () => {
    setActive(!active);
  }

  return (
    <div className={`p-2 flex flex-col h-screen bg-primary-sidebar absolute top-0 left-0 max-w-xs z-40
    transition-all duration-500 ease-in-out ${active && !isAboveMediumScreens ? '-translate-x-full' : 'translate-x-0'}`}>

      {!isAboveMediumScreens && active && (
        <Bars3BottomLeftIcon
          onClick={handleClick}
          className="w-8 h-8 absolute top-2 -right-11 z-30 border border-primary-border cursor-pointer bg-primary-sidebar" />
      )
      }
      {!isAboveMediumScreens && !active &&
        (
          <XMarkIcon
            className="w-8 h-8 absolute top-2 -right-11 z-50 border border-primary-border cursor-pointer bg-primary-sidebar"
            onClick={handleClick}
          />
        )}
      <div className="flex-1">
        <div>
          <NewChat />

          <div className="inline">
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2 my-2">

            {loading && (
              <div className="animate-pulse text-center text-primary-text">
                <p>Loading Chats...</p>
              </div>
            )}

            {/* Map through the chat rows */}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>


      {
        session &&
        <div>
          <ThemeChanger />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={session.user?.image!}
            alt="profile image"
            className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-4" />
          <div className="flex justify-center items-center text-center">
            <button
              onClick={() => signOut()}
              className="flex justify-center items-center hover:bg-secondary-hover px-4 py-2 rounded transition-all duration-300 ease-in-out">
              <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-1 text-test" />
              Logout
            </button>
          </div>
        </div>
      }
    </div >
  )
}

export default SideBar