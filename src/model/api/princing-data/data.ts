import { translate } from "@/locales";

export const PricingData = {
  plans: [
    {
      name: `${translate("pricing.pricingData.plans[0].name")}`,
      desc: `${translate("pricing.pricingData.plans[0].desc")}`,
      code: `${translate("pricing.pricingData.plans[0].code")}`,
      users: 0,
      limit: 0,
      price_per_user: {
        year: 0,
        month: 0,
      },
      starting_at: {
        name: "",
        year: 399,
        month: 499,
      },
      perks: [
        {
          name: `${translate("pricing.pricingData.plans[0].perks.name")}`,
          perk: 3,
        },
      ],
      features: {
        name: `${translate("pricing.pricingData.plans[0].features.name")}`,
        perks: [
          `${translate("pricing.pricingData.plans[0].features.perks[0]")}`,
          `${translate("pricing.pricingData.plans[0].features.perks[1]")}`,
          `${translate("pricing.pricingData.plans[0].features.perks[2]")}`,
          `${translate("pricing.pricingData.plans[0].features.perks[3]")}`,
          `${translate("pricing.pricingData.plans[0].features.perks[4]")}`,
          `${translate("pricing.pricingData.plans[0].features.perks[5]")}`,
        ],
      },
    },
    {
      name: `${translate("pricing.pricingData.plans[1].name")}`,
      desc: `${translate("pricing.pricingData.plans[1].desc")}`,
      code: `${translate("pricing.pricingData.plans[1].code")}`,
      users: 0,
      limit: 0,
      price_per_user: {
        year: 0,
        month: 0,
      },
      starting_at: {
        name: "",
        year: 799,
        month: 899,
      },
      perks: [
        {
          name: `${translate("pricing.pricingData.plans[0].perks.name")}`,
          perk: 10,
        },
      ],
      features: {
        name: `${translate("pricing.pricingData.plans[1].features.name")}`,
        perks: [
          `${translate("pricing.pricingData.plans[1].features.perks[0]")}`,
          `${translate("pricing.pricingData.plans[1].features.perks[1]")}`,
          `${translate("pricing.pricingData.plans[1].features.perks[2]")}`,
          `${translate("pricing.pricingData.plans[1].features.perks[3]")}`,
          `${translate("pricing.pricingData.plans[1].features.perks[4]")}`,
          `${translate("pricing.pricingData.plans[1].features.perks[5]")}`,
        ],
      },
    },
    {
      name: `${translate("pricing.pricingData.plans[1].name")}`,
      desc: `${translate("pricing.pricingData.plans[1].desc")}`,
      code: `${translate("pricing.pricingData.plans[1].code")}`,
      users: 0,
      limit: 0,
      price_per_user: {
        year: 0,
        month: 0,
      },
      starting_at: {
        year: 0,
        month: 0,
      },
      custom: {
        contact_us: `${translate("pricing.pricingData.plans[2].custom.contact_us")}`,
        pricing: `${translate("pricing.pricingData.plans[2].custom.pricing")}`,
        users: `${translate("pricing.pricingData.plans[2].custom.users")}`,
      },
      perks: [
        {
          name: `${translate("pricing.pricingData.plans[0].perks.name")}`,
          perk: "Unlimited",
        },
      ],
      features: {
        name: `${translate("pricing.pricingData.plans[2].features.name")}`,
        perks: [
          `${translate("pricing.pricingData.plans[2].features.perks[0]")}`,
          `${translate("pricing.pricingData.plans[2].features.perks[1]")}`,
        ],
      },
    },
  ],
};

export const PlansInfo = {
  title: "Full Feature Comparison",
  plans_names: [
    { name: `${translate('pricing.pricingData.plans_names[0].name')}`, },
    { name:`${translate('pricing.pricingData.plans_names[1].name')}`,  },
    { name: `${translate('pricing.pricingData.plans_names[2].name')}`,  },
  ],
  features: [
    { name:`${translate('pricing.pricingData.features[0].name')}`, perks: ["yes", "yes", "yes"] },
    { name:`${translate('pricing.pricingData.features[1].name')}`, perks: ["yes", "yes", "yes"] },
    { name:`${translate('pricing.pricingData.features[2].name')}`, perks: ["yes", "yes", "yes"] },
    { name:`${translate('pricing.pricingData.features[3].name')}`, perks: ["no", "yes", "yes"] },
    { name: `${translate('pricing.pricingData.features[4].name')}`, perks: ["yes", "yes", "yes"] },
    { name: `${translate('pricing.pricingData.features[5].name')}`, perks: ["yes", "yes", "yes"] },
    { name: `${translate('pricing.pricingData.features[6].name')}`, perks: ["yes", "yes", "yes"] },
    { name: `${translate('pricing.pricingData.features[7].name')}`, perks: ["yes", "yes", "yes"] },
    { name: `${translate('pricing.pricingData.features[8].name')}`, perks: ["3", "10", "unlimited"] },
    { name: `${translate('pricing.pricingData.features[9].name')}`, perks: ["no", "yes", "yes"] },
    { name: `${translate('pricing.pricingData.features[10].name')}`, perks: ["no", "yes", "yes"] },
    { name: `${translate('pricing.pricingData.features[11].name')}`, perks: ["no", "yes", "yes"] },
    { name: `${translate('pricing.pricingData.features[12].name')}`, perks: ["no", "no", "yes"] },
    { name: `${translate('pricing.pricingData.features[13].name')}`, perks: ["no", "yes", "yes"] },
    { name: `${translate('pricing.pricingData.features[14].name')}`, perks: ["no", "yes", "yes"] },
    {
      name: `${translate('pricing.pricingData.features[15].name')}`,
      perks: ["yes", "yes", "yes"],
    },
    { name:`${translate('pricing.pricingData.features[16].name')}`, perks: ["yes", "yes", "yes"] },
    { name: `${translate('pricing.pricingData.features[17].name')}`, perks: ["yes", "yes", "yes"] },
    { name: `${translate('pricing.pricingData.features[18].name')}`, perks: ["yes", "yes", "yes"] },
    { name: `${translate('pricing.pricingData.features[19].name')}`, perks: ["yes", "yes", "yes"] },
    { name: `${translate('pricing.pricingData.features[20].name')}`, perks: ["no", "yes", "yes"] },
    {
      name: `${translate('pricing.pricingData.features[21].name')}`,
      perks: [
        "Onboarding & Email Support",
        "1:1 Team Trainings & CSM",
        "Dedicated Account Management",
      ],
    },
  ],
};
