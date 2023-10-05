import Image from 'next/image';
import { Section } from '@/components/atoms/section';
import { translate } from '@/locales';


export default function CompletionProcess() {
  return (
    <section className="section bg-white ">
      <Section className="flex flex-col lg:flex-row gap-4 md:gap-20 items-center">
        <div className="flex flex-col gap-6 xl:w-5/12 xl:ml-72 ">
          <h1 >
            {translate("home.completionprocess.title")}
          </h1>
          <h4>
          {translate("home.completionprocess.desc")}
          </h4>
        </div>
        <div className="shrink-0 w-96 h-96 md:w-[27.5rem] md:h-[27.5rem] rounded-lg drop-shadow-sa overflow-hidden">
          <Image alt="Completion Process Example" src="/images/completion-process-example.png" width={1000} height={96} />
        </div>
      </Section>
    </section>
  )
}
