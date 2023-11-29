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


export const McPolicyData = {
  data: {
    policy: {
      name: 'Privacy Policy',
      description: [
        'Last Updated: [Nov 1st, 2023]',
        "Your privacy is important to us at Mctekk. We respect your privacy regarding any information we may collect from you across our website.",
        'MCTEKK SRL, a software company, is committed to protecting your privacy and ensuring that your personal information is handled with care. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of your personal information when you visit our website, use our services, or interact with us in any other way. By accessing our website or using our services, you consent to the terms outlined in this Privacy Policy.',
      ],
    },
    information: {
      name: 'Information We Collect',
      description: [
        '1.1. Personal Information We may collect personal information that you provide voluntarily, such as your name, email address, phone number, and other contact details when you communicate with us or use our services.',
        '1.2. Non-Personal Information We may automatically collect non-personal information about your interactions with our website, including your IP address, browser type, and pages visited. This information is collected using cookies, web beacons, and similar technologies to improve the quality of our website and services.',
      ],
    },
    how: {
      name: 'How We Use Your Information',
      description: [
        '2.1. Personal Information We may use your personal information to:',
      ],
      options: [
        {
          desc: 'Provide and improve our services',
        },
        {
          desc: 'Communicate with you, respond to your inquiries, and provide customer support',
        },
        {
          desc: 'Send important updates, newsletters, and marketing communications',
        },
        {
          desc: 'Conduct research and analysis to improve our products and services',
        },
      ],
      more: '2.2. Non-Personal Information: Non-personal information is used for analytical and statistical purposes to better understand user behavior and to enhance our website and services.',
    },
    sharing: {
      name: 'Sharing Your Information',
      description: [
        '3.1. Service Providers We may share your information with third-party service providers who assist us in delivering our products and services. These providers are obligated to maintain the confidentiality of your information and are restricted from using it for any purpose other than to assist us.',
        '3.2. Legal Compliance We may share your information to comply with legal requirements, enforce our policies, or protect our rights, privacy, safety, or property.',
      ],
    },
    choices: {
      name: 'Your Choices and Rights',
      description: [
        '4.1. Access and Correction You have the right to access and correct your personal information. You can request access or corrections by contacting us using the information provided in the "Contact Us" section below.',
        '4.2. Opt-Out You can opt out of receiving marketing communications by using the unsubscribe link in our emails or by contacting us directly.',
      ],
    },
    security: {
      name: 'Security',
      description: [
        'We take reasonable measures to safeguard your personal information from unauthorized access and disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee the security of your data.',
      ],
    },
    thirdPartyLinks: {
      name: 'Third-Party Links',
      description: [
        'Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of these websites before providing any personal information to them.',
      ],
    },
    changes: {
      name: 'Changes to this Privacy Policy',
      description: [
        'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated Privacy Policy on our website, and the revised policy will be effective immediately upon posting.',
      ],
    },
    contact: {
      name: 'Contact Us',
      description: [
        'If you have any questions, concerns, or requests related to this Privacy Policy, please contact us at:',
        'MCTEKK SRL - contacto@mctekk.com',
        'We take your privacy seriously and will make every effort to address your concerns and resolve any issues promptly.',
      ],
    },
  },
};
