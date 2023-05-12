import { PuppyCardProps } from '@/types/types'
import React from 'react'

const PuppyCard = (props : PuppyCardProps) => {
    const {puppy, puppySelector } = props
  return (
    <section className="border-solid border-2 border-white py-4 px-2 cursor-pointer rounded-lg" onClick={() => puppySelector(puppy)}>
        <h3 className='text-center'>{puppy.name}</h3>
    </section>
  )
}

export default PuppyCard