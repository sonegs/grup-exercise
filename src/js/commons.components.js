export const fadeoutEffect = {
    effect: function(progress) {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
    },
    animate: function(options, element) {
        const start = new Date;
        const id = setInterval(function() {
            const timePassed = new Date - start;
            var progress = timePassed / options.duration;
            if (progress > 1) {
                progress = 1;
            }
            options.progress = progress;
            const delta = options.delta(progress);
            options.step(delta);
            if (progress == 1) {
                element.style.display = 'none';
                clearInterval(id);
            }
        }, options.delay || 10);
    },
    fadeOut: function(element, options) { // Tipo de efecto
        const to = 1;
        this.animate({ // Llamamos a la función de la propiedad animate, le pasamos sus opciones y el elemento a desaparecer
            duration: options.duration,
            delta: function(progress) {
                progress = this.progress;
                return fadeoutEffect.effect(progress);
            },
            step: function(delta) {
                element.style.opacity = to - delta;
            }
        }, element);
    },
};