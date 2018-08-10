$(document).ready(function () {
    $.getJSON("http://jsonplaceholder.typicode.com/posts", function (facebookposts) {
        for (let i in facebookposts) {
            $("#postList").append(`<li> ${facebookposts[i].title} <hr> ${facebookposts[i].body} </li><br><br>`)
        }
    });
});