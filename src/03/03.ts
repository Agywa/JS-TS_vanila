import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";


export function sum(a: number, b: number) {
    return a + b;
}

const res = sum(sum(1, 2), sum(1, 3))


export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doeStudentLiveItIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}


export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
building.budget +=budget
}

export  const repairHouse = (houseType: HouseType) => {
 houseType.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire
}

export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire
}

export function createMessage(props: CityType) {
 return "Hello " + props.title + " citizens. I want you be happy. All " + props.citizensNumber + " men"
}