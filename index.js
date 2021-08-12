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

const displayData = async () => {
   const character = await getCharacter();
   dataContainer.innerHTML = `<img src="${character.image}" alt="" id="image" />
   <ul class="char-info">
      <li id="name">${character.name}</li>
      <li id="status" class="${character.status}">${character.status}</li>
      <li id="species">${character.species}</li>
      <li id="gender">${character.gender}</li>
      <li id="location">${character.location.name}</li>
   </ul>`;
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
      if (ID >1) {
         ID--;
         displayData();
      }
   }, 250);
});
