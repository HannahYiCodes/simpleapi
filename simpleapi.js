// DO NOT FORGET HOW TO SET UP A SIMPLE API

let url = 'http://api.github.com/users'

// Step 1
const xhr = new XMLHttpRequest()
// console.log("step1", xhr);

// Step 2
xhr.open("GET", url)
// console.log("step2", xhr);

// Step 3
xhr.send()
// console.log("step3", xhr);

// Step 4
xhr.onload = () => {
    document.getElementById('header').innerText = xhr.responseText
    console.log("non parsed", xhr.responseText);
    
    jsonData = JSON.parse(xhr.responseText)

    for (let i = 0; i < jsonData.length; i++) {
        document.getElementById('header').innerText = jsonData[i].login;
    }
}