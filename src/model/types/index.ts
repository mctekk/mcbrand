type Reason = {
    code: string;
    title: string;
    desc: string;
}
type WhySalesAssistHeroSection = {
    title: string;
    desc: string;
    reasons: Reason[];
  };
  type BenefitsSection = {
    title: string;
    benefits: Benefit[];
  };
  type Benefit = {
    bullet_points: BulletPoint[];
  };
  
  type BulletPoint = {
    title: string;
    desc: string;
  };
  type HowItWorksSection = {
    title: string;
    desc: string;
    actions: Action[];
}

type Kind = 'orange' | 'purple' | 'normal' | string
type Action = {
    code: string;
    title: string;
    desc: string;
    kind: Kind;
    delay: number;
}
interface Point {
  code: string;
  title: string;
  desc: string;
}
interface WhySalesAssistCompleteSalesPainlessSection {
  bullet_points: Point[];
  title: string;
  banner: {
      cta: string;
      text: string;
  }
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
export type {WhySalesAssistHeroSection,BenefitsSection,HowItWorksSection,WhySalesAssistCompleteSalesPainlessSection,Options,ShowCase};