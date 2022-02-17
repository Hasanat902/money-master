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
        if(totalCosts > totalIncome){
            alert("You dont have enough money for expenses");
        }
        else{
            const totalExpenses = document.getElementById("total-expenses");
            totalExpenses.innerText = totalCosts;

            // balance calculate
            const totalBalance = document.getElementById("total-balance");
            
            const newBalance = parseInt(totalIncome) - totalCosts;
            totalBalance.innerText = newBalance;
        }
    }
    
});

// saving amount and remaining balance calculation

function updateSavingBalance(){
    const percentage = document.getElementById("percentage").value;
    const totalIncome = document.getElementById("total-income").value;
    const saveAmount = (parseInt(percentage) / 100) * parseInt(totalIncome);
    const totalBalance = document.getElementById("total-balance").innerText;
    if(totalBalance < saveAmount ){
        alert("You dont have enough money for saving");
    }
    else{
        const savingAmount = document.getElementById("save-amount");
        savingAmount.innerText = saveAmount;

        const remainingBalance = document.getElementById("remaining-balance");

        const totalRemainingBalance = totalBalance - saveAmount;
        remainingBalance.innerText = totalRemainingBalance;
    }
};