console.log("js linked");

// preparo le variabili
const rowEl = document.querySelector(".container > .row");
const myCardEl = document.querySelector(".my_card");
const myCardTopEl = document.querySelector(".my_card_top");
const myCardImgsEl = document.querySelectorAll(".picture");
const myCardBottomEl = document.querySelector(".my_card_bottom");
const overlayEl = document.getElementById("overlay");
const overlayimgEl = document.querySelector("#overlay > img");
const overlayBtnEl = document.querySelector("#overlay > button");
const overlayDivEl = document.getElementById("closing_div")

// usiamo axios e facciamo una chiamata all’endpoint di JSON Placeholder
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        const albums = response.data;
        console.log(albums);

        let albumsMarkup = "";

        // recupero le proprietà e i valori che mi servono da ogni oggetto con la destrutturazione
        albums.forEach(album => {
            let { id, title, thumbnailUrl, url } = album;

            // prima lettera del title maiuscola
            // console.log(album.title);
            firstChar = title.charAt(0);
            otherChars = title.substring(1);
            title = `${firstChar.toUpperCase()}${otherChars}`;

            // uso il template literal per inserire i valori
            const markup = `
            <div class="col">
                    <div class="my_card bg-light p-3 d-flex flex-column mx-auto">
                        <div class="my_card_top">
                            <img class="pin" src="./assets/img/pin.svg" alt="pin">
                            <img class="picture" src="${url}" alt="random picture">
                        </div>
                        <div class="my_card_bottom pt-1">
                            <p>${title}</p>
                        </div>
                    </div>
                </div>
            `
            albumsMarkup += markup;
        });

        rowEl.innerHTML = albumsMarkup;

        console.log(myCardImgsEl);


    })
    .catch(err => console.error(err));


// apertura overlay
console.log(myCardImgsEl);

myCardImgsEl.forEach(img => {
    img.addEventListener("click", () => {
        overlayEl.classList.remove("d-none");
        console.log(overlayimgEl.innerHTML);
        
        overlayimgEl.innerHTML = img.innerHTML;
    })
});



// chiusura overlay cliccando fouri dall'immagine
overlayDivEl.addEventListener("click", () => {
    overlayEl.classList.add("d-none");
})

// chiusura overlay cliccando il bottone
overlayBtnEl.addEventListener("click", () => {
    overlayEl.classList.add("d-none");
})