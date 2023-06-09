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
    <>
      <img src="/sleepy.jpg" className="opacity-20 absolute left-0 top-0 w-[100%] h-[100%] -z-50 object-cover blur-sm" alt="background puppy" />
      <main className="flex min-h-screen flex-col items-center justify-center gap-2 px-10 lg:px-4 py-2">
        <h1 className='text-2xl md:text-6xl font-extrabold text-blue-500'>Pick a Puppy</h1>
        <section className='flex flex-col gap-4 items-center'>
        <div className="scroller snap-x snap-mandatory grid gap-6 px-6 pb-4 mt-1 max-w-[90vw] grid-flow-col overflow-x-auto overscroll-contain auto-cols-[27%] sm:auto-cols-[80px] xl:auto-cols-[160px]">
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
    </>
  )
}
