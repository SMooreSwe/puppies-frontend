import { Puppy, PuppyFormProps } from '@/types/types'
import React, { FormEvent, useRef, useState } from 'react'

const PuppyForm = (props: PuppyFormProps) => {
    const [puppyExists, setPuppyExists] = useState<boolean>(false)

    if(props.puppy) {
        setPuppyExists(true)
    }

    const nameRef = useRef<HTMLInputElement>(null)
    const breedRef = useRef<HTMLInputElement>(null)
    const bDRef = useRef<HTMLInputElement>(null)
    
    const handleSubmit = (event : FormEvent) => {
        event.preventDefault()
       
        const newPuppy : Puppy = {
            name: nameRef.current!.value,
            breed: breedRef.current!.value,
            birthdate: bDRef.current!.value,
        }
        props.apiCall(props.puppy?._id, newPuppy)
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col items-stretch gap-2 text-base leading-relaxed text-gray-500 dark:text-gray-200'>
        <label htmlFor="puppyName" className='mt-2 pl-2'>Puppy Name:</label>
        <input ref={nameRef} type="text" id="puppyName" className="rounded-lg p-2 text-black" placeholder='name' defaultValue={puppyExists ? props.puppy!.name : '' } required/>
        <label htmlFor="puppyBreed" className='mt-2 pl-2'>Puppy Breed:</label>
        <input ref={breedRef} type="text" id="puppyBreed" className="rounded-lg p-2 text-black" placeholder='breed' defaultValue={puppyExists ? props.puppy!.breed : ''} required/>
        <label htmlFor="puppyBD" className='mt-2 pl-2'>Puppy Birthdate:</label>
        <input ref={bDRef} type="date" id="puppyBD" className="rounded-lg p-2 text-black" defaultValue={puppyExists ? props.puppy!.birthdate : ''} required/>
        <input type="submit" className='self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-20 py-2.5 mt-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'/>
    </form>
  )
}

export default PuppyForm