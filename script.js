import { Post } from '/post.js';

$(document).ready(function () {
    let win = $(window);

    let posts = new Post();
    posts.get();

    win.scroll(function () {
        if ($(document).height() - win.height() === win.scrollTop()) {
            posts.get();
        }
    });
});