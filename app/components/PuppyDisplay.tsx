import { PuppyDisplayProps } from '@/types/types'
import React from 'react'
import PuppyModal from './PuppyModal'
import DeleteButton from './DeleteButton'

const PuppyDisplay = (props: PuppyDisplayProps) => {
  const {deleteSetter, editSetter, puppy} = props
  const { _id, name, breed, birthdate } = puppy

  return (
    <section className='flex flex-col justify-end border-solid border-2 border-sky-400 px-12 pb-4 pt-auto h-[40vh] rounded-lg'>
        <div>{name}</div>
        <div>{breed}</div>
        <div>{birthdate}</div>
        <hr className='my-2'/>
        <div className='flex justify-between gap-4'>
          <PuppyModal buttonText='Edit Details' apiCall={editSetter} puppy={puppy} puppyExists={true}/>
          <DeleteButton puppyID={_id!} deleteSetter={deleteSetter} />
        </div>
        
      </section>
  )
}

export default PuppyDisplay