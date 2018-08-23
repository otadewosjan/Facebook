export class Post {

    constructor() {
        this.divHei = 0;
        this.heightCheck = () => {
            if (this.divHei < $(window).height()) {
                this.get();
            };
        };
    }

    get() {
        $.getJSON("http://jsonplaceholder.typicode.com/posts", (posts) => {
            this.render([posts[0], posts[1]], this.heightCheck);
        });
    }

    render(posts, callback) {

        $.get("templates/facebookposts.hbs", (template) => {
            let compiledTemplate = Handlebars.compile(template);
            $(posts).each((i, value) => {
                $("#posts").append(compiledTemplate(value));
            });
            this.divHei = $(".post").height();

            if (callback) {
                callback();
            }
        });
    }

    infiniteScroll() {

        let win = $(window);

        function isScrollbarAtBottom() {
            return ($(document).height() - win.height() === Math.floor(win.scrollTop()) ||
                ($(document).height() - win.height() === Math.floor(win.scrollTop()) + 1));
        }

        win.resize(() => {
            if ($(".post").height() < win.height()) {
                this.get();
            }
        });

        win.scroll(() => {
            if (isScrollbarAtBottom()) {
                this.get();
            }
        });
    }
}