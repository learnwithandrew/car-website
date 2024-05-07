let cars = ["station wagon", "hatchback", "convertible", "suv", "minivan", "pickup truck", "sedan", "sports car", "coupe", "electric", "luxury", "hybrid"];

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