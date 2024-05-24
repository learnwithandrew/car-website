document.addEventListener('DOMContentLoaded', () => {
    let carContainer = document.querySelector('.car-cards');
    let carDetailModal = document.getElementById('myModal');
    let carCloseModal = document.getElementById('modal-close');
    let addCarForm = document.getElementById('carSubmit-form');
    let updateCarForm = document.getElementById('carUpdate-form');
    let updateCarModal = document.getElementById('updateCarModal');
    let searchInput = document.getElementById('search-input');


    async function displayCars() {
        try {
            let response = await fetch('http://localhost:3000/cars')
            let data = await response.json();
            let sectionTitle = document.getElementById('carReference-heading');
            sectionTitle.textContent = 'All Cars Cars test'
            console.log(sectionTitle)
            data.map((car) => {
                let carCard = document.createElement('div');
                carCard.classList.add('card')
                carCard.innerHTML = `
                        <img src="${car.carImage}" alt="${car.carName}">
                        <div class="card-body">
                            <h5 class="card-title">${car.carName}</h5>
                        </div>
                    `;

                let selectCarItem = () => {
                    let openCarModal = () => {
                        let carContent = document.querySelector('.modal-info');
                        carDetailModal.style.display = "block";
                        carContent.innerHTML = `
                                <div class="image-container">
                                <img src="${car.carImage}" />
                                </div>
                                <div class="car-information">
                                    <h5>${car.carName}</h5>
                                    <p>${car.carDetails}</p>
                                </div>
                                <div class="modify-buttons" id="modify-buttons">
                                    <button type="btn button" class="delete-button" id="delete-button" data-id=${car.id}>Delete</button>&nbsp;
                                    <button type="btn button" class="edit-button" id="edit-button" data-id=${car.id}>Edit</button>
                                </div>
                            `;
                    }

                    let closeCarModal = () => {
                        carDetailModal.style.display = "none";
                    }

                    carCard.addEventListener('click', openCarModal);
                    carCloseModal.addEventListener('click', closeCarModal);
                }
                selectCarItem(car.id)
                carContainer.appendChild(carCard);
            })

        } catch (error) {
            console.log(`${error.message}`)
        }
    }

    async function carAddForm(e) {
        try {
            e.preventDefault();

            const carImage = document.getElementById('addCar-image').value;
            const carName = document.getElementById('addCar-name').value;
            const carDetails = document.getElementById('addCar-details').value;

            const carItem = {
                carImage,
                carName,
                carDetails
            }

            const headers = {
                'Content-Type': 'application/json'
            }

            const body = JSON.stringify(carItem)

            let response = await fetch('http://localhost:3000/cars', {
                method: 'POST',
                headers: headers,
                body: body
            })
            let data = await response.json()
            console.log(data);
        } catch (error) {
            console.log(`${error.message}`)
        }
    }

    async function carDeleteForm(id) {
        try {
            const headers = {
                'Content-Type': 'application/json'
            }
            let response = await fetch(`http://localhost:3000/cars/${id}`, {
                method: 'DELETE',
                headers: headers
            })
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(`${error.message}`)
        }
    }

    async function editForm(id) {
        let closeUpdateModal = document.getElementById('updateModal-close');

        try {
            carDetailModal.style.display = "none";
            updateCarModal.style.display = "block";

            let response = await fetch('http://localhost:3000/cars')
            let data = await response.json();
            let carUpdateItem = data.find(car => car.id === id);
            document.getElementById('form-id').value = carUpdateItem.id
            document.getElementById('car-image').value = carUpdateItem.carImage;
            document.getElementById('car-name').value = carUpdateItem.carName;
            document.getElementById('car-details').value = carUpdateItem.carDetails;

            let closeModal = () => {
                updateCarModal.style.display = "none";
            }
            closeUpdateModal.addEventListener('click', closeModal);
        } catch (error) {
            console.log(`${error.message}`)
            updateCarModal.style.display = "none"
        }
    }

    async function updateCarDetails() {
        try {
            let carItemId = document.getElementById('form-id').value;
            let carImage = document.getElementById('car-image').value;
            let carName = document.getElementById('car-name').value;
            let carDetails = document.getElementById('car-details').value;

            let carUpdateObject = {
                carItemId,
                carImage,
                carName,
                carDetails
            }

            const headers = {
                'Content-Type': 'application/json'
            }

            const body = JSON.stringify(carUpdateObject)

            let response = await fetch(`http://localhost:3000/cars/${carUpdateObject.carItemId}`, {
                method: 'PATCH',
                headers: headers,
                body: body
            })
            let data = await response.json()
            console.log(data);
        } catch (error) {
            console.log(`${error.message}`);
        }
    }

    async function searchCars(searchTerm) {
        const cars = await fetch('http://localhost:3000/cars');
        const data = await cars.json();
        const filteredCars = data.filter(car => car.carName.toLowerCase().includes(searchTerm))
        return filteredCars;
    }

    searchInput.addEventListener('keyup', async (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredCars = await searchCars(searchTerm);

        carContainer.innerHTML = '';

        if (searchTerm) {
            filteredCars.forEach(item => {
                let carCard = document.createElement('div');
                carCard.classList.add('card')
                carCard.innerHTML = `
                        <img src="${item.carImage}" alt="${item.carName}">
                        <div class="card-body">
                            <h5 class="card-title">${item.carName}</h5>
                        </div>
                    `;
                let selectCarItem = () => {
                    let openCarModal = () => {
                        let carContent = document.querySelector('.modal-info');
                        carDetailModal.style.display = "block";
                        carContent.innerHTML = `
                                    <div class="image-container">
                                    <img src="${item.carImage}" />
                                    </div>
                                    <div class="car-information">
                                        <h5>${item.carName}</h5>
                                        <p>${item.carDetails}</p>
                                    </div>
                                    <div class="modify-buttons" id="modify-buttons">
                                        <button type="btn button" class="delete-button" id="delete-button" data-id=${item.id}>Delete</button>&nbsp;
                                        <button type="btn button" class="edit-button" id="edit-button" data-id=${item.id}>Edit</button>
                                    </div>
                                `;
                    }

                    let closeCarModal = () => {
                        carDetailModal.style.display = "none";
                    }

                    carCard.addEventListener('click', openCarModal);
                    carCloseModal.addEventListener('click', closeCarModal);
                }
                selectCarItem(item.id)
                carContainer.appendChild(carCard);
            })
        } else {
            displayCars();
        }
    })

    carDetailModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-button')) {
            const carId = e.target.dataset.id;
            carDeleteForm(carId);
        } else {
            e.target.classList.contains('edit-button')
            const carId = e.target.dataset.id;
            editForm(carId);
        }
    })

    updateCarForm.addEventListener('submit', updateCarDetails);
    addCarForm.addEventListener('submit', carAddForm);
    displayCars();
})