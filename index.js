let cars = ["station wagon", "hatchback", "convertible", "suv", "minivan", "pickup truck", "sedan", "sports car", "coupe", "electric", "luxury", "hybrid"]

function searchCar(searchItem) {
    for (let carItem = 0; carItem < cars.length; carItem = carItem + 1) {
        if (cars[carItem] === searchItem) {
            return `You searched for ${cars[carItem].toUpperCase()} and its index ${carItem} in the cars array.`;
        }
    }
    return `The item ${searchItem.toUpperCase()} was not found in the cars stack!`;
}

function sortCars(carsCopy) {
    carsCopy = cars.slice();
    carsCopy.sort();
    return carsCopy;
}

console.log(searchCar('suv'));
console.log(sortCars(cars));