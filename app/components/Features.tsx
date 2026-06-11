import React from 'react';
import { Sparkles, Shield, Smartphone, Sliders } from 'lucide-react'; // Modern, clean icons

const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
    title: "Cutting-Edge Performance",
    description: "Built on modern architecture to ensure lightning-fast loading speeds and snappy interactions."
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-600" />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security measures integrated at every layer to keep data safe."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
    title: "Seamless Responsiveness",
    description: "Meticulously optimized to deliver a beautiful, fluid experience from mobile screens to large desktops."
  },
  {
    icon: <Sliders className="w-6 h-6 text-indigo-600" />,
    title: "Fully Customizable",
    description: "Flexible configuration options that adapt perfectly to your team's specific requirements."
  }
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8" id="features">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Designed for Modern Development
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A powerful suite of capabilities engineered to help your team collaborate faster and scale effortlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}