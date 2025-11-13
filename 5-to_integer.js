const firstArg = process.argv[2];
const converted = parseInt(firstArg);

if (isNaN(converted)) {
    console.log("Not a number");
} else {
    console.log("My number:", converted);
}
