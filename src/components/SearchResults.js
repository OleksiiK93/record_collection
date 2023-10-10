import React from 'react';
import MasterRelease from './MasterRelease';

const SearchResults = ({releases}) => {

    const releaseNodes = releases.map((release) => {
        return (
            <MasterRelease key={release.id} release={release}/>            
        )
      });

    return ( 
        <>
        {releases.length > 0 ? <p>{releases.length + ' results found'}</p> : null}
        {releaseNodes}
        </>
     );
}
 
export default SearchResults;