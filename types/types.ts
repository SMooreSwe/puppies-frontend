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
    deleteSetter: Function,
    editSetter: Function,
}

export type PuppyModalProps = {
    buttonText: string,
    puppy?: Puppy,
    apiCall: Function,
    puppyExists: boolean,
}

export type PuppyFormProps = {
    puppy?: Puppy,
    apiCall: Function,
    puppyExists: boolean,
}

export type DeleteButtonProps = {
    puppyID : string,
    deleteSetter: Function,
}