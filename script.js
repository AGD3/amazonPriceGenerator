let finalPrice;
let message;


const itemName = prompt("What is the name of the item?");


const basePrice = prompt("What is the base price?");

if (basePrice > 0) {
    finalPrice = basePrice;
}

// Could I have directly assigned finalPrice = basePrice w/o using the conditional?

const blackFriday = prompt("Is today Black Friday?");

if (blackFriday === "yes") {
    message = message + "The purchaser is buying on black Friday, so we will decrease the price by 25%.";
    finalPrice = basePrice * .75;
}

const searchEngine = prompt("Did the purchaser find the product through a search engine?");

if (searchEngine === "yes") {
    message = message + "The purchaser came through a search engine, so we will increase the price by 1%.";
    finalPrice = basePrice * 1.01;
}

const compShopSite = prompt("Did purchaser visit a comparison-shopping site?");

if (compShopSite === "yes") {
    message = message + "The purchaser came through a comparison-shopping site, so we will reduce the price by 10%.";
    finalPrice = basePrice * .91;
}

if ((compShopSite === "yes") || (compShopSite === "no")) {
alert ("The base price for a " + itemName + " is" + basePrice + "." + " We will increase the price by 1% to pay the search engine. This purchaser is a comparison shopper, so we will reduce the price by 10%. Since it's Black Friday, we will reduce the price by 25%. The final price is" + finalPrice);
}
