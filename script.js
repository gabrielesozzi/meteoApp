import { cityApi } from "./dataApi.js";

const date = new Date();
document.getElementById("showtoday").textContent = date.toLocaleDateString();

const showCards = () => {
  cityApi.map((item) =>
    fetch(item)
      .then((response) => response.json())
      .then((data) => {
        città.push(data);
        const sortCity = (a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        };
        città.sort(sortCity);
        createCardsList(città);
      })
  );
};

const città = [];

const container = document.querySelector(".container");

const createCardsList = (data) => {
  const cards = data
    .map(
      (item) =>
        `<div class="cityCard" id="${item.id}">                
          <h3>${item.name} <span>(${item.sys.country})</span> | <span>${item.main.temp}° </span></h3>
          <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">       
          <div class="weatherInfo">
          <p class="textWeather"> ${item.weather[0].main} </span></p>  
          <p> <b>Situazione attuale:</b> ${item.weather[0].description}</p>  
          <p> <b>Temperatura percepita:</b> ${item.main.feels_like}°</p>
          </div>           
          </div>`
    )
    .join("");

  container.innerHTML = `<div class="cardsListContainer">${cards}</div>`;
};

const createSingleCard = (data) => {
  const citySelected = data.map(
    (item) =>
      `<div class="citySingleCard" id="${item.id}">                
            <h3>${item.name} <span>(${item.sys.country})</span> - <span>${item.main.temp}° </span></h3>
            <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">   
            <div>            
            <p> ${item.weather[0].main} - <span>Situazione attuale: ${item.weather[0].description}</span></p>  
            <p>Temperatura percepita: ${item.main.feels_like}°</p> 
            <p>Min: <i class="fa-solid fa-temperature-empty"></i> ${item.main.temp_min}°</p>
            <p>Max: <i class="fa-solid fa-temperature-high"></i> ${item.main.temp_max}°</p>
            <p>Vento: <i class="fa-solid fa-wind"></i> ${item.wind.speed}</p>
            </div>               
          </div>
          `
  );

  container.innerHTML = `<div class ="containerSelected" >${citySelected}<div>`;
};

const singleSelectedCity = (data) => {
  const selectOption = document.getElementById("choose-city");

  selectOption.addEventListener("change", (event) => {
    const cityValue = event.target.value;

    const result = data.filter(
      (el) => el.name.toLowerCase().search(cityValue) >= 0
    );

    createSingleCard(result);

    switch (cityValue) {
      case "ancona":
        document.getElementById("3183087");
        document.querySelector(".containerSelected").classList.add("ancona");
        break;
      case "aosta":
        document.getElementById("3182996");
        document.querySelector(".containerSelected").classList.add("aosta");
        break;
      case "bari":
        document.getElementById("36542001");
        document.querySelector(".containerSelected").classList.add("bari");
        break;
      case "bologna":
        document.getElementById("3181927");
        document.querySelector(".containerSelected").classList.add("bologna");
        break;
      case "cagliari":
        document.getElementById("2525471");
        document.querySelector(".containerSelected").classList.add("cagliari");
        break;
      case "campobasso":
        document.getElementById("3180990");
        document
          .querySelector(".containerSelected")
          .classList.add("campobasso");
        break;
      case "catanzaro":
        document.getElementById("2525059");
        document.querySelector(".containerSelected").classList.add("catanzaro");
        break;
      case "florence":
        document.getElementById("3176959");
        document.querySelector(".containerSelected").classList.add("firenze");
        break;
      case "genova":
        document.getElementById("3176217");
        document.querySelector(".containerSelected").classList.add("genova");
        break;
      case "aquila":
        document.getElementById("3175121");
        document.querySelector(".containerSelected").classList.add("laquila");
        break;
      case "milan":
        document.getElementById("3173435");
        document.querySelector(".containerSelected").classList.add("milano");
        break;
      case "naples":
        document.getElementById("3172394");
        document.querySelector(".containerSelected").classList.add("napoli");
        break;
      case "palermo":
        document.getElementById("2523918");
        document.querySelector(".containerSelected").classList.add("palermo");
        break;
      case "perugia":
        document.getElementById("3171179");
        document.querySelector(".containerSelected").classList.add("perugia");
        break;
      case "potenza":
        document.getElementById("3170027");
        document.querySelector(".containerSelected").classList.add("potenza");
        break;
      case "rome":
        document.getElementById("5134295");
        document.querySelector(".containerSelected").classList.add("roma");
        break;
      case "turin":
        document.getElementById("3165523");
        document.querySelector(".containerSelected").classList.add("torino");
        break;
      case "trento":
        document.getElementById("3165243");
        document.querySelector(".containerSelected").classList.add("trento");
        break;
      case "trieste":
        document.getElementById("3165185");
        document.querySelector(".containerSelected").classList.add("trieste");
        break;
      case "venice":
        document.getElementById("3164603");
        document.querySelector(".containerSelected").classList.add("venezia");
        break;

      default:
        createCardsList(città);
        document.getElementById("3183087");
        document.getElementById("3182996");
        document.getElementById("36542001");
        document.getElementById("3181927");
        document.getElementById("2525471");
        document.getElementById("3180990");
        document.getElementById("2525059");
        document.getElementById("3176959");
        document.getElementById("3176217");
        document.getElementById("3175121");
        document.getElementById("3173435");
        document.getElementById("3172394");
        document.getElementById("2523918");
        document.getElementById("3171179");
        document.getElementById("3170027");
        document.getElementById("5134295");
        document.getElementById("3165523");
        document.getElementById("3165243");
        document.getElementById("3165185");
        document.getElementById("3164603");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  showCards();
  singleSelectedCity(città);
});
