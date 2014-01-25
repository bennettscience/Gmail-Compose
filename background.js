chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.windows.create({
        url: "http://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&shva=1",
            type: "popup",
            width: 850,
            height: 670,
        });
    });


function copyEmail(info, tab) {
    chrome.windows.create({
        url: "https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&shva=1&to=" +info.selectionText,
        width: 850,
        height: 670,
        focused:true,
        type:"popup"
    })
}

chrome.contextMenus.create({
    title: "Send %s a new email",
    contexts:["selection"],
    onclick: copyEmail,
})