import React, {useState} from 'react';

const SearchBar = ({searchForRelease}) => {

    const [artist, setArtist] = useState("")
    const [release, setRelease] = useState("")

    const handleArtistChange = (event) => {
        setArtist(event.target.value);
      };

    const handleReleaseChange = (event) => {
        setRelease(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const artistToSearch = artist.trim()
        const releaseToSearch = release.trim()
        if (!artistToSearch && !releaseToSearch) {
            return
        }
        searchForRelease(artistToSearch, releaseToSearch)
        setArtist('')
        setRelease('')
    };

    return ( 
    <form onSubmit={handleSubmit}>
        <label htmlFor='artist'>Artist: </label>
        <input id='artist' type='text' value={artist} onChange={handleArtistChange}></input>

        <label htmlFor='release'>Release: </label>
        <input id='release' type='text' value={release} onChange={handleReleaseChange}></input>

        <button type='submit'>Find</button>
    </form>
     );
}
 
export default SearchBar;