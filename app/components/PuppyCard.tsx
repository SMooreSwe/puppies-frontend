import { PuppyCardProps } from '@/types/types'
import React from 'react'

const PuppyCard = (props : PuppyCardProps) => {
    const {name, breed, birthdate} = props.puppy
  return (
    <div className="border-solid border-2 border-white p-4 cursor-pointer" onClick={() => props.puppySelector(props.puppy)}>
              <div>{name}</div>
              <div>{breed}</div>
              <div>{birthdate}</div> 
            </div>
  )
}

export default PuppyCard