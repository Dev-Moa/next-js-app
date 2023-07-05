import Image from 'next/image'
import { useState } from 'react'
export default function Home() {
  const [count, setCounter] = useState('')
  const onClick = (e) => {
    e.preventDefault()

  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{count}</div>
      <button onClick={() => setCounter(count + 1)}>add</button>
    </main>
  )
}
