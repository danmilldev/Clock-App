let clockText = document.getElementById("clock-text")

setInterval(() => {
    const date = new Date()
    let currentTime = date.toLocaleString("de-de").replace(",", " ").replaceAll("/", ".") // for german time
    clockText.innerHTML = currentTime
}, 1000);