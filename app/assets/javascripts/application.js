// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .



var message = "We create interactive, user-friendly, high-performance, well-integrated web 
applications and solutions, both “standalone” or as part of a multi-level system, that help 
companies solve everyday business tasks and overcome challenges of the digital era. 
Softeq carefully takes you through every step of the process — from specification and 
prototyping stages to deployment and ongoing support."



function change(){
 document.getElementById("java");
 java.innerHTML = message;
}

function change2(){
 document.getElementById("java");
 java.innerHTML = "Who We Are";
}

function simu(){
	document.getElementById("phone");
	phone.innerHTML ="I love this";
}

function simu2(){
	document.getElementById("phone");
	phone.InnerHTML = "We also do this";
}

function highlight(){
	document.getElementById("color")
	color.innerHTML = "Give us a call. Let's see what we can do for you";
}

function highlight2(){
	document.getElementById("color")
	color.innerHTML = "Your Small Project is Our Speciality";
}

function nyumbani(){
	document.getElementById("home")
	home.innerHTML = "Nyumbani";
}

function nyumbani2(){
	document.getElementById("home")
	home.innerHTML = "Home";
}

function huduma(){
	document.getElementById("services")
	services.innerHTML = "Huduma";
}

function huduma2(){
	document.getElementById("services")
	services.innerHTML = "Services";
}

function wateja(){
	document.getElementById("clients")
	clients.innerHTML = "Wateja";
}

function wateja2(){
	document.getElementById("clients")
	clients.innerHTML = "Clients";
}

function mawasiliano(){
	document.getElementById("contacts")
	contacts.innerHTML = "Mawasiliano";
}

function mawasiliano2(){
	document.getElementById("contacts")
	contacts.innerHTML = "Contacts";

}



