// Add an event listener for the scroll event
window.addEventListener("scroll", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.left = "-250px"; // Hide the sidebar when scrolling
});

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
  }
}

const place1 = document.getElementById("place1");
const place2 = document.getElementById("place2");
const place3 = document.getElementById("place3");
const explore = document.getElementById("explore");

// Get the map element
const map = document.getElementById("map");

// Add click event listener to the "Explore" element
explore.addEventListener("click", () => {
  // Add new destination elements to the "popular destinations" section
  const popularDestinations = document.querySelector(
    ".popular-destinations .destinations"
  );
  const newDestination = `
    <div class="destination1 flex" id="place4">
    <div class="img-container">
              <img src="./assets/licensed-image.jfif" alt="image1" />
            </div>
            <div class="destination-content">
              <h3>Goa</h3>
              <span>Feb 28 - Mar 6</span>
              <p>Bollywood, shopping & colonial landmarks</p>
              <span class="flex destination-price"
                ><img src="./assets/asset 16.svg" alt="icon" />₹3,386
              </span>
            </div>
    </div>
    </div>
  `;
  popularDestinations.insertAdjacentHTML("beforeend", newDestination);
  const place4 = document.getElementById("place4");
  place4.addEventListener("click", () => {
    updateMap("Goa", "Details about Goa");
  });
});

// Function to update the map content based on the clicked destination
function updateMap(destination, details) {
  map.innerHTML = `<h3>${destination}</h3><p>${details}</p>`;
}

// Add click event listeners to each place element
place1.addEventListener("click", () => {
  updateMap("Mumbai", "Details about Mumbai");
});

place2.addEventListener("click", () => {
  updateMap("New Delhi", "Details about New Delhi");
});

place3.addEventListener("click", () => {
  updateMap("Singapore", "Details about Singapore");
});
