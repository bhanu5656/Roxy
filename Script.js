// Configuration
const API_KEY = "PASTE_YOUR_GEMINI_API_KEY_HERE";
const MODEL_NAME = "gemini-3.6-flash"; // Frontier model as of late 2026
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

// UI Elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const loadingIndicator = document.getElementById('loading');

// Session-based chat history
let chatHistory = [];

/**
 * Appends a message to the chat interface
 */
function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', `${sender}-message`);
    msgDiv.innerText = text;
    chatBox.appendChild(msgDiv);
    
    // Auto-scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

/**
 * Handles the communication with Gemini API
 */
async function getAIResponse(userMessage) {
    // Add user message to history
    chatHistory.push({
        role: "user",
        parts: [{ text: userMessage }]
    });

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: chatHistory })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || "Something went wrong.");
        }

        const aiText = data.candidates[0].content.parts[0].text;
        
        // Add AI response to history for context
        chatHistory.push({
            role: "model",
            parts: [{ text: aiText }]
        });

        return aiText;

    } catch (error) {
        console.error("API Error:", error);
        return `Error: ${error.message}`;
    }
}

/**
 * Main function to send message
 */
async function handleSendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // UI: Clear input and show user message
    userInput.value = "";
    appendMessage(message, 'user');

    // UI: Show loading
    loadingIndicator.classList.remove('hidden');
    chatBox.scrollTop = chatBox.scrollHeight;

    // Fetch AI response
    const aiResponse = await getAIResponse(message);

    // UI: Hide loading and show AI message
    loadingIndicator.classList.add('hidden');
    
    if (aiResponse.startsWith("Error:")) {
        appendMessage(aiResponse, 'error');
    } else {
        appendMessage(aiResponse, 'ai');
    }
}

// Event Listeners
sendBtn.addEventListener('click', handleSendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSendMessage();
    }
});
