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

export type {WhySalesAssistHeroSection,BenefitsSection,HowItWorksSection};