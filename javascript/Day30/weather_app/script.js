    document.querySelector('button').addEventListener('click', ()=>{
        let city = document.querySelector('.inp').value;


        function update(data){
            document.getElementById('result').innerHTML = data.current.temp_c + "°C";
        }
        // console.log(city);
        const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=b075886c79da4bb0ba254338262508&q=${city}&aqi=no`)
        .then(res=>res.json())
        .then(data=>update(data))
        .catch(err=>document.getElementById('result').innerHTML = "Error has occured")
        

    })