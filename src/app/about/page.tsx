"use client"

import { useRouter } from 'next/navigation'

const About = () => {

  const router = useRouter();

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => router.push("/")}>Go Home</button>
    </div>
  )
}

export default About
