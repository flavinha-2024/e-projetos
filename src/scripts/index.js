let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main')

toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active")
}



async function user(){
    const response = await fetch('https://doit-production.up.railway.app/person')
    return await response.json()
}

function getUserprofile(){
    user().then(userData => {
        let userInfo = ""
        userData.forEach(item => {
           userInfo += `<div class="data">
                     <img src="avatar" alt="foto do perfil do usuário">
                               <h1>${item.name}</h1>
                               <p>${item.age}</p>
                            </div>`
                        })
    
        document.querySelector('.profile-data').innerHTML = userInfo
        
    })
}

getUserprofile()