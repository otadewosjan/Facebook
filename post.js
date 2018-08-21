export class Post {

    get() {
        $.getJSON("http://jsonplaceholder.typicode.com/posts", (posts) => {this.render(posts)})
    }

    render(posts) {
        $.get("templates/facebookposts.hbs", (template) => {
            let compiledTemplate = Handlebars.compile(template);
            $(posts).each(function (i, value) {
                $("#posts").append(compiledTemplate(value));
            });
        });
    }
}

