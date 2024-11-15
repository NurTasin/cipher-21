import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-green-500 border-t border-green-500 py-4">
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <img src="https://cse.mbstu.ac.bd/front/theme1/images/default/logo.png" alt="CSE Logo" className='w-48 h-16' />
              </div>
              <div className="text-center text-sm">
                <p>Crafted with ❤️ by <a href="https://github.com/NurTasin" className="underline">Tasin</a></p>
              </div>
              <div className="text-center sm:text-right text-sm">
                <address className="not-italic mb-1">
                  <p>Santosh, Tangail, Bangladesh</p>
                  <p>cse@mbstu.ac.bd</p>
                </address>
                <p>&copy; {new Date().getFullYear()} Cipher-21. All rights reserved</p>
              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer;
