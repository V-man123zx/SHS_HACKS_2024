const setLeaderboardInfo = () => {
    fetch('https://sheetdb.io/api/v1/d6omx04jpy6ks')
      .then((response) => response.json())
      .then((data) => {
        const leaderboardGridEl =  document.getElementById("leaderboard-grid")
        leaderboardGridEl.textContent = JSON.stringify(data)

        data.forEach((el) => {
          console.log(el)

          leaderboardGridEl.innerHTML += `
          <div class="leaderboard-row">
            <span>${el.Name}</span>
          </div>
          `
        })
      });
}

setLeaderboardInfo()