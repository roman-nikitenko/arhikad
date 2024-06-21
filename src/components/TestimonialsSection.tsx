import React, { useId, useRef } from 'react';
import { Testimonial } from '../types/testimonial.ts';
import face from'../assets/faces/face.jpg';
import { TestimonialCard } from './TestimonialCard.tsx';

export const TestimonialsSection: React.FC = () => {

  const id = useId();

  const testimonials: Testimonial[] = [
    {
      id: id,
      message: 'The construction team was professional and completed our project ahead of schedule. Impressed by their attention to detail and quality work!',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Our experience with the construction company was fantastic. They were communicative, efficient, and the end result exceeded our expectations.',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'From start to finish, the construction process was seamless. The team was knowledgeable, and the craftsmanship of their work was top-notch. From start to finish, the construction process was seamless. The team was knowledgeable, and the craftsmanship of their work was top-notch.',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'I highly recommend this construction company for any project. They were reliable, skilled, and delivered exceptional results within budget',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Working with this construction team was a pleasure. They were organized, professional, and transformed our space into exactly what we envisioned.',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Impressed by the dedication and expertise of the construction crew. They tackled every challenge with ease and delivered a beautiful final product.',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Choosing this construction company was the best decision we made for our renovation. The team was friendly, efficient, and the workmanship was outstanding.',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'The construction team\'s attention to detail and commitment to excellence set them apart. Our project was completed flawlessly, and we couldn\'t be happier.',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Our construction experience was smooth and stress-free, thanks to this exceptional team. They listened to our needs and brought our vision to life with precision.',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'The construction team was professional and completed our project ahead of schedule. Impressed by their attention to detail and quality work!',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Our experience with the construction company was fantastic. They were communicative, efficient, and the end result exceeded our expectations.',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'From start to finish, the construction process was seamless. The team was knowledgeable, and the craftsmanship of their work was top-notch. From start to finish, the construction process was seamless. The team was knowledgeable, and the craftsmanship of their work was top-notch.',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'I highly recommend this construction company for any project. They were reliable, skilled, and delivered exceptional results within budget',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Working with this construction team was a pleasure. They were organized, professional, and transformed our space into exactly what we envisioned.',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Impressed by the dedication and expertise of the construction crew. They tackled every challenge with ease and delivered a beautiful final product.',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Choosing this construction company was the best decision we made for our renovation. The team was friendly, efficient, and the workmanship was outstanding.',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'The construction team\'s attention to detail and commitment to excellence set them apart. Our project was completed flawlessly, and we couldn\'t be happier.',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Our construction experience was smooth and stress-free, thanks to this exceptional team. They listened to our needs and brought our vision to life with precision.',
      name: 'Sarah Johnson',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    }
  ];
  
  const testimonialsRef = useRef<HTMLDivElement | null>(null)
  
  return (
    <section className="bg-[#191919] py-20 flex flex-col overflow-hidden gap-y-14 w-full">
      <div className="max-w-screen-lg m-auto w-full">
        <div className="flex flex-col  items-start gap-y-4">
          <div className="bg-[color:var(--accent-color)] text-white py-1 px-2 text-xs rounded-full">Testimonials</div>
          <h1 className="uppercase text-white text-5xl ">messages from our <br/> valuable <span className="text-[var(--accent-color)]">customers</span> </h1>
        </div>
      </div>
      <div ref={testimonialsRef} className="columns-5 w-fit h-[400px] animate-testimonials-animation">
        {testimonials.map(testimonial => (
          <TestimonialCard testimonial={testimonial}/>
        ))}
      </div>
    </section>
  );
};
