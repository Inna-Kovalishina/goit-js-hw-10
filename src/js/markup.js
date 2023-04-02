
export const createCountriesList = data => {
    const countriesListMarkup = data.map(({flags, name}) => {
        return `<li class = "list-Item">
                    <img src="${flags.svg}" height="40px" width="40px" alt="${flags.alt}"/>
                    <span>${name.common}</span>
                </li>`
    }).join("");
    console.log(countriesListMarkup);
    return countriesListMarkup;
}


export const createCountryInfo = data => {
    const countryInfoMarkup = data.map(({flags, name, capital, population, languages}) => {
        return `<ul class="country-card">
                    <li class = "info-Item">
                        <img src="${flags.svg}" height="40px" width="40px" alt="${flags.alt}/>
                        <h1>${name.common}</h1>
                    </li>
                    <li class = "info-Item">
                        <h3>Capital: <span>${capital}</span></h3>
                    </li> 
                    <li class = "info-Item">
                        <h3>Population: <span>${population}</span></h3>
                    </li>
                    <li class = "info-Item">
                        <h3>Languages: <span>${officialLanguages(languages)}</span></h3>
                    </li>
                </ul>`
    }).join("");
    console.log(countryInfoMarkup);
    return countryInfoMarkup;
}

const officialLanguages = (languages) => (
  Object.values(languages)
);
