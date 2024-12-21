// set current date
let today = new Date().toLocaleDateString();
document.getElementById('date').innerText = `${today}`;

// calculation portions
let inputPortion = document.getElementById('inputPortion');
let currentAmount = parseFloat(inputPortion.value); //parseFloat = convert string to number
let ingredients = document.querySelectorAll('.ingredient-amount'); // node list

onePortionValues = []; // set empty array for initial Values of recipe

// search for each innerText of <li class="ingredient-amount">amount</li>
ingredients.forEach((amount) => {
    let baseIngredientValue = parseFloat(amount.innerText)
    let onePortionValue = baseIngredientValue / 4;
    // onePortionValues in this case duplicate of ingredients nodelist
    onePortionValues.push(onePortionValue); // export values to onePortionsValues
});

inputPortion.addEventListener('input', function() {
    let currentAmount = parseFloat(inputPortion.value);
    // check for regular expressions (regex) - gucken und verstehen
    const validInput = /^-?\d*(\.\d*)?$/.test(currentAmount); // only positive numbers
    if (!validInput) {
        inputPortion.value = 1;
        currentAmount = 1;
    }
    if (currentAmount > 99) {
        inputPortion.value = 99;
        currentAmount = 99;
    }
    ingredients.forEach((ingredient, index) => {
        ingredient.innerHTML = currentAmount * onePortionValues[index];
    });
});
