chrome.commands.onCommand.addListener((command) => {
  if (command === "go-home") {
    chrome.tabs.create({ url: "https://macmini.thinlens.net" }); // Replace with your desired home page
  }
});

