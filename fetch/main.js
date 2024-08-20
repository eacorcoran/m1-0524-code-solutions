"use strict";
async function fetchData() {
    try {
        const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' });
        if (!responseUsers.ok) {
            throw new Error(`HTTP error! Status: ${responseUsers.status}`);
        }
        const arrayUsers = (await responseUsers.json());
        console.log(arrayUsers);
    }
    catch (error) {
        console.error('Error:', error);
    }
}
fetchData();
async function fetchPoke() {
    try {
        const responseUsers = await fetch('https://pokeapi.co/api/v2/pokemon/1', {
            method: 'GET',
        });
        if (!responseUsers.ok) {
            throw new Error(`HTTP error! Status: ${responseUsers.status}`);
        }
        const arrayPoke = (await responseUsers.json());
        console.log(arrayPoke);
    }
    catch (error) {
        console.error('Error:', error);
    }
}
fetchPoke();
