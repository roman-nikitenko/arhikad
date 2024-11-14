import React, { useId, useRef } from 'react';
import { Testimonial } from '../types/testimonial.ts';
import { TestimonialCard } from './TestimonialCard.tsx';
import { motion } from 'framer-motion'

//faces
import face from'../assets/faces/face.jpg';
import face1 from'../assets/faces/face1.jpg';
import face2 from'../assets/faces/face2.jpg';
import face3 from'../assets/faces/face3.jpg';
import face4 from'../assets/faces/face4.jpg';
import face5 from'../assets/faces/face5.jpg';
import face6 from'../assets/faces/face6.jpg';
import face7 from'../assets/faces/face7.jpg';
import face8 from'../assets/faces/face8.jpg';
import face9 from'../assets/faces/face9.jpg';
import face10 from'../assets/faces/face10.jpg';
import face11 from'../assets/faces/face11.jpg';
import face12 from'../assets/faces/face12.jpg';
import face13 from'../assets/faces/face13.jpg';
import face14 from'../assets/faces/face14.jpg';
import face15 from'../assets/faces/face15.jpg';
import face16 from'../assets/faces/face16.jpg';
import face17 from'../assets/faces/face17.jpg';
import face18 from'../assets/faces/face18.jpg';
import face19 from'../assets/faces/face19.jpg';
import face20 from'../assets/faces/face20.jpg';

export const TestimonialsSection: React.FC = () => {

  const id = useId();

  const testimonials: Testimonial[] = [
    {
      id: id,
      message: 'Працювати з цією архітектурною фірмою було одне задоволення. Їхня увага до деталей та інноваційний дизайн перевершили наші очікування. Команда була професійною та чуйною протягом усього проекту.',
      name: 'Олександр',
      date: '23.07.2009',
      photo: face,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Архітектори тут втілили наше бачення в реальність. Їхня креативність і відданість зробили можливим будинок нашої мрії. Ми не можемо бути задоволені результатами!',
      name: 'Олена',
      date: '12.03.2009',
      photo: face1,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Ми найняли цю компанію для комерційного проекту, і вони показали чудові результати. Їхній досвід у екологічному дизайні та управлінні проектами забезпечив, щоб усе пройшло гладко та вчасно.',
      name: 'Катерина',
      date: '15.03.2009',
      photo: face2,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Від початкової консультації до остаточного проходження ця архітектурна команда була винятковою. Вони прислухалися до наших потреб і запропонували рішення, які були практичними та естетично привабливими.',
      name: 'Марія',
      date: '23.07.2009',
      photo: face3,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Їхня здатність поєднувати сучасний дизайн із функціональним простором справді вражає. Завдяки продуманому плануванню наші нові офісні приміщення не тільки красиві, але й дуже ефективні.',
      name: 'Дмитро',
      date: '23.07.2009',
      photo: face4,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Архітектори цієї фірми справжні професіонали. Вони терпляче та досвідчено проводили нас через увесь процес, від концепції до завершення. Ми дуже рекомендуємо їх.',
      name: 'Анастасія',
      date: '23.07.2009',
      photo: face5,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Наш проект реконструкції був складним, але ця команда впоралася з ним легко. Їхні інноваційні ідеї та ретельне виконання призвели до приголомшливої трансформації нашого простору.',
      name: 'Наталія',
      date: '23.07.2009',
      photo: face6,
      position: 'Manager',
    },
    {
      id: id,
      message: 'The construction team\'s attention to detail and commitment to excellence set them apart. Our project was completed flawlessly, and we couldn\'t be happier.',
      name: 'Іван',
      date: '23.07.2009',
      photo: face7,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Ми були вражені рівнем деталізації та креативності нашого проекту. Архітектори завжди були готові відповісти на запитання та надати рекомендації. Кінцевий продукт просто неймовірний.',
      name: 'Софія',
      date: '23.07.2009',
      photo: face8,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Ця архітектурна компанія в усіх відношеннях перевершила наші очікування. Їхня дизайнерська робота є першокласною, а їхня прагнення задовольнити клієнтів помітна в кожній взаємодії.',
      name: 'Олег',
      date: '23.07.2009',
      photo: face9,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Вибір цієї фірми для нашого проекту був найкращим рішенням, яке ми прийняли. Їхній спільний підхід і виняткові дизайнерські навички дозволили створити простір, який ідеально відповідає нашим потребам і стилю.',
      name: 'Роман',
      date: '23.07.2009',
      photo: face10,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Працювати з цією архітектурною компанією було одне задоволення. Їхня увага до деталей та інноваційний дизайн перетворили наше бачення в реальність. Вся команда була професійною та чуйною протягом усього проекту.',
      name: 'Павло',
      date: '23.07.2009',
      photo: face11,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Ми не можемо бути щасливішими з нашим новим домом. Архітектори прислухалися до наших потреб і створили красивий, функціональний дизайн, який перевершив наші очікування. Дуже рекомендую!',
      name: 'Оксана',
      date: '23.07.2009',
      photo: face12,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Їхні навички управління проектами є першокласними. Весь процес будівництва пройшов гладко та без стресів. Вони інформували нас про кожен крок і гарантували, що все відбуватиметься за графіком і в рамках бюджету.',
      name: 'Василь',
      date: '23.07.2009',
      photo: face13,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Від початкової консультації до остаточного проходження команда була фантастичною. Вони надавали креативні рішення та завжди були готові зробити все можливе, щоб ми були задоволені. Наше нове офісне приміщення чудове!',
      name: 'Сергій',
      date: '23.07.2009',
      photo: face14,
      position: 'Manager',
    },
    {
      id: id,
      message: '3D-візуалізації, які вони надали, були неймовірно корисними для візуалізації нашого проекту. Кінцевий результат виявився навіть кращим, ніж ми собі уявляли. Ми в захваті від нашої нової комерційної будівлі.',
      name: 'Владислав',
      date: '23.07.2009',
      photo: face15,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Їхній досвід у екологічному дизайні був саме тим, що ми шукали. Вони використали в нашому домі екологічно чисті матеріали та енергоефективні системи, і ми не могли бути задоволені результатом.',
      name: 'Кирило',
      date: '23.07.2009',
      photo: face16,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Архітектори були дуже обізнаними та надавали чудові вказівки протягом усього проекту. Їх дизайн ідеально відповідає нашим естетичним і функціональним вимогам. Готовий продукт приголомшливий.',
      name: 'Ганна',
      date: '23.07.2009',
      photo: face17,
      position: 'Manager',
    },
    {
      id: id,
      message: 'У нас був стислий термін, але команда виконала поставку вчасно без шкоди для якості. Їхній професіоналізм і відданість справді заслуговують похвали. Наше оновлене приміщення виглядає фантастично!',
      name: 'Ольга',
      date: '23.07.2009',
      photo: face18,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Їх спільний підхід зробив весь процес приємним. Вони були відкриті до наших ідей і надали цінну інформацію, яка покращила загальний дизайн. Ми любимо наш новий дім!',
      name: 'Віталій',
      date: '23.07.2009',
      photo: face19,
      position: 'Manager',
    },
    {
      id: id,
      message: 'Ми були вражені їхньою креативністю та увагою до деталей. Архітектори знайшли час, щоб зрозуміти наші потреби та створили дизайн, який ідеально відповідає нашому стилю життя. Ми дуже рекомендуємо їхні послуги.',
      name: 'Вероніка',
      date: '23.07.2009',
      photo: face20,
      position: 'Manager',
    },
  ];
  
  const testimonialsRef = useRef<HTMLDivElement | null>(null)
  
  return (
    <section className="bg-[#191919] py-20 flex flex-col overflow-hidden gap-y-14 w-full">
      <div className="max-w-screen-lg m-auto w-full">
        <div className="flex flex-col  items-start gap-y-4">
          <div className="bg-[color:var(--accent-color)] text-white py-1 px-2 text-xs rounded-full">Відгуки</div>
          <h1 className="uppercase text-white text-4xl md:text-5xl">повідомлення від наших <br/> цінних <span className="text-[var(--accent-color)]">клієнтів</span> </h1>
        </div>
      </div>
      <motion.div
        ref={testimonialsRef} 
        className="columns-5 w-fit h-[460px] "
        animate={{
          x: ['0%', '-100%'],
          transition: {
            duration: 60,
            repeatDelay: 0,
            repeat: Infinity,
          }
        }}
      >
        {testimonials.map(testimonial => (
          <TestimonialCard testimonial={testimonial}/>
        ))}
      </motion.div>
    </section>
  );
};
