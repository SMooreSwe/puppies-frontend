import { PuppyFormProps } from '@/types/types'
import React, { FormEvent, useState } from 'react'

const PuppyForm = (props: PuppyFormProps) => {
    const [puppyExists, setPuppyExists] = useState<boolean>(false)

    if(props.puppy) {
        setPuppyExists(true)
    }
    
    const handleSubmit = (event : FormEvent) => {
        event.preventDefault()
        //return API call and set selected puppy
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col items-stretch gap-2 text-base leading-relaxed text-gray-500 dark:text-gray-200'>
        <label htmlFor="puppyName" className='mt-2 pl-2'>Puppy Name:</label>
        <input type="text" id="puppyName" className="rounded-lg p-2" placeholder='name' value={puppyExists ? props.puppy!.name : '' }/>
        <label htmlFor="puppyBreed" className='mt-2 pl-2'>Puppy Breed:</label>
        <input type="text" id="puppyBreed" className="rounded-lg p-2" placeholder='breed' value={puppyExists ? props.puppy!.breed : ''}/>
        <label htmlFor="puppyBD" className='mt-2 pl-2'>Puppy Birthdate:</label>
        <input type="text" id="puppyBD" className="rounded-lg p-2" placeholder='value' value={puppyExists ? props.puppy!.name : ''}/>
        <input type="submit" className='self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-20 py-2.5 mt-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'/>
    </form>
  )
}

export default PuppyForm