function cheesify() {
  // TODO: Add the image replacement script here
  document.querySelectorAll('img').forEach(img => {
    img.src = `https://source.unsplash.com/featured/?otter/${img.width}x${img.height}/${Math.random(10000)}`
    img.srcset = img.src
  });
}

// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'cheesify') cheesify();
  }
);