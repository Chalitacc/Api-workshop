import renderCountry from "./renderCountry";

// Selecting elements
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-form__input");
const errorMessage = document.querySelector(".search-form__error-message");

// Sending request with async

const fetchCountry = async (e) => {
  // make it dynamic for the search function
  errorMessage.textContent = "";
  const searchQuery = searchInput.value.trim();
  e.preventDefault();
  if (!searchQuery) {
    errorMessage.textContent = "Enter a valid country name!";
    return; //terminating the request after this
  }
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${searchQuery}?fullText=true`
    );
    const data = await response.json();

    //destrcuture from an array (index based ex, country1 or country 2). extracts object from the array (data) and store it inside the [country] variable. This will make it an object with no extra array
    const [country] = data;
    console.log(country);

    renderCountry(country);

    //empty the input field after submit
    searchInput.value = "";
  } catch (error) {
    errorMessage.textContent = "Failed to fetch data! try again!";
  }
};

searchForm.addEventListener("submit", fetchCountry);
