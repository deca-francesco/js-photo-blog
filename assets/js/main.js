console.log("js linked");

// preparo le variabili
const rowEl = document.querySelector(".container > .row");
const myCardEl = document.querySelector(".my_card");
const myCardTopEl = document.querySelector(".my_card_top");
const myCardBottomEl = document.querySelector(".my_card_bottom");
const overlayEl = document.getElementById("overlay");
const overlayimgEl = document.querySelector("#overlay > img");
const overlayBtnEl = document.querySelector("#overlay > button");

// usiamo axios e facciamo una chiamata all’endpoint di JSON Placeholder
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        const albums = response.data;
        console.log(albums);

        let albumsMarkup = "";

        // recupero le proprietà e i valori che mi servono da ogni oggetto con la destrutturazione
        albums.forEach(album => {
            const { id, title, thumbnailUrl, url } = album;

            // uso il template literal per inserire i valori
            const markup = `
            <div class="col">
                    <div class="my_card bg-light p-3 d-flex flex-column mx-auto">
                        <div class="my_card_top">
                            <img id="pin" src="./assets/img/pin.svg" alt="pin">
                            <a href="#"><img src="${url}" alt="random picture"></a>
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

    })
    .catch(err => console.error(err));

// chiusura overlay
overlayEl.addEventListener("click", () => {
    // overlayEl.classList.add("d-none");       // chiude anche se clicco sull'immagine
})
overlayBtnEl.addEventListener("click", () => {
    overlayEl.classList.add("d-none");
})