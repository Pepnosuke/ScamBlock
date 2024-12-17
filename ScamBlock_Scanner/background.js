const API_KEY = "2f89d74e90893cffc719e3f5a891a374bcb7afd42d97093b8d0d46a38860c1d7";

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === "scanUrl") {
    const response = await scanUrl(message.url);
    sendResponse(response);
  } else if (message.type === "scanFile") {
    const response = await scanFile(message.file);
    sendResponse(response);
  }
  return true;
});

async function scanUrl(url) {
  const apiUrl = `https://www.virustotal.com/api/v3/urls`;
  const encodedUrl = btoa(url);
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "x-apikey": API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url })
  });

  if (response.ok) {
    const data = await response.json();
    return `Risk level: ${data.data.attributes.last_analysis_stats.malicious} malicious reports.`;
  } else {
    return `Error: Unable to scan URL.`;
  }
}

async function scanFile(file) {
  const apiUrl = `https://www.virustotal.com/api/v3/files`;
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "x-apikey": API_KEY },
    body: formData
  });

  if (response.ok) {
    const data = await response.json();
    return `Risk level: ${data.data.attributes.last_analysis_stats.malicious} malicious reports.`;
  } else {
    return `Error: Unable to scan file.`;
  }
}