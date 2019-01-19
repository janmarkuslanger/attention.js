export const fadeIn = (element, callback) => {

    let counter = 0;
    const step = 4;

    const run = () => {
        if (counter >= 100) {
            window.cancelAnimationFrame(run);

            if (callback) {
                callback(element);
            }
        } else {

            counter += step;
            element.style.opacity = (counter / 100).toString();
            window.requestAnimationFrame(run);
        }

    };

    window.requestAnimationFrame(run);
};

export const fadeOut = (element, callback) => {

    let counter = 100;
    const step = 4;

    const run = () => {
        if (counter <= 0) {
            window.cancelAnimationFrame(run);

            if (callback) {
                callback(element);
            }
        } else {

            counter -= step;
            element.style.opacity = (counter / 100).toString();
            window.requestAnimationFrame(run);
        }

    };

    window.requestAnimationFrame(run);
};
