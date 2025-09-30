import { StarIcon } from 'lucide-react';
import React from 'react';
import { Badge } from '../../../../components/ui/badge';
import { Card, CardContent } from '../../../../components/ui/card';

export const TestimonialSubsection = (): React.ReactElement => {
  const testimonials = [
    {
      id: 1,
      text: 'I am deeply appreciative for bringing the Nigeria Youth Leadership Initiative to my attention last month. It was a wonderful chance for growth, and I am thrilled to have been selected. Thank you again for illuminating paths like this for aspiring youths.',
      author: 'Saint John Mark',
      title: 'HealR Product Manager',
      position: 'top-0 left-0',
      nameFont: "[font-family:'Sora',Helvetica] font-semibold",
      titleFont: "[font-family:'Sora',Helvetica]",
    },
    {
      id: 2,
      text: 'I am deeply appreciative for bringing the Nigeria Youth Leadership Initiative to my attention last month. It was a wonderful chance for growth, and I am thrilled to have been selected. Thank you again for illuminating paths like this for aspiring youths.',
      author: 'Saint John Mark',
      title: 'HealR Product Manager',
      position: 'top-0 left-[419px] h-[254px]',
      nameFont: "[font-family:'Sora',Helvetica] font-semibold",
      titleFont: "[font-family:'Sora',Helvetica]",
    },
    {
      id: 3,
      text: 'I am deeply appreciative for bringing the Nigeria Youth Leadership Initiative to my attention last month. It was a wonderful chance for growth, and I am thrilled to have been selected. Thank you again for illuminating paths like this for aspiring youths.',
      author: 'Saint John Mark',
      title: 'HealR Product Manager',
      position: 'top-0 left-[837px] h-[254px]',
      nameFont: "[font-family:'Sora',Helvetica] font-semibold",
      titleFont: "[font-family:'Sora',Helvetica]",
    },
    {
      id: 4,
      text: 'I am deeply appreciative for bringing the Nigeria Youth Leadership Initiative to my attention last month. Thank you again for illuminating paths like this for aspiring youths.',
      author: 'Saint John Mark',
      title: 'HealR Product Manager',
      position: 'top-[270px] left-0',
      nameFont: "[font-family:'Sora',Helvetica] font-semibold",
      titleFont: "[font-family:'Sora',Helvetica]",
    },
    {
      id: 5,
      text: 'I am deeply appreciative for bringing the Nigeria Youth Leadership Initiative to my attention last month. It was a wonderful chance for growth, and I am thrilled to have been selected. Thank you again for illuminating paths like this for aspiring youths. I am deeply appreciative for bringing the Nigeria Youth Leadership Initiative to my attention last month. It was a wonderful chance for growth, and I am thrilled to have been selected. Thank you again for illuminating paths like this for aspiring youths.',
      author: 'Saint John Mark',
      title: 'HealR Product Manager',
      position: 'top-[270px] left-[419px]',
      nameFont: "[font-family:'Sora',Helvetica] font-semibold",
      titleFont: "[font-family:'Sora',Helvetica]",
    },
    {
      id: 6,
      text: 'I am deeply appreciative for bringing the Nigeria Youth Leadership Initiative to my attention last month. It was a wonderful chance for growth, and I am thrilled to have been selected. Thank you again for illuminating paths like this for aspiring youths.',
      author: 'Saint John Mark',
      title: 'HealR Product Manager',
      position: 'top-[270px] left-[837px] h-[254px]',
      nameFont: "[font-family:'Sora',Helvetica] font-semibold",
      titleFont: "[font-family:'Sora',Helvetica]",
    },
    {
      id: 7,
      text: 'I am deeply appreciative for bringing the Nigeria Youth Leadership Initiative to my attention last month. Thank you again for illuminating paths like this for aspiring youths.',
      author: 'Saint John Mark',
      title: 'HealR Product Manager',
      position: 'top-[488px] left-0',
      nameFont: "[font-family:'Sora',Helvetica] font-semibold",
      titleFont: "[font-family:'Sora',Helvetica]",
    },
    {
      id: 8,
      text: 'I am deeply appreciative for bringing the Nigeria Youth Leadership Initiative to my attention last month. Thank you again for illuminating paths like this for aspiring youths.',
      author: 'Saint John Mark',
      title: 'HealR Product Manager',
      position: 'top-[541px] left-[837px]',
      nameFont: "[font-family:'Sora',Helvetica] font-semibold",
      titleFont: "[font-family:'Sora',Helvetica]",
    },
    {
      id: 9,
      text: 'I am deeply appreciative for bringing the Nigeria Youth Leadership Initiative to my attention last month. Thank you again for illuminating paths like this for aspiring youths.',
      author: 'Saint John Mark',
      title: 'HealR Product Manager',
      position: 'top-[649px] left-[419px]',
      nameFont: "[font-family:'Sora',Helvetica] font-semibold",
      titleFont: "[font-family:'Sora',Helvetica]",
    },
  ];

  const StarRating = () => (
    <div className='inline-flex items-center'>
      {[...Array(5)].map((_, index) => (
        <StarIcon key={index} className='w-5 h-5 fill-current text-yellow-400' />
      ))}
    </div>
  );

  return (
    <section className='relative w-full min-h-[1006px] overflow-hidden '>
      <div className='absolute top-[264px] px-4 w-full  h-[763px]'>
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className={`absolute ${testimonial.position} w-[403px] bg-white rounded-2xl border border-solid border-[#ebebeb]`}
          >
            <CardContent className='flex flex-col items-start gap-6 p-6'>
              <p className="text-sm text-[#010101] [font-family:'Sora',Helvetica] font-normal leading-[23px]">
                {testimonial.text}
              </p>

              <div className='flex items-center justify-between w-full'>
                <div className='flex flex-col gap-0.5'>
                  <div className={`text-sm text-[#010101] leading-5 ${testimonial.nameFont}`}>
                    {testimonial.author}
                  </div>
                  <div className={`text-xs text-[#8c8c8c] ${testimonial.titleFont} font-normal`}>
                    {testimonial.title}
                  </div>
                </div>

                <StarRating />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='absolute left-[calc(50.00%_-_720px)] bottom-0 w-[1440px] h-[231px] rotate-180 bg-[linear-gradient(180deg,rgba(255,255,255,1)_42%,rgba(255,255,255,0)_100%)]' />

      <div className='absolute top-0 left-px w-[1440px] h-[325px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_42%,rgba(255,255,255,0)_100%)]' />

      <header className='absolute w-full top-[100px]  flex flex-col items-center gap-2'>
        <Badge className='bg-[#ff9b39] text-white text-sm md:text-xs tracking-[0.12px] leading-[26px] px-3 py-px rounded-[50px] hover:bg-[#ff9b39]'>
          Testimonials
        </Badge>

        <div className='flex flex-col items-start gap-2 w-full md:w-[632px]'>
          <h2 className='w-full text-2xl md:text-4xl text-center text-[#010101] font-medium'>
            What people say about us
          </h2>

          <p className="w-full text-sm md:text-base text-center text-[#010101] opacity-50 [font-family:'Sora',Helvetica] font-normal tracking-[0.16px] leading-[26px]">
            Proof of our passion and commitment, straight from our clients.
          </p>
        </div>
      </header>
    </section>
  );
};
