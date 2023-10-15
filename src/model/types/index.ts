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

interface Plan {
  name: string ;
  desc: string;
  code: string;
  price_per_user: PricePer;
  starting_at: PricePer;
  perks: Perk[];
  features: Features;
  custom?: Custom;
  users: number
  limit?: number
}

interface Features {
  name: string;
  perks: string[];
}

interface Perk {
  name: string;
  perk: number | string;
}

interface PricePer {
  name?: string,
  year: number;
  month: number;
}
interface Custom {
  contact_us: string;
  pricing: string;
  users: string;
}


export type {WhySalesAssistHeroSection,BenefitsSection,HowItWorksSection,WhySalesAssistCompleteSalesPainlessSection,Options,ShowCase,Plan};