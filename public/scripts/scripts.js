document.querySelector('#buttonMe').addEventListener('click', () => {
    //need to start the location kick off below on 69
    navigator.geolocation.getCurrentPosition((position) => {
        //store those lat and long in here
        const lat = position.coords.latitude
        const long = position.coords.longitude
        //fetch to the node server with those paramaters passed in 
        fetch(`/request?lat=${lat}&long=${long}`)
            //getting the info back from res.send on node server as a response
            .then((response) => response.json())
            .then((data) => {
                const WD = data.data.current.weather_descriptions
                const newWD =WD.toString().toLowerCase();
                document.querySelector('#h1-header').innerHTML=data.data.location.name+' '+data.data.location.region
                document.querySelector('#showInfo').innerHTML='Right now its ' + data.data.current.temperature + " and " +newWD
                document.querySelector('#newBox').style.display='block'
                document.querySelector('#buttonMe').style.display='none'
                document.querySelector('#buttonMe2').addEventListener('click', () => {
                   const newLocation = document.getElementById("newlocation").value
                   console.log(newLocation)
                   fetch(`/requestCity?city=${newLocation}`)
                   .then((response) => response.json())
                   .then((data) => {
                       console.log(data)
                       const WD = data.data.current.weather_descriptions
                    const newWD =WD.toString().toLowerCase();
                       document.querySelector('#h1-header').innerHTML=data.data.location.name+' '+data.data.location.region
                       document.querySelector('#showInfo').innerHTML='Right now its ' + data.data.current.temperature + " and " +newWD
                })
                

           
            });
    })

})
})


// document.querySelector('#doSomething').addEventListener('click', () => {
//     const data = {
//         key0: "value",  
//         key1: 12     
//       };
 
//   fetch("/dosomething", {
//   method: "POST",
//   headers: {
//     "content-type": "application/json"
//   },
//   body: JSON.stringify(data)
// }).then((response) => response.json())
// .then((data) => {
//     console.log(data.good)
// })

// })