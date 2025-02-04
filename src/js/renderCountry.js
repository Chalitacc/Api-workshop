const renderCountry = (country) => {
  const countryCard = document.querySelector(".country-card");
  const countryList = document.querySelector(".country-card__list");

  const countryFlagContainer = document.createElement("div");

  //displaying the flag og the country
  const countryFlag = document.createElement("img");
  const countryContainerImage = document.querySelector(".country-card__image");

  //clearing after search
  countryList.innerHTML = "";

  // Creating the list items
  const createListItem = (title, content) => {
    const item = document.createElement("li");
    const itemTitle = document.createElement("h3");
    const itemContent = document.createElement("p");

    item.append(itemTitle, itemContent);

    //inserting objects
    itemTitle.textContent = title;
    itemContent.textContent = content;

    item.classList.add("country-card__list-item");
    itemTitle.classList.add("country-card__list-title");

    // returning the li and the h3 and p is appended
    return item;
  };

  //selecting and adding the contents from the API
  const countryName = createListItem("Country Name:", country.name.common);
  const countryContinent = createListItem("Continent:", country.continents[0]); //as this is an array not an object so you cant call it like the other
  const countryCapital = createListItem("Capital:", country.capital[0]);
  const countryPopulation = createListItem("Population:", country.population);

  //extracting all values from the API and creates and array so we convert it to string and to extract this we use object.value as we are interested in the value
  const extractedLanguages = Object.values(country.languages).toString();
  const countryLanguage = createListItem("Language:", extractedLanguages);

  //this is dynamic for each country so we are dealing with a key. we have object.key where we are only interested in the keys. but this method are itnerested in both keys and values
  const currenciesToArray = Object.entries(country.currencies);
  console.log(currenciesToArray);
  const countryCurrency = createListItem("Country Name:", currenciesToArray[0]);

  //some countries might have more time zones so you can convert it like how we did before if you want to add it
  const countryTimeZone = createListItem("Time Zone", country.timezones[0]);

  //capitalizing the first letter of the day
  const capitalizeWeekday =
    country.startOfWeek.slice(0, 1).toUpperCase() +
    country.startOfWeek.slice(1);
  const countryWeekday = createListItem(
    "Start of the week:",
    capitalizeWeekday
  );
  const countryDrivingSide = createListItem("Driving Side:", country.car.side);

  // Displaying the png version of the flag

  countryFlag.src = country.flags.png;

  // Appending the list items
  countryList.append(
    countryFlagContainer,
    countryName,
    countryContinent,
    countryCapital,
    countryPopulation,
    countryLanguage,
    countryCurrency,
    countryTimeZone,
    countryWeekday,
    countryDrivingSide
  );
  //appending the flag png
  countryFlagContainer.append(countryFlag);
  countryFlag.classList.add("country-card__flag-container");
};

export default renderCountry;
