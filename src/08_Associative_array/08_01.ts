// export const usersArray = ["Dimych", "Natacha", "Valera", "Katya"]

export const users = {
    "0": "Dimych",
    "1": "Natacha",
    "2": "Valera",
    "3": "Katya"
}
 type UsersType = {
    [key:string] : {id: number, name: string}
}

export const users: UsersType = {
    "101": {id: 101, name: "Dimych"},
    "3232312": {id: 3232312, name: "Natacha"},
    "1212": {id: 1212, name: "Valera"},
    "1": {id: 1, name: "Katya"}
}
var user = {id:100500, name : "Igor"}
users[user.id] = user ;
delete users[user.id];
users[user.id].name = "Vitya"

//users[1]


export const usersArray = [
    {id: 101, name: "Dimych"},
    {id: 3232312, name: "Natacha"},
    {id: 1212, name: "Valera"},
    {id: 1, name: "Katya"}
]
// var usersCopy = [...usersArray, user]
// usersArray.push(user)
// usersArray.find(u=> u.id === 1)
// var usersArray = usersArray.filter(u => u.id !== user.id)
