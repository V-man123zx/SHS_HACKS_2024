const tempLeaderboardInfo = [
    {
        Name: "test name",
        Email: "test@test.com",
        Password: "password",
        Type: "organization"
    },
    {
        Name: "test name",
        Email: "test@test.com",
        Password: "password",
        Type: "organization"
    },
    {
        Name: "test name",
        Email: "test@test.com",
        Password: "password",
        Type: "organization"
    },
    {
        Name: "test name",
        Email: "test@test.com",
        Password: "password",
        Type: "organization"
    },
    {
        Name: "test name",
        Email: "test@test.com",
        Password: "password",
        Type: "organization"
    }
];

const setLeaderboardInfo = () => {
    // fetch("https://sheetdb.io/api/v1/d6omx04jpy6ks")
    //     .then((response) => response.json())
    //     .then((data) => {
    //          leaderboardGridEl.textContent = JSON.stringify(data);

    //          data.forEach((el) => {
    //              console.log(el);

    //              leaderboardGridEl.innerHTML += `
    //              <div class="leaderboard-row">
    //              <span>${el.Name}</span>
    //              </div>
    //              `;
    //      });
    // });


    const leaderboardGridEl = document.getElementById("leaderboard-grid");

    tempLeaderboardInfo.forEach((el, index) => {
        leaderboardGridEl.innerHTML += `
        <div class="leaderboard-row">
        <span>${el.Name}</span>
        </div>
        `
    })
};

window.onload = () => {
    setLeaderboardInfo();
}
