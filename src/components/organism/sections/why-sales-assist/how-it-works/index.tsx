"use client"
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { AnimatedCard } from '@/components/atoms/animations/animatedCard';
import { Card } from '@/components/atoms/card';
import { useResponsive } from '@/model/interactions/use-responsive/useResponsive';
import { useInView } from 'react-intersection-observer'
import { InteractAnimation } from '@/components/atoms/animations/HowitWorksAnimations/Interact';
import { CustomerAnimation } from '@/components/atoms/animations/HowitWorksAnimations/Customer';
import { SalesAnimation } from '@/components/atoms/animations/HowitWorksAnimations/Sales';
import { Section } from '@/components/atoms/section';
import { HowItWorksSection } from '@/model/types';

let timer: NodeJS.Timer | any;

interface HowProps {
    data: HowItWorksSection;

  }
  export function HowItWorks({ data }: HowProps) {
    const { isDesktop, isMobile, isTablet } = useResponsive();
    const currentCard = useRef(0);
    const [ref, inView] = useInView();
    const [progressLeft, setProgress] = useState(1);

    function startProgress() {
        clearInterval(timer); 
        let interval = 100;
        timer = setInterval(() => {
            interval--
            if (interval >= 0) {
                setProgress(interval)
                return
            }
            clearInterval(timer)
            interval = 100;
        }, 100)
    }

    useEffect(() => {
        if (inView) {
            currentCard.current = 0
            startProgress();
        } 

    }, [inView]);

    useEffect(() => {
        if (progressLeft === 0) {
            startProgress()
            if (currentCard.current >= 2) {
                currentCard.current = 0
            } else {
                currentCard.current = currentCard.current + 1;
            }
        }
       
    }, [progressLeft]);

    function clickOnCard(card: number) {
        return () => {
            currentCard.current = card
            startProgress();
        }
    }

    
    return (
        <main ref={ref} className='section overflow-x-auto bg-white'>
            <Section  >
                <div className='px-4 md:px-0 mb-2 xl:ml-60'>
                    <h1 className="mb-4 text-black">{data.title}</h1>
                    <h4 className="text-gray-500">{data.desc}</h4>
                </div>

                {isDesktop && <div className='flex flex-col lg:flex-row py-6 gap-12 xl:ml-60'>
                    <div className='flex flex-col gap-6 w-fit'>
                        {
                            data.actions.map((k, i) => {
                                return <motion.div
                                    initial={{ x: -500, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: k.delay
                                    }}
                                    viewport={{ once: true }}
                                    key={i}>
                                    <AnimatedCard
                                        isActive={currentCard.current === i}
                                        key={i}
                                        progress={progressLeft}
                                        title={k.title}
                                        sub={k.desc}
                                        code={k.code}
                                        onClick={clickOnCard(i)}
                                    />
                                </motion.div>
                            })
                        }
                    </div>

                    <div className='w-fit flex items-center justify-start'>
                        <div className='bg-gray-100 h-full md:w-[27rem] max-w-md mx-auto rounded-lg flex items-center justify-start p-4'>
                            {inView && currentCard.current === 0 && <InteractAnimation />}
                            {inView && currentCard.current === 1 && <CustomerAnimation />}
                            {inView && currentCard.current === 2 && <SalesAnimation />}
                        </div>
                    </div>
                </div>}

                {(isMobile || isTablet) && <div className='relative overflow-y-hidden overflow-x-auto flex px-4'>
                    {data.actions.map((k, i) => {
                        return <Card
                            kind={k.kind}
                            key={i}
                            title={k.title}
                            sub={k.desc}
                            className='shadow'
                        >
                            {[
                                <InteractAnimation key='InteractAnimation' />,
                                <CustomerAnimation key='CustomerAnimation' />,
                                <SalesAnimation key='SalesAnimation' />][i]
                            }
                        </Card>
                    })}
                </div>}
            </Section>
        </main>
    )
}
