'use client';


const bgMap = {
  red: 'bg-gradient-to-b from-red-600 to-red-500',
  orange: 'bg-gradient-to-b from-orange-600 to-red-600',
  wine: 'bg-gradient-to-b from-red-700 to-red-600',
  // add more options as needed
};


export function Phone({ children, className,bg }) {
      const bgClass = bgMap[bg] || 'bg-white'; // fallback to white

  return (
     <div className={`relative mx-auto w-1/2 ${className}`}>
      <div className="relative bg-black rounded-[3rem] p-2 shadow-xl">
        <div className={`rounded-[2.5rem] overflow-hidden ${bgClass}`}>
          {/* Phone notch */}
          <div className="bg-black h-6 w-32 mx-auto rounded-b-xl relative">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-800 rounded-full"></div>
          </div>

          {/* Phone content */}
          <div className={`min-h-[600px] ${bgClass}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
