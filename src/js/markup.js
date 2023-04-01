
export const createCountriesList = data => {
    const countriesListMarkup = data.map(({flags, name}) => {
        return `<li class = "listItem">
                    <img src="${flags.svg}" height="40px" width="40px"/>
                    <span>${name.common}</span>
                </li>`
    }).join("");
    console.log(countriesListMarkup);
}


export const createCountryInfo = data => {
    const countryInfoMarkup = data.map(({flags, name, capital, population, languages}) => {
        return `<ul class="card">
                    <li>
                        <img src="${flags.svg}" height="40px" width="40px"/>
                        <h1>${name.common}</h1>
                    </li>
                    <li>
                        <h2>Capital:${capital}</h2>
                    </li> 
                    <li>
                        <h2>Population:${population}</h2>
                    </li>
                    <li>
                        <h2>Languages:${officialLanguages(languages)}</h2>
                    </li>
                </ul>`
    }).join("");
    console.log(countryInfoMarkup);
}

const officialLanguages = (languages) => (
  Object.values(languages)
);
