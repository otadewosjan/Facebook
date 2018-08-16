$(document).ready(function () {
    $.getJSON("http://jsonplaceholder.typicode.com/posts", function (facebookposts) {
        $.get("templates/facebookposts.hbs", function (template) {
            let templateScript = Handlebars.compile(template);
            $(facebookposts).each(function (i, value) {
                $("#postList").append(templateScript(value));
            })
        });
    });
});