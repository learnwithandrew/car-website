document.addEventListener('DOMContentLoaded', () => {
    let carContainer = document.getElementById('car-cards');
    let cars = [
        {
            id: 1,
            carName: "Convertible car",
            carImage: "./assets/images/convertible_prev_ui.png",
            carDetails: "this is a convertible car"
        },
        {
            id: 2,
            carName: "Sports car",
            carImage: "./assets/images/sports-car_prev_ui.png",
            carDetails: "this is a sports car"
        },
        {
            id: 3,
            carName: "Minivan car",
            carImage: "./assets/images/minivan_prev_ui.png",
            carDetails: "this is a minivan car"
        },
        {
            id: 4,
            carName: "Electric car",
            carImage: "./assets/images/tesla_prev_ui.png",
            carDetails: "this is an electric car"
        }
    ]

    function displayCars() {
        cars.forEach((car, index) => {
            const carCard = document.createElement('div');
            carCard.classList.add('card');
            carCard.innerHTML = `
          <img src="${car.carImage}" alt="${car.carName}" />
          <h5>${car.carName}</h5>
          <a href="${car.carName}/${index}" class="shop-now-link">Shop now</a>
        `
            console.log(carCard)
            carContainer.appendChild(carCard)
        })
    }

    displayCars();

})

// function that searches through the cars array
function searchCar(searchItem) {
    for (let carItem = 0; carItem < cars.length; carItem = carItem + 1) {
        if (cars[carItem] === searchItem) {
            return `You searched for ${cars[carItem].toUpperCase()} and its index ${carItem} in the cars array.`;
        }
    }

    return `The item ${searchItem} was not found in the cars stack!`;
};

// function that sorts the cars array
function sortedCars(carsCopy) {
    carsCopy = cars.slice();
    carsCopy.sort();
};


let searchedCar = searchCar('suv');
console.log(searchedCar);
// console.log(sortCars(cars));