import { PricingData } from '@/model/api/princing-data/data';
import { useState, useEffect } from 'react';

function usePricing() {
  const [current, setCurrent] = useState<number>(0);
  const [currentActive, setCurrentActive] = useState<'month' | 'year'>('year');
  const handleIsActive = (step: number) => () => setCurrent(step);
  const [price, setPrice] = useState<number>(PricingData.plans[current].starting_at.year);
  const [pricePerUser, setPricePerUser] = useState<number>(PricingData.plans[current].price_per_user.year);
  const [users, setUsers] = useState<number>(PricingData.plans[current].users);

  useEffect(() => {
    if (currentActive === 'year') {
      setUsers(PricingData.plans[current].users);
      setPricePerUser(PricingData.plans[current].price_per_user.year);
      setPrice(PricingData.plans[current].starting_at.year);
    } else {
      setUsers(PricingData.plans[current].users);
      setPrice(PricingData.plans[current].starting_at.month);
      setPricePerUser(PricingData.plans[current].price_per_user.month);
    }
  }, [currentActive, current]);

  function removeUsers() {
    if (PricingData.plans[current].users === users) return;

    setUsers((prev) => prev - 1);
    setPrice((prev) => prev - pricePerUser);
  }

  function addUsers() {
    if (PricingData.plans[current].limit === users) return;
    setUsers((prev) => prev + 1);
    setPrice((prev) => prev + pricePerUser);
  }

  const getDelay = (step: number) => {
    switch (step) {
      case 0:
        return 0;
      case 1:
        return 0.3;
      case 2:
        return 0.8;
      default:
        return 0;
    }
  }

  function handleIsAnnually(status: 'month' | 'year') {
    return () => setCurrentActive(status);
  }

  return {
    current,
    setCurrent,
    currentActive,
    price,
    pricePerUser,
    users,
    removeUsers,
    addUsers,
    getDelay,
    handleIsAnnually,
    handleIsActive
  };
}

export default usePricing;
