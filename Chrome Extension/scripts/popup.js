function sendCheesifyMsg() {
  // TODO: Write a function to send a message to the active tab to 'cheesify' it
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { // Finds tabs that are active in the current window
    chrome.tabs.sendMessage(tabs[0].id, { action: 'cheesify' }); // Sends a message (object) to the first tab (tabs[0])
  });
}

// TODO: Add an event listener to trigger the function above when clicking the 'Cheesify' button
document.querySelector('#cheesify').addEventListener('click', event => sendCheesifyMsg());