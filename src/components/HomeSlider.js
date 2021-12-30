import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {Link} from 'react-router-dom'

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);

const HomeSlider = (props) => {
    
    const folders = props.folders;

    return ( 
        <div className="home-slider">
            <div className="w-3/5 h-full">
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
                }} pagination={true} className="mySwiper">
                    {folders.map(folder => (
                        <div key={folder.id}>
                            <SwiperSlide>
                                <Link to= {`/folders/${folder.id}`} className="text-xl">
                                    <div className="flex justify-center w-3/4 min-h-full rounded-sm bg-gradient-to-tr from-gradblue to-gradmag">
                                        <h2>{ folder.title }</h2>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
     );
}
 
export default HomeSlider;