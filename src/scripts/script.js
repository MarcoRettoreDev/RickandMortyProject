import { fetchData } from '../utils/fetchData.mjs';
import { cardMaker } from '../utils/cardMaker.mjs';
const API = 'https://rickandmortyapi.com/api/character/';

const cardswrapper = document.getElementById('cards-wrapper');
const defaultPages = 5; // Páginas por default


const select = document.getElementById('select-list');

const updateList = () =>
{
  var maxPages = select.options[select.selectedIndex].value;
  pagesNumber(maxPages);
}
select.addEventListener('change', updateList)


const getData = async () =>
{
  try
  {
    const { results } = await fetchData(API);
    results.map (character =>
      {
        const card = cardMaker(character);
        cardswrapper.appendChild(card);
      })
    console.log(results);
  }
  catch(error)
  {
    console.error(error);
  }
}

const pagesNumber = (maxPages) =>
{
  for(let i = 0 ; i<= maxPages ; i++)
  {
    getData(i);
  }
};

pagesNumber(defaultPages);

