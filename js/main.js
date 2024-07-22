
    fetch("https://meowfacts.herokuapp.com/")
    .then(res => res.json())
    .then(data => {

        document.querySelector('p').innerText = data.data[0]
    })



