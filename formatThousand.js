function formatThousand(number) {
    if (typeof number === "number") {
        return number.toLocaleString();
    } else {
        return "The function only works with numbers.";
    }
}

console.log(formatThousand(1000));
