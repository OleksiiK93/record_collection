import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const baseUrl = 'https://api.discogs.com/database/search?artist='
const apiAuth = '&type=master&key=JsFneGTxouoLwGyyYSiW&secret=qgrIuHbVCUTysFuYwnzDLCmeAjmIeMeG'

const RecordsCollection = () => {

  const [releases, setReleases] = useState([]);
  
  const searchForRelease = (artistToSearch, releaseToSearch) => {
    fetch(baseUrl + artistToSearch + `&release_title=${releaseToSearch}` + apiAuth)
    .then((res) => res.json())
    .then((data) => setReleases(data.results))
    };
  
    return (
    <>
    <SearchBar searchForRelease={searchForRelease}/>
    <SearchResults releases={releases}/>
    </>
  );
}
 
export default RecordsCollection;