// social contact container
function toggleContact() {
  const btn = document.getElementById("toggle-btn");
  const contactContainer = document.getElementById("contact-container");

  contactContainer.classList.toggle("-right-96");
  contactContainer.classList.toggle("md:-right-3/4");
}

// mealDB api
const mealContainer = document.getElementById("meal-container");

function generateRandomMeal() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals[0]));
}

function displayMeal(meal) {
  const div = document.createElement("div");
  div.innerHTML = `
    <div
    class="mt-10 md:mt-20 w-full flex flex-col md:flex-row gap-10"
  >
    <div id="meal-details text-slate-700">
      <img
        src=${meal.strMealThumb}
        class="md:mx-0 mb-6 w-6/6 md:w-full md:h-96 rounded-lg"
        alt=""
      />
      <h2 class="text-xl mb-4 font-bold md:text-2xl">Category: ${meal.strCategory}</h2>
      <h4 class="font-bold mb-4">Area: ${meal.strArea}</h4>
      <p class="text-xl md:text-2xl mb-4">ingredients:-</p>

      <ul class="list-disc ml-4">
        <li>${meal.strIngredient1}</li>
        <li>${meal.strIngredient2}</li>
        <li>${meal.strIngredient3}</li>
        <li>${meal.strIngredient4}</li>
        <li>${meal.strIngredient5}</li>
        <li>${meal.strIngredient6}</li>
        <li>${meal.strIngredient7}</li>
        <li>${meal.strIngredient8}</li>
        <li>${meal.strIngredient9}</li>
        <li>${meal.strIngredient10}</li>
        <li>${meal.strIngredient11}</li>
        <li>${meal.strIngredient12}</li>
      </ul>
    </div>
    <div id="meal-description" class="w-full md:w-3/6">
      <h1
        class="text-2xl md:text-3xl font-bold mb-4 text-center text-slate-700"
      >
        ${meal.strMeal}
      </h1>
      <p>
        ${meal.strInstructions}
      </p>
    </div>
  </div>

  <div class="container mt-10 md:mt-20">
    <h1 class="text-xl md:text-2xl font-semibold">Video Recipe</h1>

    <iframe
      class="w-full md:w-4/6 lg:w-3/6 mx-auto mb-10 h-56 md:h-96 rounded-lg"
      src=${meal.strYoutube}
    >
    </iframe>
  </div>
    `;
  mealContainer.appendChild(div);
}
