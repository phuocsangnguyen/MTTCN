/** 
* Basic type 
*/

// string
let car = "Toyota"
let bike: string
bike = 'Winner'
// bike = 150 error

// number
let num: number = 10

// boolean
let isLoading:boolean = false

// undefined
// let body = undefined

// null
let footer: null

// any
let person: any
person = 10
person = 'Something'
person = false

/**
* Object
*/

// let house = {}
// house.address = 'Da Nang'
let house: {
    address: string
    color?: string
} = {
    address:''
}
house.address = 'Da Nang'

/**
 *Array
 */

 let products: any[] = []
products.push(1)
products.push('VietNam')

// string
let names = ['Alex', 'Ben']
let addresses: string[] = []
addresses.push('Da Nang')

// number[]
let number: number[] = []
number = [1, 2, 3]

// object array
let people: {
    name: string
    age: number
} [] = []
people.push({
    name:'Karty',
    age: 27
})

/**
 * Function
 */

const sum1  = (num1: number, num2: number): number => {
    return num1+num2
}

sum1(1,2)

const sub: (num1: number, num2: number) => number = (
    num1: number,
    num2: number
) => num1 - num2

const handle = () => {
    console.log(123)
}

/**
 * Union
 */

let price: string | number | boolean
price = '10'
price = 20
price = false

let body: {name: string|number} | {firstname: string} = {name: 100}

/**
 * Enum
 */

enum Sizes {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL'
}

let size = Sizes.S

/**
 * Interface
 */

interface State {
    name: string
    isLoading: boolean
}
let state: State = {
    name: 'Nang',
    isLoading: false
}

/**
 * Type
 */

type Name = {
    name: string
}

type Age = {
    age: number
}

type Person = Name | Age 

/**
 * Class
 */

class Person1 {
    private name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age 
    }
    handle() {
        this.name
    }
}
const alex = new Person1('alex', 27)
alex.age    // ko dung .name dc, chi sd trong class Person1