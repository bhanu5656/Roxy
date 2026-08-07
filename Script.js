const API_KEY = "AQ.Ab8RN6KUYec_XD_5sYwHW0irdCFIAqFJCk_JA-PahkwzPtg8XA";

async function reply() {
  const input = document.getElementById("feeling").value;
  const output = document.getElementById("answer");

  if (input.trim() === "") {
    output.innerText = "Please share your feelings ❤️";
    return;
  }

  output.innerText = "Roxy AI is thinking...";

  const prompt = `
You are Roxy AI, a caring and friendly emotional support assistant.

Rules:
- Reply like a close friend.
- Comfort users when they are sad or angry.
- Give relationship advice politely.
- Encourage users with positive words.
- If someone says "yadava", reply exactly:
"Ha cheppu bgrm 🤌🏻🫠"
- Never judge the user.
- Keep replies short, warm and natural.
- Answer any question kindly.

User: ${input}
`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    output.innerText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a reply.";
  } catch (e) {
    output.innerText = "Connection error. Please try again.";
  }
}
