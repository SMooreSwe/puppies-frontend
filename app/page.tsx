'use client'

import { Puppy } from "@/types/types";
import { useEffect, useState } from "react";
import PuppyCard from "./components/PuppyCard";
import PuppyDisplay from "./components/PuppyDisplay";
import PuppyModal from "./components/PuppyModal";
import { addOne, editOne, fetchAll } from "./utils/fetchCalls";

export default function Home() {
  const [puppyList, setPuppyList] = useState<Puppy[]>([])
  const [selectedPuppy, setSelectedPuppy] = useState<Puppy>({
    _id: '',
    name: '',
    breed: '',
    birthdate: '',
  })
  
  
  
  useEffect(() => {
    fetchAll()
    .then(puppies => {
      setPuppyList(puppies)
      setSelectedPuppy(puppies[0])})
  }, [])

  const puppySelector = (newPuppy: Puppy) => {
    setSelectedPuppy(newPuppy)
  }

  const deleteFromPuppyList = (id: string) => {
    const list = puppyList.filter(puppy => puppy._id !== id)
    setPuppyList(list)
    setSelectedPuppy(list[0])
  }

  const addPuppyToList = (_id: string, newPuppy : Puppy) => {
    addOne(newPuppy)
    .then(puppy => {
      const list = [...puppyList, puppy]
      setPuppyList(list)
      setSelectedPuppy(puppy)
    })
  }

  const editDetails = (id: string, newPuppy: Puppy) => {
    editOne(id, newPuppy)
    const newList = puppyList.map(puppy => puppy._id === id ? newPuppy : puppy)
    setPuppyList(newList)
    setSelectedPuppy(newPuppy)
  }
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-12">
      <h1 className='text-3xl'>Pick a Puppy</h1>
      <section className='flex flex-col gap-6 items-center'>
      <div className="flex gap-6 border-solid border-2 border-sky-500 p-6 max-w-[90vw] overflow-x-scroll">
        {puppyList && puppyList.map(puppy => {
          const { _id } = puppy
          return (
            <PuppyCard key={_id} puppy={puppy} puppySelector={puppySelector}/>
          )
        })}
      </div>
        <PuppyModal buttonText="Add Puppy" apiCall={addPuppyToList} puppyExists={false}/>
      </section>
      <PuppyDisplay puppy={selectedPuppy} deleteSetter={deleteFromPuppyList} editSetter={editDetails} />
    </main>
  )
}
