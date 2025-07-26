import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Content Section */}
          <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
              Most Trusted URL Shortener
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The Best{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                URL Shortener
              </span>{" "}
              In the Market
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              We are the most straightforward shortener in the market. Most URL shorteners 
              will track you or ask for your details to login. We understand your needs 
              and created this privacy-focused URL shortener.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                No Tracking
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                No Registration
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Lightning Fast
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Link href="/shorten">
                <button className="group cursor-pointer relative w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started Free
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
              
              <Link href="https://github.com/webskill01" target="_blank">
                <button className="group cursor-pointer w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-purple-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 ease-out">
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                  </span>
                </button>
              </Link>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative order-1 lg:order-2">
            <div className="relative h-64 md:h-80 lg:h-96 w-full">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
              
              {/* Main Image Container */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-blue-100">
                <Image
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  src="/vector.jpg"
                  alt="URL Shortener Illustration"
                  fill={true}
                  priority
                />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">99.9% Uptime</p>
                    <p className="text-xs text-gray-500">Always Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:bg-white hover:shadow-lg rounded-xl p-6 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-sm">Instant URL shortening with global CDN</p>
            </div>
            
            <div className="text-center group hover:bg-white hover:shadow-lg rounded-xl p-6 transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Privacy First</h3>
              <p className="text-gray-600 text-sm">No tracking, no ads, no registration required</p>
            </div>
            
            <div className="text-center group hover:bg-white hover:shadow-lg rounded-xl p-6 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Analytics Ready</h3>
              <p className="text-gray-600 text-sm">Optional click tracking and detailed analytics</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
