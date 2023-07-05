"use client"
import Image from 'next/image'
import { useState } from 'react'
export default function Home() {
  const [count, setCounter] = useState(0)

  const style = {
    btn: 'bg-white p-5 border-4'
  }
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>{count}</div>
      <button
        className={style.btn}
        onClick={() => setCounter(count + 1)}>add</button>
    </main>
  )
}
