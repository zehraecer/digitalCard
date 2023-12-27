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
        <li class="">Login:${cards.id}</li>
        <li>Id: ${cards.id}</li>
        <li>${cards.name}</li>
        <li>${cards.bio}</li>
        <li>${cards.html_url}</li>
`
    }
}

getCard();