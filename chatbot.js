document.getElementById("chat-input").addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      const question = e.target.value;
      const responseBox = document.getElementById("chat-response");
  
      if (question.toLowerCase().includes("suggest")) {
        responseBox.textContent = "Try habits like walking, meditation, or drinking water!";
      } else {
        responseBox.textContent = "I'm here to help you track your habits!";
      }
  
      e.target.value = "";
    }
  });
  