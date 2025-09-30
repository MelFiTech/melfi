import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import React from 'react';

const socialLinks = [
  { icon: LinkedinIcon, alt: 'LinkedIn' },
  { icon: TwitterIcon, alt: 'Twitter' },
  { icon: InstagramIcon, alt: 'Instagram' },
  { icon: FacebookIcon, alt: 'Facebook' },
];

export const FooterSubsection = (): React.ReactElement => {
  return (
    <footer className='relative w-full md:h-[236px] h-[300px] bg-transparent'>
      <div className="absolute md:top-[189px] top-[250px] left-[calc(50.00%_-_103px)] opacity-50 [font-family:'Sora',Helvetica] font-normal text-[#10203b] text-sm text-center tracking-[-0.56px] leading-[26px] whitespace-nowrap">
        © Melfi 2025. All rights reserved
      </div>
      <div className='flex flex-col md:flex-row w-full md:w-[1205px] items-start justify-between absolute top-[57px] md:left-[calc(50.00%_-_602px)]  md:px-0 px-4'>
        <div className='flex flex-col md:w-[281px] w-full items-start gap-6 relative'>
          <img
            className='md:w-[102.41px] w-[70px] md:h-[35px] h-[28px]'
            alt='Melfi LOGO'
            src='/MELFI-LOGO-BLACK.png'
          />
          <div className="w-fit [font-family:'Sora',Helvetica] font-normal text-transparent text-base text-center tracking-[-0.64px] leading-[26px] whitespace-nowrap">
            <span className='text-[#10203b80] tracking-[-0.10px]'>
              We create product with love here
            </span>
            <span className='text-[#10203b] tracking-[-0.10px]'> ❤</span>
            <span className="[font-family:'Sora',Helvetica] text-[#10203b] tracking-[-0.10px]"></span>
          </div>
        </div>
        <div className='flex flex-col md:w-[281px] w-full items-start gap-6 relative'>
          <div className="w-fit md:mt-[-1.00px] mt-4 [font-family:'Sora',Helvetica] font-normal text-[#10203b80] text-base text-center tracking-[-0.64px] leading-[26px] whitespace-nowrap">
            You can also reach out to us here!
          </div>
          <div className='inline-flex items-center gap-4 flex-[0_0_auto]'>
            {socialLinks.map((social, index) => (
              <social.icon key={index} className='w-8 h-8 text-[#10203b]' />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
