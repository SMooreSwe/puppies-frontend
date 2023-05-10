import { PuppyDisplayProps } from '@/types/types'
import React from 'react'

const PuppyDisplay = (props: PuppyDisplayProps) => {
    const { name, breed, birthdate } = props.puppy
  return (
    <section className='border-solid border-2 border-sky-400 p-12'>
        <div>{name}</div>
        <div>{breed}</div>
        <div>{birthdate}</div>
        <hr />
        <div>Update Form Here - modal?</div>
        <div>Delete Puppy Here? - button?</div>
      </section>
  )
}

export default PuppyDisplay