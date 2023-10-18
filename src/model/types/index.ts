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

export const fadeInRight= {
  hidden: {
      x: 1000
  },
  visible: {
      x: 0,
      transition: {
          duration: 2,
      }
  }
}

export const fadeIn = {
  start: {
      opacity: 0,
      scale: 0
  },
  stop: {
      opacity: 1,
      scale: 1,
      transition: {
          duration: 1,
          ease: 'linear'
      }
  }
}

export const fadeInLeft = {
  start: {
      opacity: 0,
      translateX: -100
  },
  stop: {
      opacity: 1,
      translateX: 0,
      transition: {
          duration: 1,
          ease: 'linear'
      }
  }
}

export const fadeDownLeft = {
  start: {
      opacity: 0,
      translateY: 300,
      translateX: -300
  },
  stop: {
      opacity: 1,
      translateY: 0,
      translateX: 0,
      transition: {
          duration: 1,
          ease: 'linear'
      }
  }
}

export const fadeDownRight = {
  start: {
      opacity: 0,
      translateY: 300,
      translateX: 300
  },
  stop: {
      opacity: 1,
      translateY: 0,
      translateX: 0,
      transition: {
          duration: 1,
          ease: 'linear'
      }
  }
}

export const fade = {
  start: {
      opacity: 0,
  },
  stop: {
      opacity: 1,
      transition: {
          duration: 1,
          ease: 'linear'
      }
  }
}
export type {WhySalesAssistHeroSection,BenefitsSection,HowItWorksSection,WhySalesAssistCompleteSalesPainlessSection,Options,ShowCase};