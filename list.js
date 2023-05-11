"use strict";
const $ = function(id){
    return document.getElementById(id);
}
// Get the value of a queryString parameter using the parameter key
const getQueryStringParmValue = (parmKey) => {
// retrieve whole queryString
const queryString = window.location.search;
// retrieve the list of parameters
const urlParams = new URLSearchParams(queryString);
// get param value
const paramValue = urlParams.get(parmKey);
console.log('parmKey/value' + parmKey + ':' + paramValue); 
return paramValue; 
};
const confirmData = function() {
    console.log("Confirm button clicked");
    $("profile").submit();

}; 
window.onload = function() {
    $("Fname").innerHTML = 'First Name: ' + 
              getQueryStringParmValue("fname"); 
    $("Lname").innerHTML = 'Last Name: ' + 
         getQueryStringParmValue("lname"); 
    $("Job").innerHTML = 'Occupation:' +
    getQueryStringParmValue("job");
    $("Age").innerHTML = 'Age: ' +
    getQueryStringParmValue("age");
    $("Email").innerHTML = 'Email: ' +
    getQueryStringParmValue("email");
};

    
