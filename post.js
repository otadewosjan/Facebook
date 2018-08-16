export class Post {

    postDisplay() {
        $.getJSON("http://jsonplaceholder.typicode.com/posts", function (facebookposts) {
            $.get("templates/facebookposts.hbs", function (template) {
                let compiledTemplate = Handlebars.compile(template);
                $(facebookposts).each(function (i, value) {
                    $("#postList").append(compiledTemplate(value));
                })
            });
        });
    }
}