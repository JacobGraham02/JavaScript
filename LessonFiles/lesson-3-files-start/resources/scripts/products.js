
// STEP 1: Declare and initialize variables
const productList = document.querySelector("tbody");
const totalData = document.querySelector("tfoot td:first-of-type");
// STEP 1a: Grab the parts of the DOM that we need to build the invoice
let products = [
    "Frozen Pizza: $8.99",
    "Orange Juice: $4.95",
    "Milk: $6.95",
    "Dozen Eggs: $3.95",
    "Bacon: $7.49",
    "Kiwi: $3.95",
];

// STEP 1b: Build the products array in the format 'Product Name:0.00'
let invoiceTotal = 0;

// STEP 1c: Set up invoiceTotal variable - start at zero


// STEP 2: Build a loop to iterate through the products array
for (let i = 0; i <= products.length - 1; i++) {
    


// STEP 3: Break apart the product name from the price for each item with split()
    products[i] = products[i].split(":");

// STEP 4: Now we have an array as an element of an array - set the second array element to the product price (as type number)
    products[i][1] = Number(products[i][1]);

// STEP 5: Add the price of this product to the invoice total
    invoiceTotal += products[i][1];

// STEP 6: Capture each product name and price as variables 
    let itemDesc = products[i][0];
    let itemPrice = products[i][1];

// STEP 7: Create a TR element for this product and price in the invoice table
    const itemRow  = document.createElement("tr");
    console.log(itemRow);

// STEP 8: Build the string that contains two TD elements each containing one of the item description, and the item price
    let itemDetail = `<td> ${itemDesc} </td><td> ${itemPrice} </td>`;

// STEP 9: Set the above string as the innerHTML of the new TR element, and then append the new element to the table body (var productList)
    itemRow.innerHTML = itemDetail;
    console.log(itemRow);
    productList.appendChild(itemRow);
}
// STEP 10: Set the total cost of the invoice as the textContent of the TD in the TFOOT (var totalData), rounding the number to two decimal places
totalDate.textContent = invoiceTotal.toFixed(2);