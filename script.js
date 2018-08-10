function loadJsonDoc() {
    let myDoc;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://jsonplaceholder.typicode.com/posts", true);

    xhr.onprogress = function () {
        console.log('LOADING...', xhr.readyState);
    };  

    xhr.onload = function() {
        if (this.status === 200) {
            myDoc = JSON.parse(this.responseText);

            let outputList = "";
            for(let i in myDoc) {
                outputList += `<li> ${myDoc[i].title} <hr> ${myDoc[i].body} </li><br><br>`;
            }
            document.getElementById("postList").innerHTML = outputList;

        }
    };

    xhr.send();
};