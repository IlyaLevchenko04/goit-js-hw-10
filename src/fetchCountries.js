import { BASE_URL } from ".";
import { input } from ".";
import Notiflix from 'notiflix';


export function fetchApi(name){
    return fetch(`${BASE_URL}/${name}?fields=capital,population,languages,name,flags`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.statusText)
        }

        return response.json();
    }).catch(err => {
        if(input.value.trim()){
            Notiflix.Notify.failure('Oops, there is no country with that name');
        }
    })
}