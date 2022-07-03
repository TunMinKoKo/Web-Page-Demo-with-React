import React from 'react';

function Artists(props) {
    return (
        <div>
        <h1 className="text-center">#MONOCREATORS #GOPLAY</h1>
        <div className="artist-container">
            {props.artists.map((artist) => (
            <div className="artist__desktop" key={artist.id}>
                <div className="artist-img__desktop">
                    <img src={artist.image} />
                </div>
                <div className="artist-name__desktop">
                    {artist.name}
                </div>
            </div>
            ))}
        </div> 
        </div>
    );
}

export default Artists;