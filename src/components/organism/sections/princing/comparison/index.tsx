import { PlansInfo } from '@/model/api/princing-data/data';
import { MdCheck, MdRemove } from 'react-icons/md';
import { Section } from '@/components/atoms/section';

export function PricingComparison (){
    return (
        <div className='bg-white section'>
            <Section className=' text-gray-900 flex flex-col gap-12 py-6 justify-center items-center '>
                <div className=''>
                    <h1 className="mb-4">{PlansInfo.title}</h1>
                </div>
                <div className='relative bg-white flex-row justify-center items-center lg:w-4/6 '>
                    <div className='w-full sticky md:relative top-0'>
                        <div className='flex items-center bg-white'>
                            <div className='w-1/2 p-4 hidden md:block'></div>
                            <div className='flex w-full items-center justify-center'>
                                {PlansInfo.plans_names.map(plan => {
                                    return <div key={plan.name} className='w-1/3 md:w-1/2 p-4 text-center'>
                                        <h3 className='font-medium'>{plan.name}</h3>
                                    </div>
                                })}
                            </div>
                        </div>
                        <hr />
                    </div>
                    {PlansInfo.features.map(feature => {
                        return <div key={feature.name} className=' first:bg-white even:bg-[#F5F6F8] text-gray-900 p-4 py-6 flex flex-col md:flex-row items-center'>
                            <div className='md:w-1/2 gap-2 md:gap-0 flex items-start py-4 flex-col'>
                                <h3 className='font-medium'>{feature.name}</h3>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                {feature.perks.map(perk => {
                                    if (perk === 'yes') {
                                        return <div className='w-1/3 md:w-1/2 text-green-600 flex items-center justify-center'>
                                            <MdCheck />
                                        </div>
                                    } else if (perk === 'no') {
                                        return <div className='w-1/3 md:w-1/2 text-gray-disabled flex items-center justify-center'>
                                            <MdRemove />
                                        </div>
                                    } else {
                                        return <p className='w-1/3 md:w-1/2 text-center'>{perk}</p>
                                    }
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </Section>
            <hr />
        </div>
    )
}
