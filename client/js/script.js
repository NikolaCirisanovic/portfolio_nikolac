window.onload = () => {
    axios.get('http://localhost:3300/api/products').then((res) => {
        // Target the place in the DOM where I'm going to insert the data from API
        let ul = document.getElementById('users')
        let users = res.data
        // Logging to the console to see the data structure
        console.log(users)
        // Looping through each person and adding a bootstrap card for each person. Given name, email, city and zipcode
        users.forEach(u => {
            ul.insertAdjacentHTML("afterbegin", `<div class="card" style="width: 18rem; display:inline-block">
            <img class="card-img-top" src="${u.image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${u.name}</h5>
              <p class="card-text">${u.description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${u.price}</li>
              <li class="list-group-item">${u.color}</li>
            </ul>
          </div>`)
        });
    })

}

