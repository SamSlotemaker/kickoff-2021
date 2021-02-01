const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/'

// GET REQUEST
const teams = fetch(`${url}squads/1/teams/2/members/`)
    .then(response => response.json())
    .then(data => console.log('fetch', data));

// PUT REQUEST
const putData = {
    id: 6,
    teamId: 2,
    name: 'Sam',
    prefix: '',
    surname: 'Slotemaker',
    mugshot: 'https://avatars.githubusercontent.com/u/60625329?s=460&u=663bdaef456e0cb90e4435c57a250889a008d691&v=4',
    githubHandle: 'SamSlotemaker',
    other: {
        sport: 'fitness',
        muziek: 'alles',
        werkplek: 'thuis'
    }
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

// postData(`${url}squads/1/teams/2/members/`, putData)
//     .then(data => {
//         console.log('put', data);
//     });

// CIRCLE
const circle = document.querySelector('.circle')

function changeCircle(e) {

    circle.style.top = `${e.clientY}px`
    circle.style.left = `${e.clientX}px`
}
console.log('hey')
window.addEventListener('mousemove', changeCircle)