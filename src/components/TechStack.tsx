import React from 'react'
import Icons from '../utils/tech_stack'

const TechStack: React.FC = () => {
  return (
    <section className='mx-auto w-3/4 mt-12 text-justify'>
      <h1 className='font-bold text-4xl'>Tech Stack</h1>
      <div className='mt-6 p-6 w-full grid grid-cols-5 place-items-center gap-8 border border-gray-50 bg-gray-100 shadow-xl rounded-2xl'>
        <a href='https://react.dev/'>
          <img
            src={Icons.react}
            alt='React'
            className='w-20 h-w-20 hover:scale-[1.05] transition-all'
          />
        </a>
        <a href='https://tailwindcss.com/'>
          <img
            src={Icons.tailwindcss}
            alt='Tailwind'
            className='w-20 h-w-20 hover:scale-[1.05] transition-all'
          />
        </a>
        <a href='https://www.typescriptlang.org/'>
          <img
            src={Icons.typescript}
            alt='Typescript'
            className='w-20 h-w-20 hover:scale-[1.05] transition-all'
          />
        </a>
        <img
          src={Icons.html}
          alt='HTML'
          className='w-20 h-w-20 hover:scale-[1.05] transition-all'
        />
        <img
          src={Icons.css}
          alt='CSS'
          className='w-20 h-w-20 hover:scale-[1.05] transition-all'
        />
        <img
          src={Icons.javascript}
          alt='Javascript'
          className='w-20 h-w-20 hover:scale-[1.05] transition-all'
        />
        <img
          src={Icons.tsql}
          alt='MS SQL Server'
          className='w-20 h-w-20 hover:scale-[1.05] transition-all'
        />
        <a href='https://www.prisma.io/'>
          <img
            src={Icons.prisma}
            alt='Prisma'
            className='w-20 h-w-20 hover:scale-[1.05] transition-all'
          />
        </a>
        <img
          src={Icons.cSharp}
          alt='C#'
          className='w-20 h-w-20 hover:scale-[1.05] transition-all'
        />
        <img
          src={Icons.dotNet}
          alt='.NET'
          className='w-20 h-w-20 hover:scale-[1.05] transition-all'
        />
      </div>
    </section>
  )
}

export default TechStack
