let stockValues = [
  [
    [4.71, 4.69, 4.65, 4.62, 4.53, 4.54, 4.47, 4.42, 4.36, 4.29, 4.21],
    true,
    "Kashimo",
    0,
  ],
  [
    [10.02, 9.64, 9.55, 9.34, 8.86, 8.32, 7.98, 7.52, 30.32, 34.23, 22.13],
    true,
    "Gojo",
    0,
  ],
  [
    [
      77.21, 75.21, 79.91, 69.38, 62.52, 56.43, 59.01, 74.05, 79.23, 82.03,
      83.21,
    ],
    true,
    "Sukuna",
    0,
  ],
  [
    [
      53.71, 51.08, 67.71, 74.23, 79.96, 78.32, 77.34, 76.12, 75.87, 75.0,
      72.94,
    ],
    true,
    "Yuta",
    0,
  ],
  [
    [
      71.21, 69.23, 68.65, 67.95, 67.03, 66.43, 65.9, 64.21, 63.09, 62.43,
      59.38,
    ],
    true,
    "Takaba",
    0,
  ],
  [
    [
      47.54, 51.33, 60.01, 67.32, 77.64, 84.52, 65.43, 63.54, 62.97, 67.22,
      77.64,
    ],
    true,
    "Yuji",
    0,
  ],
  [
    [55.45, 67.31, 31.03, 6.03, 6.01, 5.96, 5.91, 5.78, 5.62, 5.45, 5.21],
    true,
    "Higuruma",
    0,
  ],
  [
    [8.68, 8.65, 8.61, 8.58, 8.52, 8.47, 8.43, 8.38, 8.32, 8.29, 8.14],
    true,
    "Nobara",
    0,
  ],
  [
    [11.23, 11.92, 10.78, 10.54, 11.42, 2.32, 2.21, 2.03, 1.95, 1.85, 1.8],
    true,
    "Megumi",
    0,
  ],
  [
    [42.04, 41.29, 40.98, 39.87, 39.5, 39.0, 65.32, 28.23, 26.34, 47.41, 52.97],
    true,
    "Maki",
    0,
  ],
  [
    [
      45.87, 45.12, 44.32, 42.07, 57.23, 54.98, 56.65, 57.54, 59.01, 58.54,
      57.25,
    ],
    true,
    "Kenjaku",
    0,
  ],
  [
    [
      44.36, 44.16, 43.66, 43.36, 42.91, 42.96, 41.96, 42.51, 42.32, 41.85,
      40.91,
    ],
    true,
    "Hakari",
    0,
  ],
  [
    [
      42.26, 41.76, 41.36, 41.91, 41.42, 41.26, 45.34, 45.35, 44.23, 43.67,
      42.76,
    ],
    true,
    "Uraume",
    0,
  ],
  [
    [
      14.42, 14.39, 14.32, 24.52, 24.48, 24.4, 24.45, 24.32, 30.23, 29.22,
      28.28,
    ],
    true,
    "Uiui",
    0,
  ],
  [
    [
      32.32, 39.42, 38.87, 38.01, 37.42, 36.91, 36.44, 41.73, 41.22, 40.95,
      40.45,
    ],
    true,
    "Ino",
    0,
  ],
  [
    [
      43.32, 47.27, 47.01, 46.55, 45.98, 45.63, 47.01, 51.3, 17.02, 16.75,
      15.82,
    ],
    true,
    "Kusakabe",
    0,
  ],
  [
    [
      12.49, 12.55, 12.41, 12.38, 12.39, 12.41, 12.27, 12.25, 42.45, 62.32,
      36.95,
    ],
    true,
    "Miguel",
    0,
  ],
  [
    [16.74, 16.42, 16.35, 16.13, 15.92, 15.82, 15.75, 15.54, 15.4, 15.23, 15.0],
    true,
    "Todo",
    0,
  ],
  [
    [
      19.32, 18.42, 17.35, 16.13, 15.52, 15.17, 24.75, 24.34, 23.67, 27.28,
      41.39,
    ],
    true,
    "Choso",
    0,
  ],
  [
    [16.74, 16.42, 16.35, 16.13, 15.92, 15.82, 15.75, 15.54, 15.4, 15.23, 15.0],
    true,
    "Miwa",
    0,
  ],
  [
    [
      19.32, 18.42, 17.35, 16.13, 15.52, 15.17, 24.75, 24.34, 23.67, 27.28,
      41.39,
    ],
    true,
    "Mechamaru",
    0,
  ],
  [
    [
      19.32, 18.42, 17.35, 16.13, 15.52, 15.17, 24.75, 24.34, 23.67, 27.28,
      41.39,
    ],
    true,
    "Meimei",
    0,
  ],
  [
    [
      19.32, 18.42, 17.35, 16.13, 15.52, 15.17, 24.75, 24.34, 23.67, 27.28,
      41.39,
    ],
    true,
    "Shoko",
    0,
  ],
];
//possibly add checkboxes for fraud and goat mode
/*let fraudNames = {"Gojo":"Go/Jo","Kashimo":"The Waffled One","Sukuna":"Fraudkuna","Yuta":"The Sneakiest","Maki":"Fem Toji","Yuji":"Punch and Kick Merchant","Higuruma":"Fodder 1","Kenjaku":"King of Recieving Backshots","Hakari":"Fodder 2","Nobara":"Haruta Victim","Megumi":"Potential Man","Uraume":"Glorified Freezer","Todo":"Useless CT Now"}
let goatNames = {"Gojo":"GOATjo","Kashimo":"KasHIMo","Sukuna":"GOATkuna","Yuta":"Wuta Oggoatsu","Maki":"HER","Yuji":"GOATji Himtadori","Higuruma":"HIMguruma","Kenjaku":"GOATjaku","Hakari":"HIMkari","Nobara":"HERbara","Megumi":"HIMgumi","Uraume":"HERaume","Todo":"GOATdo"}
function enableFraud(){
  console.log(document.querySelector('#fraudMode').checked)
}*/
let canvas = document.createElement("canvas");
canvas.width = 1220;
const oneTick = canvas.width / 10;
canvas.height = 650;
let lastChapter;
let sellNum = 1;
let buyNum = 1;
canvas.id = "stockGraph";
const stockMax = 90;
let money = 1000;
let loggedIn = false;
document.getElementById("canvasBox").appendChild(canvas);
let context = canvas.getContext("2d");
if (window.innerWidth > 1650) {
  document
    .querySelector(".description-box-holder")
    .appendChild(document.getElementById("stockSidePanel"));
} else {
  document.body.appendChild(document.getElementById("stockSidePanel"));
}
window.onresize = () => {
  if (window.innerWidth > 1650) {
    document
      .querySelector(".description-box-holder")
      .appendChild(document.getElementById("stockSidePanel"));
  } else {
    document.body.appendChild(document.getElementById("stockSidePanel"));
  }
};

window.onload = async () => {
  for (const item of stockValues) {
    if (localStorage.getItem(`${item[2]}Visible`) != null) {
      item[1] = JSON.parse(localStorage.getItem(`${item[2]}Visible`));
    }
  }
  await getStockData(drawAll);
  //await drawAll();
  document.querySelector(
    ".buttonHolder"
  ).innerHTML = `<button class="leaderboard" onclick="location.href = '/leaderboard';" >Leaderboard</button>`;
  const date = new Date();
  if (
    !sessionStorage.username ||
    (sessionStorage &&
      (date.getTime() - Number(sessionStorage.startTime)) / (2 * 3600 * 1000) >
        1)
  ) {
    sessionStorage.clear();
    document.querySelector(
      ".buttonHolder"
    ).innerHTML += `<button class="login" onclick="location.href = '/login';" >log in/create account</button>`;
    setUpOtherTimes();
    setUpFirstTime();
  } else {
    await fetch("/get-user-data", {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        validateData(data);
      });
    document.querySelector(
      ".buttonHolder"
    ).innerHTML += `<button class="logout" onclick="sessionStorage.clear();
    location.reload();" >log out</button>`;
    loggedIn = true;
    setupFromServer();
  }
  updateStockDescriptions();
  updateMoney();
};
function setupFromServer() {
  money = Number(sessionStorage.money);
  for (let item of stockValues) {
    item[3] = Number(sessionStorage.getItem(item[2].toLowerCase()));
  }
}

function toggleAll(num){
  let value;
  if(num ==0){
    value=false;
  }
  if(num ==1){
    value=true;
  }
  if(num<2){
    for(let item of stockValues){
      document.getElementById(`checkbox${item[2]}`).checked = value;
      item[1]=value;
      localStorage.setItem(`${item[2]}Visible`, value);
    }
  }
  if(num ==2){
    for(let item of stockValues){
      if(item[3]>0){
        document.getElementById(`checkbox${item[2]}`).checked = !item[1];
        item[1]=!item[1];
        localStorage.setItem(`${item[2]}Visible`, item[1]);
      }
    }
  }
  if(num ==3){
    for(let item of stockValues){
      if(item[3]<1){
        document.getElementById(`checkbox${item[2]}`).checked = !item[1];
        item[1]=!item[1];
        localStorage.setItem(`${item[2]}Visible`, item[1]);
      }
    }
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  prepareStockImages();
  drawStocks();
}
function drawGrid() {
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 0.5;
  for (let i = 0; i < canvas.width + 1; i += oneTick) {
    context.moveTo(i, 0);
    context.lineTo(i, canvas.height);
    context.stroke();
  }
  for (let i = 0; i < canvas.height + 1; i += canvas.height / 10) {
    context.moveTo(0, i);
    context.lineTo(canvas.width, i);
    context.stroke();
  }
}
function drawAll() {
  stockValues.sort(function (a, b) {
    return b[0][b[0].length - 1] - a[0][a[0].length - 1];
  });
  drawGrid();
  drawStocks();
  prepareStockImages();
  drawStockPanel();
  drawStockSidePanel();
}
async function getStockData(callback) {
  await fetch("/stock-values")
    .then((res) => res.json())
    .then((values) => {
      for (let item of stockValues) {
        item[0] = values.map((obj) => Number(obj[item[2].toLowerCase()]));
        item[0] = item[0].reverse();
      }
      lastChapter = Number(values[0].lastchapter) - 9;
    });
  callback();
}
function setUpFirstTime() {
  if (decodeURIComponent(document.cookie) == "" || getCookie("Money")==null|| getCookie("Money")=="") {
    setCookie("Money", money);
    const date = new Date();
    setCookie("LastDate", date.getTime());
    for (let item of stockValues) {
      setCookie(item[2], 0);
    }
  }
}
function setUpOtherTimes() {
  if (decodeURIComponent(document.cookie) != ""&& getCookie("Money")!=null&& getCookie("Money")!="") {
    const date = new Date();
    money = getCookie("Money");
    money = Number(money);
    timeSinceLastCookie =
      (date.getTime() - getCookie("LastDate")) / (24 * 3600 * 1000);
    money += 100 * Math.floor(timeSinceLastCookie);
    timeSinceLastCookie -= Math.floor(timeSinceLastCookie);
    setCookie(
      "LastDate",
      date.getTime() - 24 * 3600 * 1000 * timeSinceLastCookie
    );
    setCookie("Money", money);
    for (let item of stockValues) {
      item[3] = getCookie(item[2]);
    }
  }
}
function drawStockSidePanel() {
  let cashDisplay = document.createElement("h1");
  cashDisplay.setAttribute("id", "cashDisplay");
  document.getElementById("stockSidePanelMoney").appendChild(cashDisplay);
  cashDisplay.innerHTML = `Bank:$${+money.toFixed(2)}`;
}
function changeSellNum(num) {
  sellNum = num;
  if (sellNum < 1000) {
    document.getElementById(
      "sidePanelSellButtonLabel"
    ).textContent = `Currently selling stocks ${sellNum} at a time`;
  } else {
    document.getElementById(
      "sidePanelSellButtonLabel"
    ).textContent = `Currently selling all stocks owned`;
  }
}
function changeBuyNum(num) {
  buyNum = num;
  if (buyNum < 1000) {
    document.getElementById(
      "sidePanelBuyButtonLabel"
    ).textContent = `Currently buying stocks ${buyNum} at a time`;
  } else {
    document.getElementById(
      "sidePanelBuyButtonLabel"
    ).textContent = `Currently buying all stocks possible`;
  }
}
function updateMoney() {
  let cashDisplay = document.getElementById("cashDisplay");
  cashDisplay.innerHTML = `Bank:$${+money.toFixed(2)}`;
}
function drawStockPanel() {
  for (const [index, item] of stockValues.entries()) {
    let stockDiv = document.createElement("div");
    stockDiv.id = `stockDiv ${item[2]}`;
    stockDiv.setAttribute("class", "stockDiv");
    let descriptionBox = document.createElement("div");
    let descriptionTitle = document.createElement("h4");
    descriptionTitle.setAttribute("class", "stockDescriptionTitle");
    descriptionBox.appendChild(descriptionTitle);
    let checkbox = document.createElement("label");
    checkbox.setAttribute("class", "switch");
    if (!item[1]) {
      checkbox.innerHTML = `<input type="checkbox"  id="checkbox${item[2]}">
        <span class="slider round"></span>`;
    } 
    else if(item[1]) {
      checkbox.innerHTML = `<input type="checkbox"  id="checkbox${item[2]}" checked>
        <span class="slider round"></span>`;
    }
    checkbox.addEventListener("change", () => {
      item[1] = !item[1];
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      prepareStockImages();
      drawStocks();
      localStorage.setItem(`${item[2]}Visible`, item[1]);
    });
    descriptionBox.appendChild(checkbox);
    descriptionTitle.textContent = `${item[2]}`;
    stockDiv.appendChild(descriptionBox);
    let description = document.createElement("p");
    stockDiv.appendChild(description);
    description.innerHTML = ` Stock:${item[3]} <br/> Value:$${
      item[0][item[0].length - 1]
    }`;
    description.setAttribute("id", `${item[2]}Description`);
    description.setAttribute("class", "stockDescription");
    document.getElementById("stockPanel").appendChild(stockDiv);
    let button = document.createElement("button");
    button.id = item[2];
    button.setAttribute("class", "stockPanelButtonBuy");
    button.textContent = "BUY";
    stockDiv.appendChild(button);
    button.setAttribute("onclick", `buyStock(${index})`);
    let button2 = document.createElement("button");
    button2.setAttribute("class", "stockPanelButtonSell");
    stockDiv.appendChild(button2);
    button2.textContent = "SELL";
    button2.setAttribute("onclick", `sellStock(${index})`);
  }
}
function updateStockDescription(index) {
  description = document.getElementById(`${stockValues[index][2]}Description`);
  description.innerHTML = `Stock:${stockValues[index][3]} <br/> Value:$${
    stockValues[index][0][stockValues[index][0].length - 1]
  }`;
}
function updateStockDescriptions() {
  for (const [index, item] of stockValues.entries()) {
    description = document.getElementById(
      `${stockValues[index][2]}Description`
    );
    description.innerHTML = `Stock:${stockValues[index][3]} <br/> Value:$${
      stockValues[index][0][stockValues[index][0].length - 1]
    }`;
  }
}
async function buyStock(index) {
  let ogmoney = money;
  let ogamount = stockValues[index][3];
  canBuy = Math.floor(
    money / Number(stockValues[index][0][stockValues[index][0].length - 1])
  );
  if (!canBuy >= 1) {
    return;
  }
  if (canBuy >= buyNum) {
    money -=
      buyNum * Number(stockValues[index][0][stockValues[index][0].length - 1]);
    stockValues[index][3] = Number(stockValues[index][3]);
    stockValues[index][3] += buyNum;
  }
  if (canBuy < buyNum) {
    money -=
      canBuy * Number(stockValues[index][0][stockValues[index][0].length - 1]);
    stockValues[index][3] = Number(stockValues[index][3]);
    stockValues[index][3] += canBuy;
  }
  const date = new Date();
  if (
    sessionStorage &&
    (date.getTime() - Number(sessionStorage.startTime)) / (2 * 3600 * 1000) > 1
  ) {
    location.reload();
  }
  if (loggedIn) {
    await fetch("/buy-stock", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      }),
      body: JSON.stringify({
        name: stockValues[index][2].toLowerCase(),
        amount: buyNum,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.money) {
          alertBox(data);
          money = ogmoney;
          stockValues[index][3] = ogamount;
        } else {
          money = Number(data.money);
        }
      });
  } else {
    setCookie("Money", money);
    setCookie(stockValues[index][2], stockValues[index][3]);
  }
  updateStockDescription(index);
  updateMoney();
}
async function sellStock(index) {
  let ogmoney = money;
  let ogamount = stockValues[index][3];
  canSell = stockValues[index][3];
  if (!canSell >= 1) {
    return;
  }
  if (canSell >= sellNum) {
    money +=
      sellNum * Number(stockValues[index][0][stockValues[index][0].length - 1]);
    stockValues[index][3] = Number(stockValues[index][3]);
    stockValues[index][3] -= sellNum;
  }
  if (canSell < sellNum) {
    money +=
      canSell * Number(stockValues[index][0][stockValues[index][0].length - 1]);
    stockValues[index][3] = Number(stockValues[index][3]);
    stockValues[index][3] -= canSell;
  }
  const date = new Date();
  if (
    sessionStorage &&
    (date.getTime() - Number(sessionStorage.startTime)) / (2 * 3600 * 1000) > 1
  ) {
    location.reload();
  }
  if (loggedIn) {
    await fetch("/sell-stock", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      }),
      body: JSON.stringify({
        username: sessionStorage.username,
        name: stockValues[index][2].toLowerCase(),
        amount: sellNum,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.money) {
          alertBox(data);
          money = ogmoney;
          stockValues[index][3] = ogamount;
        } else {
          money = Number(data.money);
        }
      });
  } else {
    setCookie("Money", money);
    setCookie(stockValues[index][2], stockValues[index][3]);
  }
  updateStockDescription(index);
  updateMoney();
}
function setCookie(name, value) {
  document.cookie = `${name}=${value}; expires=Sun,1 January 2040 12:00:00 UTC;`;
}
function deleteCookie(name) {
  setCookie(name, null, null);
}
function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = 0;
  cArray.forEach((element) => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
}
async function prepareStockImages() {
  for (item of [...stockValues].reverse()) {
    if (item[1] == true) {
      price = 0;
      imageName = "images/" + item[2] + ".jpg";
      if (item[0][item[0].length - 1] != undefined) {
        price = item[0][item[0].length - 1];
      }
      if (price === 0) {
        continue;
      }
      drawStockImage(item[2], imageName, price);
      await sleep(10);
    }
  }
}
async function drawStockImage(name, imageName, price) {
  return new Promise((resolve) => {
    const img = new Image();
    img.id = name;
    img.src = imageName;
    img.onload = function () {
      context.drawImage(
        img,
        canvas.width - oneTick - 20,
        canvas.height - (price * (canvas.height / stockMax) + 20)
      );
      resolve("resolved");
    };
  });
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const alertBox = (data) => {
  const alertContainer = document.querySelector(".alert-box");
  const alertMsg = document.querySelector(".alert");
  alertMsg.innerHTML = data;

  alertContainer.style.top = `50%`;
  setTimeout(() => {
    alertContainer.style.top = null;
  }, 5000);
};
function drawStocks() {
  document
    .querySelectorAll(".chapterNums")
    .forEach((element, i) => (element.textContent = lastChapter + i));
  for (let item of stockValues) {
    if (item[1] == true) {
      for (let index = 0; index < item[0].length; index++) {
        context.beginPath();
        context.lineWidth = 5;
        value = item[0][index];
        if (item[0][index + 1] < value) {
          context.strokeStyle = "red";
        }
        if (item[0][index + 1] > value) {
          context.strokeStyle = "green";
        }
        //Maybe change in future
        if (item[0][index + 1] == value) {
          context.strokeStyle = "black";
        }
        context.moveTo(
          index * oneTick,
          canvas.height - (canvas.height / stockMax) * value
        );
        context.lineTo(
          (index + 1) * oneTick,
          canvas.height - (canvas.height / stockMax) * item[0][index + 1]
        );
        context.stroke();
      }
    }
  }
}
const validateData = (data) => {
  sessionStorage.money = Number(data.money);
  sessionStorage.sukuna = data.sukuna;
  sessionStorage.yuta = data.yuta;
  sessionStorage.kenjaku = data.kenjaku;
  sessionStorage.todo = data.todo;
  sessionStorage.gojo = data.gojo;
  sessionStorage.nobara = data.nobara;
  sessionStorage.megumi = data.megumi;
  sessionStorage.kashimo = data.kashimo;
  sessionStorage.maki = data.maki;
  sessionStorage.hakari = data.hakari;
  sessionStorage.uraume = data.uraume;
  sessionStorage.higuruma = data.higuruma;
  sessionStorage.yuji = data.yuji;
  sessionStorage.takaba = data.takaba;
  sessionStorage.uiui = data.uiui;
  sessionStorage.ino = data.ino;
  sessionStorage.kusakabe = data.kusakabe;
  sessionStorage.miguel = data.miguel;
  sessionStorage.choso = data.choso;
  sessionStorage.miwa = data.miwa;
  sessionStorage.mechamaru = data.mechamaru;
  sessionStorage.meimei = data.meimei;
  sessionStorage.shoko = data.shoko;
};
