
const form = document.getElementById("form");



form.addEventListener('submit',e => {
    e.preventDefault;
    
})

async function logIn(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const logInData = {
        email,
        password
    };
    
    try{
        const response = await fetch(`http://localhost:3000/users`);
        const data = await response.json();
        // console.log(data);
        const matchedUser = data.find(users => users.email === email && users.password === password );

        if(matchedUser) {
         window.location.href = "Blog.html"

        }
        else{
            document.getElementById("PswdHelpId").innerHTML = "*Invalid User Email or Password";
        }
    }
    catch(error){
        console.log(error)
    }
}



