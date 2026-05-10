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

const DISCORD_ID = "801872532411777114";

const statusMap = {
  online:  { color: "#43a25a", label: "active" },
  idle:    { color: "#f0a500", label: "away" },
  dnd:     { color: "#e03c3c", label: "busy" },
  offline: { color: "#666666", label: "offline" },
};

async function updateDiscordStatus() {
  const headshotDot = document.querySelector(".headshot-dot");
  const currentlyDot = document.querySelector(".dot");
  const label = document.querySelector(".currently-text");
  const rows = document.querySelector(".currently-rows");

  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
    const data = await res.json();
    const status = data.data.discord_status;
    const { color, label: text } = statusMap[status] || statusMap.offline;

    headshotDot.style.background = color;
    currentlyDot.style.background = color;
    label.textContent = text;
    label.style.color = color;
    rows.style.display = status === "offline" ? "none" : "flex";
  } catch (e) {
    headshotDot.style.background = "#666666";
    currentlyDot.style.background = "#666666";
    label.textContent = "offline";
    label.style.color = "#666666";
    rows.style.display = "none";
  }
}

updateDiscordStatus();
setInterval(updateDiscordStatus, 30000);