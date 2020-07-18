var xhr = new XMLHttpRequest();
xhr.open('GET', 'data4b.json', true);
xhr.responseType = "text";
xhr.send();

xhr.onload = function() {
    if(xhr.status === 200){
        var mystuff = JSON.parse(xhr.responseText);
        console.log(mystuff);

        for(i=0; i<mystuff.presidents.length; i++){
            console.log(mystuff.presidents[i].first);
            console.log(mystuff.presidents[i].last);
            console.log(mystuff.presidents[i].served);

            console.log(mystuff.vicepresidents[i].first);
            console.log(mystuff.vicepresidents[i].last);
        }

        var myString = "";

        for(i=0; i<mystuff.presidents.length; i++){
            myString += "<br>President " +(i+1) +" was " 
                            +mystuff.presidents[i].first +" " 
                            +mystuff.presidents[i].last +"."
                            +"He served from "
                            +mystuff.presidents[i].served
                            +" with "
                            +mystuff.vicepresidents[i].first +" " 
                            +mystuff.vicepresidents[i].last +".";

        }
        document.getElementById('message').innerHTML = myString;
    }
}