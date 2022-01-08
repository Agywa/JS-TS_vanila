type userType = {
    name: string
    age: number
    address: { title: string }
}

function icreseAge(u: userType) {
    u.age++; // u.age = u.age+1
}


test("big test", () => {


    var user = {
        name: "Dimych",
        age: 32,
        address: {
            title: "Minsk"
        }
    }
    icreseAge(user);

    expect(user.age).toBe(33);

    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000);
})

test("array test", () => {


    var users = [{
        name: "Dimych",
        age: 32,
    },
        {
            name: "Dimych",
            age: 32,
        },
    ]

    var admins = users;
    admins.push({name: "Banduygan", age: 13})
    expect(users[2]).toEqual({name: "Banduygan", age: 13})

})

test("value type test", () => {


    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount = adminsCount + 1;
    usersCount++

})


test("big2 test", () => {
    const address = {
        title: "MInsk"
    }

    var user = {
        name: "Dimych",
        age: 32,
        address: address
    }

    // let addr = user.address

    let user2: userType = {
        name: "Natacha",
        age: 30,
        address: address,
    }

    address.title = "Minsk City"

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe("Minsk City")


})


test("reference type array test", () => {
    const address = {
        title: "MInsk"
    }

    var user = {
        name: "Dimych",
        age: 32,
        address: address
    }

    // let addr = user.address

    let user2: userType = {
        name: "Natacha",
        age: 30,
        address: address,
    }

    const users = [user, user2, {name: "Micha", age: 18, address: address}]

    const admins = [user, user2]

    admins[0].name = "Dmitry"


    expect(users[0].name).toBe("Dmitry")
    expect(user.name).toBe("Dmitry")
})

test("sort array test", () => {

    const leters = ["c", "d", "a", "z", "e"]
    passportist(leters)
    expect(leters).toEqual(["a", "c", "d", "e", "z"])
});

function passportist(letters: any) {
    letters.sort();
    console.log(letters);
}

