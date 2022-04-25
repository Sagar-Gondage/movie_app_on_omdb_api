// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amt = JSON.parse(localStorage.getItem("amount")) || 0;
document.getElementById("wallet").textContent = amt;

const inp = document.getElementById("search");
const url = `https://www.omdbapi.com/?s=${inp.value}&apikey=c286eb81`;

let id;
function debounce(main, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    main();
  }, delay);
}

async function main() {
  let data = await searchMovies();
  if (data == undefined) {
    return false;
  } else {
    // console.log(data)
    appendMovies(data);
  }
}

async function searchMovies() {
  try {
    // console.log(inp.value)
    // console.log(`https://www.omdbapi.com/?s=${inp.value}&apikey=c286eb81}`)
    let res = await fetch(
      `https://www.omdbapi.com/?s=${inp.value}&apikey=c286eb81`
    );
    let data = await res.json();
    // console.log(data)
    return data.Search;
  } catch (err) {
    console.log(err);
  }
}

function appendMovies(data) {
  data.map(function (elem) {
    let box = document.createElement("div");
    box.setAttribute("id", "box")

    let image = document.createElement("img");
    image.src = elem.Poster;

    let title = document.createElement("h3");
    title.textContent = elem.Title;

    let btn = document.createElement("button");
    btn.textContent = "Book Now";
    btn.setAttribute("class", "book_now")
    btn.addEventListener("click", function () {
      add_Now(elem);
    });

    box.append(image, title, btn);

    document.getElementById("movies").append(box);
    // console.log(elem)
  });
}

function add_Now(elem) {
  console.log(elem.Title);
  console.log(elem.Poster)
  let arr = [];

  let obj = {
    title: elem.Title,
    Poster: elem.Poster,
  };
  arr.push(obj);
  localStorage.setItem("movie", JSON.stringify(arr));
  window.location.href = "checkout.html";
}
