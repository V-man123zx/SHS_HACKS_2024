const temp = [
    {
        Name: "test name 1",
        Email: "test@test.com",
        Password: "password",
        Type: "organization"
        
    },
    {
        Name: "test name 2",
        Email: "test@test.com",
        Password: "password",
        Type: "organization"
    },
    {
        Name: "test name 3",
        Email: "test@test.com",
        Password: "password",
        Type: "organization"
    },
    {
        Name: "test name 4",
        Email: "test@test.com",
        Password: "password",
        Type: "organization"
    },
    {
        Name: "test name 5",
        Email: "test@test.com",
        Password: "password",
        Type: "organization"
    }
];

const setLeaderboardInfo = () => {
    
    fetch("https://sheetdb.io/api/v1/np6bcxlf3zgdq")
    .then((response) => response.json())
    .then((data) => {
            const leaderboardGridEl = document.getElementById("leaderboard-grid");
            // console.log(leaderboardGridEl)
            // leaderboardGridEl.innerHTML = JSON.stringify(data);
        //     data.forEach((el) => {
        //         console.log(el);
        //         leaderboardGridEl.innerHTML += `
        //         <div class="leaderboard-row">
        //         <span>${el.Name}</span>
        //         </div>
        //         `;
        //  });

    data.sort((a, b) => a.Hours - b.Hours);
    data.reverse()
    let newData = data.filter(item => 
        item.Type === "VOL"
    )

    const leaderboardPodiumEl = document.getElementById("leaderboard-podium");
    [newData[0], newData[1], newData[2]].forEach((el, index) => {
        leaderboardPodiumEl.innerHTML += `
        <div id="lbpodium-${index}" class="leaderboard-row">
        <span>${el.Name}</span>
        <span>${el.Hours} Hours</span>
        </div>
        `
    })
   
    newData.slice(3).forEach((el, index) => {
        leaderboardGridEl.innerHTML += `
        <div class="leaderboard-row">
        <span>${el.Name}</span>
        <span>${el.Hours} Hours</span>
        </div>
        `
    })
    })
};

window.onload = () => {
    setLeaderboardInfo();
}
