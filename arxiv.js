let url = document.location.href;
if (url.includes('https://arxiv.org/')) {
    if (url.includes('/abs/')) {
        document.location.href = url.replace('/abs/', '/pdf/');
    } else if (url.includes('/pdf/')) {
        document.location.href = url.replace('/pdf/', '/abs/');
    }
}