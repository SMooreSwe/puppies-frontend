import { PuppyCardProps } from '@/types/types'
import React from 'react'

const PuppyCard = (props : PuppyCardProps) => {
    const {puppy, puppySelector } = props
  return (
    <section className="border-solid border-2 border-white p-4 cursor-pointer" onClick={() => puppySelector(puppy)}>
        <div>{puppy.name}</div>
    </section>
  )
}

export default PuppyCard