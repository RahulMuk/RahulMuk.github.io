// Initialize the counter variable
let count = 0;

// Function to format numbers with appropriate abbreviations
function formatNumber(num) {
    const abbreviations = ["", "k", "M", "B", "T"];
    let index = 0;
    while (num >= 1000 && index < abbreviations.length - 1) {
        num /= 1000;
        index++;
    }
    return num.toFixed(1) + abbreviations[index];
}


// Function to update the counter and display it on the page
function updateCounter() {
    count += 67;
    document.getElementById("counter").textContent = formatNumber(count);
}

// Update the counter every second
setInterval(updateCounter, 1000);

//
parent.postMessage(document.body.clientHeight, "*")