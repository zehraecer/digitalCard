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
           <li class="user"><span style="color:tomato;font-style:italic;font-weight:bold">Kullanıcı Adı:</span>${cards.login}</li>   
           <li class="user"><span style="color:tomato;font-style:italic;font-weight:bold">İd:</span>${cards.id}</li>
           <li class="user"><span style="color:tomato;font-style:italic;font-weight:bold">github:</span>${cards.html_url}</li>
           <li class="user"><span style="color:tomato;font-style:italic;font-weight:bold">Lokasyon:</span>${cards.location}</li>
           <li class="user"<span style="color:tomato;font-style:italic;font-weight:bold">Takipçi:</span>${cards.followers}</li>
           <li class="user"><span style="color:tomato;font-style:italic;font-weight:bold">Takip Edilen:</span>${cards.following}</li>
           <li class="user"><span style="color:tomato;font-style:italic;font-weight:bold">Public Repo:</span>${cards.public_repos}</li>
           <li class="user"><span style="color:tomato;font-style:italic;font-weight:bold">Public Gists:</span>${cards.public_gists}</li>
           <li class="user"><span style="color:tomato;font-style:italic;font-weight:bold">Şirket:</span>${cards.company}</li>

        </div>
`
    }
}

getCard();