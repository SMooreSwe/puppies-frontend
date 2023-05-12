import { PuppyDisplayProps } from '@/types/types'
import {motion} from 'framer-motion'
import React from 'react'
import PuppyModal from './PuppyModal'
import DeleteButton from './DeleteButton'

const PuppyDisplay = (props: PuppyDisplayProps) => {
  const {deleteSetter, editSetter, puppy} = props
  const { _id, name, breed, birthdate } = puppy

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: 1,
      }
    }
  }

  const item = {
    start: { scale: 0 },
    end: { scale: 1 }
  }

  return (
    <section className='flex flex-col justify-end bg-sky-400 text-white px-12 pb-4 pt-auto h-[50vh] rounded-lg shadow-lg'>
        <motion.ul
        variants={container}
        initial="start"
        animate="end">
          <motion.li key={`${_id}.name`} variants={item}>{name}</motion.li>
          <motion.li key={`${_id}.breed`}variants={item}>{breed}</motion.li>
          <motion.li key={`${_id}.bdate`} variants={item}>{birthdate}</motion.li>
        </motion.ul>
        <hr className='my-2'/>
        <div className='flex justify-between gap-4'>
          <PuppyModal buttonText='Edit Details' apiCall={editSetter} puppy={puppy} puppyExists={true}/>
          <DeleteButton puppyID={_id!} deleteSetter={deleteSetter} />
        </div>
        
      </section>
  )
}

export default PuppyDisplay