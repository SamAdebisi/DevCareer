const CC = require("currency-converter-It")

let fromcurrency = "usd"; // us dollars

let tocurrency ="ngn"; // nigerian naira 

let amounttoconvert = 1;

let currencyconverter = new CC({
    from: fromcurrency,
    to: tocurrency,
    amount: amounttoconvert,
})

currencyconverter.convert().then ((Response) => {
    console.log(amounttoconvert + " " + fromcurrency 
    + " is equal to " + Response
    + " " + tocurrency
    )
});

