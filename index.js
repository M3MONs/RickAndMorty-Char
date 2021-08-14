let ID = 1; //Start ID

//DOM
//Character
// const charImg = document.getElementById('image')
const dataContainer = document.getElementById("dataContainer");
//Btns
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const getCharacter = async () => {
   const response = await fetch(
      `https://rickandmortyapi.com/api/character/${ID}`
   );
   const characterData = await response.json();
   return characterData;
};

const episodeName = async(episode)=>{
   const response = await fetch(episode)
   const episodeData = await response.json();
   return episodeData.name
}

const displayData = async () => {
   const character = await getCharacter();
   const episode  =await episodeName(character.episode[character.episode.length - 1])
   dataContainer.innerHTML = `<img src="${character.image}" alt="" id="image" />
   <ul class="char-info">
      <div>
      <li id="name"><h5>Name: </h5>${character.name}</li>
      <li id="status" class="${character.status}"><h5>Status: </h5>${character.status}</li>
      <br>
      </div>
      <div>
      <li id="species"><h5>Species: </h5>${character.species}</li>
      <li id="gender"><h5>Gender: </h5>${character.gender}</li>
      <li id="location"><h5>Location: </h5>${character.location.name}</li>
      </div>
   </ul>
   <h5 class="desktop">Last episode: <span>${episode}</span></h5>`;
};

displayData();

nextBtn.addEventListener("click", () => {
   setTimeout(() => {
      if (ID < 671) {
         ID++;
         displayData();
      }
   }, 250);
});
prevBtn.addEventListener("click", () => {
   setTimeout(() => {
      if (ID > 1) {
         ID--;
         displayData();
      }
   }, 250);
});
