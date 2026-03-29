// let score: number | string = 33

// score = 44;
// score = "55"

//union type


// type Admin = {
//     username: string;
//     id: number;
// }

// type Users = {
//     name: string;
//     id: number;
// }



// let hitesh: Admin | Users = { name: "", id: 2 }


//array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = ["1", "2", 3];


const data4: string[] | number[] = []//in this case either we have to add all number or string