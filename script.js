// =====================================================
// OPEN INVITATION
// =====================================================

const openButton =
    document.getElementById("openInvitation");

const cover =
    document.getElementById("cover");

const mainContent =
    document.getElementById("mainContent");

const weddingMusic =
    document.getElementById("weddingMusic");

const musicToggle =
    document.getElementById("musicToggle");


openButton.addEventListener("click", function () {

    cover.style.transition =
        "opacity 1s ease, transform 1s ease";

    cover.style.opacity =
        "0";

    cover.style.transform =
        "scale(1.04)";


    setTimeout(() => {

        cover.style.display =
            "none";

        mainContent.style.display =
            "block";

        document.body.style.overflowY =
            "auto";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        activateReveal();

        weddingMusic.volume = 0.35;

weddingMusic.play()
    .then(() => {

        musicToggle.classList.add("show");
        musicToggle.classList.add("playing");

    })
    .catch(() => {

        musicToggle.classList.add("show");

    });

    }, 1000);

});


// =====================================================
// EVENT DATES
// =====================================================

const akadDate =
    new Date(
        "October 10, 2026 19:30:00 GMT+0700"
    ).getTime();


const receptionDate =
    new Date(
        "October 12, 2026 09:00:00 GMT+0700"
    ).getTime();


const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");

const countdownLabel =
    document.getElementById("countdownLabel");



function updateCountdown() {

    const now =
        Date.now();


    let targetDate;
    let label;


    if (now < akadDate) {

        targetDate =
            akadDate;

        label =
            "Menuju Akad Nikah";

    }

    else if (now < receptionDate) {

        targetDate =
            receptionDate;

        label =
            "Menuju Resepsi";

    }

    else {

        countdownLabel.innerText =
            "Selamat Menempuh Hidup Baru";

        daysElement.innerText =
            "00";

        hoursElement.innerText =
            "00";

        minutesElement.innerText =
            "00";

        secondsElement.innerText =
            "00";

        return;

    }


    countdownLabel.innerText =
        label;


    const distance =
        targetDate - now;


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    daysElement.innerText =
        String(days).padStart(2, "0");


    hoursElement.innerText =
        String(hours).padStart(2, "0");


    minutesElement.innerText =
        String(minutes).padStart(2, "0");


    secondsElement.innerText =
        String(seconds).padStart(2, "0");

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


// =====================================================
// SCROLL REVEAL
// =====================================================

function activateReveal() {

    const elements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("active");

                        }

                    }
                );

            },

            {
                threshold: 0.12
            }

        );


    elements.forEach(
        element => {

            observer.observe(element);

        }
    );

}


// =====================================================
// BACK TO TOP
// =====================================================

const backTop =
    document.getElementById("backTop");


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 600
        ) {

            backTop.classList
                .add("show");

        }

        else {

            backTop.classList
                .remove("show");

        }

    }
);


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);
// =====================================================
// MUSIC TOGGLE
// =====================================================

musicToggle.addEventListener(
    "click",
    function () {

        if (
            weddingMusic.paused
        ) {

            weddingMusic.play();

            musicToggle.classList.add(
                "playing"
            );

        } else {

            weddingMusic.pause();

            musicToggle.classList.remove(
                "playing"
            );

        }

    }
);