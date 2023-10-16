"use client"
import Image from 'next/image';
import { useResponsive } from '@/model/interactions/use-responsive';
import { AnimatedWorldMap } from '@/components/atoms/animations/world-map';
import { Section } from '@/components/atoms/section';
import { AboutUsOurTeam } from '@/model/types';
type Props={
    data: AboutUsOurTeam
}
export function AboutUsOurTeam({ data }: Props){
    const { isDesktop, isMobile, isTablet } = useResponsive();
    return (
        <section className='section bg-zinc-800'>
            <Section className='flex-grow gap-6 flex flex-col xl:w-2/3'>
                <h1 className='text-white md:text-[3rem] font-semibold mb-4'>{data.title}</h1>
                <h4 className='text-gray-500 md:text-[1.25rem] mb-4'>{data.desc}</h4>
                <div className='w-full flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 text-white md:h-[30rem]'>
                    <div className='w-full md:w-[30%] text-white flex flex-col justify-center order-2 md:order-1'>
                        <h3 className='font-light'>
                            <b className='mr-2 text-[2rem] font-bold'>{data.team.members}</b>
                            {data.team.title}
                        </h3>
                        <h3 className='font-light'>
                            {data.founded.title}
                            <b className='ml-2 text-[2rem] font-bold'>{data.founded.year}</b>
                        </h3>
                        <h3 className='font-light'>
                            <b className='mr-2 text-[2rem] font-bold'>{data.countries.countries}</b>
                            {data.countries.title}
                        </h3>
                    </div>
                    <div className='w-full md:w-[70%] order-1 md:order-2 flex items-center'>
                        {(isMobile || isTablet) && <Image src="/images/SA__World Map.svg" alt='map' width={500} height={200}/>}
                        {isDesktop && <AnimatedWorldMap /> }
                    </div>
                </div>
                <div className='w-full flex items-center justify-center mt-6'>
                    <div className='w-[20%] md:w-[12%] rounded-full bg-orange-500 p-1'></div>
                </div>
            </Section>
        </section>
    )
}
