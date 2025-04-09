import React from 'react';

const PricingDetails = ({ formData }) => {
  const calculatePrice = () => {
    let total = 0;

    // Website Types
    const websiteTypeCosts = {
      static: 500,
      dynamic: 1000,
      corporate: 1200,
      'one-page': 400,
      ecommerce: 1500,
    };
    formData.websiteTypes.forEach((type) => {
      total += websiteTypeCosts[type] || 0;
    });

    // Number of Pages
    total += (parseInt(formData.numberOfPages) || 0) * 50;

    // Domain
    if (formData.wantDomain) total += 20;

    // Pages
    total += formData.pages.length * 30;

    // Responsive
    if (formData.responsive) total += 200;

    // Special Requirements
    total += formData.specialRequirements.length * 100;

    // Technologies
    total += formData.technologies.length * 150;

    // Extra Requirements
    if (formData.extraRequirements.trim()) total += 50;

    // Attachment
    // if (formData.attachment) total += 30;

    return total;
  };

  const totalPrice = calculatePrice();

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full max-w-xl mx-auto">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight">
            Your Project Summary
          </h3>
          <p className="mt-2 text-sm text-gray-500 italic font-light">
            Here’s everything you’ve chosen
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 space-y-5">
          {formData.websiteTypes.length === 0 &&
          formData.numberOfPages === '' &&
          !formData.wantDomain &&
          formData.pages.length === 0 &&
          !formData.responsive &&
          formData.specialRequirements.length === 0 &&
          formData.technologies.length === 0 &&
          formData.extraRequirements === '' &&
          !formData.attachment ? (
            <p className="text-gray-500 text-sm text-center italic">
              Nothing selected yet
            </p>
          ) : (
            <div className="space-y-4">
              {formData.websiteTypes.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                    <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Website Type
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {formData.websiteTypes.map((type) => (
                      <li
                        key={type}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full"
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {formData.numberOfPages && (
                <div>
                  <p className="text-sm font-semibold text-gray-800 flex items-center">
                    <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Pages
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{formData.numberOfPages}</p>
                </div>
              )}
              {formData.wantDomain && (
                <div>
                  <p className="text-sm font-semibold text-gray-800 flex items-center">
                    <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 2v9a2 2 0 002 2h4a2 2 0 002-2v-9" />
                    </svg>
                    Domain
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Yes</p>
                </div>
              )}
              {formData.pages.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                    <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Page Names
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {formData.pages.map((page) => (
                      <li
                        key={page}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full"
                      >
                        {page}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {formData.responsive && (
                <div>
                  <p className="text-sm font-semibold text-gray-800 flex items-center">
                    <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Responsive
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Yes</p>
                </div>
              )}
              {formData.specialRequirements.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                    <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 9.143l-5.714 4.286L17.571 21 12 17.143 6.429 21 8.714 13.571 3 9.143l5.714-4.286L11 3z" />
                    </svg>
                    Features
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {formData.specialRequirements.map((req) => (
                      <li
                        key={req}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full"
                      >
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {formData.technologies.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                    <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Tech Stack
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {formData.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {formData.extraRequirements && (
                <div>
                  <p className="text-sm font-semibold text-gray-800 flex items-center">
                    <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Notes
                  </p>
                  <p className="text-sm text-gray-600 mt-1 break-words">
                    {formData.extraRequirements}
                  </p>
                </div>
              )}
              {formData.attachment && (
                <div>
                  <p className="text-sm font-semibold text-gray-800 flex items-center">
                    <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    File
                  </p>
                  <p className="text-sm text-gray-600 mt-1 truncate">
                    {formData.attachment.name}
                  </p>
                </div>
              )}
              {/* Total Price */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-lg font-bold text-gray-800 flex items-center justify-between">
                  <span className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Estimated Total
                  </span>
                  <span className="text-indigo-600">${totalPrice.toLocaleString()}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1 italic">*Prices are estimates and may vary based on final requirements.</p>
              </div>
              <button 
               className='bg-blue-500 rounded-2xl text-white w-40 h-10 hover:bg-blue-600'>
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;