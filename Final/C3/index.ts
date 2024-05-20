// generic
type User = {
    name: string
    age: number
}

// Interface với generic function type
interface Identity<Input> {
    (value: Input): Input
}

// Generic với arrow function
const identity = <Type>(value: Type) => value

// Generic với regular function
// function identity<Type>(value: Type){
//     return value
// }

// Sử dụng generic function type
const myIdentity: Identity<number> = identity

myIdentity(20)

// Sử dụng generic với object
const result = identity<User>({
    name: 'John',
    age: 20,
})

// Interface cho object có thuộc tính 'length'
interface LengthObj {
    length: number
}

// Generic với object có thuộc tính 'length'
const logIdentity = <Type extends LengthObj>(value: Type) => {
    console.log(value.length)
    return value
}

logIdentity({ length: 123 })

// Generic với class
const getValue = <Obj, Key extends keyof Obj>(obj: Obj, key: Key) => {
    return obj[key]
}

getValue(
    {
        name: 'John',
        age: 20
    },
    'age'
)

// Default generic
interface Box<Type = string> {
    value: Type
}

const box: Box = {
    value: 'John'
}

const box2: Box<number> = {
    value: 123
}
