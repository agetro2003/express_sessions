let form = document.getElementById("loginForm")
form.addEventListener("submit", async(e)=>{
    e.preventDefault()
    let data  = {
        nombre: form.user.value,
        email: form.email.value,
        password: form.pass.value
    }
    await fetch("")
})


