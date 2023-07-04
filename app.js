console.log("Connected");

axios.get(`https://worldtimeapi.org/api/ip`)
    .then((res) => {
        console.log(res);
        console.log(res.data.abbreviation);
        console.log(res.data.day_of_week);
        console.log(res.data.day_of_year);
        console.log(res.data.week_number);
        console.log(res.data.timezone);

        const abbreviation = document.querySelector(".time p");
        console.log(abbreviation);
        abbreviation.textContent = res.data.abbreviation;

        const currentTZ = document.querySelector(".currentTZ h4");
        currentTZ.textContent = res.data.timezone;

        const doy = document.querySelector(".doy h4");
        doy.textContent = res.data.day_of_year;

        const dow = document.querySelector(".dow h4");
        dow.textContent = res.data.day_of_week + 1;

        const we = document.querySelector(".we h4");
        dow.we = res.data.week_number;

        // *******************************************************************

        const datetime = res.data.datetime.slice(11, 16)
        console.log("Time: ", datetime);

        const time = document.querySelector(".time h1");
        time.textContent = datetime;

        const greeting = document.querySelector("#greeting");
        const greetingTime = Number(datetime.slice(0, 2));

        if (greetingTime > 0 && greetingTime < 15) {
            greeting.textContent = "GOOD MORNING";
        }
        else {
            greeting.textContent = "GOOD EVENING";
        }
    })

// *******************************************************************

axios.get('https://ipapi.co/json/')
    .then((res) => {
        console.log(res);
        console.log("City: ", res.data.city);
        console.log("Country: ", res.data.country);

        const city = document.querySelector("#city");
        console.log(city);
        city.textContent = res.data.city;

        const country = document.querySelector("#country");
        console.log(country);
        country.textContent = res.data.country;


        const refresh = document.querySelector("#quoteRefresh");
        refresh.addEventListener("click", () => {
            console.log("CLICKED REFRESH");
            location.reload()
        })

    })

// *******************************************************************

axios.get(`https://api.quotable.io/quotes/random`)
    .then((res) => {
        // console.log(res.data[0].content);
        // console.log(res.data[0].author);

        const quotePara = document.querySelector("#quotePara");
        // console.log(quotePara);
        quotePara.textContent = res.data[0].content;

        const quoteAuthor = document.querySelector("#quoteAuthor");
        // console.log(quoteAuthor);
        quoteAuthor.textContent = res.data[0].author;
    })

// *******************************************************************

const button = document.querySelector(".moreButton")
const more = document.querySelector(".more");
const buttonText = document.querySelector("#buttonText");
const arrowImg = document.querySelector(".downArrowContainer img");

button.addEventListener("click", () => {
    more.classList.toggle("moreNone");

    if (more.classList.contains("moreNone")) {
        buttonText.textContent = "MORE";
        arrowImg.src = "Assets/icon-arrow-down.svg";
    }
    else {
        function autoScroll() {
            window.scrollTo(0, 460);
        }

        autoScroll();

        buttonText.textContent = "LESS";
        arrowImg.src = "Assets/icon-arrow-up.svg";
    }
})






