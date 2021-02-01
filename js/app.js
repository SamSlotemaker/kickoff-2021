const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/'

// GET REQUEST
const teams = fetch(`${url}squads/1/teams/2/members/`)
    .then(response => response.json())
    .then(data => console.log('fetch', data));

