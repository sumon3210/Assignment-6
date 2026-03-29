import React, { useState } from 'react';
import {
  ShoppingCart, Play, Menu, X, Check,
  UserPlus, Package, Rocket, Globe,
  Laptop, Zap, Award, Shield, Cpu
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Products', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  const products = [
    {
      title: "AI Writing Pro", price: "$29", period: "/Mo", tag: "Best Seller",
      tagColor: "bg-orange-100 text-orange-600", icon: <Zap size={24} className="text-orange-500" />,
      features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"]
    },
    {
      title: "Design Templates Pack", price: "$49", period: "/One-Time", tag: "Popular",
      tagColor: "bg-blue-100 text-blue-600", icon: <Laptop size={24} className="text-blue-500" />,
      features: ["2000+ templates", "Monthly updates", "Commercial license"]
    },
    {
      title: "Premium Stock Assets", price: "$19", period: "/Mo", tag: "New",
      tagColor: "bg-green-100 text-green-600", icon: <Globe size={24} className="text-green-500" />,
      features: ["10M+ assets", "Commercial use", "No attribution"]
    },
    {
      title: "Automation Toolkit", price: "$79", period: "/Mo", tag: "Popular",
      tagColor: "bg-blue-100 text-blue-600", icon: <Cpu size={24} className="text-indigo-500" />,
      features: ["50+ automations", "API access", "Custom workflows"]
    },
    {
      title: "Resume Builder Pro", price: "$15", period: "/One-Time", tag: "New",
      tagColor: "bg-green-100 text-green-600", icon: <Award size={24} className="text-emerald-500" />,
      features: ["100+ templates", "ATS optimization", "Export to PDF"]
    },
    {
      title: "Social Media Kit", price: "$39", period: "/Mo", tag: "Best Seller",
      tagColor: "bg-orange-100 text-orange-600", icon: <Shield size={24} className="text-rose-500" />,
      features: ["5000+ assets", "Scheduler included", "Analytics dashboard"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
     
      {/* --- 1. NAVBAR --- */}
      <nav className="flex items-center justify-between px-6 py-6 mx-auto max-w-7xl lg:px-12 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="text-3xl font-bold text-[#7c3aed] tracking-tight transition-transform hover:scale-105 cursor-pointer">DigiTools</div>
        <div className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-gray-600">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-[#7c3aed] transition-colors">{link.name}</a>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-600 hover:text-[#7c3aed] transition-colors"><ShoppingCart size={20} /></button>
          <button className="text-[15px] font-semibold text-gray-700">Login</button>
          <button className="px-6 py-2.5 bg-[#7c3aed] text-white rounded-full text-[15px] font-semibold hover:bg-[#6d28d9] shadow-md shadow-purple-100 transition-all">Get Started</button>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 p-2">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[80px] bg-white z-40 px-6 py-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="block text-xl font-medium text-gray-700 border-b pb-2">{link.name}</a>
          ))}
          <div className="pt-6 flex flex-col gap-4">
            <button className="w-full py-4 border border-gray-200 rounded-xl font-bold text-gray-700">Login</button>
            <button className="w-full py-4 bg-[#7c3aed] text-white rounded-xl font-bold shadow-lg shadow-purple-100">Get Started</button>
          </div>
        </div>
      )}

      {/* --- 2. HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-10 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Text Area (Order 1 on Mobile) */}
            <div className="order-1 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#ede9fe] text-[#7c3aed] text-[13px] font-medium border border-[#ddd6fe] mb-8">
                <span className="w-2 h-2 rounded-full bg-[#7c3aed] mr-2 animate-pulse"></span>
                New: AI-Powered Tools Available
              </div>
              <h1 className="text-[40px] md:text-[64px] lg:text-[72px] font-extrabold text-[#1e293b] leading-[1.1] mb-6">
                Supercharge Your <br className="hidden md:block" /> Digital Workflow
              </h1>
              <p className="text-gray-500 text-base md:text-[18px] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-4">
                Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
              </p>
              <div className="text-gray-400 font-medium mb-10 hover:underline cursor-pointer">Explore Products</div>
            </div>

            {/* Mobile Image (Order 2 - Only visible on Mobile/Tablet) */}
            <div className="order-2 lg:hidden w-full mb-10">
              <div className="rounded-[32px] overflow-hidden shadow-2xl border border-gray-100">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="UI illustration" className="w-full h-auto" />
              </div>
            </div>

            {/* Buttons (Order 3 on Mobile) */}
            <div className="order-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-[#7c3aed] text-white rounded-full font-bold text-[16px] hover:bg-[#6d28d9] shadow-lg shadow-purple-200 transition-all hover:-translate-y-1">Explore Products</button>
              <button className="w-full sm:w-auto px-10 py-4 border border-[#ddd6fe] text-[#7c3aed] rounded-full font-bold text-[16px] flex items-center justify-center gap-2 hover:bg-purple-50 transition-all">
                <Play size={20} fill="currentColor" /> Watch Demo
              </button>
            </div>
          </div>

          {/* Desktop Image Area */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="rounded-[40px] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Hero" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </main>

      {/* --- 3. STATS SECTION --- */}
      <section className="bg-[#7c3aed] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            <div className="text-center md:border-r border-white/20">
              <h2 className="text-5xl font-bold text-white mb-2">50K+</h2>
              <p className="text-purple-100 font-medium tracking-wide">Active Users</p>
            </div>
            <div className="text-center md:border-r border-white/20">
              <h2 className="text-5xl font-bold text-white mb-2">200+</h2>
              <p className="text-purple-100 font-medium tracking-wide">Premium Tools</p>
            </div>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white mb-2">4.9</h2>
              <p className="text-purple-100 font-medium tracking-wide">Rating</p>
            </div>
          </div>
        </div>
      </section>

     

      {/* --- 5. PREMIUM TOOLS SECTION --- */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Premium Digital Tools</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">Choose from our curated collection of premium digital products designed to boost your productivity.</p>
            <div className="mt-10 inline-flex items-center bg-white border border-slate-200 p-1.5 rounded-full shadow-sm">
              <button className="px-10 py-3 bg-[#7c3aed] text-white rounded-full text-sm font-bold shadow-lg shadow-purple-100">Products</button>
              <button className="px-10 py-3 text-slate-500 text-sm font-bold hover:text-[#7c3aed]">Cart (2)</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((item, index) => (
              <div key={index} className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative group">
                <span className={`absolute top-8 right-8 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.1em] ${item.tagColor}`}>{item.tag}</span>
                <div className="w-16 h-16 bg-slate-50 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-[#7c3aed] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-[15px] mb-8 leading-relaxed">High-performance solution crafted for modern developers and creators.</p>
                <div className="mb-10 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">{item.price}</span>
                  <span className="text-slate-400 text-sm font-bold uppercase tracking-wide">{item.period}</span>
                </div>
                <ul className="space-y-5 mb-12">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-600 text-sm font-semibold">
                      <div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600 font-bold" /></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-5 bg-[#7c3aed] text-white rounded-2xl font-black text-[15px] hover:bg-[#6d28d9] transition-all shadow-xl shadow-purple-50 active:scale-[0.98]">Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. GET STARTED STEPS SECTION --- */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mb-6 tracking-tight">Get Started In 3 Steps</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Start using premium digital tools in minutes, not hours.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { id: '01', title: 'Create Account', desc: 'Sign up for free in seconds. No credit card required.', icon: <UserPlus size={36} /> },
              { id: '02', title: 'Choose Products', desc: 'Browse our catalog and select the tools that fit your needs.', icon: <Package size={36} /> },
              { id: '03', title: 'Start Creating', desc: 'Download and start using your premium tools immediately.', icon: <Rocket size={36} /> }
            ].map((step, idx) => (
              <div key={idx} className="relative bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                <div className="absolute top-6 right-8 w-9 h-9 bg-[#7c3aed] text-white text-[13px] font-black flex items-center justify-center rounded-full z-10">{step.id}</div>
                <div className="w-20 h-20 bg-[#f5f3ff] rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-[#7c3aed]">{step.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-[#1e293b] mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



{/* --- Pricing Plans Section --- */}
<section className="bg-white py-20 md:py-32">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
   
    {/* Section Header */}
    <div className="text-center mb-16 md:mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mb-6 tracking-tight">
        Simple, Transparent Pricing
      </h2>
      <p className="text-gray-500 text-base md:text-lg">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
    </div>

    {/* Pricing Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
     
      {/* Starter Plan */}
      <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm flex flex-col h-full">
        <h3 className="text-2xl font-bold text-[#1e293b] mb-2">Starter</h3>
        <p className="text-gray-500 text-sm mb-8">Perfect for getting started</p>
       
        <div className="mb-8 flex items-baseline">
          <span className="text-4xl font-black text-[#1e293b]">$0</span>
          <span className="text-gray-400 font-bold ml-1">/Month</span>
        </div>

        <ul className="space-y-4 mb-12 flex-grow">
          {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-600 text-sm font-medium">
              <Check size={18} className="text-green-500" /> {item}
            </li>
          ))}
        </ul>

        <button className="w-full py-4 bg-[#7c3aed] text-white rounded-2xl font-black text-[15px] hover:bg-[#6d28d9] transition-all">
          Get Started Free
        </button>
      </div>

      {/* Pro Plan (Highlighted) */}
      <div className="bg-[#7c3aed] p-10 rounded-[40px] shadow-2xl shadow-purple-200 flex flex-col h-full relative transform lg:scale-105 z-10">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fef3c7] text-[#92400e] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#fde68a]">
          Most Popular
        </div>
       
        <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
        <p className="text-purple-100 text-sm mb-8">Best for professionals</p>
       
        <div className="mb-8 flex items-baseline text-white">
          <span className="text-4xl font-black">$29</span>
          <span className="text-purple-200 font-bold ml-1">/Month</span>
        </div>

        <ul className="space-y-4 mb-12 flex-grow">
          {['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-white text-sm font-medium">
              <Check size={18} className="text-white" /> {item}
            </li>
          ))}
        </ul>

        <button className="w-full py-4 bg-white text-[#7c3aed] rounded-2xl font-black text-[15px] hover:bg-gray-50 transition-all shadow-lg">
          Start Pro Trial
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm flex flex-col h-full">
        <h3 className="text-2xl font-bold text-[#1e293b] mb-2">Enterprise</h3>
        <p className="text-gray-500 text-sm mb-8">For teams and businesses</p>
       
        <div className="mb-8 flex items-baseline text-[#1e293b]">
          <span className="text-4xl font-black">$99</span>
          <span className="text-gray-400 font-bold ml-1">/Month</span>
        </div>

        <ul className="space-y-4 mb-12 flex-grow">
          {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-600 text-sm font-medium">
              <Check size={18} className="text-green-500" /> {item}
            </li>
          ))}
        </ul>

        <button className="w-full py-4 bg-[#7c3aed] text-white rounded-2xl font-black text-[15px] hover:bg-[#6d28d9] transition-all">
          Contact Sales
        </button>
      </div>

    </div>
  </div>
</section>



{/* --- Final CTA Section --- */}
<section className="bg-[#7c3aed] py-20 md:py-28 text-center px-6">
  <div className="max-w-4xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
      Ready To Transform Your Workflow?
    </h2>
   
    {/* Subtext */}
    <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
      Join thousands of professionals who are already using Digitools to work smarter.
      Start your free trial today.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
      <button className="w-full sm:w-auto px-10 py-4 bg-white text-[#7c3aed] rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
        Explore Products
      </button>
      <button className="w-full sm:w-auto px-10 py-4 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
        View Pricing
      </button>
    </div>

    {/* Footer Note */}
    <p className="text-purple-200/80 text-sm font-medium">
      14-day free trial • No credit card required • Cancel anytime
    </p>
  </div>
</section>

{/* --- Simple Footer --- */}
<footer className="bg-white py-10 border-t border-gray-100 text-center">
  <p className="text-gray-400 text-sm">
    © 2026 DigiTools Inc. All rights reserved.
  </p>
</footer>

    </div>
  );
};

export default App;
