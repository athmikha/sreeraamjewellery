const Trial = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 5 L25 15 L35 15 L27 22 L30 32 L20 25 L10 32 L13 22 L5 15 L15 15 Z" fill="#A0826D"/>
              </svg>
              <span className="text-sm font-medium tracking-wider text-gray-800" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>SHRI RAAM</span>
              <span className="text-xs tracking-widest text-gray-500" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>JEWELLERY</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#gold" className="text-gray-700 hover:text-gray-900 transition text-sm font-normal">Gold Jewellery</a>
            <a href="#diamond" className="text-gray-700 hover:text-gray-900 transition text-sm font-normal">Diamond Jewellery</a>
            <a href="#silver" className="text-gray-700 hover:text-gray-900 transition text-sm font-normal">Silver Jewellery</a>
            <a href="#special" className="text-gray-700 hover:text-gray-900 transition text-sm font-normal">Special Collections</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition text-sm font-normal">About Us</a>
          </div>
          
          <button className="bg-gray-700 text-white px-6 py-2 rounded text-sm font-normal hover:bg-gray-800 transition">
            Visit Our Showroom
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Trial;