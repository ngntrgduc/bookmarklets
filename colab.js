javascript: (() => {
    let url = location.href;
    location.href = "https://colab.research.google.com/" + url.replace(".com", "").slice(8);
})();