export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]

const dimychTransformator = (man: ManType) => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})


const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Andrew", LastName: "Ivanov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Alexander", LastName: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry", LastName: "Sidorov"
    },
]


const dev2 = [
    // d1, d2, d3
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]
const dev3 = people.map(dimychTransformator)
const dev4 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))


export const messages = people.map( man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-Incubator`)

export const createGreetingMessage = ( people: Array<ManType>) => {
   return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-Incubator`)
}