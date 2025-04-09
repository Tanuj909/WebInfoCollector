import React, { useState } from 'react';
import Requirement from './Requirement';
import PricingDetails from './PricingDetails';

const RequirementGathering = () => {
  const [formData, setFormData] = useState({
    websiteTypes: [],
    numberOfPages: '',
    wantDomain: false,
    pages: [],
    responsive: false,
    specialRequirements: [],
    technologies: [],
    extraRequirements: '',
    attachment: null,
  });

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 bg-white min-h-screen">
      {/* Requirement - 70% */}
      <div className="lg:basis-[70%] w-full">
        <Requirement formData={formData} setFormData={setFormData} />
      </div>
      {/* PricingDetails - 30% */}
      <div className="lg:basis-[30%] w-full">
        <PricingDetails formData={formData} />
      </div>
    </div>
  );
};

export default RequirementGathering;