
$(document).ready(function() {

  // get item from shopping cart
  var rollInCart = JSON.parse(localStorage.getItem("rollInCart"));
  var rollDisplay = []
  var subtotal = 0.0


console.log(rollInCart.length);
    // for each of the roll in the cart, do the following:
    for (var i in rollInCart) {
        var roll = rollInCart[i];

        // sum the prices
        // console.log(parseInt(roll.price))
        var numprice = parseFloat(roll.price.substring(1, roll.price.length));
        subtotal += numprice * parseFloat(roll.quantity);
        console.log(subtotal);


        $('#shopcart-content').append("<div class='productImage'> <img src='"
            + roll.picList[3] + "'style= 'width: 180px; height: 120px; float: left; '></div>"
            + "<div class='navpic'> <p> Flavor: " + roll.name + "</p></div>"
            + "<div class='navpic'> <p> Price : " + roll.price + "</p></div>"
            + "<div class='navpic'> <p> Glazing: " + roll.glazing + "</p></div>"
            + "<div class='navpic'> <p> Quantity: " + roll.quantity + "</p></div> <input type='image' src = 'Bunimage/close.svg' style='width: 20px; height: 20px;' id='delete"
            + i+"'/> </div> <hr> </div>"
          );
        rollDisplay.push(roll);
    };


    // calculate the total price 
    $("#subtotal").html("$"+subtotal.toFixed(2));


    // to delete item from the cart
    $("#shopcart-content input").click(function(){

        // get which item you are clicking first
        console.log("Clicked");
        var btnID = this.id;
        var index = btnID[btnID.length -1];
        console.log(index);
        var thisroll = rollInCart[index];
        // var rollArray = localStorage.getItem("rollInCart");

        // delete action
        $("#"+this.id).parent().remove();
        rollInCart.splice(index, 1);

        // update to local storage
        localStorage.setItem("rollInCart", JSON.stringify(rollInCart));
    });


});

