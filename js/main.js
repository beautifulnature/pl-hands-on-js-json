var start = `{"favColore":"orange","favSeason":"Fall"}`;

var myObject = JSON.parse(start);
// console.log(myObject);

var myString = JSON.stringify(myObject);
// console.log(myString);

var data1 = `{"first":"paul","last":"cheney","city":"salem"}`;
var myObj1 = JSON.parse(data1);
// console.log(myObj1);

// document.getElementById('message').innerHTML = myObj1.city;

var data2 = `{"jane":{"age":"29", "degree": {"AAS":"VMI","BA":"UVA"}}, "jim":{"age":"49", "degree":"MA"}}`;
var myObj2 = JSON.parse(data2);
// console.log(myObj2);
// document.getElementById('message').innerHTML = myObj2.jane.degree.BA;

var xhr = new XMLHttpRequest();
xhr.open('GET','data.json', true);
xhr.responseType = 'text';

/* xhr.onreadystatechange = function(){
    // console.log(xhr.readyState);
    console.log(xhr.status);
    // console.log(xhr.statusText);
} // end function */

xhr.onload = function(){
    if(xhr.status === 200){
        var myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);
    } // end if
} // end onload function

xhr.send();