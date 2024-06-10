
<link rel="stylesheet" href="./1_page.css"></link>

        document.addEventListener("DOMContentLoaded", function() {
            const currentLocation = window.location.pathname.split("/").pop();
            const navLinks = document.querySelectorAll(".top-nav ul li a");

            navLinks.forEach(link => {
                if (link.getAttribute("href") === currentLocation) {
                    link.classList.add("active");
                    link.removeAttribute("href");
                }
            });

            document.getElementById("emailIcon").addEventListener("click", function() {
                document.getElementById("emailModal").style.display = "block";
            });

            document.querySelector(".close").addEventListener("click", function() {
                document.getElementById("emailModal").style.display = "none";
            });
        });
