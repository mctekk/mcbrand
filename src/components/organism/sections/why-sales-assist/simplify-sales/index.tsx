"use client"
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useProgress } from '@/model/interactions/use-progress/useProgress';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as TSwiper } from 'swiper';
import { Section } from '@/components/atoms/section';

interface WhySalesAssistSimplifySalesSection {
 
    data: {
        title: string;
        desc: string;
        options: Options;
        show_case: ShowCase[];
    };
}

interface Options {
    select: string;
    customize: string;
    add: string;
}

interface ShowCase {
    url: string;
    title: string;
    desc: string;
    option: string;
}


export const WhySalesAssistSimplifySales: React.FC<WhySalesAssistSimplifySalesSection> = ({  data }) => {
  const [ref, inView] = useInView({ initialInView: true });
  const { progressLeft, startProgress } = useProgress();
  const currentStep = useRef<number>(0);

  const currentSwiper = useRef<TSwiper | undefined>(undefined);
  const swipeInstance = currentSwiper.current;

  useEffect(() => {
    if (inView && swipeInstance) {
      swipeInstance.slideTo(0);
      startProgress()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    if (progressLeft === 0 && swipeInstance) {
      startProgress()
      if (currentStep.current >= 2) {
        currentStep.current = 0
        swipeInstance.slideTo(0)
      } else {
        currentStep.current = currentStep.current + 1;
        swipeInstance.slideNext()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressLeft, currentStep, swipeInstance]);


  const getClasses = (step: number) => {
    return classNames("w-fit h-fit flex py-2 px-4 rounded-full justify-center items-center duration-500 transition-all",
      { 'bg-orange-500': currentStep.current === step },
      { 'bg-zinc-700': currentStep.current !== step },
    )
  }

  
  function clickOnCard(step: number) {
    return () => {
      currentStep.current = step
      if (swipeInstance) swipeInstance.slideTo(step)
      startProgress();
    }
  }

  return (
    <section className='overflow-hidden section bg-zinc-800'>
      <Section className='container mx-auto text-white flex flex-col gap-6 md:gap-12'>
        <div className="">
          <h1 className="mb-4">{data.title}</h1>
          <h4 className="">{data.desc}</h4>
        </div>
        <div className="flex-grow gap-6 md:gap-12 flex flex-col">
          <div className="p-2 flex w-full justify-between items-center gap-4">
            <button className={getClasses(0)} onClick={clickOnCard(0)}>
              <span>
                1
                <span className='hidden md:inline'>. {data.options.select}</span>
              </span>
            </button>
            <div className="w-1/6 md:w-[10%] h-1 rounded-full bg-white overflow-hidden">
              {currentStep.current === 0 && <div style={{ transform: `translateX(${-progressLeft}%)` }} className='bg-orange-500 w-full h-full rounded-full'></div>}
            </div>
            <button className={getClasses(1)} onClick={clickOnCard(1)}>
              <span>
                2
                <span className='hidden md:inline'>. {data.options.customize}</span>
              </span>
            </button>
            <div className="w-1/6 md:w-[10%] h-1 rounded-full bg-white overflow-hidden">
              {currentStep.current === 1 && <div style={{ transform: `translateX(${-progressLeft}%)` }} className='bg-orange-500 w-full h-full rounded-full'></div>}
            </div>
            <button className={getClasses(2)} onClick={clickOnCard(2)}>
              <span>
                3
                <span className='hidden md:inline'>. {data.options.add}</span>
              </span>
            </button>
          </div>

          <div ref={ref} className="flex items-center">
            <Swiper
              slidesPerView={1}
           
              speed={600}
              onSwiper={sw => currentSwiper.current = sw}
              onSlideChange={ev => {
                if (ev.activeIndex === data.show_case.length + 1) {
                  clickOnCard(0)();
                }
                clickOnCard(ev.activeIndex)();
              }}
            >
              {data.show_case.map((d, i) =>(
              <SwiperSlide key={d.url} >
                <div key={d.url} className='w-full flex items-center justify-center flex-col md:flex-row gap-4 lg:gap-6'>
                  <div className="md:hidden block w-[80%]">{i + 1}. {d.option}</div>
                  
                  <div className='w-[80%] md:w-full md:px-6 relative h-[15rem] sm:h-[18rem] md:h-[20rem] lg:h-[29rem] rounded-xl md:rounded-3xl overflow-hidden flex items-center'>
                    <Image src={d.url} alt='example' width={500} height={300}/>
                  </div>

                  <div className="text-white-normal w-[80%]">
                    <h2 className='mb-2'>{d.title}</h2>
                    <p className='text-sm'>
                      {d.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Section>
    </section>
  )
}

