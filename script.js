document.addEventListener("DOMContentLoaded", function () {
    const recipeForm = document.getElementById("recipeForm");
    const viewRecipes = document.getElementById("viewRecipes");

    recipeForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve form data
        const mealType = document.getElementById("validationDefault04").value;
        const author = document.getElementById("validationDefault05").value;
        const mealName = document.getElementById("validationDefault01").value;
        const ingredients = document.getElementById("validationDefault02").value;
        const recipeInstructions = document.getElementById("exampleFormControlTextarea1").value;

        // Create a new card to display the submitted recipe
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("card", "mb-3");

        // Populate the card with recipe details
        recipeCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${mealName}</h5>
                <p class="card-text"><strong>Meal Type:</strong> ${mealType}</p>
                <p class="card-text"><strong>Author:</strong> ${author}</p>
                <p class="card-text"><strong>Ingredients:</strong> ${ingredients}</p>
                <p class="card-text"><strong>Recipe:</strong> ${recipeInstructions}</p>
            </div>
        `;

        // Append the new recipe card to the view recipes section
        viewRecipes.appendChild(recipeCard);

        // Reset the form
        recipeForm.reset();
    });
});
