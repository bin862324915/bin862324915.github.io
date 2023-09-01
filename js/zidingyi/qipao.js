function qipao() {
    $('#background').circleMagic({
        radius: 10,
        density: .2,
        color: 'rgba(255,255,255,.4)',
        clearOffset: 0.99
    });
}

(function($) {
    $.fn.circleMagic = function(options) {
        var defaults = { 
            color: "rgba(255,0,0,.5)", 
            radius: 10, 
            density: .3, 
            clearOffset: .2 
        };
        var settings = $.extend({}, defaults, options);
        var canvas = $('<canvas>').attr({ width: this.width(), height: this.height() }).prependTo(this);
        var context = canvas[0].getContext('2d');
        var particles = [];

        this.css('background', 'transparent');

        for (var i = 0; i < settings.density * this.width() * this.height(); i++) {
            var x = Math.random() * this.width(),
                y = Math.random() * this.height(),
                color = settings.color;
                Particle = { x: x, y: y, color: color };
            particles.push(Particle);
        }

        function drawParticles() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.globalCompositeOperation = 'destination-out';
            for (var i = 0; i < particles.length; i++) {
                context.arc(particles[i].x, particles[i].y, settings.radius, 0, Math.PI * 2, false);
                context.fillStyle = particles[i].color;
                context.fill();
            }
        }

        this.on('scroll', function() {
            drawParticles();
        });
    };
}(jQuery));