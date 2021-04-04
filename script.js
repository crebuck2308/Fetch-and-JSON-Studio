window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(
            function(json) {
                console.log(json);
                

                function astronautTemplate(astronauts) {
                    return ` 
                    <div class = "astronaut">
                        <div class="bio">
                            <h3>${astronauts.firstName} ${astronauts.lastName}</h3>
                                <ul>
                                    <li> Hours in space: ${astronauts.hoursInSpace} </li>
                                    <li>Active: ${astronauts.active}</li>
                                    <li>Skills: ${astronauts.skills.join(', ')}</li>
                                </ul>
                        </div>       
                        <img class="avatar" src=${astronauts.picture}>
                    </div>
                    `

                }
                const groupOfAstronauts = document.getElementById("container").innerHTML =
                    `${json.map(astronautTemplate)}`
                    
            
                const footer = document.getElementById("footer")
                footer.innerHTML = `Number of astronauts displayed: ${json.length}` 
            })
       
   
    });

         
})
