window.onload = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        // Target the place in the DOM where I'm going to insert the data from API
        let ul = document.getElementById('users')
        let users = res.data
        // Logging to the console to see the data structure
        console.log(users)
        // Looping through each person and adding a bootstrap card for each person. Given name, email, city and zipcode
        users.forEach(u => {
            ul.insertAdjacentHTML("afterbegin", `<div class="card" style="width: 18rem; margin:20px; display: inline-block">
            <div class="card-header"> 
              Name: ${u.name}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">E-Mail: ${u.email}</li>
              <li class="list-group-item">City: ${u.address.city}</li>
              <li class="list-group-item">Zipcode: ${u.address.zipcode}</li>
            </ul>
          </div>`)
        });
    })

}