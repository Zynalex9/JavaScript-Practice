function extractUrls(text) {
    const regex = /https?:\/\/[^\s]+/g;
    return text.match(regex) || [];
}

const text = 'Check out https://www.example.com and also http://another-example.com';
console.log(extractUrls(text));
