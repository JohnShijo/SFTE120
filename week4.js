function printMessage(msg) {
    console.log(msg || "Default Message");
}
printMessage("");
printMessage(null);
printMessage("Hello");