import React from 'react';

const Requirement = ({ formData, setFormData }) => {
  const checkboxOptions = [
    { name: 'Static', value: 'static' },
    { name: 'Dynamic', value: 'dynamic' },
    { name: 'Corporate', value: 'corporate' },
    { name: 'One-Page', value: 'one-page' },
    { name: 'E-Commerce', value: 'ecommerce' },
  ];

  const specialRequirementsOptions = [
    'SEO Friendly',
    'On-Page SEO',
    'Social Media',
    'Analytics',
    'Contact Form',
  ];

  const technologyOptions = [
    'React',
    'WordPress',
    'Shopify',
    'HTML/CSS/JS',
    'Node.js',
    'Vue.js',
    'Angular',
    'Laravel',
  ];

  const pageSuggestions = [
    'Home',
    'About',
    'Services',
    'Contact',
    'Blog',
    'Portfolio',
    'Shop',
    'FAQ',
    'Testimonials',
    'Pricing',
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'websiteTypes') {
      setFormData((prev) => ({
        ...prev,
        websiteTypes: checked
          ? [...prev.websiteTypes, value]
          : prev.websiteTypes.filter((item) => item !== value),
      }));
    } else if (type === 'checkbox' && name === 'specialRequirements') {
      setFormData((prev) => ({
        ...prev,
        specialRequirements: checked
          ? [...prev.specialRequirements, value]
          : prev.specialRequirements.filter((item) => item !== value),
      }));
    } else if (type === 'checkbox' && name === 'pages') {
      setFormData((prev) => ({
        ...prev,
        pages: checked
          ? [...prev.pages, value]
          : prev.pages.filter((item) => item !== value),
      }));
    } else if (type === 'checkbox' && name === 'responsive') {
      setFormData((prev) => ({ ...prev, responsive: checked }));
    } else if (type === 'checkbox' && name === 'wantDomain') {
      setFormData((prev) => ({ ...prev, wantDomain: checked }));
    } else if (type === 'checkbox' && name === 'technologies') {
      setFormData((prev) => ({
        ...prev,
        technologies: checked
          ? [...prev.technologies, value]
          : prev.technologies.filter((item) => item !== value),
      }));
    } else if (type === 'file') {
      setFormData((prev) => ({ ...prev, attachment: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const SectionHeader = ({ icon, title }) => (
    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 bg-indigo-100 py-2 -mx-6 px-6 flex items-center rounded-md">
      <span className="h-5 w-5 text-indigo-500 mr-2">{icon}</span>
      {title}
    </h3>
  );

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="w-full max-w-5xl mx-auto">
        <div className="mb-10 text-center bg-indigo-50 py-6 rounded-lg shadow">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Craft Your Perfect Website
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 italic">
            Tell us your vision in just a few clicks
          </p>
        </div>

        <div className="space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100">
          {/* Website Types */}
          <div>
            <SectionHeader
              icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>}
              title="Website Type"
            />
            <div className="flex flex-wrap gap-4">
              {checkboxOptions.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center px-4 py-2 rounded-lg border text-sm font-medium cursor-pointer transition ${
                    formData.websiteTypes.includes(option.value)
                      ? 'bg-indigo-100 text-indigo-700 border-indigo-500'
                      : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <input type="checkbox" name="websiteTypes" value={option.value} checked={formData.websiteTypes.includes(option.value)} onChange={handleInputChange} className="sr-only" />
                  {option.name}
                </label>
              ))}
            </div>
          </div>

          {/* Number of Pages */}
          <div>
            <SectionHeader
              icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6h18M3 12h18M3 18h18" /></svg>}
              title="Number of Pages"
            />
            <input
              type="number"
              name="numberOfPages"
              value={formData.numberOfPages}
              onChange={handleInputChange}
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="e.g., 5"
            />
          </div>

          {/* Domain */}
          <div>
            <SectionHeader
              icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l9-9 9 9" /></svg>}
              title="Domain"
            />
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="wantDomain" checked={formData.wantDomain} onChange={handleInputChange} className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
              <span className="text-sm text-gray-700">I need a domain</span>
            </label>
          </div>

          {/* Page Names */}
          <div>
            <SectionHeader
              icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7v8a2 2 0 002 2h6" /></svg>}
              title="Pages"
            />
            <div className="flex flex-wrap gap-4">
              {pageSuggestions.map((page) => (
                <label
                  key={page}
                  className={`flex items-center px-4 py-2 rounded-lg border text-sm font-medium cursor-pointer transition ${
                    formData.pages.includes(page)
                      ? 'bg-indigo-100 text-indigo-700 border-indigo-500'
                      : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <input type="checkbox" name="pages" value={page} checked={formData.pages.includes(page)} onChange={handleInputChange} className="sr-only" />
                  {page}
                </label>
              ))}
            </div>
          </div>

          {/* Responsive */}
          <div>
            <SectionHeader
              icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
              title="Responsive"
            />
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="responsive" checked={formData.responsive} onChange={handleInputChange} className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
              <span className="text-sm text-gray-700">Mobile-friendly design</span>
            </label>
          </div>

          {/* Features */}
          <div>
            <SectionHeader
              icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.25 11.25l1.063.853-0.708 2.836 1.063.853" /></svg>}
              title="Features"
            />
            <div className="flex flex-wrap gap-4">
              {specialRequirementsOptions.map((req) => (
                <label
                  key={req}
                  className={`flex items-center px-4 py-2 rounded-lg border text-sm font-medium cursor-pointer transition ${
                    formData.specialRequirements.includes(req)
                      ? 'bg-indigo-100 text-indigo-700 border-indigo-500'
                      : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <input type="checkbox" name="specialRequirements" value={req} checked={formData.specialRequirements.includes(req)} onChange={handleInputChange} className="sr-only" />
                  {req}
                </label>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <SectionHeader
              icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l9 6 9-6" /></svg>}
              title="Tech Stack"
            />
            <div className="flex flex-wrap gap-4">
              {technologyOptions.map((tech) => (
                <label
                  key={tech}
                  className={`flex items-center px-4 py-2 rounded-lg border text-sm font-medium cursor-pointer transition ${
                    formData.technologies.includes(tech)
                      ? 'bg-indigo-100 text-indigo-700 border-indigo-500'
                      : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <input type="checkbox" name="technologies" value={tech} checked={formData.technologies.includes(tech)} onChange={handleInputChange} className="sr-only" />
                  {tech}
                </label>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <SectionHeader
              icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12h15m-6.75-6.75L19.5 12l-6.75 6.75" /></svg>}
              title="Notes"
            />
            <textarea
              name="extraRequirements"
              value={formData.extraRequirements}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 h-24 resize-y"
              placeholder="Any special requests?"
            />
          </div>

          {/* File Upload */}
          <div>
            <SectionHeader
              icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 13h6m-3-3v6" /></svg>}
              title="Upload"
            />
            <input
              type="file"
              name="attachment"
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm bg-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
            />
            {formData.attachment && (
              <p className="mt-2 text-xs text-gray-500 truncate">{formData.attachment.name}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirement;
