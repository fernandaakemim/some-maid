const zipCode = document.getElementById('zipCode');

zipCode.addEventListener("focusout", () => {searchAddress(zipCode.value)});

async function searchAddress(zipcode) {
    const errorMessageZC = document.getElementById('errorZipCode');
    errorMessageZC.innerHTML = "";
    const errorMessageCity = document.getElementById('errorCity');
    errorMessageCity.innerHTML = "";
    try {
        const queryZipCode = await fetch(`https://api.zippopotam.us/us/${zipcode}`);
        const queryZipCodeConverted = await queryZipCode.json();

        const city = document.getElementById('city');
        const state = document.getElementById('state');

        city.value = queryZipCodeConverted.places[0]['place name'];
        state.value = queryZipCodeConverted.places[0].state;

        if (city.value != "Atlanta") {
            errorMessageCity.innerHTML = `<p>* For now, we only serve the city of Atlanta - GA</p>`
        }

        return queryZipCodeConverted;
    } catch (error) {
        errorMessageZC.innerHTML = `<p>Invalid zip code.</p>`;
    }
}