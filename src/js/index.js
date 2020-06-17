import Search from './models/Search';
import * as searchView from'./views/searchView';

const state = {};

const controlSearch = async () =>{
  const query = searchView.getInput();

  if(query){
      state.search = new Search(query);
       
      console.log(query);      
      await state.search.getResults();
      

      document.querySelector(".results__list").innerHTML = '';

      console.log(state.search.result);

      searchView.renderResults(state.search.result);
  }
}

document.querySelector('.search').addEventListener('submit' , e => {
      e.preventDefault();
      controlSearch();
});


