
let users = [
    {
        userId: 101,
        name: "Anu",
        income: 50000,
        savingsGoal: 15000,
        savingsGoalAchieved: false,
        optionalDetail: null,
        expenses: [
            { expenseId: 1, category: "Rent", amount: 12000, paymentMode: "UPI" },
            { expenseId: 2, category: "Food", amount: 5000, paymentMode: "UPI" },
            { expenseId: 3, category: "Transportation", amount: 3000, paymentMode: "Cash" },
            { expenseId: 4, category: "Shopping", amount: 8000, paymentMode: "Debit Card" }
        ]
    },
    {
        userId: 102,
        name: "Rahul",
        income: 40000,
        savingsGoal: 10000,
        savingsGoalAchieved: false,
        optionalDetail: null,
        expenses: [
            { expenseId: 5, category: "Rent", amount: 10000, paymentMode: "UPI" },
            { expenseId: 6, category: "Food", amount: 6000, paymentMode: "Cash" },
            { expenseId: 7, category: "Entertainment", amount: 5000, paymentMode: "Credit Card" },
            { expenseId: 8, category: "Transportation", amount: 3000, paymentMode: "UPI" }
        ]
    },
    {
        userId: 103,
        name: "Meera",
        income: 60000,
        savingsGoal: 20000,
        savingsGoalAchieved: false,
        optionalDetail: null,
        expenses: [
            { expenseId: 9, category: "Rent", amount: 15000, paymentMode: "UPI" },
            { expenseId: 10, category: "Food", amount: 7000, paymentMode: "UPI" },
            { expenseId: 11, category: "Healthcare", amount: 4000, paymentMode: "Debit Card" },
            { expenseId: 12, category: "Shopping", amount: 9000, paymentMode: "Credit Card" }
        ]
    },
    {
        userId: 104,
        name: "Arun",
        income: 35000,
        savingsGoal: 12000,
        savingsGoalAchieved: false,
        optionalDetail: null,
        expenses: [
            { expenseId: 13, category: "Rent", amount: 10000, paymentMode: "UPI" },
            { expenseId: 14, category: "Food", amount: 5000, paymentMode: "Cash" },
            { expenseId: 15, category: "Shopping", amount: 8000, paymentMode: "Credit Card" },
            { expenseId: 16, category: "Entertainment", amount: 4000, paymentMode: "UPI" }
        ]
    },
    {
        userId: 105,
        name: "Neha",
        income: 75000,
        savingsGoal: 25000,
        savingsGoalAchieved: false,
        optionalDetail: null,
        expenses: [
            { expenseId: 17, category: "Rent", amount: 18000, paymentMode: "UPI" },
            { expenseId: 18, category: "Food", amount: 8000, paymentMode: "UPI" },
            { expenseId: 19, category: "Transportation", amount: 4000, paymentMode: "Cash" },
            { expenseId: 20, category: "Shopping", amount: 10000, paymentMode: "Debit Card" }
        ]
    }
];

let companyName = "Personal Finance Manager";
let unavailable = undefined;
let optionalValue = null;

function displayExpenses(user) {
    console.log("\nExpenses of " + user.name);

    for (let expense of user.expenses) {
        console.log(
            expense.expenseId,
            expense.category,
            expense.amount,
            expense.paymentMode
        );
    }
}

function calculateTotalExpenses(user) {
    let total = 0;

    for (let expense of user.expenses) {
        total += expense.amount;
    }

    return total;
}

function calculateSavings(user) {
    return user.income - calculateTotalExpenses(user);
}

function checkSavingsGoal(user) {
    let savings = calculateSavings(user);

    if (savings < 0) {
        user.savingsGoalAchieved = false;
        return "Overspending Alert";
    }
    else if (savings >= user.savingsGoal) {
        user.savingsGoalAchieved = true;
        return "Savings Goal Achieved";
    }
    else {
        user.savingsGoalAchieved = false;
        return "Savings Goal Not Achieved";
    }
}

function findHighestExpenseCategory(user) {
    let categories = {};

    for (let expense of user.expenses) {
        if (categories[expense.category] === undefined) {
            categories[expense.category] = 0;
        }

        categories[expense.category] += expense.amount;
    }

    let highestCategory = "";
    let highestAmount = 0;

    for (let category in categories) {
        if (categories[category] > highestAmount) {
            highestAmount = categories[category];
            highestCategory = category;
        }
    }

    return highestCategory;
}

function identifyHighSpendingUsers() {
    let found = false;

    console.log("\nHigh Spending Users");

    for (let user of users) {
        let total = calculateTotalExpenses(user);
        let percentage = (total / user.income) * 100;

        if (percentage > 70) {
            console.log(user.name + " - " + percentage.toFixed(2) + "%");
            found = true;
        }
    }

    if (!found) {
        console.log("No high spending users found.");
    }
}

function filterExpensesByCategory(user, category) {
    let total = 0;
    let found = false;

    console.log("\n" + category + " Expenses of " + user.name);

    for (let expense of user.expenses) {
        if (expense.category.toLowerCase() === category.toLowerCase()) {
            console.log("Expense ID:", expense.expenseId);
            console.log("Amount:", expense.amount);

            total += expense.amount;
            found = true;
        }
    }

    if (found) {
        console.log("Total Amount:", total);
    }
    else {
        console.log("No expenses found.");
    }
}

function generateFinancialReport() {
    console.log("\n=== PERSONAL FINANCE REPORT ===");

    for (let user of users) {
        let total = calculateTotalExpenses(user);
        let savings = calculateSavings(user);
        let percentage = (total / user.income) * 100;
        let status = checkSavingsGoal(user);
        let highestCategory = findHighestExpenseCategory(user);

        console.log("\nUser ID:", user.userId);
        console.log("Name:", user.name);
        console.log("Monthly Income: ₹" + user.income);
        console.log("Total Expenses: ₹" + total);
        console.log("Remaining Savings: ₹" + savings);
        console.log("Expense Percentage: " + percentage.toFixed(2) + "%");
        console.log("Highest Expense Category:", highestCategory);
        console.log("Savings Goal Status:", status);
        console.log("Savings Goal: ₹" + user.savingsGoal);
        console.log("Actual Savings: ₹" + savings);
        console.log("--------------------------------------------");
    }
}

for (let user of users) {
    displayExpenses(user);
}

generateFinancialReport();

identifyHighSpendingUsers();

filterExpensesByCategory(users[0], "Food");