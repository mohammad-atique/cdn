// Create a new link element
var linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = "https://fonts.googleapis.com/icon?family=Material+Icons";

// Append the link element to the head of the document
document.head.appendChild(linkElement);



// Create the necessary elements
const chatbotWidget = document.createElement('div');
chatbotWidget.id = 'chatbot-widget';

const chatbotButton = document.createElement('div');
chatbotButton.id = 'chatbot-button';
chatbotButton.addEventListener('click', openChat);

const chatbotButtonIcon = document.createElement('span');
chatbotButtonIcon.classList.add('material-icons');
chatbotButtonIcon.textContent = 'chat';

chatbotButton.appendChild(chatbotButtonIcon);

const chatbotPopup = document.createElement('div');
chatbotPopup.id = 'chatbot-popup';

const chatbotHeader = document.createElement('div');
chatbotHeader.id = 'chatbot-header';

const chatbotTitle = document.createElement('h2');
chatbotTitle.textContent = 'Chatbot';

const closeIcon = document.createElement('span');
closeIcon.classList.add('material-icons');
closeIcon.textContent = 'close';
closeIcon.addEventListener('click', closeChat);

chatbotHeader.appendChild(chatbotTitle);
chatbotHeader.appendChild(closeIcon);

const chatbotMessages = document.createElement('div');
chatbotMessages.id = 'chatbot-messages';

const chatbotInput = document.createElement('div');
chatbotInput.id = 'chatbot-input';

const userInput = document.createElement('input');
userInput.type = 'text';
userInput.id = 'user-input';
userInput.placeholder = 'Type your message...';

const sendIcon = document.createElement('span');
sendIcon.classList.add('material-icons');
sendIcon.textContent = 'send';
sendIcon.addEventListener('click', sendMessage);

chatbotInput.appendChild(userInput);
chatbotInput.appendChild(sendIcon);

chatbotPopup.appendChild(chatbotHeader);
chatbotPopup.appendChild(chatbotMessages);
chatbotPopup.appendChild(chatbotInput);

chatbotWidget.appendChild(chatbotButton);
chatbotWidget.appendChild(chatbotPopup);

// Append the chatbot widget to the document body
document.body.appendChild(chatbotWidget);

// Create a <style> element
var styleElement = document.createElement('style');

// Define the CSS styles
var cssStyles = `
#chatbot-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
}

#chatbot-button {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
 
}

#chatbot-popup {
  display: none;
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

#chatbot-header {
  background-color: #f2f2f2;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

#chatbot-header h2 {
  margin: 0;
  font-size: 18px;
}

#chatbot-header span {
  background-color: #ccc;
  color: #fff;
  border: none;
  padding: 6px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 18px;
}

#chatbot-messages {
  height: 300px;
  overflow-y: scroll;
  padding: 10px;
}

#chatbot-input {
  display: flex;
  align-items: center;
  padding: 10px;
}

#chatbot-input input[type="text"] {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

#chatbot-input span {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  padding: 6px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 18px;
}

.message-user {
  background-color: #F5F5F5;
  color: #333;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 8px;
}

.message-bot {
  background-color: #4CAF50;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 8px;
}
#chatbot-messages {
  white-space: nowrap;
  overflow-x: auto;
}

@media (max-width: 600px) {
  #chatbot-popup {
    width: 90%;
    height: 80%;
    bottom: 10%;
    right: 5%;
  }
}

@media (max-width: 600px) {


  #chatbot-header span {
    font-size: 16px;
  }

  #chatbot-input span {
    font-size: 16px;
  }
}

.dot-elastic {
 position: relative;
width: 4px;
height: 4px;
left: 2px;
border-radius: 2px;
background-color: #4CAF50;
color: #4CAF50;
animation: dot-elastic 1s infinite linear;
top: 10px;
}
.dot-elastic::before, .dot-elastic::after {
content: "";
display: inline-block;
position: absolute;
}
.dot-elastic::before {
left: 10px;
width: 4px;
height: 4px;
border-radius: 2px;
background-color: #4CAF50;
color: #4CAF50;
animation: dot-elastic-before 1s infinite linear;
}
.dot-elastic::after {
left: 22px;
width: 4px;
height: 4px;
border-radius: 2px;
background-color: #4CAF50;
color: #4CAF50;
animation: dot-elastic-after 1s infinite linear;
}

@keyframes dot-elastic-before {
0% {
transform: scale(1, 1);
}
25% {
transform: scale(1, 1.5);
}
50% {
transform: scale(1, 0.67);
}
75% {
transform: scale(1, 1);
}
100% {
transform: scale(1, 1);
}
}
@keyframes dot-elastic {
0% {
transform: scale(1, 1);
}
25% {
transform: scale(1, 1);
}
50% {
transform: scale(1, 1.5);
}
75% {
transform: scale(1, 1);
}
100% {
transform: scale(1, 1);
}
}
@keyframes dot-elastic-after {
0% {
transform: scale(1, 1);
}
25% {
transform: scale(1, 1);
}
50% {
transform: scale(1, 0.67);
}
75% {
transform: scale(1, 1.5);
}
100% {
transform: scale(1, 1);
}
}
`;

// Append the CSS styles to the <style> element
styleElement.appendChild(document.createTextNode(cssStyles));

// Append the <style> element to the <head> of the document
document.head.appendChild(styleElement);



function openChat() {
  document.getElementById("chatbot-popup").style.display = "block";
  document.getElementById("chatbot-button").style.display = "none";
}

function closeChat() {
  document.getElementById("chatbot-popup").style.display = "none";
  document.getElementById("chatbot-button").style.display = "block";
}

function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  document.getElementById("user-input").value = "";
  
  // Display user's message in the chat window
  displayMessage(userInput, "user");
  showLoadingDots();
  // Call the backend API or process the user's input here
  // You can use AJAX, fetch(), or any other method to send the user's input to the server and receive the response
  
  // Example response from the chatbot
  var botResponse = "This is the chatbot's response.";
  
  // Display the chatbot's response in the chat window after a delay (simulating API response time)
  setTimeout(function() {
    hideLoadingDots();
    displayMessage(botResponse, "bot");
  }, 2000);
}

function displayMessage(message, sender) {
  var chatWindow = document.getElementById("chatbot-messages");
  
  var messageElement = document.createElement("div");
  messageElement.classList.add("message-" + sender);
  messageElement.innerHTML = message;
  
  chatWindow.appendChild(messageElement);
  
  // Scroll to the bottom of the chat window to show the latest message
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
function showLoadingDots() {
  var chatWindow = document.getElementById("chatbot-messages");
  
  var loadingDots = document.createElement("div");
  loadingDots.classList.add("dot-elastic");

  
  chatWindow.appendChild(loadingDots);
  
  // Scroll to the bottom of the chat window to show the loading dots
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function hideLoadingDots() {
  var chatWindow = document.getElementById("chatbot-messages");
  
  var loadingDots = document.getElementsByClassName("dot-elastic");
    while(loadingDots.length > 0){
        loadingDots[0].parentNode.removeChild(loadingDots[0]);
    }
  
}

