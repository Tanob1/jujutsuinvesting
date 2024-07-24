getScores(0);
document.getElementById("stockSort").addEventListener("change", function() {
  document.getElementById("leaderboard").innerHTML='';
    getScores(Number(this.value));
});
function drawInvestors() {
  const scoreDiv = document.getElementById("leaderboard");
  let tableHeaders = ["Rank", "Username", "Money(In Bank)","Money(Total if all stocks were sold right now)","Profit(Since chapter 264)"];
  let scoreboardTable = document.createElement("table"); 
  scoreboardTable.className = "scoreboardTable";
  let scoreboardTableHead = document.createElement("thead"); 
  scoreboardTableHead.className = "scoreboardTableHead";
  let scoreboardTableHeaderRow = document.createElement("tr");
  scoreboardTableHeaderRow.className = "scoreboardTableHeaderRow";
  tableHeaders.forEach((header) => {
    let scoreHeader = document.createElement("th"); 
    scoreHeader.innerText = header;
    scoreboardTableHeaderRow.append(scoreHeader); 
  });
  scoreboardTableHead.append(scoreboardTableHeaderRow); 
  scoreboardTable.append(scoreboardTableHead);
  let scoreboardTableBody = document.createElement("tbody"); 
  scoreboardTableBody.className = "scoreboardTable-Body";
  scoreboardTable.append(scoreboardTableBody); 
  scoreDiv.append(scoreboardTable); 
}
function appendScores(singleInvestor, investorIndex){
  const scoreboardTable = document.querySelector(".scoreboardTable"); 
  let scoreboardTableBodyRow = document.createElement("tr"); 
  scoreboardTableBodyRow.className = "scoreboardTableBodyRow";
  let scoreRanking = document.createElement("td");
  if(sessionStorage.username!=null){
    scoreRanking.innerText = singleInvestor.position
  }
  else{
    scoreRanking.innerText = investorIndex;
  }
  let usernameData = document.createElement("td");
  usernameData.innerText = singleInvestor.username;
  let scoreData = document.createElement("td");
  scoreData.innerText = '$'+singleInvestor.money;
  let totalValueData = document.createElement("td");
  totalValueData.innerText = '$'+singleInvestor.totalstockvalue;
  let profitData = document.createElement("td");
  profitData.innerText = '$'+singleInvestor.profit;
  scoreboardTableBodyRow.append(
    scoreRanking,
    usernameData,
    scoreData,
    totalValueData,
    profitData
  );
  scoreboardTable.append(scoreboardTableBodyRow); 
};

function getScores(type){
  if(type==1){
    fetch("/leaderboard-money", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        username: sessionStorage.username
      }),
    })
    .then((res) => res.json())
    .then((scores) => {
      drawInvestors(); 
      for (const score of scores) {
        let scoreIndex = scores.indexOf(score) + 1;
        appendScores(score, scoreIndex); 
      }
    });
    console.log("Not hello :(");
  }
  else if(type==0){
  fetch("/leaderboard-totalstockvalue", {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      username: sessionStorage.username
    }),
  }) 
    .then((res) => res.json())
    .then((scores) => {
      drawInvestors(); 
      for (const score of scores) {
        let scoreIndex = scores.indexOf(score) + 1;
        appendScores(score, scoreIndex); 
      }
    });
}else if(type==2){
  fetch("/leaderboard-profit", {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      username: sessionStorage.username
    }),
  }) 
    .then((res) => res.json())
    .then((scores) => {
      drawInvestors(); 
      for (const score of scores) {
        let scoreIndex = scores.indexOf(score) + 1;
        appendScores(score, scoreIndex); 
      }
    });
};
}
