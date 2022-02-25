

// fetch('https://randomuser.me/api/')
//     .then(function(resp) {
//         return resp.json();
//     })
//     .then(function(data) {
//         console.log(data);

//     });

let addressBook =[];

const singleUser = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(user => console.log(user))
}
singleUser()

const newUser = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(user => addressBook.push(user))

    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(user => addressBook.push(user))
    return addressBook;
}
newUser()

const namePic = () => {
    addressBook.map(results => console.log(results))
} 
namePic()

window.onload = multipleUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(user => console.log(user))
}
multipleUsers()

