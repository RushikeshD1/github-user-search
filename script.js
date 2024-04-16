
const input = document.getElementById('search-text')
const btn = document.getElementById('btn-search')

const userData = document.querySelector('.user-data')
const par = document.getElementById('pra')

async function fetchData(){


    if(input.value === ''){
        return
    }    
    
    userData.innerText = ''

    console.log('it is working');

    const response = await fetch(`https://api.github.com/users/${input.value}`) 
    const data = await response.json();
    console.log(data);

    const name = data.name !== null ? data.name : "--"
    const login = '@'+data.login !== null ? data.login : "--"
    const profile = data.avatar_url !== null ? data.avatar_url : "--"
    const bio = data.bio !== null ? data.bio : "--"
    const location = data.location !== null ? data.location : "--"

    const joined = data.created_at;

    const date = new Date(joined);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    const time = `${day}/${month}/${year}`
    const message = data.message;
    
    const mainDiv = document.createElement('div')

   
    if(message){
       mainDiv.innerHTML = `
        <span class ='msg'>Uset  not found</span>
       ` 
    }else{
        mainDiv.innerHTML = `
            <div class = 'main'>
                <img src="${profile}" class = 'user-img'>
                <div class = 'user-name'>
                    <span class = 'name'>${name}</span>
                    <span class = 'login'>${login}</span>                   
                </div>  
                <span class = 'date'>Joined ${time}</span>   
                
            </div>
            
            <span class = 'user-bio'>${bio}</span>
            <div class='location'>            
                <span class = 'user-location'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            ${location}</span>
            </div>    
        `
    }
    userData.appendChild(mainDiv)
}

btn.addEventListener('click', fetchData);