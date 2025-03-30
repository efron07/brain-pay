import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: "Micheal Gough",
        position: "CEO at Google",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
        quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
    },
    {
        name: "Sarah Johnson",
        position: "Product Manager at Amazon",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        quote: "This UI framework has completely changed how I build web apps. It's super efficient and beautiful!"
    },
    {
        name: "Emily White",
        position: "UX Designer at Meta",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        quote: "The design consistency and flexibility of Flowbite make it my go-to choice for every project."
    },
    {
        name: "James Smith",
        position: "CTO at Tesla",
        image: "https://randomuser.me/api/portraits/men/56.jpg",
        quote: "An incredible tool for modern web development. The components save me tons of development time!"
    }
];

const Testimonials = () => {
    return (
        <div className="py-12 bg-blue-900">
            <div className="max-w-screen-xl px-6 mx-auto text-center">
                <p className="text-2xl font-extrabold text-white-700">Testimonials</p>
                <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Read what others have to say</h1>
            </div>

            <div className="max-w-3xl mx-auto mt-8">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center px-6 py-8 bg-blue-900 rounded-lg shadow-lg">
                                <svg className="h-12 mx-auto text-gray-400 mb-4" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <p className="text-lg text-gray-300 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center justify-center mt-4">
                                    <img className="w-10 h-10 rounded-full" src={testimonial.image} alt={testimonial.name} />
                                    <div className="ml-3 text-left">
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-400">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
