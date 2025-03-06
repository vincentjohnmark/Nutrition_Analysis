// Predefined nutritional data for some food items
const foodData = {
    apple: { calories: 52, carbs: 14, protein: 0.3, fat: 0.2, vitamins: ["C"]  },
    banana: { calories: 89, carbs: 23, protein: 1.1, fat: 0.3, vitamins: ["B", "C"]  },
    orange: { calories: 47, carbs: 12, protein: 0.9, fat: 0.1, vitamins: ["C"]  },
    strawberry: { calories: 33, carbs: 8, protein: 0.8, fat: 0.3 },
    grapes: { calories: 69, carbs: 18, protein: 0.7, fat: 0.2, vitamins: ["B", "C", "K"]  },
    spinach: { calories: 23, carbs: 3.6, protein: 2.9, fat: 0.4, vitamins: ["A", "C", "K"] },
    broccoli: { calories: 55, carbs: 11, protein: 3.7, fat: 0.6, vitamins: ["C", "K"]  },
    carrot: { calories: 41, carbs: 10, protein: 0.9, fat: 0.2 , vitamins: ["A", "C"] },
    kale: { calories: 49, carbs: 8.8, protein: 4.3, fat: 0.9, vitamins: ["A", "B", "C", "K"]  },
    peppers: { calories: 20, carbs: 4.6, protein: 0.9, fat: 0.1 },
    milk: { calories: 42, carbs: 5, protein: 3.4, fat: 1 },
    cheddar: { calories: 402, carbs: 1.3, protein: 25, fat: 33 },
    yogurt: { calories: 59, carbs: 3.6, protein: 10, fat: 0.4 },
    butter: { calories: 717, carbs: 0.1, protein: 0.9, fat: 81 },
    icecream: { calories: 207, carbs: 24, protein: 3.5, fat: 11 },
    salmon: { calories: 208, fat: 13, carbs: 0, protein: 20, vitamins: ["D", "B"] },
    chicken: { calories: 239, fat: 14, carbs: 0, protein: 27, vitamins: ["B"] },
    beef: { calories: 250, fat: 15, carbs: 0, protein: 26 },
    pork: { calories: 242, fat: 13, carbs: 0, protein: 27 },
    eggs: { calories: 155, fat: 11, carbs: 1.1, protein: 13, vitamins: ["A", "B", "D"] },
    almonds: { calories: 576, fat: 49, carbs: 22, protein: 21, vitamins: ["E"] },
    cashews: { calories: 553, fat: 44, carbs: 30, protein: 18 },
    quinoa: { calories: 120, fat: 1.9, carbs: 21, protein: 4.1 },
    lentils: { calories: 116, fat: 0.4, carbs: 20, protein: 9 },
    chickpeas: { calories: 164, fat: 2.6, carbs: 27, protein: 8.9, vitamins: ["B"] },
    oats: { calories: 389, fat: 7, carbs: 66, protein: 17 },
    tofu: { calories: 76, fat: 4.8, carbs: 1.9, protein: 8 },
    peanutButter: { calories: 588, fat: 50, carbs: 20, protein: 25 },
    avocado: { calories: 160, fat: 15, carbs: 9, protein: 2, vitamins: ["C", "E", "K"] },
    sweetPotato: { calories: 86, fat: 0.1, carbs: 20, protein: 1.6, vitamins: ["A", "C"] },
    brownRice: { calories: 123, fat: 1, carbs: 26, protein: 2.7 },
    pasta: { calories: 131, fat: 1.1, carbs: 25, protein: 5 },
    bread: { calories: 265, fat: 3.2, carbs: 49, protein: 9 },
    chocolate: { calories: 546, fat: 31, carbs: 61, protein: 4.9 },
    bacon: { calories: 541, fat: 42, carbs: 1.4, protein: 37 },
    sausage: { calories: 301, fat: 25, carbs: 1.9, protein: 12 },
    tuna: { calories: 144, fat: 4.9, carbs: 0, protein: 23, vitamins: ["D", "B"] },
    shrimp: { calories: 99, fat: 0.3, carbs: 0.2, protein: 24 },
    mushrooms: { calories: 22, fat: 0.3, carbs: 3.3, protein: 3.1, vitamins: ["D"] },
    onions: { calories: 40, fat: 0.1, carbs: 9.3, protein: 1.1 },
    tomatoes: { calories: 18, fat: 0.2, carbs: 3.9, protein: 0.9, vitamins: ["C", "K"] },
    cucumber: { calories: 16, fat: 0.1, carbs: 3.6, protein: 0.7 },
};

const symptomToVitaminMap = {
    "tiredness": ["B", "D"],
    "poor vision": ["A"],
    "weak immune system": ["C", "D"],
    "muscle weakness": ["D"],
    "bone pain": ["D"],
    "slow healing": ["C", "K"],
    "hair loss": ["B", "D"],
    "dry skin": ["A", "E"],
    "numbness or tingling": ["B"],
    "bleeding gums": ["C"],
    "frequent infections": ["C", "D"],
    "depression": ["B", "D"],
    "memory problems": ["B"],
    "irritability": ["B"],
    "anemia": ["B"],
    "brittle nails": ["B", "C"],
    "night blindness": ["A"],
    "osteoporosis": ["D", "K"],
    "fatigue": ["B", "C", "D"],
    "cramps": ["E", "D"]
};


// Event listener for form submission
document.getElementById('nutrition-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Fetch the food item from the input
  const foodItem = document.getElementById('food-item').value.toLowerCase().trim();

  // Get the result div where the result will be displayed
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ''; // Clear previous result

  // Check if the food item exists in the data
  if (foodData[foodItem]) {
      const result = foodData[foodItem];

      // Create a result card to display the nutritional data
      const resultCard = document.createElement('div');
      resultCard.classList.add('result-card');

      const resultHTML = `
          <h3>${foodItem.charAt(0).toUpperCase() + foodItem.slice(1)} Nutritional Information (per 100g)</h3>
          <div class="result-content">
              <div class="result-row">
                  <span class="result-label"><i class="fas fa-fire"></i> Calories:</span>
                  <span class="result-value">${result.calories} kcal</span>
              </div>
              <div class="result-row">
                  <span class="result-label"><i class="fas fa-bread-slice"></i> Carbohydrates:</span>
                  <span class="result-value">${result.carbs} g</span>
              </div>
              <div class="result-row">
                  <span class="result-label"><i class="fas fa-dumbbell"></i> Protein:</span>
                  <span class="result-value">${result.protein} g</span>
              </div>
              <div class="result-row">
                  <span class="result-label"><i class="fas fa-bacon"></i> Fat:</span>
                  <span class="result-value">${result.fat} g</span>
              </div>
          </div>
      `;

      resultCard.innerHTML = resultHTML;
      resultDiv.appendChild(resultCard);
  } else {
      // Display a message if the food item is not found
      resultDiv.innerHTML = `<p>Sorry, we don't have nutritional information for "${foodItem}".</p>`;
  }
});

// Handle vitamin deficiency suggestion
document.getElementById('suggest-btn').addEventListener('click', function() {
    const vitamin = document.getElementById('vitamin-input').value.toUpperCase();
    const suggestionDiv = document.getElementById('suggestion');
    let foodsWithVitamin = [];

    for (let food in foodData) {
        if (foodData[food].vitamins && foodData[food].vitamins.includes(vitamin)) {
            foodsWithVitamin.push(food);
        }
    }

    if (foodsWithVitamin.length > 0) {
        suggestionDiv.innerHTML = `
            <h2>Foods rich in Vitamin ${vitamin}:</h2>
            <ul>${foodsWithVitamin.map(food => `<li>${food.charAt(0).toUpperCase() + food.slice(1)}</li>`).join('')}</ul>
        `;
    } else {
        suggestionDiv.innerHTML = `<p>Sorry, we don't have suggestions for Vitamin ${vitamin}.</p>`;
    }
});

// Handle vitamin deficiency based on symptom
document.getElementById('deficiency-btn').addEventListener('click', function() {
    const symptom = document.getElementById('symptom-input').value;
    const deficiencyDiv = document.getElementById('deficiency-result');

    if (symptom && symptom in symptomToVitaminMap) {
        const vitamins = symptomToVitaminMap[symptom];
        let suggestedFoods = [];

        vitamins.forEach(vitamin => {
            for (let food in foodData) {
                if (foodData[food].vitamins && foodData[food].vitamins.includes(vitamin)) {
                    suggestedFoods.push(food);
                }
            }
        });

        

        deficiencyDiv.innerHTML = `
            <h2>Potential Vitamin Deficiencies for "${symptom.charAt(0).toUpperCase() + symptom.slice(1)}":</h2>
            <p>Vitamins you might be lacking: ${vitamins.join(", ")}</p>
            <h3>Suggested Foods:</h3>
            <ul>${[...new Set(suggestedFoods)].map(food => `<li>${food.charAt(0).toUpperCase() + food.slice(1)}</li>`).join('')}</ul>
        `;
    } else {
        deficiencyDiv.innerHTML = `<p>Please select a valid symptom.</p>`;
    }
});

// Variables to store daily goals
let dailyGoals = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
};

// Variables to track daily intake
let dailyIntake = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
};

// Handle setting daily goals
document.getElementById('set-goals-btn').addEventListener('click', function() {
    dailyGoals.calories = parseInt(document.getElementById('goal-calories').value) || 0;
    dailyGoals.protein = parseInt(document.getElementById('goal-protein').value) || 0;
    dailyGoals.carbs = parseInt(document.getElementById('goal-carbs').value) || 0;
    dailyGoals.fat = parseInt(document.getElementById('goal-fat').value) || 0;

    alert("Daily goals set successfully!");
});

// Handle adding food to track daily intake
document.getElementById('add-food-btn').addEventListener('click', function() {
    console.log("Add Food button clicked!");  // Debugging line
    const foodItem = document.getElementById('food-entry').value.toLowerCase();

    if (foodData[foodItem]) {
        dailyIntake.calories += foodData[foodItem].calories;
        dailyIntake.protein += foodData[foodItem].protein;
        dailyIntake.carbs += foodData[foodItem].carbs;
        dailyIntake.fat += foodData[foodItem].fat;

        updateDailySummary();
    } else {
        alert("Food item not found in the database.");
    }
});

// Update the daily intake summary on the page
function updateDailySummary() {
    document.getElementById('calories-intake').textContent = `Calories: ${dailyIntake.calories} kcal / ${dailyGoals.calories} kcal`;
    document.getElementById('protein-intake').textContent = `Protein: ${dailyIntake.protein} g / ${dailyGoals.protein} g`;
    document.getElementById('carbs-intake').textContent = `Carbs: ${dailyIntake.carbs} g / ${dailyGoals.carbs} g`;
    document.getElementById('fats-intake').textContent = `Fats: ${dailyIntake.fat} g / ${dailyGoals.fat} g`;
}

// Handle resetting daily intake
document.getElementById('reset-tracker-btn').addEventListener('click', function() {
    dailyIntake.calories = 0;
    dailyIntake.protein = 0;
    dailyIntake.carbs = 0;
    dailyIntake.fat = 0;

    updateDailySummary(); // Update the displayed values to reset
});