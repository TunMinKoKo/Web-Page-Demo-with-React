import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';

function ArtistsMobile(props) {
    return (
      <div>
        <h1 className="text-center">#MONOCREATORS #GOPLAY</h1>
          <Swiper 
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}>
          {props.artists.map((artist) => (
              <SwiperSlide key={artist.id}>
                  <div className="artist">
                      <div className="artist-img">
                          <img src={artist.image}/>  
                      </div>
                      <div className="artist-name">
                          {artist.name}
                      </div>
                  </div>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
}

export default ArtistsMobile;