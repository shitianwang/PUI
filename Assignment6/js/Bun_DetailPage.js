/*** Define the Cinnamon rolls ***/
function Roll(name, price, glazing, quantity,picList) {
  this.name = name;
  this.price = price;
  this.glazing = glazing;
  this.quantity = quantity
  this.picList = picList
}


/*** Global Variables ***/

// I created 2 rolls in the inventory
var RollA= new Roll("Original Flavor Cinnamon Roll", "$18.45", "None", '1',
    ["Bunimage/CR1.jpeg", "Bunimage/vanilla-glaze.png", "Bunimage/DoubleChocolate-glaze.png", "Bunimage/SugarMilk-glaze.png"]);



// what's in the shopping cart right now?
var rollInCart = [];
var rollDict = { "Original Flavor Cinnamon Roll": RollA }


$(document).ready(function() {
	console.log("javascript")

    //Update the dropdown button to reflect glazing and quantity choice
    $('a.glazing-dropdown-choice').click(function() {
        $("button#glazing-dropdown").html($(this).text());
        RollA.glazing = $(this).text();
    })

    $('a.quantity-dropdown-choice').click(function() {
        $("button#quantity-dropdown").html($(this).text());
        RollA.quantity = $(this).text();
    })

    //Update the product image by glaze chosen
    $("#VanillaMilk").click(function() {
        $('img#largepic').attr('src', "Bunimage/vanilla-glaze.png");
    })

    $("#DoubleChocolate").click(function() {
        console.log("vanilla!")
        $('img#largepic').attr('src', "Bunimage/DoubleChocolate-glaze.png");
    })

    $("#SugarMilk").click(function() {
        $('img#largepic').attr('src', "Bunimage/SugarMilk-glaze.png");
    })

    $("#None").click(function() {
        $('img#largepic').attr('src', "Bunimage/CR1.jpeg");
    })

    // update the # of items in the cart within the nav bar
    $("#item-quantity").text(rollInCart.length);

    if (!localStorage.getItem('pillowInCart')) {
    localStorage.setItem("pillowInCart", JSON.stringify(pillowInCart));
     }


    //When user clicks on "Add to Cart" button
    $("#addtocart").click(function() {

            var rollInCart = JSON.parse(localStorage.getItem("rollInCart")) || [];
            // var rollInCart = [];
            console.log(rollInCart);
            rollInCart.push(RollA);

            // save the animal to the local storage
            localStorage.setItem("rollInCart", JSON.stringify(rollInCart));
            $("#item-quantity").text(rollInCart.length);
    })



 });

