'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


import { Section } from '@/components/atoms/section';
import { Solid } from '@/components/atoms/button/solid';

export default function Sales({ }){
  return (
    <section className='section flex flex-col relative bg-white h-auto '>
      <Section>
        <div className='container md:gap-24 mx-auto flex-col md:flex-row justify-start items-center md:items-start h-full flex '>
          <div className='xl:w-1/3 md:w-1/2 xl:ml-64 '>
            <h1>Let’s Simplify How You Gather Info from Customers</h1>

            <a href='https://calendly.com/salesasssit/30min' target="_blank" rel="noreferrer">
              <Solid className='px-2 mt-4 lg:px-3 bg-orange-500'>
                Book Demo
              </Solid>
            </a>
          </div>
          <div className='lg:flex-grow flex-grow-0 relative flex items-center justify-center w-fit mt-14 lg:mt-0'>
            <div className='relative w-fit'>
              {/* phone */}
              <div className='absolute z-10 bottom-0 -left-6 md:-left-16 w-44 h-40 md:w-48 md:h-auto  hidden md:block'>
                <motion.div
                  initial={{ opacity: 0, x: -100, y: 100 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 1.5,
                    delay: .7
                  }}
                  viewport={{ once: true }}
                  className="relative h-full w-32 lg:w-[100%]"
                >
                  <Image  src='/images/mobile.png'  alt='app' width={200} height={200} />
                </motion.div>
              </div>
              <div className='md:hidden'>
                <Image src='/images/mobile.png' alt='app' width={400} height={200}/>
              </div>
              {/* PC */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1
                }}
                viewport={{ once: true }}
              >
                <div className='w-600 h-auto relative lg:w-full md:h-full hidden md:block xl:mr-11'>
                  <Image src='/images/pc.png' alt='desktop' width={550} height={200}/>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
    </section>
  )
}
