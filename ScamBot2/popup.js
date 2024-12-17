document.getElementById("scanUrl").addEventListener("click", async () => {
  const url = document.getElementById("urlInput").value;
  if (url) {
    const result = await chrome.runtime.sendMessage({ type: "scanUrl", url });
    document.getElementById("result").textContent = result;
  } else {
    alert("Please enter a valid URL.");
  }
});

document.getElementById("scanFile").addEventListener("click", async () => {
  const fileInput = document.getElementById("fileInput");
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const result = await chrome.runtime.sendMessage({ type: "scanFile", file });
    document.getElementById("result").textContent = result;
  } else {
    alert("Please upload a file.");
  }
});