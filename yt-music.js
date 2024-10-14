javascript: (() => {
    let url = window.location.href;
    url = url.split('&')[0];
    window.location.href = url.replace('/www.', '/music.');    
})();