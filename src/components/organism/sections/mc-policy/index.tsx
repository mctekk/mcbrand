import React from 'react';
import { McPolicyData } from '@/model/api/policy-data/data';

const McPrivacyPolicy = () => {
  const { data } = McPolicyData;

  return (
    <div>
      <h1>{data.policy.name}</h1>
      <p>{data.policy.description[0]}</p>
      <p>{data.policy.description[1]}</p>

      <h2>{data.information.name}</h2>
      <ul>
        {data.information.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>{data.how.name}</h2>
      <p>{data.how.description[0]}</p>
      <ul>
        {data.how.options.map((option, index) => (
          <li key={index}>{option.desc}</li>
        ))}
      </ul>
      <p>{data.how.more}</p>

      <h2>{data.sharing.name}</h2>
      <ul>
        {data.sharing.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>{data.choices.name}</h2>
      <ul>
        {data.choices.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>{data.security.name}</h2>
      <p>{data.security.description[0]}</p>

      <h2>{data.thirdPartyLinks.name}</h2>
      <p>{data.thirdPartyLinks.description[0]}</p>

      <h2>{data.changes.name}</h2>
      <p>{data.changes.description[0]}</p>

      <h2>{data.contact.name}</h2>
      <ul>
        {data.contact.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default McPrivacyPolicy;
