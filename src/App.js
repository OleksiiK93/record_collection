import './App.css';
import React, {useState} from 'react';

const baseUrl = 'https://api.discogs.com/database/search?q='
const apiAuth = '&type=master&key=JsFneGTxouoLwGyyYSiW&secret=qgrIuHbVCUTysFuYwnzDLCmeAjmIeMeG'

function App() {

  const [releases, setReleases] = useState([]);
  const [releaseSearch, setReleaseSearch] = useState("")

  const handleChange = (event) => {
    setReleaseSearch(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(baseUrl + releaseSearch + apiAuth)
    .then((res) => res.json())
    .then((data) => setReleases(data.results))
    setReleaseSearch('')
  }

  const releaseNodes = releases.map((release, index) => {
    return (
      <div  className='results'>
      <div key={index} className='result'>
        <img src={release.thumb}></img>
        <h4><a href={`https://www.discogs.com${release.uri}`} target="_blank">{release.title}</a></h4>
      </div>
      </div>
    )
  })


  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor='release'>Search for a release: </label>
      <input id='release' type='text' value={releaseSearch} onChange={handleChange}></input>
      <button type='submit'>Find</button>
    </form>
    {releases.length > 0 ? <p>{releases.length + ' results found'}</p> : null}
    {releaseNodes}
    </>
  );
}

export default App;
