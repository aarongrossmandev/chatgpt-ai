import { SessionProvider } from '../components/SessionProvider'
import { getServerSession } from 'next-auth';
import SideBar from '../components/SideBar'
import { authOptions } from '../pages/api/auth/[...nextauth]';
import Login from '@/components/Login';
import ClientProvider from '@/components/ClientProvider';

import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)


  return (
    <html lang="en">

      <head />
      <body className='bg-primary-bg text-primary-text relative'>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
              <div className='max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
                <SideBar />
              </div>
              <ClientProvider />
              <div className="flex-1">
                {children}
              </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html >
  )
}
