let budgetValue = 0;

let totalExpensesValue = 0;

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}

console.log(totalExpensesValue);

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  let Average = totalExpensesValue / expenseEntries.length;
  return Average;
}

function calculateBalance() {
  let balanceValue = budgetValue - totalExpensesValue;
  return balanceValue;
}

function updateBalanceColor() {
  let balanceValue = calculateBalance();

  if (balanceValue < 0) {
    balanceColor = "red";
  } else if (balanceValue < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let total = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    let currentExpense = expenseEntries[i];

    if (currentExpense[0] === category) {
      total += expenseEntries[1];
    }
  }

  return total;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  const categoriesTotals = [];

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const total = calculateCategoryExpenses(category);
    categoriesTotals.push([category, total]);
  }

  let largestCategory = categoriesTotals[0][0];
  let largestTotal = categoriesTotals[0][1];

  for (let i = 1; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > largestTotal) {
      largestTotal = categoriesTotals[i][1];
      largestCategory = categoriesTotals[i][0];
    }
  }

  return largestCategory;
}

function addExpenseEntry(expense) {
  const category = expense[0];
  const value = expense[1];

  expenseEntries.push(expense);

  totalExpensesValue += value;
}
