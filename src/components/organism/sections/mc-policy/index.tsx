import React from 'react';
import { McPolicyData } from '@/model/api/policy-data/data';

const McPrivacyPolicy = () => {
  const { data } = McPolicyData;

  return (
    <div className='max-w-3xl mx-auto p-4'>
  <div className='mb-4'>
    <h1 className='text-1.5rem font-bold mb-2'>{data.policy.name}</h1>
    <p className='mb-2'>{data.policy.description[0]}</p>
    <p>{data.policy.description[1]}</p>
  </div>

  <div className='mb-4'>
    <h2 className='text-1.25rem font-bold mb-2'>{data.information.name}</h2>
    <ul>
      {data.information.description.map((item, index) => (
        <li key={index} className='mb-1'>{item}</li>
      ))}
    </ul>
  </div>

  <div className='mb-4'>
    <h2 className='text-1.25rem font-bold mb-2'>{data.how.name}</h2>
    <p className='mb-2'>{data.how.description[0]}</p>
    <ul>
      {data.how.options.map((option, index) => (
        <li key={index} className='mb-1'>{option.desc}</li>
      ))}
    </ul>
    <p>{data.how.more}</p>
  </div>

  <div className='mb-4'>
    <h2 className='text-1.25rem font-bold mb-2'>{data.sharing.name}</h2>
    <ul>
      {data.sharing.description.map((item, index) => (
        <li key={index} className='mb-1'>{item}</li>
      ))}
    </ul>
  </div>

  <div className='mb-4'>
    <h2 className='text-1.25rem font-bold mb-2'>{data.choices.name}</h2>
    <ul>
      {data.choices.description.map((item, index) => (
        <li key={index} className='mb-1'>{item}</li>
      ))}
    </ul>
  </div>

  <div className='mb-4'>
    <h2 className='text-1.25rem font-bold mb-2'>{data.security.name}</h2>
    <p className='mb-2'>{data.security.description[0]}</p>
  </div>

  <div className='mb-4'>
    <h2 className='text-1.25rem font-bold mb-2'>{data.thirdPartyLinks.name}</h2>
    <p className='mb-2'>{data.thirdPartyLinks.description[0]}</p>
  </div>

  <div className='mb-4'>
    <h2 className='text-1.25rem font-bold mb-2'>{data.changes.name}</h2>
    <p className='mb-2'>{data.changes.description[0]}</p>
  </div>

  <div className='mb-4'>
    <h2 className='text-1.25rem font-bold mb-2'>{data.contact.name}</h2>
    <ul>
      {data.contact.description.map((item, index) => (
        <li key={index} className='mb-1'>{item}</li>
      ))}
    </ul>
  </div>
</div>

  );
};

export default McPrivacyPolicy;
