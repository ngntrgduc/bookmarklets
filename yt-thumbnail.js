javascript: (() => {
    let url = window.location.href;
    if (url.includes('https://www.youtube.com/')) {
        url = url.split("&")[0];
        url = url.replace("//www", "//img")
                .replace("watch?v=", "vi/") + "/maxresdefault.jpg";
        window.open(url);
    }
})();