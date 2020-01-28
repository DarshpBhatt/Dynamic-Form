function myFunction() {
   var email = document.getElementById("input").value;
   var interest = document.getElementById("input1").value; 
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   
   if (!filter.test(email))
   {
   	  document.getElementById("errorMsg").innerHTML = "Please inut a valid Email Address";
   }

   else
   {
   	document.getElementById("button").value = "Submiting..."; 
   setTimeout(function(){  
   	
   	console.log("Email : "+email);
   	console.log("Interest : "+interest);
   	document.getElementById("Form").innerHTML = "<h2 id='thank'>Thanks for your Interest!</h2> <p id='text'> We will review your application and contact you for additional information should your background <br>and expirence meet the requirements of one of our openings.</p>";
   }, 2000);
   }
}