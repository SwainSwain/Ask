document.addEventListener("DOMContentLoaded", function () {
    // Sample bike data
    const bikes = [
        { id: 1, name: "Mountain Bike", price: 20 },
        { id: 2, name: "City Bike", price: 15 },
        { id: 3, name: "Electric Bike", price: 30 },
    ];

    const bikeList = document.getElementById("bike-list");

    // Function to display bikes
    function displayBikes() {
        bikes.forEach(bike => {
            const bikeCard = document.createElement("div");
            bikeCard.classList.add("bike-card");

            bikeCard.innerHTML = `
                <h2>${bike.name}</h2>
                <p>Price: $${bike.price}/day</p>
                <button onclick="rentBike(${bike.id})">Rent Now</button>
            `;

            bikeList.appendChild(bikeCard);
        });
    }

    // Function to simulate renting a bike
    window.rentBike = function (bikeId) {
        const rentedBike = bikes.find(bike => bike.id === bikeId);

        if (rentedBike) {
            alert(`You have rented a ${rentedBike.name} for $${rentedBike.price}. Enjoy your ride!`);
        } else {
            alert("Bike not found!");
        }
    };

    // Display bikes when the page loads
    displayBikes();
});
