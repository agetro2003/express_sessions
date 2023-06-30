let form = document.getElementById("loginForm")
form.addEventListener("submit", async(e)=>{
    e.preventDefault()
    let data  = {
        cla: "SessionHandler",
        method: "login",
        email: form.email.value,
        pass: form.pass.value
    }
    const response = await fetch(`http://localhost:3000/ref`, {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    })
    console.log(response.status)
    if (response.status == 200) {
        window.location.href = "http://localhost:3000/yamete";        
    }
})


