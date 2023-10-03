import Image from "next/image";
import { Section } from "@/components/atoms/section";
import { CompletionToolsScreenshot } from "../../../../../../public/images";

export const CompletionTools: React.FC = () => {
  return (
    <div className="section bg-white !pb-0 xl:pl-36 pl-0 md:pl-0">
      <Section className="flex flex-col gap-6 w-full lg:px-16 xl:w-[80rem]   ">

        <h1 className="text-[2.125rem]">
          Embedded In and Fully Integrated With Your CRM
        </h1>
        <h4 className="mb-6 ">
          Have a complete arsenal of every possible info-gathering widget in a
          single panel, right from your CRM. All information and documents
          gathered enter your CRM in real time, with audit trail.
        </h4>

        <Image alt="Completion Tools" src={CompletionToolsScreenshot} />
      </Section>
    </div>
  );
};
