document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("images", (data) => {
    const container = document.getElementById("imageContainer");
    (data.images || []).forEach((src) => {
      const imgWrapper = document.createElement("div");
      imgWrapper.style.display = "flex";
      imgWrapper.style.alignItems = "center";
      imgWrapper.style.marginBottom = "10px";

      const img = document.createElement("img");
      img.src = src;
      img.width = 100;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.style.marginLeft = "10px";
      removeButton.addEventListener("click", () => {
        chrome.storage.local.get("images", (data) => {
          const updatedImages = (data.images || []).filter(image => image !== src);
          chrome.storage.local.set({ images: updatedImages }, () => {
            imgWrapper.remove();
          });
        });
      });

      imgWrapper.appendChild(img);
      imgWrapper.appendChild(removeButton);
      container.appendChild(imgWrapper);
    });
  });
});