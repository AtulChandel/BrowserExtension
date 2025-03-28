document.getElementById("downloadAll").addEventListener("click", () => {
  chrome.storage.local.get("images", (data) => {
    (data.images || []).forEach((src, index) => {
      chrome.downloads.download({ url: src, filename: `image_${index}.jpg` });
    });
  });
});