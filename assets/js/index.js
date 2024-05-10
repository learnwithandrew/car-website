let cars = [
    {
        id: 1,
        carName: "Sports car",
        carImage: "./assets/images/sports-car_prev_ui.png",
        carDetails: "this is a sports car"
    },
    {
        id: 2,
        carName: "Convertible car",
        carImage: "./assets/images/convertible_prev_ui.png",
        carDetails: "this is a convertible car"
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