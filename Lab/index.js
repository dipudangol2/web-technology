// Function to add a cargo item to the array
function addCargoItem(cargoArray, itemName, itemWeight) {
    cargoArray.push({ name: itemName, weight: itemWeight });
}

// Function to display all cargo items using forEach
function displayCargoItems(cargoArray) {
    console.log("Cargo Items:");
    cargoArray.forEach(function(item, index) {
        console.log(`${index + 1}. ${item.name} - ${item.weight} kg`);
    });
}

// Array to store cargo items
let cargoItems = [];

// Add some cargo items
addCargoItem(cargoItems, "Electronics", 50);
addCargoItem(cargoItems, "Furniture", 150);
addCargoItem(cargoItems, "Books", 30);
addCargoItem(cargoItems, "Clothing", 20);

// Display cargo items
displayCargoItems(cargoItems);

// Associative Array (using an Object) to store additional cargo details
let cargoDetails = {
    "Electronics": { fragile: true, value: "High" },
    "Furniture": { fragile: false, value: "Medium" },
    "Books": { fragile: false, value: "Low" },
    "Clothing": { fragile: false, value: "Low" }
};

// Function to display cargo details using forEach
function displayCargoDetails(detailsObject) {
    console.log("\nCargo Details:");
    Object.keys(detailsObject).forEach(function(key) {
        console.log(`${key}: Fragile - ${detailsObject[key].fragile}, Value - ${detailsObject[key].value}`);
    });
}

// Display cargo details
displayCargoDetails(cargoDetails);
