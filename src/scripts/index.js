async function user(){
    const response = await fetch('https://doit-production.up.railway.app/person')
    return await response.json()
}

function getUserprofile(){
    user().then(userData => {
        let userInfo = ""
        userData.forEach(item => {
           userInfo += `<img src="avatar" alt="foto do perfil do usuário">
                            <div class="data">
                               <h1>${item.name}</h1>
                               <p>${item.age}</p>
                            </div>`
                        })
    
        document.querySelector('.profile-data').innerHTML = userInfo
        
    })
}

getUserprofile()