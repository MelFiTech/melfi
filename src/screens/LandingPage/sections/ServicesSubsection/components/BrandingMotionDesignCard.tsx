import React from 'react';
import { LazyImage } from '../../../../../components/OptimizedImage';
import { Card, CardContent } from '../../../../../components/ui/card';

export const BrandingMotionDesignCard = (): React.ReactElement => {
  return (
    <Card className='w-full md:w-[784px] h-[480px] bg-[#EAF1F6] relative rounded-2xl overflow-hidden border-none shadow-none flex-shrink-0'>
      <CardContent className='p-0 relative w-full h-full'>
        <div className='flex flex-col w-full md:w-[333px] items-start gap-0.5 absolute top-[52px] px-4 md:px-0 md:left-[calc(50.00%_-_307px)]'>
          <h3 className='relative flex items-center w-fit mt-[-1.00px] font-semibold text-[#010101] text-lg text-left tracking-[-0.09px] leading-7 whitespace-nowrap'>
            Branding & Motion Design
          </h3>

          <p className="relative flex items-center w-80 [font-family:'Sora',Helvetica] font-normal text-[#36394a] text-sm tracking-[-0.28px] leading-[21px] text-left">
            Creating bold identities and dynamic visuals that bring your brand story to life.
          </p>
        </div>

        <LazyImage
          className='absolute top-[calc(50.00%_-_149px)] left-1/2 -translate-x-1/2 w-[1000px] h-[550px] object-contain'
          alt='Branding & Motion Design'
          src='/images/branding.png'
          width={1000}
          height={550}
          quality={85}
        />
      </CardContent>
    </Card>
  );
};
