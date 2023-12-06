document.addEventListener('DOMContentLoaded', function() {
const restaurantListElement = document.getElementById("restaurant-list");
const searchInputElement = document.querySelector(".topnav input[type='text']");
const searchFormElement = document.querySelector(".topnav form");
const homeButtonElement = document.getElementById("home-button");

//GPT Code
async function fetchRestaurants() {
  try {
    const response = await fetch('http://localhost:3000/restuarant');
    const data = await response.json();

    data.forEach(restuarant => {
      const listItem = document.createElement('li');
      const stars = `<div class="stars"><p><strong>Personal Rating:</strong> ${"★".repeat(restuarant.rating)}${"☆".repeat(5 - restuarant.rating)}</div>`;
      listItem.innerHTML = `<div>
      <h2>${restuarant.name}</h2>
      ${stars}
      <p><strong>Location:</strong> ${restuarant.location}</p>
      <p><strong>Website:</strong> <a href="${restuarant.website}">${restuarant.website}</a></p>
      <p><strong>Vegan:</strong> ${restuarant.vegan}</p>
      <p><strong>Vegetarian:</strong> ${restuarant.vegetarian}</p>
      <p><strong>Gluten Free:</strong> ${restuarant.glutenFree}</p>
      <p><strong>Notes:</strong> <textarea></textarea> </p>
    </div>
    <div>------------------------------------------</div>`;
      restaurantListElement.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching restaurants:', error);
  }
  console.log("WORKING")
}

// Fetch data when the page loads
window.onload = fetchRestaurants;
});

// Define an array of restaurant objects
// const restaurants = [
//   {
//     name: "Badass Burgers",
//     location: "521 Ala Moana Blvd, Honolulu",
//     typeOfFood: "Plate Lunch Burgers",
//     website: "https://www.badassburgershawaii.com/",
//     menuChoices: "All Vegan",
//     rating: 5
//   },
//   {
//     name: "Tane Vegan Izakaya",
//     location: "2065 S Beretania St., Honolulu",
//     typeOfFood: "Sushi",
//     website: "https://www.tanevegan.com/",
//     menuChoices: "All Vegan",
//     rating: 4
//   },
//   {
//     name: "Mini Garden",
//     location: "2065 S Beretania St., Honolulu",
//     typeOfFood: "Chinese",
//     website: "https://minigardenhawaii.com/",
//     menuChoices: "Mostly Vegan",
//     rating: 5
//   },
//   {
//     name: "Simple Joy Vegetarian Cuisine",
//     location: "1145 S King St. #B, Honolulu",
//     typeOfFood: "Chinese Vietnamese Italian",
//     website: "http://simplejoycuisine.com/",
//     menuChoices: "All Vegan",
//     rating: 4
//   },
//   {
//     name: "QQ Tea",
//     location: "931 University Ave, Ste 109, Honolulu",
//     typeOfFood: "Chinese",
//     website: "https://www.facebook.com/qqteahousehi/",
//     menuChoices: "Mostly Vegan",
//     rating: 4
//   },
//   {
//     name: "Uproll Cafe Kaka'ako",
//     location: "665 Halekauwila St., Honolulu",
//     typeOfFood: "Sushi Burritos",
//     website: "https://www.uprollcafe.com/",
//     menuChoices: "Kinda Vegan",
//     rating: 5
//   },
//   {
//     name: "Uproll Cafe Pearl Highlands",
//     location: "1,000 Kamehameha Hwy, Pearl city",
//     typeOfFood: "Sushi Burritos",
//     website: "https://www.uprollcafe.com/",
//     menuChoices: "Kinda Vegan",
//     rating: 5
//   },
//   {
//     name: "Uproll Cafe Kailua",
//     location: "573 Kailua Rd Lau Hala shops 102, Kailua",
//     typeOfFood: "Sushi Burritos",
//     website: "https://www.uprollcafe.com/",
//     menuChoices: "Kinda Vegan",
//     rating: 5
//   },
//   {
//     name: "Muki Dogs",
//     location: "3631 Waialae Ave, Honolulu",
//     typeOfFood: "Hot Dogs",
//     website: "https://www.facebook.com/MukiDogs/",
//     menuChoices: "All Vegan",
//     rating: 5
//   },
//   {
//     name: "What it Dough",
//     location: "1124 Kona st, Honolulu HI 96814",
//     typeOfFood: "Pizza",
//     website: "https://floraliapizza.com/",
//     menuChoices: "All Vegan",
//     rating: 5
//   },
//   {
//     name: "Tree Popoki Cakes",
//     location: "340 Uluniu St, Kailua",
//     typeOfFood: "Pizza",
//     website: "https://www.instagram.com/treepopokicakes/?hl=en",
//     menuChoices: "All Vegan",
//     rating: 5
//   },
//   {
//     name: "100 Sails",
//     location: "100 Holomoana Street, Honolulu",
//     typeOfFood: "Fine Dining",
//     website: "http://www.100sails.com/",
//     menuChoices: "Barely Vegan",
//     rating: 2
//   }
// ];

// Function to generate HTML for each restaurant
/*function generateRestaurantHTML(restaurant) {
  // Generate star rating display
  

  // Generate restaurant HTML
  return `
    <div>
      <h2>${restaurant.name}</h2>
      ${stars}
      <p><strong>Location:</strong> ${restaurant.location}</p>
      <p><strong>Type of Food:</strong> ${restaurant.typeOfFood}</p>
      <p><strong>Website:</strong> <a href="${restaurant.website}">${restaurant.website}</a></p>
      <p><strong>${restaurant.menuChoices}</strong></p>
    </div>
    <div>------------------------------------------</div>
  `;
}*/

// Function to display the restaurant list in HTML
/*function displayRestaurantList(restaurants) {
  const restaurantHTML = restaurants.length > 0
    ? restaurants.map(generateRestaurantHTML).join("")
    : "<p>No restaurants found. Sorry!</p>";

  restaurantListElement.innerHTML = restaurantHTML;
}

// Function to filter restaurants based on search input
function searchRestaurants(searchValue) {
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const name = restaurant.name.toLowerCase();
    const location = restaurant.location.toLowerCase();
    const typeOfFood = restaurant.typeOfFood.toLowerCase();
    const menuChoices = restaurant.menuChoices.toLowerCase();
    const rating = restaurant.rating.toString().toLowerCase();
    
    return (
      name.includes(searchValue) ||
      // location.includes(searchValue) ||
      typeOfFood.includes(searchValue) ||
      menuChoices.includes(searchValue) ||
      rating.includes(searchValue)
    );
  });

  displayRestaurantList(filteredRestaurants);
}

// Event listener for search input
searchFormElement.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const searchValue = searchInputElement.value.toLowerCase();
  searchRestaurants(searchValue);
});

// Display the restaurant list when the page loads
displayRestaurantList(restaurants);

// Function to display the original restaurant list
function displayOriginalRestaurantList() {
  displayRestaurantList(restaurants);
  searchInputElement.value = ""; // Clear search input
}

// Event listener for home button click
homeButtonElement.addEventListener("click", displayOriginalRestaurantList);

// Display the restaurant list when the page loads
displayOriginalRestaurantList();
});*/