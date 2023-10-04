import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { SignInButton, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs';
import Link from 'next/link';
import { LogIn } from 'lucide-react';
import Fileupload from '@/components/ui/Fileupload';

export default async function Home() {
  const {userId} = await auth();
  const isAuth = userId;
  return (
    <>
    <div className='w-screen h-screen bg-gradient-to-r from-rose-100 to-teal-100'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col items-center text-center'>
          <div className='flex items-center'>
            <h1 className='mr-3 text-5xl font-semibold'>Chat with any pdf</h1>
            <UserButton afterSignOutUrl='/'/>
          </div>
          <div className='flex mt-2'>
            {
              isAuth?
              <Button>Go to Chats</Button>
              :
              <SignInButton/>
            }
          </div>
          <p className='max-w-xl mt-1 text-lg text-slate-900'>
            Join millions of students, researchers and professionals to instantly answer questions with AI
          </p>
          <div className='w-full mt-4'>
            {
              isAuth?
              (
                <Fileupload/>
              )
              :
              <Link href={'/sign-in'}>
                <Button>   
                Login to get Started
                <LogIn className=' w-4 h-4 ml-1 text-lg'/>
                </Button>
              </Link>
            
            }
          </div>

        </div>

      </div>

    </div>
    </>

  )
}
