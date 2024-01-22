/*
create a pre-populated list (array) of freelancers
randomly select an occupation, cost, into freelancer array
must use `document.querySelector` correctly to select existing 
DOM elements and update the average starting price

add items into the freelancers array at a certain cadence
create render function

make a max amount of freelancers to populate

find the average of the freelancers starting rate
*/

const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
];

function calculateAveragePrice() {
    const sum = freelancers.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.price;
    }, 0);
    const average = sum / freelancers.length;
    return average;
};

const maxFreelancers = 10;

const randomNames = [
    "Emma",
    "Liam",
    "Olivia",
    "Noah",
    "Ava",
    "Ethan",
    "Isabella",
    "Lucas",
    "Mia",
    "Mason",
];
const randomPrices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const randomOccupations = [
    "Writer",
    "Teacher",
    "Engineer",
    "Doctor",
    "Nurse",
    "Artist",
    "Lawyer",
    "Chef",
    "Salesperson",
    "Developer",
];  


function render() {
    // Render the freelancers
    const freelancersId = document.querySelector("#freelancers");
    // Keep header but clear previous table rows
    freelancersId.innerHTML =
    /* html*/
        `<tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Starting Price</th>
        </tr>`;

        freelancers.forEach((freelancer) => {
            const tr = document.createElement("tr");
            const tdName = document.createElement("td");
            tdName.textContent = freelancer.name;
        
            const tdOccupation = document.createElement("td");
            tdOccupation.textContent = freelancer.occupation;
        
            const tdPrice = document.createElement("td");
            tdPrice.classList.add("price");
            tdPrice.textContent = `$${freelancer.price}`;
        
            tr.appendChild(tdName);
            tr.appendChild(tdOccupation);
            tr.appendChild(tdPrice);
        
            freelancersId.appendChild(tr);
        
            const average = document.querySelector("#average");
            average.innerHTML = `The average starting price is: $${calculateAveragePrice().toFixed(
            2
            )}`;
        });
};

render();

function addFreelancer() {
    const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
    const randomOccupation = randomOccupations[Math.floor(Math.random() * randomOccupations.length)];
    const randomPrice = randomPrices[Math.floor(Math.random() * randomPrices.length)];

    freelancers.push({name:randomName, occupation:randomOccupation, price:randomPrice});

    render();
    if (freelancers.length >= maxFreelancers) {
        clearInterval(freelancerIntervalId);
    }
};

const freelancerIntervalId = setInterval(addFreelancer, 1000);