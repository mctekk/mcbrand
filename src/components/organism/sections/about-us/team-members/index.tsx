import { TeamIcon } from "@/components/atoms/team-icon";
import { Section } from '@/components/atoms/section';

interface AboutUsTeamMembers {
    team: TeamMembers[];
}

interface TeamMembers {
    name: string;
    title: string;
    social: string;
    code?: string;
}
type Props ={
    data: AboutUsTeamMembers
}
export function AboutUsTeam ({ data }:Props){
    return (
        <section className='section bg-zinc-800'>
            <Section className='flex-grow container mx-auto'>
                <div className='w-full flex items-center justify-center flex-col  text-white'>
                    {/* first row */}
                    <div className='w-full flex flex-wrap items-start justify-center gap-2'>
                        {data.team.slice(0, 4).map((team) => <TeamIcon code={team.code} key={team.social} link={team.social} name={team.name} title={team.title}/>)}
                    </div>
                    
                    {/* first row */}
                    <div className='w-full flex flex-wrap items-start justify-center gap-2'>
                        {data.team.slice(4, data.team.length).map((team) => <TeamIcon code={team.code} key={team.social} link={team.social} name={team.name} title={team.title}/>)}
                    </div>
                    
                </div>
            </Section>
        </section>
    )
}
