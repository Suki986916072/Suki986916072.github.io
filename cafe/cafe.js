"use strict";

$(document).ready(function () {
    var total = 0;    
    // add hover handler and click handler to each image in table
    $("ul img").each(function(){
        // set up event handlers for each image, on hover
        $(this).hover(function(){
            $(this).attr("src", this.id);
        }, function (){
            var imgSrc = (this.id).split("_");
            $(this).attr("src", imgSrc[0]+".jpg");
        });
        // end hover

        //set up event handlers for each image, when clicked
        $(this).click(function (evt)
        {           
            var total=0.00;
            var strTotal = document.getElementById("total").textContent;
           
            if (strTotal.length < 3)
            {
                total = 0.00;           
            }
            else
            {              
                var getTotal = strTotal.substr(strTotal.indexOf("$") + 1, strTotal.length);               
                total = parseFloat(getTotal);
            }
          
            var item = this.id;
            if (item == "images/espresso_info.jpg")
            {               
                $('#order').append($('<option></option>').html("$3.45 - Espresso"));
                total = total + 3.45;
            }
            else if (item == "images/latte_info.jpg")
            {
                $('#order').append($('<option></option>').html("$5.65 - Latte"));
                total = total + 5.65;
            }
            else if (item == "images/cappuccino_info.jpg")
            {
                $('#order').append($('<option></option>').html("$3.45 - Cappuccino"));
                total = total + 3.45;               
            }
            else if (item == "images/coffee_info.jpg")
            {
                $('#order').append($('<option></option>').html("$4.35 - Coffee"));
                total = total + 4.35;
            }
            else if (item == "images/biscotti_info.jpg")
            {
                $('#order').append($('<option></option>').html("$2.14 - Biscotti"));
                total = total + 4.35;
            }
            else
            {
                $('#order').append($('<option></option>').html("$2.95 - Scone"));
                total = total + 4.35;
            }
            document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
            evt.preventDefault();

        }); // end click
    }); // end each
   
    // add click event handler for check out button
    $("#place_order").click(function ()
    {
        $("#order_form").submit();

    }); // end click

    // add click event handler for clear button
    $("#clear_order").click(function ()
    {
        $("#order option").remove();
        document.getElementById("total").textContent = " ";

    }); // end click
}); // end ready








//"use strict";
//
//$(document).ready(function () {
//    var total = 0;
//    // add hover handler and click handler to each image in table
//    $("ul img").each(function(){
//        // set up event handlers for each image, on hover
//        $(this).hover(function(){
//            $(this).css("opacity", 0.5);
//            $(this).attr("src", this.id);
//        }, function (){
//            $(this).css("opacity", 1);
//            var imgSrc = (this.id).split("_");
//            $(this).attr("src", imgSrc[0]+".jpg");
//        });
//        // end hover
//
//        // set up event handlers for each image, when clicked
//        $(this).click(function (evt)
//        {           
//            var total=0.00;
//            var strTotal = document.getElementById("total").textContent;
//           
//            if (strTotal.length < 3)
//            {
//                total = 0.00;           
//            }
//            else
//            {              
//                var getTotal = strTotal.substr(strTotal.indexOf("$") + 1, strTotal.length);               
//                total = parseFloat(getTotal);
//            }
//          
//            var item = this.id;
//            if (item == "images/espresso_info.jpg")
//            {               
//                $('#order').append($('<option></option>').html("$3.45 - Espresso"));
//                total = total + 3.45;
//            }
//            else if (item == "images/latte_info.jpg")
//            {
//                $('#order').append($('<option></option>').html("$5.65 - Latte"));
//                total = total + 5.65;
//            }
//            else if (item == "images/cappuccino_info.jpg")
//            {
//                $('#order').append($('<option></option>').html("$3.45 - Cappuccino"));
//                total = total + 3.45;               
//            }
//            else if (item == "images/coffee_info.jpg")
//            {
//                $('#order').append($('<option></option>').html("$4.35 - Coffee"));
//                total = total + 4.35;
//            }
//            else if (item == "images/biscotti_info.jpg")
//            {
//                $('#order').append($('<option></option>').html("$2.14 - Biscotti"));
//                total = total + 4.35;
//            }
//            else
//            {
//                $('#order').append($('<option></option>').html("$2.95 - Scone"));
//                total = total + 4.35;
//            }
//            document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
//            evt.preventDefault();
//
//        }); // end click
//    }); // end each
//   
//    // add click event handler for check out button
//    $("#place_order").click(function ()
//    {
//        $("#order_form").submit();
//
//    }); // end click
//
//    // add click event handler for clear button
//    $("#clear_order").click(function ()
//    {
//        $("#order option").remove();
//        document.getElementById("total").textContent = " ";
//
//    }); // end click
//}); // end ready