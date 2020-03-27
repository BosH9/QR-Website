var qrcodediv = document.getElementById("qrcode");
var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 100,
    height: 100
});

function generateQRcode() {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function (tabs) {
        var tab = tabs[0];
        if (!tab.url.includes('chrome://'))
            qrcode.makeCode(tab.url);
        else qrcodediv.innerHTML = "Please enter url";
    });
}
generateQRcode();