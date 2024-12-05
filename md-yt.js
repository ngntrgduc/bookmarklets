javascript: (() => {
    const url = location.href.split('&')[0]
    let title = document.title.replace('- YouTube', '').trim();
    alert(`[${title}](${url})`)    
})();