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

export type {WhySalesAssistHeroSection,BenefitsSection};