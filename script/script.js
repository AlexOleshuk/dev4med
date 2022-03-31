window.addEventListener("load", event => {

    var swiperWrapper = document.querySelector('.swiper-wrapper');

    /* The Team */
    var team = [{
            name: "Denis Zakunov",
            role: "Full Stack JS Development",
            desc: "Designing: JavaScript, Node.js, React Native, MySQL, HTML5, CSS3,(MongoDB, Redux).",
            photo: "addons/img/team/IMG_2.jpg",
        },
        {
            name: "Oleg Ignatovich",
            role: "Project initiator",
            desc: "Founder of 9 companies (City-Bel LLC, City-Bel Techno LLC, AMSI Techno LLC, CITY-PRIVOD LLC, PromLogistika LLC, AMSI Techno LLC in Russia, AMSI Techno LLP in Kazakhstan, Gerhard LLC, Immunity 365 Medical Centre LLC).",
            photo: "addons/img/team/IMG_1.jpg",
        },       
        {
            name: "Vitaly Belotsky",
            role: "Developer",
            desc: "Designing: Altium Designer, Solid Works, LTSpice; microcontrollers: AVR, STM8, STM32; programming languages: C (CMSIS), MetaQuotes Language 4, Python3 (Pandas, Sklearn, Keras).",
            photo: "addons/img/team/IMG_4.jpg",
        },
        {
            name: "Andrei Zakreuski",
            role: "Back-End Developer",
            desc: "Python, matplotlib, numpy, Pandas, tkinter, ttk, SQL, MySQL, FastApi",
            photo: "addons/img/team/IMG_3.jpg",
        },
        {
            name: "Anastasiya Troyakova",
            role: "Market manager",
            desc: "Scientific articles in economic law, psychology, the winner of Republican Olympiad in field of innovation, education: teacher training college, International university MITSO",
            photo: "addons/img/team/IMG_5.jpg",

        },
        {
            name: "Vsevolod Igumnov",
            role: "Development",
            desc: "Designing: C, Assembler. Other: DSP, Matlab, PLC, Altium Designer, Zuken E3, Mach3; microcontrollers: AVR, PIC18, STM32.",
            photo: "addons/img/team/IMG-6.jpg",
        },
    ];

    /* Social Icons */
    var icons = [{
        iWebsite: "https://rafaelalucas.com/dailyui/6/assets/link.svg",
        iEmail: "https://rafaelalucas.com/dailyui/6/assets/email.svg",
        iLinkedin: "https://rafaelalucas.com/dailyui/6/assets/linkedin.svg",
        iDribbble: "https://rafaelalucas.com/dailyui/6/assets/dribbble.svg",
    }];



    /* Function to populate the team members */
    function addTeam() {
        for (let i = 0; i < team.length; i++) {

            /* Variables for the team */
            var name = team[i].name,
                role = team[i].role,
                desc = team[i].desc,
                photo = team[i].photo

            /* Template for the Team Cards */
            var template = `<div class="swiper-slide">
            <div class="card">
                <span class="bg"></span>
                <span class="more"></span>
                <figure class="photo"><img src="${photo}"></figure>
                <article class="text">
                    <p class="name">${name}</p>
                    <p class="role">${role}</p>
                    <p class="desc">${desc}</p>
                </article>
            </div>
        </div>`;

            swiperWrapper.insertAdjacentHTML('beforeend', template);
        }
    };


    addTeam();



    /* Swiper Settings */

    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        centeredSlides: false,
        speed: 800,
        slidesPerView: 3,
        spaceBetween: 40,
        threshold: 5,


        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1180: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: false,
            },
            799: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                loop: true,
            },
        }
    });

    /* Show More */

    var btnShow = document.querySelectorAll('.more');



    btnShow.forEach(function (el) {
        el.addEventListener('click', showMore);
    });

    function showMore(event) {
        var card = event.target.closest(".swiper-slide");

        if (card.classList.contains('show-more')) {
            card.classList.remove('show-more');
        } else {
            card.classList.add('show-more')
        }

    }


    /* Social Hover */
    var icon = document.querySelectorAll('.icon');

    icon.forEach(function (el) {
        el.addEventListener("mouseenter", followCursor);

    });


    function followCursor(event) {
        var pointer = event.currentTarget.closest(".swiper-slide").querySelector('.pointer'),
            index = event.currentTarget.dataset.index,
            sizeIcon = (60 * index) + 25;

        pointer.style.transform = `translateX(${sizeIcon}px)`;
    }


    /* end */
});