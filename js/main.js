// total expenses and  balance calculation

document.getElementById("calc-button").addEventListener("click", function(){
    //total expenses calculate
    const foodExpense = document.getElementById("food-expense").value;
    const rentExpense = document.getElementById("rent-expense").value;
    const clothesExpense = document.getElementById("clothes-expense").value;
    const totalIncome = document.getElementById("total-income").value;
    if(isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothesExpense) || isNaN(totalIncome)){
        alert("Please Provide a number");
    }
    else if(foodExpense < 0 || rentExpense < 0 || clothesExpense < 0 || totalIncome < 0){
        alert("Please provide positive number");
    }

    else{
        const totalCosts = parseInt(foodExpense) + parseInt(rentExpense) + parseInt(clothesExpense);
        const totalExpenses = document.getElementById("total-expenses");
        totalExpenses.innerText = totalCosts;

        // // balance calculate
        const totalBalance = document.getElementById("total-balance");
        
        const newBalance = parseInt(totalIncome) - totalCosts;
        totalBalance.innerText = newBalance;
    }
    
});