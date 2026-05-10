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
  online:  "#43a25a",
  idle:    "#f0a500",
  dnd:     "#e03c3c",
  offline: "#666666",
};

let currentStatusColor = "#666666";

async function updateDiscordStatus() {
  const headshotDot = document.querySelector(".headshot-dot");
  const headshotWrapper = document.querySelector(".headshot-wrapper");
  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
    const data = await res.json();
    const status = data.data.discord_status;
    currentStatusColor = statusMap[status] || "#666666";
    headshotDot.style.background = currentStatusColor;
    headshotWrapper.style.setProperty("--status-color", currentStatusColor);
  } catch (e) {
    currentStatusColor = "#666666";
    headshotDot.style.background = currentStatusColor;
    headshotWrapper.style.setProperty("--status-color", currentStatusColor);
  }
}

updateDiscordStatus();
setInterval(updateDiscordStatus, 30000);

function updateLocalTime() {
  const time = new Date().toLocaleTimeString("en-GB", {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  document.getElementById("local-time").textContent = `${time} local time`;
}

updateLocalTime();
setInterval(updateLocalTime, 1000);

document.querySelector(".headshot-outer").addEventListener("click", () => {
  document.getElementById("photo-modal").classList.add("open");
});

function closeModal() {
  document.getElementById("photo-modal").classList.remove("open");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});