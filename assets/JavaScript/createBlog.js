const form = document.getElementById("form");

form.addEventListener('submit',e => {
    // e.preventDefault

    
    //collecting data from Form
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    //converting the data into json
    const jsonData = JSON.stringify(data);

    //and posting the data
    fetch(`http://localhost:3000/blogs`,{
        // changing the method to post ,because
        // the default mehtod in fetch is GET
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : jsonData
    })
    .then(res => res.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))
})




