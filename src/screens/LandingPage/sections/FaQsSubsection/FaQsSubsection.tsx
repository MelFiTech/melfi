import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../../components/ui/accordion';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';

export const FaQsSubsection = (): React.ReactElement => {
  const faqData = [
    {
      id: 'item-1',
      question: 'What services do you offer?',
      answer:
        'We offer UI/UX design, web & mobile development, branding & identity, and product strategy — from discovery to launch.',
    },
    {
      id: 'item-2',
      question: 'What does your design process look like?',
      answer:
        'Discovery → Research → Wireframes → High-fi design → Prototype → Handoff → Launch. You’re involved at every step.',
    },
    {
      id: 'item-3',
      question: 'How long does a typical project take?',
      answer:
        'Small projects: 2–4 weeks. Mid-size products: 6–12 weeks. Complex platforms vary — we give a clear estimate after discovery.',
    },
    {
      id: 'item-4',
      question: 'How do you price projects?',
      answer:
        ' Fixed-price for defined scopes, or retainer/monthly for ongoing support. You’ll get a transparent proposal after discovery.',
    },
    {
      id: 'item-5',
      question: 'Do you require a deposit?',
      answer:
        'Yes — typically 40% up front, 30% at milestone, 30% on delivery (flexible for long-term partners).',
    },
    {
      id: 'item-6',
      question: 'How many revisions are included?',
      answer: 'Two rounds are included by default; more can be added to the scope if needed.',
    },
    {
      id: 'item-7',
      question: 'Who owns the design and code?',
      answer: 'You own the final deliverables once payment is complete.',
    },
    {
      id: 'item-8',
      question: 'Do you provide post-launch support?',
      answer:
        'Yes — we offer ongoing support and maintenance retainers for updates, fixes, and optimizations.',
    },
    {
      id: 'item-9',
      question: 'Can you guarantee conversions or specific numbers?',
      answer:
        'We can’t promise exact figures, but we design for measurable KPIs (conversion, retention, AOV) and test to improve results.',
    },
    {
      id: 'item-10',
      question: 'Do you sign NDAs?',
      answer: 'Yes — we’re happy to sign NDAs for early-stage products and sensitive projects.',
    },
  ];

  return (
    <section id='faqs' className='relative w-full h-[1276px] bg-[#001226] scroll-mt-28'>
      <div className='flex flex-col items-center justify-center gap-2 absolute top-[100px] left-1/2 transform -translate-x-1/2'>
        <Badge className="inline-flex items-center justify-center gap-2.5 px-3 py-px bg-[#ff9b39] rounded-[50px] text-white text-xs [font-family:'Sora',Helvetica] font-normal tracking-[0.12px] leading-[26px] hover:bg-[#ff9b39]">
          FAQs
        </Badge>

        <div className='flex flex-col items-start gap-2 w-full'>
          <h2 className='w-[320px] md:w-[632px] mt-[-1.00px] font-medium text-white md:text-4xl text-2xl text-center tracking-[0] leading-[normal]'>
            Are you Lost? We are here for you!
          </h2>

          <p className="self-stretch opacity-50 [font-family:'Sora',Helvetica] font-normal text-white md:text-base text-sm text-center tracking-[0.16px] leading-[26px]">
            A quick guide to the questions we get asked the most.
          </p>
        </div>
      </div>

      <div className='flex flex-col w-full md:w-[915px] items-start absolute top-[274px] left-1/2 transform -translate-x-1/2'>
        <Accordion type='single' collapsible defaultValue='item-1' className='w-full'>
          {faqData.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className='border-b border-[#0a2848] px-4'>
              <AccordionTrigger className="flex items-center justify-between py-6 px-0 text-white text-xl [font-family:'Sora',Helvetica] font-normal tracking-[0] leading-[normal] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              {faq.answer && (
                <AccordionContent className='pb-6 px-0'>
                  <div className='flex items-center gap-2.5'>
                    <p className="flex-1 mt-[-1.00px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff99] md:text-base text-sm   tracking-[0] leading-[31px]">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>

        <div className='flex flex-col items-start gap-4 px-4 py-0 w-full border-b border-[#0a2848]'>
          <div className='flex items-center justify-between px-0 py-6 w-full'>
            <div className="[font-family:'Sora',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
              Can&apos;t find help here?
            </div>

            <Button className='inline-flex px-6 py-4 bg-white items-center justify-center gap-2.5 rounded-[60px] hover:bg-gray-100 h-auto'>
              <span className="mt-[-0.50px] [font-family:'Sora',Helvetica] font-semibold text-neutral-900 text-lg tracking-[0] leading-[normal]">
                Contact Us
              </span>

              <ArrowUpRight className='w-6 h-6 text-neutral-900' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
