javascript: (() => {
    const url = location.href;
    const urlType = url.split('.').pop();
    const imageTypes = ["jpg", "png", "jpeg"] 
    if (imageTypes.includes(urlType)) {
        location.href = `https://lens.google.com/uploadbyurl?url=${url}`;
    }
})();