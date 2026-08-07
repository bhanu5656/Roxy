function sendMessage(){

let input=document.getElementById("msg");

let chat=document.getElementById("chat");

let msg=input.value;

if(msg=="") return;

chat.innerHTML+="<p><b>You:</b> "+msg+"</p>";

let reply="❤️ I'm here for you. No matter what happens, you are important and loved.";

chat.innerHTML+="<p><b>Pavi AI:</b> "+reply+"</p>";

input.value="";

chat.scrollTop=chat.scrollHeight;

}

function loveMessage(){

let messages=[

"Your smile is my favourite sunshine ☀️❤️",

"You are stronger than you think 🌸",

"You make every day beautiful 💖",

"You deserve happiness every single day 🥹",

"I'll always cheer for you ❤️"

];

let random=Math.floor(Math.random()*messages.length);

alert(messages[random]);

}

function surprise(){

alert("🌹 Surprise ❤️\n\nNo matter what happens...\nYou will always have a special place in my heart.\n\nKeep smiling 😊❤️");

}
