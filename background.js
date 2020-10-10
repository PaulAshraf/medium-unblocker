
const print = (str) => {chrome.extension.getBackgroundPage().console.log(str);};
const print_err = (str) => {chrome.extension.getBackgroundPage().console.error(str);};

const insertDot = (url) => {
    const arr = url.split("medium.com");
    const newUrl = arr[0] + "medium.com." + arr[1];
    return newUrl;
};

chrome.webNavigation.onBeforeNavigate.addListener( (details) => {

    print(details.url);
    const newUrl = insertDot(details.url);
    print(newUrl);
    chrome.tabs.update(details.tabId, {url: newUrl});

}, {url: [{urlMatches : "https://medium.com/"}]});