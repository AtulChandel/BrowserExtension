chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveImageVault",
    title: "Save Image to ImageVault",
    contexts: ["image"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "saveImageVault") {
    chrome.storage.local.get({ images: [] }, (data) => {
      const updatedImages = [...data.images, info.srcUrl];
      chrome.storage.local.set({ images: updatedImages });
    });
  }
});