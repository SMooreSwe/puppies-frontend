import { Puppy } from "@/types/types"

export const fetchAll = () => {
    return fetch(`${process.env.NEXT_PUBLIC_API_ADDRESS}`)
      .then(response => response.json())
}

export const deleteOne = (id: string) => {
 fetch(`${process.env.NEXT_PUBLIC_API_ADDRESS}${id}`, { method: 'delete' })
}

export const addOne = (newPuppy: Puppy) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_ADDRESS}`, 
    { method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPuppy)},
    ).then(response => response.json())
}

export const editOne = (id: string, newPuppy : Puppy) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_ADDRESS}${id}`, 
  { method: 'put',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPuppy)},
  )
}

export const photoURL = (breed: string) => {
  const search = `${breed} dog`
   return fetch(`https://api.unsplash.com/search/photos?count=1&query=${search}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`)
    .then(response => response.json())
    .then(response => {
      const record = response.results[0]
      return record.urls.small})
}