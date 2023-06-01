'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// fetch(`https://restcountries.com/v3.1/alpha/${ime}`)
///////////////////////////////////////

function countries(ime) {
  fetch(`https://restcountries.com/v3.1/name/${ime}`)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log(data);
      return renderCountries(data);
    });
}

function renderCountries(data) {
  data = data[0];
  const language = Object.keys(data.languages);
  const valute = Object.keys(data.currencies);
  const el = `
    <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name"><span style="color:blue;font-weight:bold">Country</span> ${
        data.name.common
      }</h3>
      <h4 class="country__region">REGION ${data.region}</h4>
      <p class="country__row"><span>👫</span><span style="color:red;font-weight:bold">POP</span> ${(
        data.population / 1000000
      ).toFixed(
        2
      )} <span style="color:green;font-weight:bold">MIL</span> people</p>
      <p class="country__row"><span>🗣️</span><span style="color:red;font-weight:bold">LNG</span> ${language}</p>
      <p class="country__row"><span>🗣️</span><span style="color:red;font-weight:bold">CAP</span> ${
        data.capital
      }</p>
      <p class="country__row"><span>💰</span><span style="color:red;font-weight:bold">CUR</span> ${valute}</p>
    </div>
  </article>
    `;
  countriesContainer.insertAdjacentHTML('afterend', el);
}

countries('srb');
