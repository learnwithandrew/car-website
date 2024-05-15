document.addEventListener('DOMContentLoaded', () => {
    let carContainer = document.getElementById('car-cards');
    // let categorySection = document.getElementById('category-section');
    let cars = [
        {
            id: 1,
            carName: "Sports car",
            carImage: "/assets/images/sports-car_prev_ui.png",
            carDetails: "This is a sports car."
        },
        {
            id: 2,
            carName: "Electric car",
            carImage: "/assets/images/tesla_prev_ui.png",
            carDetails: "This is an electric car."
        },
        {
            id: 3,
            carName: "Minivan car",
            carImage: "/assets/images/minivan_prev_ui.png",
            carDetails: "This is a minivan car."
        },
        {
            id: 4,
            carName: "Convertible car",
            carImage: "/assets/images/convertible_prev_ui.png",
            carDetails: "This is a convertible car."
        }
    ]

    let displayCars = () => {
        let carClick = document.getElementById('myModal');
        let carClose = document.getElementById('modal-close');
        let modalInfo = document.getElementById('modal-info');
        // let carReferenceHeader = document.getElementById('carReference-heading');

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
                    modalInfo.innerHTML = `
                    <h5>${car.carName}</h5>
                    <img src="${car.carImage}" alt="${car.carName}" />
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
            carContainer.appendChild(carCard);
        })
    }
    displayCars();
});
