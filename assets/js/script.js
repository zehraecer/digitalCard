const digitalCard = document.querySelector("#card");



async function fetchCard(){
    const card = await fetch("https://api.github.com/users/zehraecer");
    const data =  await card.json();
    return [data];    
  
}


async function getCard(){
    const data = await fetchCard();
    for (const cards of data) {
        digitalCard.innerHTML +=`

        <img id= "foti" src="${cards.avatar_url}" alt="">
        <div id="first-div">
          <li class="user1">${cards.name}</li>
          <li class="user2">${cards.bio}</li>
        </div>
        <div id="second-div">
           <li class="user">${cards.login}</li>
           <li class="user">${cards.id}</li>
        </div>
        <div third-div>
           <li class="user">${cards.html_url}</li>
        </div>
`
    }
}

getCard();