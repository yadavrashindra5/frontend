// const User = {
//     name: "hitesh",
//     email: "yadavrashindra67890@gmail.com",
//     isActive: true
// }

// function createUser(a: { name?: string, isPaid?: boolean }) {
//     console.log(a);
// }

// createUser({ name: "rahsindra" })




//type

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }


// function createUser(user: User): User {
//     return { name: "", email: "", isActive: false }
// }

// createUser({ name: "", email: "", isActive: true })



/**
 * 
 * readonly
 * 
 */

// type User = {
//     readonly _id: string;
//     name: string;
//     email: string;
//     isActive: boolean;
//     credCardDetails?: number;
// }

// let myUser: User = {
//     _id: "1234",
//     name: "h",
//     email: "rash",
//     isActive: true
// }

// console.log(myUser)

/**
 * 
 * 
 * here _id is readonly means we can change the value of it after initial creation
 * 
 * 
 */


/**
 * 
 * & operator intersection operator
 * 
 */

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & { cvv: number }


export { }