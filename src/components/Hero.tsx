import React from 'react'
import { FaGithub } from 'react-icons/fa'
import profilePic from '../assets/profile.jpeg'

const Hero: React.FC = () => {
  return (
    <div className='h-[90vh] bg-sky-900 text-sky-100'>
      <div className='mx-auto w-3/4 flex flex-col md:flex-row items-center justify-between h-full'>
        <section id='info'>
          <h1 className='text-9xl mb-6 tracking-tight'>Paulo Oliveira</h1>
          <h2 className='text-2xl mb-6'>
            Web developer and eternal student from Portugal
          </h2>
          <div className='flex items-center w-full space-x-6'>
            <a
              href='#contact'
              className='px-6 py-3 border-2 border-sky-300 rounded-md text-2xl hover:px-10 transition-all'
            >
              Contact me
            </a>
            <a href='https://github.com/pauloo0'>
              <FaGithub className='text-3xl text-sky-300 hover:text-sky-200' />
            </a>
          </div>
        </section>
        <section id='image' className='w-fit h-2/3'>
          <img
            src={profilePic}
            alt='Paulo Oliveira'
            className='object-contain w-full h-full rounded-3xl shadow-2xl'
          />
        </section>
      </div>
    </div>
  )
}

export default Hero
