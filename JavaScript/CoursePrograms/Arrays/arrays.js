function numbers() {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers[i] = i + 1;
    }
    
    let displayString = "";
    for (let i = 0; i < numbers.length; i++) {
        displayString += numbers[i] + " ";
    }
    alert(displayString)
}

function totals() {
    const totals = [];
    totals[0] = 141.95;
    totals[1] = 212.25;
    totals[2] = 411;
    totals[3] = 135.75;
    
    let sum = 0;
    for (var i = 0; i < totals.length; i++)
    {
        sum += totals[i]
    }
    
    for(var i = 0; i < totals.length; i++) {
        totalsString += totals[i] + "\n";
    }
    alert("The totals are:\n" + totalsString + "\n" + "Sum: " + sum);
}

//numbers()
totals()