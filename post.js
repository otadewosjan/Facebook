export class Post {

    constructor() {
        this.divHei = 0;
    }

    get() {
        $.getJSON("http://jsonplaceholder.typicode.com/posts", (posts) => { this.render([posts[0], posts[1]]); });
    }

    render(posts) {
        $.get("templates/facebookposts.hbs", (template) => {
            let compiledTemplate = Handlebars.compile(template);
            $(posts).each(function (i, value) {
                $("#posts").append(compiledTemplate(value));
            });
            this.divHei = $(".post").height();
            if (this.divHei < $(window).height()) {
                this.get();
            }
        });
    }

    infiniteScroll() {

        let win = $(window);

        function isScrollbarAtBottom() {
            return ($(document).height() - win.height() === Math.floor(win.scrollTop()) ||
                ($(document).height() - win.height() === Math.floor(win.scrollTop()) + 1));
        }

        win.scroll(() => {
            if (isScrollbarAtBottom()) {
                this.get();
            }
        });
    }
}