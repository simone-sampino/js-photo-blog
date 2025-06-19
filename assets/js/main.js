const rowEl = document.querySelector(".row");

const endPointUrl = "https://lanciweb.github.io/demo/api/pictures/";

fetch(endPointUrl)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);

    for (let i = 0; i < data.length; i++) {
      const card = data[i];
      //   console.log(card);
      const { title, date, url } = card;
      console.log(title, date, url);

      // add card markup in html from js
      const cardMarkup = `
        <div class="col col-sm-12 col-md-6 col-lg-4">
            <div class="card">
                <img class="pin" src="./assets/img/pin.svg" alt="">
                <img class="card-img" src="${url}" alt="">
                <div class="card-body">
                  <div>${date}</div>
                  <div class="title">${title}</div>
                </div>
            </div>
        </div>
      `;

      rowEl.insertAdjacentHTML("beforeend", cardMarkup);
    }

    // add modal markup in html from js
    const modalMarkup = `
      <div class="overlay d-none">
          <div class="modal">
              <img src="./assets/img/grogu.jpg" alt="">
              <button><i class="fa-solid fa-xmark fa-3x"></i></button>
          </div>
      </div>
      `;

    rowEl.insertAdjacentHTML("afterend", modalMarkup);

    const overlayEl = document.querySelector(".overlay");
    const cardImgEl = document.querySelector(".card-img");
    console.log(cardImgEl);

    // add event listener to show overlay
    cardImgEl.addEventListener("click", () => {
      overlayEl.classList.remove("d-none");
    });
  });
