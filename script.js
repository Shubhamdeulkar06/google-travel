// Function to toggle sidebar
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.left = sidebar.style.left === "-250px" ? "0" : "-250px";
}

// Function to add new destination to popular destinations
function addDestination(destination, date, description, price) {
  const popularDestinations = document.querySelector(
    ".popular-destinations .destinations"
  );
  const newDestination = `
      <div class="destination1 flex">
        <div class="img-container">
          <img src="./assets/licensed-image.jfif" alt="image1" />
        </div>
        <div class="destination-content">
          <h3>${destination}</h3>
          <span>${date}</span>
          <p>${description}</p>
          <span class="flex destination-price">
            <img src="./assets/asset 16.svg" alt="icon" />₹${price}
          </span>
        </div>
      </div>
    `;
  popularDestinations.insertAdjacentHTML("beforeend", newDestination);
  return popularDestinations.lastElementChild; // Return the newly added destination element
}

function addEventListenersToPlaces() {
  const place1 = document.getElementById("place1");
  const place2 = document.getElementById("place2");
  const place3 = document.getElementById("place3");

  place1.addEventListener("click", () => {
    updateMap("Mumbai", "Details about Mumbai");
  });

  place2.addEventListener("click", () => {
    updateMap("New Delhi", "Details about New Delhi");
  });

  place3.addEventListener("click", () => {
    updateMap("Singapore", "Details about Singapore");
  });
}

// Function to handle click on explore button
function handleExploreClick() {
  const newDestination = addDestination(
    "Mumbai",
    "Feb 28 - Mar 6",
    "Bollywood, shopping & colonial landmarks",
    3386
  );
  newDestination.addEventListener("click", () => {
    updateMap("Mumbai", "Details about Mumbai");
  });
}

// Function to handle click on flight button
function handleFlightClick() {
  const newDestination = addDestination(
    "New Delhi",
    "Apr 5 - 11",
    "Fog, temple, hindi cinema, and romance",
    2879
  );
  newDestination.addEventListener("click", () => {
    updateMap("New Delhi", "Details about New Delhi");
  });
}

// Function to handle click on hotel button
function handleHotelClick() {
  const newDestination = addDestination(
    "Singapore",
    "Mar 7 - 13",
    "Padang, Buddha Tooth Temple & shopping",
    3386
  );
  newDestination.addEventListener("click", () => {
    updateMap("Singapore", "Details about Singapore");
  });
}

// Add event listeners after DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for scrolling to hide sidebar
  window.addEventListener("scroll", function () {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.left = "-250px"; // Hide the sidebar when scrolling
  });
  addEventListenersToPlaces();

  // Add event listener for explore button
  const exploreButtons = document.querySelectorAll(".explore");
  exploreButtons.forEach((button) =>
    button.addEventListener("click", handleExploreClick)
  );

  // Add event listener for flight button
  const flightButtons = document.querySelectorAll(".flight");
  flightButtons.forEach((button) =>
    button.addEventListener("click", handleFlightClick)
  );

  // Add event listener for hotel button
  const hotelButtons = document.querySelectorAll(".hotel");
  hotelButtons.forEach((button) =>
    button.addEventListener("click", handleHotelClick)
  );
});

// Function to update the map content based on the clicked destination
function updateMap(destination, details) {
  const map = document.getElementById("map");
  map.innerHTML = `<h3>${destination}</h3><p>${details}</p>`;
}
