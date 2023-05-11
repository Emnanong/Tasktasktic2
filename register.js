"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var list = function() {
    var Fname = $("fname").value;
    var Lname = $("lname").value;
    var Job = $("job").value;
    var Age = $("age").value;
    var Email = $("email").value;
    var errorMessage = "";

    // validate the entries
    if (Fname == "") {
    	errorMessage = "First name entry required";
        $("fname").focus();
    } else if (Lname == "") {
    	errorMessage = "Last name entry required";
    	$("lname").focus();
    } else if (Job == "") {
        errorMessage = "Job entry required";
        $("job").focus();
        }
        else if (Age == "") {
            errorMessage = "Age entry required";
            $("age").focus();
            }
            else if
        (Email == "") {
            errorMessage = "Email entry required";
            $("email").focus();
            } 
           
    // submit the form if all entries are valid otherwise, display an error message
    if (errorMessage == "") {
        $("form").submit(); 
    } else {
    	alert(errorMessage);
    }
};

 window.onload = function() {
    $("List").onclick = list;
};