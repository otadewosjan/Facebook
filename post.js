export class Post {

    constructor() {
        this.templateURL = "templates/facebookposts.hbs";
        this.jsonURL = "http://jsonplaceholder.typicode.com/posts";
        this.compiledTemplate;
        this.divHei = 0;
    }

    load() {
        this.getTemplate()
            .then(this.get());
    }

    getTemplate() {
        return ($.get(this.templateURL)
            .then((template) => { this.compiledTemplate = Handlebars.compile(template); }));
    }

    get() {
        $.getJSON(this.jsonURL)
            .then((posts) => { this.render([posts[0], posts[1]]) });
    }

    render(posts) {

        $(posts).each((i, value) => {
            $("#posts").append(this.compiledTemplate(value));
        });
        this.divHei = $(".post").height();
    }

    heightCheck() {
        if (this.divHei < $(window).height()) {
            this.get();
        };
    };

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