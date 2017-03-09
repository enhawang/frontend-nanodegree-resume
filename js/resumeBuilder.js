/*
This is empty on purpose! Your code to build the resume will go here.
 */
 $("#header").append();
 $("#main").append();
 var name= "Nawang";
 var value= 32;
 console.log(name);
 var awesomeThoughts = "My Name is Nawang and I am AWESOME!";
 console.log(awesomeThoughts);
 var funThoughts=awesomeThoughts.replace("AWESOME!", "FUN");
 var formattedName= HTMLheaderName.replace("%data%", name);
 $("#header").prepend(formattedName);
 var formattedRole= HTMLheaderRole.replace("%data%", "Web & Android Developer");
 $("#header").append(formattedRole);
 var bio={
 	"name":"Nawang",
 	"role":"Web and Android Developer",
 	"contacts": "nawang.yolmo@gmail.com",
 	"welcome_message": "Welcome, bitch!",
 	"skills":["coding", "cycling", "writing", "painting"],
 	"bioPic":"images/me.jpg"
 };

$("#main").append(bio.bioPic);
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);
$("#main").append(bio.welcome_message);
$("#main").append(bio.skills);