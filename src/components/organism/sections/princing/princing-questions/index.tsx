import { Questions } from "@/model/api/questions/data";
import { calendlyLink } from "@/model/api/routes-data/data";
import { Section } from "@/components/atoms/section";

type Props = {
  id: string;
};

export function PricingQuestions({ id }: Props) {
  return (
    <div id={id} className="bg-white ">
      <Section className="container mx-auto flex flex-col gap-6 py-6 xl:w-3/4 xl:items-center">
        <h1>{Questions.title}</h1>

        <div className="flex flex-col gap-6 mb-6 w-4/5  ">
          {Questions.questions.map((question) => {
            return (
              <div key={question.question}>
                <h4 className="text-gray-900 font-semibold">
                  {question.question}
                </h4>
                <p className="text-sm text-gray-500">{question.answer}</p>
              </div>
            );
          })}
        </div>

        <div className="xl:w-4/5 px-6 flex-wrap md:px-12 py-8 flex items-center justify-between rounded-lg bg-gradient-to-br from-[#F87129] via-[#F87129] to-[#FFA742] text-white">
          <h1 className="text-[1.25rem] font-semibold">
            {Questions.banner.text}
          </h1>
          <div className="my-6 border-2 border-transparent"></div>

          <a href={calendlyLink} target="_blank" rel="noreferrer" className="">
            <button className="p-2 px-3 font-medium rounded-md bg-white text-orange-500">
              {Questions.banner.button}
            </button>
          </a>
        </div>
      </Section>
    </div>
  );
}
