import { Puppy } from "@/types/types"

export const fetchAll = () => {
    return fetch('http://localhost:8080/api/puppies')
      .then(response => response.json())
}

export const deleteOne = (id: string) => {
 fetch(`http://localhost:8080/api/puppies/${id}`, { method: 'delete' })
}

export const addOne = (newPuppy: Puppy) => {
    return fetch('http://localhost:8080/api/puppies', 
    { method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPuppy)},
    ).then(response => response.json())
}

export const editOne = (id: string, newPuppy : Puppy) => {
  return fetch(`http://localhost:8080/api/puppies/${id}`, 
  { method: 'put',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPuppy)},
  )
}