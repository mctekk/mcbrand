import { translate } from "@/locales";

export const PricingData = {
  plans: [
    {
      name: `${translate("pricing.pricingData.plans[0].name")}`,
      desc: `${translate("pricing.pricingData.plans[0].desc")}`,
      code:  "ESS",
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
      code: "ADVC",
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
          name: `${translate("pricing.pricingData.plans[1].perks[0].name")}`,
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
      name: `${translate("pricing.pricingData.plans[2].name")}`,
      desc: `${translate("pricing.pricingData.plans[2].desc")}`,
      code: "ENTPRS",
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
          name: `${translate("pricing.pricingData.plans[2].perks[0].name")}`,
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
    { name: "Essential", price: "$600" },
    { name: "Advanced", price: "$3600" },
    { name: "Enterprise", price: "$4800" },
  ],
  features: [
    { name: "Action Dashboard", perks: ["yes", "yes", "yes"] },
    { name: "Template Gallery", perks: ["yes", "yes", "yes"] },
    { name: "Action Builder", perks: ["yes", "yes", "yes"] },
    { name: "Workflow Automation", perks: ["no", "yes", "yes"] },
    { name: "Updates & Alerts", perks: ["yes", "yes", "yes"] },
    { name: "Action Open Tracking", perks: ["yes", "yes", "yes"] },
    { name: "Action Submit Tracking", perks: ["yes", "yes", "yes"] },
    { name: "Activity Timeline", perks: ["yes", "yes", "yes"] },
    { name: "Sales Actions", perks: ["3", "10", "unlimited"] },
    { name: "eSignatures", perks: ["no", "yes", "yes"] },
    { name: "OCR Machine Learning", perks: ["no", "yes", "yes"] },
    { name: "Autofilled Forms and PDFs", perks: ["no", "yes", "yes"] },
    { name: "Custom Widgets", perks: ["no", "no", "yes"] },
    { name: "Two-way CRM Sync", perks: ["no", "yes", "yes"] },
    { name: "Multiple Branches", perks: ["no", "yes", "yes"] },
    {
      name: "Native Mobile Android and iOS apps",
      perks: ["yes", "yes", "yes"],
    },
    { name: "CRM Chrome Extension", perks: ["yes", "yes", "yes"] },
    { name: "API Access", perks: ["yes", "yes", "yes"] },
    { name: "Webhooks", perks: ["yes", "yes", "yes"] },
    { name: "Live Chat Support", perks: ["yes", "yes", "yes"] },
    { name: "Phone Support", perks: ["no", "yes", "yes"] },
    {
      name: "Onboarding Support",
      perks: [
        "Onboarding & Email Support",
        "1:1 Team Trainings & CSM",
        "Dedicated Account Management",
      ],
    },
  ],
};
