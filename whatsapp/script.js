document.querySelector('.chat-input button').addEventListener('click', sendMessage);
document.querySelector('.chat-input input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const input = document.querySelector('.chat-input input');
  const message = input.value.trim();
  if (message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent');
    messageElement.textContent = message;
    document.querySelector('.chat-messages').appendChild(messageElement);
    input.value = '';
    document.querySelector('.chat-messages').scrollTop = document.querySelector('.chat-messages').scrollHeight;
  }
}