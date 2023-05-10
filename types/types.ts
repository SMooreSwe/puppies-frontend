export type Puppy = {
    _id?: string,
    breed: string,
    name: string,
    birthdate: string,
}

export type PuppyCardProps = {
    puppy: Puppy,
    puppySelector: Function,
}