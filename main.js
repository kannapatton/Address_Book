
//stores the entries from the json in an empty array in the global scope
let arrayOfEntries =[];
//when the page is loaded this code will  run
window.onload = () => {
    getEntries()
}
//the fetch request. this codee makes a fetch request to the url inside the parameter. then the response will be saved
// as res. the res.json will not be saved as posts and saved into the variable arrayOfEntries
const getEntries = () => {
//error handling
    fetch("https://randomuser.me/api/?results=20")
    .then(response => {
    console.log(response)
    if (!response.ok) {
    throw Error("ERROR")
    }
    return response.json()
    })
    .then(data => {
    //console.log(data.results);
    const displayContactsToHtml = data.results.map(user => {
    // console.log(user.login.username)
    return `
    
    <img src='${user.picture.large}'>
    <p>${user.name.first}</p> <p class="person">${user.name.last}</p>
    <ul>
    <li>Gender: ${user.gender} </li>
    <li>Location: ${user.location.country}</li>
    <li>Age: </span> ${user.dob.age}</li>
    </ul>
    <hr>
    `
    }).join('')
    // console.log(displayContactsToHtml)
    document
    .getElementById('displayContacts')
    .insertAdjacentHTML('afterend', displayContactsToHtml);
    })
    .catch(error => {
    console.log(error);
    })
    };
    ///done?
