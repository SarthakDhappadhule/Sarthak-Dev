function createCard(title, cname, views, monthsold, duration, thumbnail) {

    let ViewNumber;

    if (views < 1000000) {
        ViewNumber = views / 1000 + "K";
    } else {
        ViewNumber = views / 1000000 + "M";
    }

    let html = `
    <div class="card">
        <div class="image">
            <img class="image2" src="${thumbnail}">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cname}. ${ViewNumber} views. ${monthsold} months ago</p>
        </div>
    </div>`;

    document.querySelector(".container").innerHTML += html;
}

createCard(
    "Minecraft But the Graphics is 4k",
    "Gaming with Sarthak",
    1000000,
    7,
    "31:16",
    "minecraft.png"
);

//document.querySelector(".image2").src = thumbnail; => line 14 we can write like this way also

createCard("GTA 6 Gameplay", "Gaming with Sarthak", 2500000, 2, "15:32", "gtavi.jpg");

createCard("Forza Horizon Gameplay", "Game khelo mast raho", 500000, 8, "45:20", "forza6.jpg");

createCard("ETS2 Gameplay", "Zebra gamerz", 120000, 1, "22:10", "ets2.jpg");