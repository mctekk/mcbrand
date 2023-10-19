import { translate } from "@/locales";

export const PolicyData = {
  data: {
    policy: {
      name: `${translate("PolicyData.data.policy.name")}`,
      description: [
        `${translate("PolicyData.data.policy.description[0]")}`,
        `${translate("PolicyData.data.policy.description[1]")}`,
      ],
    },
    information: {
      name: `${translate("PolicyData.data.information.name")}`,
      description: [
        `${translate("PolicyData.data.information.description[0]")}`,
        `${translate("PolicyData.data.information.description[1]")}`,
        `${translate("PolicyData.data.information.description[2]")}`,
        `${translate("PolicyData.data.information.description[3]")}`,
        `${translate("PolicyData.data.information.description[4]")}`,
      ],
    },
    how: {
      name: `${translate("PolicyData.data.how.name")}`,
      description: [`${translate("PolicyData.data.how.description[0]")}`],
      options: [
        {
          desc: `${translate("PolicyData.data.how.options[0].desc")}`,
        },
        {
          desc: `${translate("PolicyData.data.how.options[1].desc")}`,
        },
        {
          desc: `${translate("PolicyData.data.how.options[2].desc")}`,
        },
        {
          desc: `${translate("PolicyData.data.how.options[3].desc")}`,
          options: [
            `${translate("PolicyData.data.how.options[3].options[0]")}`,
            `${translate("PolicyData.data.how.options[3].options[1]")}`,
            `${translate("PolicyData.data.how.options[3].options[2]")}`,
            `${translate("PolicyData.data.how.options[3].options[3]")}`,
            `${translate("PolicyData.data.how.options[3].options[4]")}`,
          ],
        },
      ],
      more: `${translate("PolicyData.data.how.more")}`,
    },
    payment: {
      name: `${translate("PolicyData.data.payment.name")}`,
      description: [`${translate("PolicyData.data.payment.description")}`],
      links: ["https://stripe.com/us/checkout/legal."],
    },
    control: {
      name: `${translate("PolicyData.data.control.name")}`,
      description: [
        `${translate("PolicyData.data.control.description[0]")}`,
        `${translate("PolicyData.data.control.description[1]")}`,
        `${translate("PolicyData.data.control.description[2]")}`,
        `${translate("PolicyData.data.control.description[3]")}`,
      ],
    },
    personal: {
      name: `${translate("PolicyData.data.personal.name")}`,
      description: [
        `${translate("PolicyData.data.personal.description[0]")}`,
        `${translate("PolicyData.data.personal.description[1]")}`,
      ],
    },
    changes: {
      name: `${translate("PolicyData.data.changes.name")}`,
      description: [`${translate("PolicyData.data.changes.description[0]")}`],
    },
    under_age: {
      name: `${translate("PolicyData.data.under_age.name")}`,
      description: [`${translate("PolicyData.data.under_age.description[0]")}`],
    },
    california: {
      name: `${translate("PolicyData.data.california.name")}`,
      description: [
        `${translate("PolicyData.data.california.description[0]")}`,
        `${translate("PolicyData.data.california.description[1]")}`,
      ],
    },
    security: {
      name: `${translate("PolicyData.data.security.name")}`,
      description: [`${translate("PolicyData.data.security.description[0]")}`],
    },
    transfer: {
      name: `${translate("PolicyData.data.transfer.name")}`,
      description: [`${translate("PolicyData.data.transfer.description[0]")}`],
    },
    contact: {
      name: `${translate("PolicyData.data.contact.name")}`,
      description: [`${translate("PolicyData.data.contact.description[0]")}`],
      links: ["help@salesassist.io"],
    },
  },
};
