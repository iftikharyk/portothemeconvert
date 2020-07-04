$(document).ready(function () {
    console.log("Website Loaded!");

    // var num = 200; //number of pixels before modifying styles

    // $(window).bind('scroll', function () {
    //     if ($(window).scrollTop() > num) {
    //         $('.menu').addClass('fixed');
    //     } else {
    //         $('.menu').removeClass('fixed');
    //     }
    // });

    function counter() {
        const counters = document.getElementsByClassName('counter');
        const speed = 200;

        console.log(counters);

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counters.getAttribute('data-target');
                const count = +counters.innerText;

                // Lower inc to slow or higher to slow
                const inc = target / speed;

                console.log("inc", inc);
                console.log("count", count);

                // Check if target is reached
                if (count < target) {
                    // Add inc to count and output in counter
                    counter.innerText = count + inc;

                    // Call function every ms
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            }

            updateCount();
        });
    }

    // counter();
});