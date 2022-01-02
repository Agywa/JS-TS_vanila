const ages = [18, 20, 22, 1, 100, 98, 14];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [] // >90

type CourseType = {
    title: string
    price: number
}


const courses = [
    {title: "CSS", price: 100},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]

// <160
const chipPredicate = (course: CourseType) => {
    return course.price < 160
}

const chipCourses = []
