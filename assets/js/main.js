console.log("js linked");

// preparo le variabili
const rowEl = document.querySelector(".container > .row");
const myCardEl = document.querySelector(".my_card");
const myCardTopEl = document.querySelector(".my_card_top");
const myCardImgEl = document.getElementById("picture");
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
            const { id, title, thumbnailUrl, url } = album;

            // uso il template literal per inserire i valori
            const markup = `
            <div class="col">
                    <div class="my_card bg-light p-3 d-flex flex-column mx-auto">
                        <div class="my_card_top">
                            <img id="pin" src="./assets/img/pin.svg" alt="pin">
                            <img id="picture" src="${url}" alt="random picture">
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

        // 
        
    })
    .catch(err => console.error(err));


// apertura overlay
/*
myCardImgEl.addEventListener("click", () => {
    overlayEl.classList.remove("d-none");
})
*/

// chiusura overlay
overlayDivEl.addEventListener("click", () => {
    overlayEl.classList.add("d-none");
})

overlayBtnEl.addEventListener("click", () => {
    overlayEl.classList.add("d-none");
})