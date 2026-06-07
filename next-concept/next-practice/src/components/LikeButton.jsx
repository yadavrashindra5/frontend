'use client'
 
import handleClick1 from '@/action'
import { useState } from 'react'
 
export default function LikeButton({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes)
 
  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          const updatedLikes = await handleClick1()
          console.log(updatedLikes);
          setLikes(updatedLikes)
        }}
      >
        Like
      </button>
    </>
  )
}