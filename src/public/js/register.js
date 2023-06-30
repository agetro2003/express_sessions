let form = document.getElementById("loginForm")
form.addEventListener("submit", async(e)=>{
    e.preventDefault()
    let data  = {
        nombre: form.user.value,
        email: form.email.value,
        pass: form.pass.value
    }
    console.log("data", data)
    const response = await fetch(`http://localhost:3000/register`, {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    })

    console.log(response)
})

