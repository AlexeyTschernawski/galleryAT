
        // Load the header template
        
        fetch('template2.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
            });

        
