import { PuppyDisplayProps } from '@/types/types'
import React from 'react'
import PuppyModal from './PuppyModal'
import DeleteButton from './DeleteButton'

const PuppyDisplay = (props: PuppyDisplayProps) => {
    const { _id, name, breed, birthdate } = props.puppy
  return (
    <section className='border-solid border-2 border-sky-400 p-12'>
        <div>{name}</div>
        <div>{breed}</div>
        <div>{birthdate}</div>
        <hr className='my-2'/>
        <div className='flex justify-between gap-4'>
          <PuppyModal buttonText='Edit Details'/>
          <DeleteButton puppyID={_id!} />
        </div>
        
      </section>
  )
}

export default PuppyDisplay