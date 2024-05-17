document.addEventListener('DOMContentLoaded', () => {
    let carCategoryContainer = document.getElementById('car-cards');
    let carFormImage = document.getElementById('car-image');
    let carFormDetails = document.getElementById('car-details');
    let carFormName = document.getElementById('car-name');
    let carForm = document.getElementById('carSubmit-form');
    let carModal = document.getElementById('myModal')

    let displayAllCars = () => {
        let carClick = document.getElementById('myModal');
        let carClose = document.getElementById('modal-close');

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
                            let container = document.getElementById('modal-info');
                            carClick.style.display = "block";
                            container.innerHTML =
                                `<div class="image-container">
                                    <img src="${car.carImage}" />
                                 </div>
                                 <div class="car-information">
                                    <h5>${car.carName}</h5>
                                    <p>${car.carDetails}</p>
                                 </div>
                                 <div class="modify-buttons">
                                    <button type="btn button" class="delete-button" id="delete-button" data-id=${car.id}>Delete</button>
                                    <button type="btn button" id="edit-button">Edit</button>
                                 </div>
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

    displayAllCars();

    // deleteButton.addEventListener('click', () => {
    //     fetch('http://localhost:3000/cars/' + id, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(response => response.json()).then(data => console.log(data))
    // });

    let getAllSportsCars = (categoryId) => {
        fetch('http://localhost:3000/cars')
            .then(response => response.json())
            .then((data) => {
                let cars = data;
                const sportsCar = cars.filter(car => car.categoryId === categoryId);
            })
    }

    let carPostForm = (e) => {
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
        }).then(response => response.json()).then(car)
    }

    carModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-button')) {
            const id = e.target.dataset.id;
            deleteCarForm(id);
        }
    })

    let deleteCarForm = (id) => {
        fetch(`http://localhost:3000/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => console.log(data))
    }



    carForm.addEventListener('submit', carPostForm);
    getAllSportsCars(1);
});
