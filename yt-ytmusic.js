javascript: (() => {
    let url = window.location.href.split('&')[0];
    if (url.includes('www.youtube.com')) {
        url = url.replace('/www.', '/music.').replace('results?search_query=', 'search?q=');
    } else if (url.includes('music.youtube.com')) {
        url = url.replace('/music.', '/www.').replace('search?q=', 'results?search_query=');
    }

    window.location.href = url;
})();