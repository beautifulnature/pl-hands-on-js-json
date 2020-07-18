var xhr = new XMLHttpRequest();
xhr.open('GET', 'data4a.json', true);
xhr.responseType = "text";
xhr.send();

xhr.onload = function() {
    if(xhr.status === 200){
        var mystuff = JSON.parse(xhr.responseText);
        console.log(mystuff);

        console.log(mystuff[0].last);
    }
}