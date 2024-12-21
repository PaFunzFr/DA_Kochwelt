// set current date
let today = new Date().toLocaleDateString();
document.getElementById('date').innerText = `${today}`;

// calculation portions
let inputPortion = document.getElementById('inputPortion');
let ingredients = document.querySelectorAll('.ingredient-amount'); 

valuesForOnePortion = []; 

ingredients.forEach((amount) => {
    let baseIngredientValue = parseFloat(amount.innerText);
    let onePortionValue = baseIngredientValue / 4;
    valuesForOnePortion.push(onePortionValue);
});

inputPortion.addEventListener('input', function() {
    let currentAmount = parseFloat(inputPortion.value);
    const validInput = !isNaN(currentAmount) && currentAmount >= 0;
    if (!validInput) {
        inputPortion.value = 1;
        currentAmount = 1;
    }
    if (currentAmount > 99) {
        inputPortion.value = 99;
        currentAmount = 99;
    }
    ingredients.forEach((ingredient, index) => {
        ingredient.innerHTML = currentAmount * valuesForOnePortion[index];
    });
});
