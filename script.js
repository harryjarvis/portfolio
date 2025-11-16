function copyEmail() {
  const email = "harryjarvis32@gmail.com";

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(email).then(showCopiedMessage);
  } else {
    const temp = document.createElement("input");
    temp.value = email;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    showCopiedMessage();
  }
}

function showCopiedMessage() {
  const msg = document.querySelector(".email-popup");
  msg.style.display = "block";
  setTimeout(() => (msg.style.display = "none"), 1500);
}
