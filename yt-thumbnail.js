javascript: (() => {
    let url = window.location.href;
    url = url.split("&")[0];
    url = url.replace("//www", "//img")
             .replace("watch?v=", "vi/") + "/maxresdefault.jpg";
    window.open(url);
})();