chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
        innerBounds: {
            width: 800,
            height: 300,
            minWidth: 800,
            minHeight: 300
        },
        id: "DelcomLight"
    });
});