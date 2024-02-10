const submitBtn = document.querySelector("#submitBtn");
const mainJoke = document.querySelector("#mainJoke");

const generateJokes = async function () {
  try {
    const res = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    );
    const jokes = res.data.joke;
    return jokes;
  } catch (e) {
    console.log("Error fetching joke", e);
    return "no jokes available atm :(";
  }
};

submitBtn.addEventListener("click", function (e) {
  mainJoke.style.opacity = "0";

  setTimeout(async function () {
    mainJoke.textContent = await generateJokes();
    mainJoke.style.opacity = "1";
  }, 300); // Delay in milliseconds, should match transition duration
});
