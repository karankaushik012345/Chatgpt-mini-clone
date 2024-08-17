
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message === '') return;

    appendMessage('user', message);
    userInput.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', getBotResponse(message));
    }, 1000);
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    // Placeholder bot response logic
    const responses = [
        "I'm here to help!",
        "Can you please elaborate?",
        "That's interesting!",
        "Let's talk more about that."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
