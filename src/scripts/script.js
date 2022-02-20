import { fetchData } from '../utils/fetchData.mjs';
import { cardMaker } from '../utils/cardMaker.mjs';
const API = 'https://rickandmortyapi.com/api/character/';

const cardswrapper = document.getElementById('cards-wrapper'); // node to append the childs
var page = 1;  // default Page





//Functions

const getData = async (page) =>
{
  try
  {
    const data = await fetchData(`${API}?page=${page}`); // all data
    const { info } = await fetchData(`${API}?page=${page}`); // verify next and prev

    while (cardswrapper.firstChild) // here we clean all nodes
    { 
      cardswrapper.removeChild(cardswrapper.lastChild);
    }

    data.results.map (character =>
    {
      const card = cardMaker(character); // llamamos a nuestra func
      cardswrapper.appendChild(card); // pegamos las cards
    })
    
    if(info.next === null) // button next check
    {
      buttonNext.style.display = "none";
    }
    else
    {
      buttonNext.style.display = "inline-block";
    }

    if(info.prev === null) //button prev check
    {
      buttonPrev.style.display = "none";
    }
    else
    {
      buttonPrev.style.display = "inline-block";
    }
  }
  catch(error)
  {
    console.error(error);
  }
}

const nextPage = () =>
{
  if(page > 0 && page < 42)
  {
    page += 1;
    getData(page);
    console.log(page);
  }
}

const prevPage = () =>
{
  if(page > 1)
  {
    page -= 1;
    getData(page);
    console.log(page);
  }
}

const listPage = () =>
{
  const listValue = Number(list.options[list.selectedIndex].value);
  getData(listValue);
  console.log('List Value tiene bug');
}
// Buttons

const buttonNext = document.getElementById('button-next');
buttonNext.addEventListener('click', nextPage);


const buttonPrev = document.getElementById('button-prev');
buttonPrev.addEventListener('click', prevPage);

const list = document.getElementById('select-list');
list.addEventListener('change', listPage);

getData(page); // print all data