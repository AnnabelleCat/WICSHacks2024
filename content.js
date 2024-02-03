chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "change-image") {
      document.body.style.backgroundImage = 'url(' + chrome.runtime.getURL("/Images/clearweather.jpg") + ')'
    }
  });