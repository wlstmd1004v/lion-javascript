import { tiger } from "./lib/index.js";

// xhr.get(
//     'https://jsonplaceholder.typicode.com/users',
//     (res) => {
//         console.log(res);
//     }
// )

const data = await tiger.get('https://jsonplaceholder.typicode.com/users');

console.log(data);
