        document.addEventListener('DOMContentLoaded', function() {
            // Fecha del cumpleaños
            const targetDate = new Date('2024-10-12T00:00:00').getTime();

            // Actualiza la cuenta regresiva cada segundo
            const countdown = setInterval(function() {
                const now = new Date().getTime();
                const distance = targetDate - now;

                // Cálculos de tiempo
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Mostrar el resultado
                document.getElementById("days").textContent = days;
                document.getElementById("hours").textContent = hours;
                document.getElementById("minutes").textContent = minutes;
                document.getElementById("seconds").textContent = seconds;

                // Si la cuenta regresiva termina
                if (distance < 0) {
                    clearInterval(countdown);
                    document.getElementById("days").textContent = "0";
                    document.getElementById("hours").textContent = "0";
                    document.getElementById("minutes").textContent = "0";
                    document.getElementById("seconds").textContent = "0";
                    document.getElementById("clock").innerHTML = "¡Feliz Cumpleaños!";
                }
            }, 1000);
        });
