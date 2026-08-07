function reply() {
  let text = document.getElementById("feeling").value.toLowerCase().trim();
  let msg = "";

  if (text === "") {
    msg = "I'm here for you ❤️. Tell me what's on your mind.";
  } else if (text.includes("sad") || text.includes("cry")) {
    msg = "I'm sorry you're feeling this way. Remember, every difficult moment passes. I'm here with you ❤️";
  } else if (text.includes("happy")) {
    msg = "Aww! I'm so happy for you 😊 Keep smiling and enjoy every moment.";
  } else if (text.includes("angry") || text.includes("mad")) {
    msg = "It's okay to feel angry. Take a deep breath, don't react immediately, and give yourself a little time. ❤️";
  } else if (text.includes("alone")) {
    msg = "You're never alone. Roxy AI is always here to listen 🤍";
  } else if (text.includes("love") || text.includes("relationship")) {
    msg = "A strong relationship grows with trust, respect, honesty, and communication. Talk calmly and listen with your heart. ❤️";
  } else if (text.includes("yadava")) {
    msg = "Ha cheppu bgrm 🤌🏻🫠";
  } else {
    msg = "I understand. Tell me more about how you're feeling. I'm listening and I'll always try to support you. 💙";
  }

  document.getElementById("answer").innerText = msg;
}
