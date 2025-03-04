javascript: (() => {     
    let url = window.location.href;
    if (url.includes('github.com') && url.includes('.ipynb')) {
        window.location.href = "https://colab.research.google.com/" + url.replace(".com", "").slice(8);
    }
})();