export class Post {

    constructor() {
        this.templateURL = "templates/facebookposts.hbs";
        this.jsonURL = "http://jsonplaceholder.typicode.com/posts";
        this.compiledTemplate;
    }

    load() {
        this.getTemplate()
            .then(this.get()
            .then((result) => { this.heightCheck(result) }));
    }

    getTemplate() {
        return ($.get(this.templateURL)
            .then((template) => { this.compiledTemplate = Handlebars.compile(template); }));
    }

    get() {
        return $.getJSON(this.jsonURL)
            .then((posts) => { return this.render([posts[0], posts[1]]) });
    }

    render(posts) {
        return new Promise((resolve) => {
            $(posts).each((i, value) => {
                $("#posts").append(this.compiledTemplate(value));
            });
            resolve($(".post").height());
        });
    }

    heightCheck(hei) {
        if (hei < $(window).height()) {
            this.get().then((result) => { this.heightCheck(result) });
        };
    };

    infiniteScroll() {

        let win = $(window);
        this.load();

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