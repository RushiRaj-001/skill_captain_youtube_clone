"use client"

import MediaPlayer from '@/components/MediaPlayer'
import Button from '@/app/Button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2 className='text-center' style={{fontSize:'50px'}}>Welcome to my page</h2>

        <Button/>
        <MediaPlayer/>
      </div>
    </main>
  )
}