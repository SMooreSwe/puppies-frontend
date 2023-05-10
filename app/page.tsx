'use client'

import { Puppy } from "@/types/types";
import { useEffect, useState } from "react";
import PuppyCard from "./components/PuppyCard";
import PuppyDisplay from "./components/PuppyDisplay";

export default function Home() {
  const [puppyList, setPuppyList] = useState<Puppy[]>([])
  const [selectedPuppy, setSelectedPuppy] = useState<Puppy>({
    _id: '',
    name: '',
    breed: '',
    birthdate: '',
  })
  
  useEffect(() => {
    fetch('http://localhost:8080/api/puppies')
      .then(response => response.json())
      .then(puppies => {
        setPuppyList(puppies)
        setSelectedPuppy(puppies[0])})
  }, [])

  const puppySelector = (newPuppy: Puppy) => {
    setSelectedPuppy(newPuppy)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-12">
      <h1>PuppiesUI</h1>
      <div className="flex gap-6 border-solid border-2 border-sky-500 p-6">
        {puppyList && puppyList.map(puppy => {
          const { _id } = puppy
          return (
            <PuppyCard key={_id} puppy={puppy} puppySelector={puppySelector}/>
          )
        })}
      </div>
      <PuppyDisplay puppy={selectedPuppy}/>
      <section>
        <div>AddPuppy Form Here - modal?</div>
      </section>
    </main>
  )
}
