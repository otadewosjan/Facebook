import { Post } from '/post.js';

$(document).ready(function () {

    let posts = new Post();
    posts.get();

    let win = $(window);
    win.scroll(function () {
        if ($(document).height() - win.height() === win.scrollTop()) {
            
            posts.get();
        }
    });
});