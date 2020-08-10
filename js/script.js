var character = "This is string",
 number = 7,
 boolVal = true,
 objectEg = {
     Key:"Value"
 },
 arrayEg = ["Sherlock","Saitama","Ted"];

$("#app").append("<div class='new Data'>"+ character+ ": This is eg for string")
$("#app").append("<div class='new Data'>"+ number+ ": This is eg for number")
$("#app").append("<ul> <li>First</li><li>Second</li><li>Third</li></ul>")
$("li").eq(2).addClass("selected")

arrayEg.forEach(element => {
    if(element == "Sherlock"){
        $("#app").append("<div class='new Data'>"+ element+ ": Array found")  
    }
    $("#app").append("<div class='new Data'>"+ element+ ": Array found")
});

