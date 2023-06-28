let form = document.getElementById("loginForm")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let data  = {
        nombre: form.user.value,
        email: form.email.value,
        password: form.pass.value
    }
    alert(JSON.stringify(data))
})


