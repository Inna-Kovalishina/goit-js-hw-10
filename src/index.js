import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

import './css/styles.css';

import { fetchCountries } from './js/fetchCountries';
import { createCountriesList, createCountryInfo } from './js/markup';

const inputEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

inputEl.addEventListener('input', debounce(handleInputChange, DEBOUNCE_DELAY));

function handleInputChange(evt) {
    let inputValue = evt.target.value.trim();

    countryListEl.innerHTML = '';
    countryInfoEl.innerHTML = '';
    
    if (!inputValue) return;
    
    fetchCountries(inputValue)
    .then(data => {
        if (data.length > 10) {
            return Notify.info('Too many matches found. Please enter a more specific name.', {position: 'center-top',});

        } else if (data.length >= 2 && data.length <= 10) {
            countryListEl.innerHTML = createCountriesList(data);

        } else {
            countryInfoEl.innerHTML = createCountryInfo(data);
        }   
    })
    .catch(err => {
        return Notify.failure('Oops, there is no country with that name', {position: 'center-top',});
    })
}
