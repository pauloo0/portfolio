import React from 'react'

const About: React.FC = () => {
  return (
    <div className='mx-auto w-3/4 mt-12 text-justify'>
      <h1 className='font-bold text-4xl'>About</h1>
      <p className='text-xl mt-6'>
        I’m Paulo, 23 years old, born and raised in Portugal. I stumbled into
        the world of programming thanks to my love for computers and technology
        during high school.
      </p>
      <p className='text-xl mt-2'>
        After my graduation and a few internships working on network and
        computer maintenance I also got to learn how it all comes together to
        build a functional server, computer, network from scratch.
      </p>
      <p className='text-xl mt-4'>
        On first non-internship job I was the sole IT Technician in the firm. I
        had to learn everything for myself, sparking this burning desire to
        learn new things. I learnt how to setup Email and VPN servers whilst
        helping everyone in the firm with their tech problems. Also taught
        myself how to code in FoxPro, this deprecated Microsoft language was
        fundamental to work with PHC, an ERP software made in Portugal.
      </p>
      <p className='text-xl mt-2'>
        Fast forward to May of 2023, I’m now at a new company where as a PHC and
        Web developer and IT Technician.
      </p>
    </div>
  )
}

export default About
