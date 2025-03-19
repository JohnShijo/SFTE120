document.addEventListener("DOMContentLoaded", () => {
    const punchInBtn = document.getElementById("punchInBtn");
    const punchOutBtn = document.getElementById("punchOutBtn");
    const addMissedPunchBtn = document.getElementById("addMissedPunchBtn");
    const punchHistory = document.getElementById("punchHistory");
    const missedPunches = document.getElementById("missedPunches");
    const missedPunchTime = document.getElementById("missedPunchTime");
    const timenow = document.getElementById("timenow");

    let punches = [];

    // timenow = new Date();
    // const formattedtime = timenow.toLocaleString();
    // timenow.textContent = `${formattedtime}`;

    function displayCurrentTime() {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        timenow.textContent = `${formattedTime}`;
    }

    setInterval(displayCurrentTime, 1000);

    // Punch In Functionality
    punchInBtn.addEventListener("click", () => {
        const currentTime = new Date().toLocaleString();
        punches.push(`Punched In at: ${currentTime}`);
        updatePunchHistory();
    });

    // Punch Out Functionality
    punchOutBtn.addEventListener("click", () => {
        const currentTime = new Date().toLocaleString();
        punches.push(`Punched Out at: ${currentTime}`);
        updatePunchHistory();
    });

    // Add Missed Punch Functionality
    addMissedPunchBtn.addEventListener("click", () => {
        const missedTime = missedPunchTime.value;
        if (missedTime) {
            const missedPunchEntry = `Missed Punch at: ${new Date(missedTime).toLocaleString()} (Pending Approval)`;
            const li = document.createElement("li");
            li.textContent = missedPunchEntry;
            missedPunches.appendChild(li);
        } else {
            alert("Please select a valid date and time.");
        }
    });

    // Update Punch History Display
    function updatePunchHistory() {
        punchHistory.innerHTML = "";
        punches.forEach(punch => {
            const li = document.createElement("li");
            li.textContent = punch;
            punchHistory.appendChild(li);
        });
    }
});
