import React from 'react';

function Banner(props) {
    console.log(props.banner);
    return (
        <div>
            <picture className="main-banner">
                <source media="(min-width: 1200px) and (max-width: 1439px)" srcSet={props.banner.desktop_bannerURL}/>
                <source media="(max-width: 767px)" srcSet={props.banner.mobile_bannerURL}></source>
                <img loading="lazy" src={props.banner.desktop_bannerURL} alt={props.banner.name}></img>
            </picture>
            <div className="banner-caption">
                <h1>{props.banner.content_title}</h1>
                <p>{props.banner.content}</p>
                <a href={props.banner.link}>READ MORE</a>
            </div>
        </div>
    );
}

export default Banner;