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

export type PuppyDisplayProps = {
    puppy: Puppy,
    listSetter: Function,
}

export type PuppyModalProps = {
    buttonText: string,
    puppy?: Puppy,
    //APIcall: Function,
}

export type PuppyFormProps = {
    puppy?: Puppy,
    //APIcall: Function,
}

export type DeleteButtonProps = {
    puppyID : string,
    listSetter: Function,
}