

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    getPerson(getData)
});

function getPerson(cb)
 {
    const url = "https://randomuser.me/api/"
    const request = new XMLHttpRequest();

    request.open('GET', url, true)
    request.onload = function(){
        if (this.status === 200){
            cb(this.responseText, showData)
        }
    }

    request.send();

 }
function getData(response, cb){
    const data = JSON.parse(response)
    const {
        name: {first},
        name: {last},
        picture: {large},
        location: {street},
        email,
        phone,
    } = data.results[0]
    cb(first, last, large, street, email, phone);
    }

    function showData(first, last, large, street, email, phone){
        document.getElementById('name').textContent = `${first} ${last}`
        document.getElementById('first').textContent = first;
        document.getElementById('last').textContent = last;
        document.getElementById('street').textContent = street.name;
        document.getElementById('phone').textContent = phone;
        document.getElementById('email').textContent = email;
        document.getElementById('photo').src = large;

    }
