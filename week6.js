function stringFunction(text) {
    stringLength = text.length;
    stringReverse = text.split("").reverse().join("");
    console.log(`String: ${text}`);
    console.log(`Length: ${stringLength}`);
    console.log(`Reverse: ${stringReverse}`);
}

stringFunction("Hello");
stringFunction("Malayalam");
stringFunction("JavaScript");


function currencyConverter(currency, amount) {
    switch (country.toLowerCase()) {
        case "CRC":
            convertedAmount = amount * 533.62;
            currencySymbol = "CRC";
            break;
        case "EUR":
            convertedAmount = amount * 0.84;
            currencySymbol = "EUR";
            break;
        case "BRL":
            convertedAmount = amount * 5.31;
            currencySymbol = "BRL";
            break;
        case "INR":
            convertedAmount = amount * 73.14;
            currencySymbol = "INR";
            break;
        default:
            console.log("Invalid country. Please enter a valid country.");
            rl.close();
            return;
    }
    
    currencyConverter("INR", 100);
    currencyConverter("EUR", 100);
    currencyConverter("BRL", 100);

    console.log(`Amount in USD: ${amount}`);
    console.log(`Amount in EUR: ${convertedAmount}`);
}
