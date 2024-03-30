import { baseURL } from "@/API";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner: React.FC = () => {
  const [banners, setBanners] = useState<IBanner[]>([]);

  async function getBanners() {
    try {
      const response = await axios.get(`${baseURL}/api/banners`);
      if (response.status === 200) {
        setBanners([...response.data]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <div className="container">
      <Swiper
        className="bannerSwiper"
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Autoplay]}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={`${banner.title}-${index}`}>
            <img src={`${baseURL}/${banner.image_url}`} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
