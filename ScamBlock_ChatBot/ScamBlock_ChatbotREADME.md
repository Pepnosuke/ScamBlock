
# ScamBlock Chatbot Chrome Extension

This project is a Chrome extension chatbot designed to detect and block scams. It is powered by Hugging Face's Qwen 2.5 model, with a Flask backend enabling seamless interactions from your browser.

---

## **Features**
- Clean and responsive chatbot interface.
- Real-time interaction with the backend powered by Hugging Face's Qwen 2.5 model.
- Lightweight and easy to use.

---

## **Requirements**

### **Backend**
1. **Python** (3.7 or later).
2. Installed libraries:
   - `flask`
   - `flask_cors`
   - `huggingface_hub`

### **Frontend**
- Google Chrome browser (latest version).
- Basic knowledge of how to load unpacked Chrome extensions.

---

## **Setup Instructions**

### **1. Backend Setup**
1. Clone or download this repository.
2. Navigate to the backend folder containing the `app.py` file.
3. Install the required Python libraries:
   ```bash
   pip install flask flask_cors huggingface_hub
   ```
4. Update the Hugging Face API Key in `app.py`:
   ```python
   HF_API_KEY = "your_huggingface_api_key"
   ```
5. Start the Flask backend server:
   ```bash
   python app.py
   ```
6. Ensure the server is running at `http://127.0.0.1:5000`.

---

### **2. Chrome Extension Setup**
1. Navigate to the `chrome_extension` folder in this repository.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right corner).
4. Click **Load unpacked** and select the `chrome_extension` folder.
5. The extension will appear in your browser's toolbar.

---

## **Usage Instructions**

1. Click the chatbot icon in the Chrome toolbar to open the chatbot UI.
2. Type a message in the input field and click the **Send** button.
3. The chatbot will respond using the backend server.

---

## **Troubleshooting**

1. **Backend Not Running**:  
   Ensure the Flask server is running on `http://127.0.0.1:5000`. If not, check for errors in the terminal and restart the server.

2. **API Key Errors**:  
   Verify that the Hugging Face API Key in `app.py` is correct and has permissions for the Qwen model.

3. **Failed to Load Extension**:  
   Double-check that the `chrome_extension` folder contains all required files:
   - `manifest.json`
   - `popup.html`
   - `popup.js`
   - `background.js`
   - `icon.png`

4. **No Response from Chatbot**:  
   - Confirm the backend server is accessible at `http://127.0.0.1:5000/chat`.
   - Check the browser's developer console (F12 > Console) for error logs.

---

## **File Structure**

```
├── backend/
│   ├── app.py               # Flask backend server
│   ├── templates/
│   │   └── index.html       # Optional backend UI template
│   └── requirements.txt     # Backend dependencies
└── chrome_extension/
    ├── manifest.json        # Chrome extension manifest
    ├── popup.html           # Chatbot UI
    ├── popup.js             # Chatbot frontend logic
    ├── background.js        # Background tasks (optional)
    └── icon.png             # Extension icon
```

---

## **Future Enhancements**
- Add theme customization for the chatbot UI.
- Integrate support for multiple backend endpoints.
- Enhance error handling for better feedback.

---

Enjoy using the **ScamBlock Chatbot Chrome Extension**! 😊
