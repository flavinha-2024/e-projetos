let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main')

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active")
}



async function user() {
    const response = await fetch('https://doit-backend-4lzz.onrender.com/person');
    // console.log(await response.json());
    
    return await response.json()
}

function getUserprofile() {
    user().then(userData => {
        let userInfo = ""
        userData.forEach(item => {
            userInfo += `<div class="data">
                            <img src="${item.
                                imageUrl}" alt="foto do perfil"/>
                        
                        
                             
                     <ul> 
                         <li class="title">${item.name}</li>
                         <li>${item.
                            bloodType
                            }</li>
                         <li>${item.height}</li>
                         <li>${item.smokingStatus
                         }</li>
                       </ul>
                       </div>`
            
        })

        document.querySelector('.profile-data').innerHTML += userInfo

    })
}

getUserprofile()