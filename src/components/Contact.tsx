import React, { useState } from 'react'

interface Email {
  name: string
  subject: string
  email: string
  message: string
}

const Contact: React.FC = () => {
  const [email, setEmail] = useState<Email>({
    name: '',
    subject: '',
    email: '',
    message: '',
  })

  return (
    <div id='contact' className='mx-auto w-3/4 mt-12 text-justify scroll-my-4'>
      <h1 className='font-bold text-4xl'>Contact</h1>
      <form
        action=''
        className='w-full mt-6'
        onSubmit={(e) => e.preventDefault}
      >
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          className='w-full border border-gray-200 rounded-lg p-2 mt-2 mb-4'
          value={email.name}
          onChange={(e) =>
            setEmail({ ...email, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor='subject'>Subject</label>
        <input
          type='text'
          name='subject'
          id='subject'
          className='w-full border border-gray-200 rounded-lg p-2 mt-2 mb-4'
          value={email.subject}
          onChange={(e) =>
            setEmail({ ...email, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          className='w-full border border-gray-200 rounded-lg p-2 mt-2 mb-6'
          value={email.email}
          onChange={(e) =>
            setEmail({ ...email, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor='message'>Message</label>
        <textarea
          name='message'
          id='message'
          className='w-full border border-gray-200 rounded-lg p-2 mt-2 mb-6'
          value={email.message}
          onChange={(e) =>
            setEmail({ ...email, [e.target.name]: e.target.value })
          }
          rows={10}
        />
        <button
          type='submit'
          className='bg-blue-500 text-white px-6 py-2 rounded-md text-lg tracking-wide hover:px-10 hover:bg-blue-600 transition-all'
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
