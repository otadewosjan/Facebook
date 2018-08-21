import { Post } from '/post.js';

let posts = new Post();
posts.get();
infiniteScroll(posts);

function infiniteScroll(obj) {

    let win = $(window);

    function isScrollbarAtBottom() {
        return ($(document).height() - win.height() === Math.floor(win.scrollTop()) ||
            ($(document).height() - win.height() === Math.floor(win.scrollTop()) + 1));
    }

    win.scroll(function () {
        if (isScrollbarAtBottom()) {
            obj.get();
        }
    });
}
