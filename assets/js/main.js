console.log("js linked");

const rowEl = document.querySelector(".container > .row");
const myCardEl = document.querySelector(".my_card");
const myCardTopEl = document.querySelector(".my_card_top");
const myCardBottomEl = document.querySelector(".my_card_bottom");


axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        const albums = response.data;
        console.log(albums);

        let albumsMarkup = "";

        albums.forEach(album => {
            const { id, title, thumbnailUrl, url } = album;

            const markup = `
            <div class="col">
                    <div class="my_card bg-light p-3 d-flex flex-column mx-auto">
                        <div class="my_card_top">
                            <img id="pin" src="./assets/img/pin.svg" alt="pin">
                            <img src="${url}" alt="random picture">
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