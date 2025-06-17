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

      const cardMarkup = `
        <div class="col-4">
            <div class="card">
                <img class="pin" src="./assets/img/pin.svg" alt="">
                <img src="${url}" alt="">
                <div class="card-body">
                    <div>${title}</div>
                    <div>${date}</div>
                </div>
            </div>
        </div>
      `;

      rowEl.insertAdjacentHTML("beforeend", cardMarkup);
    }
  });
