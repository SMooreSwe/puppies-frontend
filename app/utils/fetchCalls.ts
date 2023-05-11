import { Puppy } from "@/types/types"

export const fetchAll = () => {
    return fetch('http://localhost:8080/api/puppies')
      .then(response => response.json())
}

export const deleteOne = (id: string) => {
 fetch(`http://localhost:8080/api/puppies/${id}`, { method: 'delete' })
}

export const addOne = (name : string, breed: string, birthdate: string) => {
    
}