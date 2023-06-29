import React, { useState, useEffect } from 'react'

const Projects: React.FC = () => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      if (dots.length === 3) {
        setDots('')
      } else {
        setDots((dots) => dots + '.')
      }
    }, 500)

    return () => clearInterval(interval)
  }, [dots.length])

  return (
    <div className='mx-auto w-3/4 mt-12 text-justify'>
      <h1 className='font-bold text-4xl'>Projects</h1>
      <div className='my-24 w-full grid place-items-center'>Loading{dots}</div>
    </div>
  )
}

export default Projects
