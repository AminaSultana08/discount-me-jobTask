import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Social Media */}
          <div className="space-y-8">
            <img
              className="h-20"
              src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/FX5ATkass4-no-background-VmcZHSX7xE4ng29ATNphGUdb388fxH.png"
              alt="Company name"
            />
            <p className="text-sm leading-6 text-gray-600">
              Making football look better to the world and a more respectful game.
            </p>
            <div className="flex space-x-6">
              {/* Social Media Icons */}
              {[
                { name: 'Facebook', link: '#', icon: 'facebook' },
                { name: 'The Team is on Fire', link: '#', icon: 'fire' },
                { name: 'X', link: '#', icon: 'x' },
                { name: 'GitHub', link: '#', icon: 'github' },
                { name: 'YouTube', link: '#', icon: 'youtube' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className={`text-gray-400 hover:text-gray-500`}
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  {/* Placeholder for actual SVG icons */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 0C18.627 0 24 5.373 24 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {[
              {
                title: 'Solutions',
                links: ['Marketing', 'Analytics', 'Commerce', 'Insights'],
              },
              {
                title: 'Support',
                links: ['Pricing', 'Documentation', 'Guides', 'API Status'],
              },
              {
                title: 'Company',
                links: ['About', 'Blog', 'Jobs', 'Press', 'Partners'],
              },
              {
                title: 'Legal',
                links: ['Claim', 'Privacy', 'Terms'],
              },
            ].map((section, index) => (
              <div key={index} className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    {section.title}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
