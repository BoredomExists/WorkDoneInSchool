let again = "y";
let investment = 0;

do {

    do {
        investment = parseFloat(prompt("Enter investment amount as xxxxx.xx", 10000))

    } while (isNaN(investment));

    let rate = 0;
    do {
        rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
    } while (isNaN(rate));

    let years = 0;
    do {
        years = parseInt(prompt("Enter number of years", 5));
    } while (isNaN(years))

    let futureValue = investment;
    for (let i = 1; i <= years; i++) {
        futureValue += futureValue * rate / 100;
        document.write(`<p><label>Years=</label>${i}<label> Interest=</label>${rate}<label> Value=</label>${futureValue.toFixed(2)}</p>`) //This line here is what was needed. Although the rate is wrong. but the format is correct.
    }
    document.write(`<br>`);

    again = prompt("Enter another entry (y/n)", "y")

} while (again == "y")