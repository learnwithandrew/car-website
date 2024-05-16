document.addEventListener('DOMContentLoaded', () => {
    let carCategoryContainer = document.getElementById('car-cards');
    let carFormImage = document.getElementById('car-image');
    let carFormDetails = document.getElementById('car-details');
    let carFormName = document.getElementById('car-name');
    let carForm = document.getElementById('carSubmit-form');

    let displayAllCars = () => {
        let carClick = document.getElementById('myModal');
        let carClose = document.getElementById('modal-close');
        let carImage = document.getElementById('modalImage-container');
        let carInformation = document.getElementById('carModal-information');

        fetch('http://localhost:3000/cars')
            .then(response => response.json())
            .then((data) => {
                let cars = data;
                cars.map((car) => {
                    let carCard = document.createElement('div');
                    carCard.classList.add('card');
                    carCard.innerHTML = `
                         <img src="${car.carImage}" alt="${car.carName}" />
                         <h5>${car.carName}</h5>
                        `;
                    let pickItem = () => {
                        let openCarModal = () => {
                            carClick.style.display = "block";
                            carImage.innerHTML = `<img src="${car.carImage}" alt="${car.carName}" />`;
                            carInformation.innerHTML = `
                                    <h5>${car.carName}</h5>
                                    <p>${car.carDetails}</p>
                                `;
                        };
                        let closeCarModal = () => {
                            carClick.style.display = "none";
                        }
                        carCard.addEventListener('click', openCarModal);
                        carClose.addEventListener('click', closeCarModal);
                    }
                    pickItem(car.id);
                    carCategoryContainer.appendChild(carCard);
                })
            })
    }

    let getAllSportsCars = (categoryId) => {
        fetch('http://localhost:3000/cars')
            .then(response => response.json())
            .then((data) => {
                let cars = data;
                const sportsCar = cars.filter(car => car.categoryId === categoryId);
            })
    }

    carForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const carName = carFormName.value;
        const carImage = carFormImage.value;
        const carDetails = carFormDetails.value;

        const newCarItem = {
            carName,
            carImage,
            carDetails
        };

        fetch('http://localhost:3000/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCarItem)
        })
            .then(response => response.json())
            .then(car => console.log(car))
    });
    displayAllCars();
    getAllSportsCars(1);

});
