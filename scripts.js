$(document).ready(function(){
//var h1 = document.querySelector("h1");
$("h1").css("color", "#00FFFF");
$("h1").css("textAlign", "center");
//var x = 0;
var Contacts = [];
$("#save-id").click(function(event)
{
var fname = $("#fname").val();
var sname = $("#sname").val();
var tel = $("#tel").val();
var email = $("#email").val();
var address = $("#address").val();
if (fname.length > 10 ) 
{
statusElm.append("<div>The fname must have more than 10 characters</div>")
//alert("The Fname must have no more than 10 characters");  
Submitted = "false";
}
if (sname.length >10) 
{
statusElm.append("<div>The Sname must have more than 10 characters</div>")
//alert("The Sname must have no more than 10 characters");  
Submitted = "false";
}
if (fname.length=="" || sname.length=="" || tel.length==""|| email.length==""||address=="") 
{
	statusElm.append("<div>Name field can not be empty!</div>")
//alert("");  
Submitted = "false";
}
else
{
var Contacts= [fname,sname,email,address];
Contacts.push(Contacts),
console.log(Contacts);

alert("Saved!");
}
});

$("#search-id").click(function(event){
//function search_function()
{
	
var phrase = $("#search-id").val();
var statusElm = $(".search_result");
for (var m=0; m<allcontacts.length; m++)
{
var contactarray=allcontacts[m];
if(contactarray[0].includes(phrase)){
	console.log(contactarray[0]);
	statusElm.append(contactarray[0]);
}

}
}
});
 
//document.getElementById("search").innerHTML = e;
//}
//}
});