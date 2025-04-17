
function copyIP() {
    const ipText = document.getElementById("server-ip").textContent;
    const msg = document.getElementById("copy-msg");

    navigator.clipboard.writeText(ipText).then(() => {
        msg.style.display = "inline-block";
        msg.style.opacity = "1";

        setTimeout(() => {
            msg.style.display = "none";
        }, 2000);
    });
}

