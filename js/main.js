(() => {
const country = document.querySelectorAll('.data-ref');
    
    function getData(){
    
         let targetURL = `includes/connect.php?region_name=${this.id}`; //whenever we click on a thumbnail, pass its id to the php query
    
            fetch (targetURL) // go get the data and bring it back! good doggy
            .then(res => res.json()) //turn the result into a plain JS object
            .then(data => {
                console.log(data);
                //run a function to parse our data
                showCountryData(data[0]);
            }) //lets see what we got
            .catch(function(error) {
                console.log(error); //if anything broke, log it to the console
            });
        }
    
        function showCountryData(data) {
            debugger;
            //parse the DB info and put it where it needs to go
            const{ primary_ed, secondary_ed, YA_literacy, unemployment } = data; //destructuring assignment => MDN JS destructuring
    
            //grab the elements we need, and populate them with data
            document.querySelector('.primary_ed').textContent = primary_ed
            document.querySelector('.secondary_ed').textContent = secondary_ed
            document.querySelector('.ya_lit').textContent = YA_literacy
            document.querySelector('.unemployment').textContent = unemployment
        }
    
        country.forEach(country => country.addEventListener("click", getData));
    
        getData(); //trigger the getData function
    })();
    