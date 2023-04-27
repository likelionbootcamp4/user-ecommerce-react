// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Container } from "@mui/material";

const bannerOptions = [
  "https://images.unsplash.com/photo-1593238404535-cda7ae2fe50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
  "https://media.istockphoto.com/id/455808415/photo/sale-banner-in-mall.jpg?b=1&s=170667a&w=0&k=20&c=SgOVKwgfZQQOpX8ntBEZ0smv5_GgqHAm7atDvN2zI0g=",
  "https://images.unsplash.com/photo-1552215146-00ba62f509c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbm5lciUyMHNob3B8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
];

export default function Banner() {
  return (
    <>
      <Container maxWidth="xl">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="banner-swiper"
        >
          {bannerOptions.map((item) => (
            <SwiperSlide key={item}>
              <img src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}
