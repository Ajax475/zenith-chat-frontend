(function () {
  const iframe = document.createElement("iframe");
  iframe.src = "https://your-chat-ui-url.com/chat.html?clientId=pine-manor-center"; // 👈 Replace with real URL and clientId
  iframe.style.position = "fixed";
  iframe.style.bottom = "80px";
  iframe.style.right = "20px";
  iframe.style.width = "370px";
  iframe.style.height = "500px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  iframe.style.borderRadius = "12px";
  iframe.style.display = "none";
  iframe.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
  document.body.appendChild(iframe);

  const button = document.createElement("div");
  button.innerHTML = "💬";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.width = "60px";
  button.style.height = "60px";
  button.style.background = "#5c67f2";
  button.style.color = "#fff";
  button.style.fontSize = "30px";
  button.style.borderRadius = "50%";
  button.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
  button.style.display = "flex";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";
  button.style.cursor = "pointer";
  button.style.zIndex = "9999";
  document.body.appendChild(button);

  button.onclick = () => {
    iframe.style.display = iframe.style.display === "none" ? "block" : "none";
  };
})();
