import React from 'react';

function Categories(props) {
    return (
        <div>
            {props.categories.map((category) => (
                <div className="category">
                    <div className="category-name">
                        {category.category_name}
                    </div>
                    <div className="category-artists-list">
                    {category.artists_list.map((artist) => (
                        <div className="category-artist-name">
                            <a href={artist.url}>
                                {artist.name}
                            </a>
                        </div>
                     ))}
                     </div>
                </div> 
            ))}
        </div>
    );
}

export default Categories;