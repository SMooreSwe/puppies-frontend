import { PuppyCardProps } from '@/types/types'
import React from 'react'

const PuppyCard = (props : PuppyCardProps) => {
    const {puppy, puppySelector } = props
  return (
    <section className="border-solid bg-sky-600 py-8 px-2 cursor-pointer rounded-lg shadow-lg" onClick={() => puppySelector(puppy)}>
        <h3 className='text-center text-white'>{puppy.name}</h3>
    </section>
  )
}

export default PuppyCard