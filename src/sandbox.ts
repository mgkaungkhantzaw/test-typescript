let hello = "hello ";

const hi = (x: string) => {
    return x + Math.PI;
}

console.log(hello, hi('hello'));

let fruits = ['apple', 'orange']
fruits.push('mango')
fruits[0] = 'red'

console.log(fruits)


let obj = {
    name: "mg mg",
    age: 30
}

// obj.skills = ['html', 'css']

console.log(obj)



// unique typescript
let character: string;
let age : number;
let isLoggedin : boolean;

character = 'mgmg'
age = 30 
isLoggedin = false

console.log(character, age, isLoggedin)

// array

let arr: (string|number|boolean)[] = []
arr.push('hello')
arr.push(30)
arr.push(true)
console.log(arr)

let uid: string|boolean;
uid = 'mgmg'
console.log(uid)

//object

let objTest : object;
objTest = {
    name: 'helo',
    age: 30
}
console.log(objTest)

let objDeclare : {
    name: string,
    age: number
}

objDeclare = {
    age: 40,
    name: 'hello'
}

console.log(objDeclare)


//any ( dynamic )
let rio: any;
rio = false
console.log(rio)

let arrAny : any[] = [];
arrAny.push('hello hi')
arrAny.push(true)
console.log(arrAny)


let objAny : { name: any, age: any }
objAny =  {
    name: true,
    age: 'hello age'
}

console.log(objAny)

//function

let great: Function;

great = () => {
    console.log('I am great function')
}

great()


const add = (a: number , b: number, c: number|string = 9) => {
    console.log( a*b , c)
}

add(3, 4, 'hello man')

//type alias
type strOrNum = string| number;
type objWithName = { name: string, uid: strOrNum}

const greatingS = ( name: string, item: strOrNum) => {
    console.log(`${name} is ${item}`) 

}

const greating = ( user: objWithName) => {
    console.log(`${user.name} is ${user.uid}`) 
}


// function singature

let sing: (a: number, b: number) => void;

sing = (one: number, two: number) => {
    console.log(`${one} is and ${two}`)
}

sing(3, 5)

let signNumber : ( a:number, b:number, c:string) => number;

signNumber = (abc: number, anyw: number, c:string) => {
    if(c === 'add'){
        return abc + anyw
    }else{
        return abc - anyw
    }

}

console.log(signNumber(2,5, 'close'))

type person = {name: string, age: number};

let objSign : ( obj: person )  => void;

objSign = (rio: person ) => {
    return `${rio.name} and ${rio.age}` 
}

console.log(objSign({ name: 'hello', age: 30}))