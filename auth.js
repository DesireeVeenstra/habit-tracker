document.getElementById("authBtn").addEventListener("click", async () => {
    if (window.PublicKeyCredential) {
      alert("Biometric authentication supported!");
    } else {
      alert("Biometric authentication not supported on this device.");
    }
  });
  