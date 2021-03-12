
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from "axios"; // importing data

console.log(axios.get('https://api.github.com/users/tommycapello'));// Promise Object

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
    Skip to STEP 3.

    {
    "avatar_url": "https://avatars.githubusercontent.com/u/69427013?v=4",
    "bio": null,
    "blog": "",
    "company": null,
    "created_at": "2020-08-09T14:45:34Z",
    "email": null,
    "events_url": "https://api.github.com/users/tommycapello/events{/privacy}",
    "followers": 1,
    "followers_url": "https://api.github.com/users/tommycapello/followers",
    "following": 4,
    "following_url": "https://api.github.com/users/tommycapello/following{/other_user}",
    "gists_url": "https://api.github.com/users/tommycapello/gists{/gist_id}",
    "gravatar_id": "",
    "hireable": null,
    "html_url": "https://github.com/tommycapello",
    "id": 69427013,
    "location": null,
    "login": "tommycapello",
    "name": "Tommy Capello",
    "node_id": "MDQ6VXNlcjY5NDI3MDEz",
    "organizations_url": "https://api.github.com/users/tommycapello/orgs",
    "public_gists": 0,
    "public_repos": 19,
    "received_events_url": "https://api.github.com/users/tommycapello/received_events",
    "repos_url": "https://api.github.com/users/tommycapello/repos",
    "site_admin": false,
    "starred_url": "https://api.github.com/users/tommycapello/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/tommycapello/subscriptions",
    "twitter_username": null,
    "type": "User",
    "updated_at": "2021-03-09T19:29:29Z",
    "url": "https://api.github.com/users/tommycapello"
}
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const cards = document.querySelector('.cards') // selecting the ParentNode that I will attached the component as a Child

function cardMaker(data) { // this function will construct the card from the data we bring in

  const card = document.createElement('div')
  card.classList.add('card') // this is the parent div of the component, <div class="card">

  const img = document.createElement('img')
  img.src = `${data.avatar_url}`
  card.appendChild(img) // <img src={image url of user} />

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  card.appendChild(cardInfo) // <div class="card-info"> </div>

  const name = document.createElement('h3')
  name.classList.add('name')
  name.textContent = `${data.name}`
  cardInfo.appendChild(name) //<h3 class="name">{users name}</h3>

  const userName = document.createElement('p')
  userName.classList.add('username')
  userName.textContent = `${data.login}`
  cardInfo.appendChild(userName)// <p class="username">{users user name}</p>

  const location = document.createElement('p')
  location.textContent = `Location: ${data.location}`
  cardInfo.appendChild(location)// <p>Location: {users location}</p>

  const profile = document.createElement('p')
  profile.textContent = 'Profile: '
  cardInfo.appendChild(profile) // <p>Profile: </p>

  const profileUrl = document.createElement('a')
  profileUrl.href = `{data.html_url}`
  profileUrl.textContent = `${data.html_url}`
  profile.appendChild(profileUrl) // <a href={address to users github page}>{address to users github page}</a>

  const followers = document.createElement('p')
  followers.textContent = `Followers: ${data.followers}`
  cardInfo.appendChild(followers) // <p>Followers: {users followers count}</p>

  const following = document.createElement('p')
  following.textContent = `Following: ${data.following}`
  cardInfo.appendChild(following) // <p>Following: {users following count}</p>

  const bio = document.createElement('p')
  bio.textContent = `Bio: ${data.bio}`
  cardInfo.appendChild(bio) // <p>Bio: {users bio}</p>

  return card;

  /*
 <div class="card">
    <img src={image url of user} />
    <div class="card-info">
      <h3 class="name">{users name}</h3>
      <p class="username">{users user name}</p>
      <p>Location: {users location}</p>
      <p>Profile:
        <a href={address to users github page}>{address to users github page}</a>
      </p>
      <p>Followers: {users followers count}</p>
      <p>Following: {users following count}</p>
      <p>Bio: {users bio}</p>
    </div>
  </div>
*/

}

axios.get('https://api.github.com/users/tommycapello')
.then((result)=> {
  const tcData = result.data
  cards.appendChild(cardMaker(tcData))
}
).catch(error => {
  console.log('Error:', error)
})

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.
    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell']

  followersArray.forEach(data => {
    axios.get(`https://api.github.com/users/${data}`)
    .then((result) => {
      const gitData = result.data
      cards.appendChild(cardMaker(gitData));

    }).catch(error => {
      console.log('Error:', error)})});