/*******************************/
/*********** TASK 2 ***********/
/******** YUVAL DAVID *********/
/******************************/


$(document).ready(() => {

    /* Get request for ALL the countries */
    $.get("https://restcountries.eu/rest/v2/all", (allCountries) => {
        $("#all-btn").click(() => {

            /* נרוקן את הדף  */
            $("#big-container").empty();

            for (let country of allCountries) {
                $("#big-container").append(`
        <div class="countryDiv" >
            <div class="country-details" >
                <h2> ${country.name} </h2>
                <div> <span> Top Level Domain </span>: ${country.topLevelDomain} </div>
                <div> <span> Capital </span>: ${country.capital} </div>
                <div> <span> Currencies </span>:
                    <div> code: ${country.currencies[0].code} </div>
                    <div> name: ${country.currencies[0].name} </div>
                    <div> symbol: ${country.currencies[0].symbol} </div>

                </div>
            <div/>

            <div class="container-flag" >
                <img src="${country.flag}" alt="${country.name} Flag" width="100px" height="70px"/>
            </div>
        </div>

        `)
            };


        });



        /* Search */
        $("#search-btn").click(() => {
            $.get(`https://restcountries.eu/rest/v2/name/${$("#searchInput").val()}`, (searchResults) => {

                /* נרוקן את הדף  */
                $("#big-container").empty();

                for (let result of searchResults) {
                    $("#big-container").append(`
                        <div class="countryDiv" >
                            <div class="country-details">
                                <h2> <span> Name</span>: ${result.name} </h2>
                                <h3> <span> Top Level Domain </span>: ${result.topLevelDomain} </h3>
                                <h3> <span> Capital </span>: ${result.capital} </h3>
                                <h4> <span> Currencies </span>:
                                    <div> code: ${result.currencies[0].code} </div>
                                    <div> name: ${result.currencies[0].name} </div>
                                    <div> symbol: ${result.currencies[0].symbol} </div>

                                </h4>
                
                            <div/>

                            <div class="container-flag" >
                                <img src="${result.flag}" alt="${result.name} Flag" width="200px" height="150px"/>
                            </div>
                        </div>
                    `)


                };

            });
        });


        //Get the button:
        toTopBtn = document.getElementById("top-btn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                toTopBtn.style.display = "block";
            } else {
                toTopBtn.style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        $("#top-btn").click(() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })


    });


});


























