import React from 'react';

const MasterRelease = ({release}) => {
    return ( 
        <div className='result'>
            <img src={release.thumb}></img>
            <h4><a href={`https://www.discogs.com${release.uri}`} target="_blank">{release.title}</a></h4>
        </div>
     );
}
 
export default MasterRelease;