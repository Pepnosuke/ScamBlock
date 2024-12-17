document.getElementById("sendButton").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

async function sendMessage() {
  const chatbox = document.getElementById("chatbox");
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();

  if (!message) return;

  // Display user's message
  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = message;
  chatbox.appendChild(userMessage);

  // Clear the input field
  userInput.value = "";

  // Scroll to the bottom
  chatbox.scrollTop = chatbox.scrollHeight;

  // Call the backend
  try {
    const response = await fetch("http://127.0.0.1:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    // Display chatbot's response
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.textContent = data.response;
    chatbox.appendChild(botMessage);
  } catch (error) {
    console.error("Error:", error);
    const errorMessage = document.createElement("div");
    errorMessage.className = "message bot";
    errorMessage.textContent = "Failed to get a response. Try again.";
    chatbox.appendChild(errorMessage);
  }

  // Scroll to the bottom
  chatbox.scrollTop = chatbox.scrollHeight;
}
