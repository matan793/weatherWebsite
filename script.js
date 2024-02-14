fetch('https://countriesnow.space/api/v0.1/countries/info?returns=flag')
.then(response =>{
    return response.json();
}).then(res=>{
    const myselect  = document.getElementById('mySelect')
    res.data.sort(function (a, b) {
        if (a.name > b.name)
        {
            return 1;
        }
        else if(a.name < b.name)
        {
            return -1;
        }
        else{
            return 0;
        }
    })
    res.data.forEach(country => {
        const option = document.createElement("option");
        option.value = country.name;
        
        option.text = country.name;
        myselect.appendChild(option);
    });
})

function getcountries(value) {
    //&nbsp;
    console.log(value)
    value = value.replace(' ', '&nbps;')
    console.log(value)
    const myselect  = document.getElementById('mySelect2')
    myselect.innerHTML = ""
    fetch(`https://countriesnow.space/api/v0.1/countries/cities/q?country=${value}`)
    .then(response=>{
        return response.json();
    }).then(res=>{
        
        res.data.sort(function (a, b) {
            if (a.toLowerCase()  > b.toLowerCase())
            {
                return 1;
            }
            else if(a.toLowerCase() < b.toLowerCase())
            {
                return -1;
            }
            else{
                return 0;
            }
        })
        res.data.forEach(city => {
            console.log(city)
            const option = document.createElement("option");
            option.value = city
            
            option.text = city;
            myselect.appendChild(option);
        });
    })
}

function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

//   fetchData('')
//   .then(data => {
//     console.log('data:', data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });