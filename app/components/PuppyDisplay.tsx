import { PuppyDisplayProps } from '@/types/types'
import React from 'react'
import PuppyModal from './PuppyModal'
import DeleteButton from './DeleteButton'

const PuppyDisplay = (props: PuppyDisplayProps) => {
  const {deleteSetter, editSetter, puppy} = props
  const { _id, name, breed, birthdate } = puppy

  return (
    <section className='border-solid border-2 border-sky-400 p-12'>
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