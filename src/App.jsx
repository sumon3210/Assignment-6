import React, { useState } from 'react';
import {
  ShoppingCart, Play, Menu, X, Check, Trash2
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState('products'); 
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [addedItemId, setAddedItemId] = useState(null); 

  const navLinks = [
    { name: 'Products', href: '#' },
    { name: 'Featured', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  const products = [
    {
      id: 1, title: "AI Writing Pro", price: 29, period: "/Mo", tag: "Best Seller",
      tagColor: "bg-orange-50 text-orange-600", 
      icon: <img src="/writing_2327400 1.png" className="w-10 h-10 object-contain" alt="icon" />,
      desc: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
      features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"]
    },
    {
      id: 2, title: "Design Templates Pack", price: 49, period: "/One-Time", tag: "Popular",
      tagColor: "bg-blue-50 text-blue-600", 
      icon: <img src="/design-tool.png" className="w-10 h-10 object-contain" alt="icon" />,
      desc: "2000+ premium templates for social media, presentations, and marketing materials.",
      features: ["2000+ templates", "Monthly updates", "Commercial license"]
    },
    {
      id: 3, title: "Premium Stock Assets", price: 19, period: "/Mo", tag: "New",
      tagColor: "bg-green-50 text-green-600", 
      icon: <img src="/operation.png" className="w-10 h-10 object-contain" alt="icon" />,
      desc: "Access millions of royalty-free photos, videos, and graphics for your projects.",
      features: ["10M+ assets", "Commercial use", "No attribution"]
    },
    {
      id: 4, title: "Automation Toolkit", price: 79, period: "/Mo", tag: "Popular",
      tagColor: "bg-blue-50 text-blue-600", 
      icon: <img src="/operation.png" className="w-10 h-10 object-contain" alt="icon" />,
      desc: "Automate repetitive tasks and streamline your workflow with powerful tools.",
      features: ["50+ automations", "API access", "Custom workflows"]
    },
    {
      id: 5, title: "Resume Builder Pro", price: 15, period: "/One-Time", tag: "New",
      tagColor: "bg-green-50 text-green-600", 
      icon: <img src="/portfolio.png" className="w-10 h-10 object-contain" alt="icon" />,
      desc: "Create professional resumes and cover letters that land interviews.",
      features: ["100+ templates", "ATS optimization", "Export to PDF"]
    },
    {
      id: 6, title: "Social Media Content Kit", price: 39, period: "/Mo", tag: "Best Seller",
      tagColor: "bg-orange-50 text-orange-600", 
      icon: <img src="/social-media.png" className="w-10 h-10 object-contain" alt="icon" />,
      desc: "Complete toolkit for creating engaging social media content across all platforms.",
      features: ["5000+ assets", "Scheduler included", "Analytics dashboard"]
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    setAddedItemId(product.id);
    setTimeout(() => setAddedItemId(null), 2000);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      alert("Checkout Successful! Your cart is now empty.");
      setCart([]); 
      setIsSidebarOpen(false); 
      setView('products'); 
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- 1. FIXED/STICKY NAVBAR WRAPPER --- */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <nav className="flex items-center justify-between px-6 py-5 mx-auto max-w-7xl lg:px-12">
          <div className="text-2xl font-bold text-[#7c3aed] cursor-pointer" onClick={() => setView('products')}>DigiTools</div>
          <div className="hidden md:flex items-center space-x-6 text-[14px] font-medium text-gray-600">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-[#7c3aed] transition-colors">{link.name}</a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-5">
            <button onClick={() => setIsSidebarOpen(true)} className="relative p-2 text-gray-600 hover:text-[#7c3aed]">
              <ShoppingCart size={22} />
              {cart.length > 0 && <span className="absolute top-0 right-0 bg-[#7c3aed] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border border-white font-bold">{cart.length}</span>}
            </button>
            <button className="text-[14px] font-semibold text-gray-700 cursor-pointer">Login</button>
            <button className="px-5 py-2 bg-[#7c3aed] text-white rounded-lg text-[14px] font-semibold hover:bg-[#6d28d9] transition-all shadow-md cursor-pointer">Get Started</button>
          </div>
          <div className="flex md:hidden items-center space-x-4">
            <button onClick={() => setIsSidebarOpen(true)} className="relative p-2 text-gray-600">
              <ShoppingCart size={22} />
              {cart.length > 0 && <span className="absolute top-0 right-0 bg-[#7c3aed] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border border-white font-bold">{cart.length}</span>}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 p-1">{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
          </div>
        </nav>

        {/* MOBILE MENU - Moved inside Header for better sticky behavior */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white z-40 px-6 py-8 flex flex-col space-y-6 border-t shadow-lg animate-in slide-in-from-top-4">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-gray-800 border-b pb-3">{link.name}</a>
            ))}
          </div>
        )}
      </header>

      {/* --- SIDEBAR CART --- */}
      {isSidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]" onClick={() => setIsSidebarOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-[101] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold uppercase tracking-tight text-slate-900">Sidebar Cart</h2>
              <button onClick={() => setIsSidebarOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? <p className="text-center text-gray-400 mt-10 italic">Your cart is empty.</p> : 
                cart.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden p-1">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs leading-tight">{item.title}</h4>
                        <p className="text-[#7c3aed] font-bold text-[10px]">${item.price}</p>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(idx)} className="text-gray-300 hover:text-red-500 transition-colors"><Trash2 size={16}/></button>
                  </div>
                ))
              }
            </div>
            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between mb-4 font-bold items-center"><span className="text-gray-500">Subtotal:</span><span className="text-xl text-slate-900">${totalPrice}</span></div>
                <button onClick={handleCheckout} className="w-full py-4 bg-[#7c3aed] text-white rounded-2xl font-bold shadow-lg">Proceed To Checkout</button>
              </div>
            )}
          </div>
        </>
      )}

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#ede9fe] text-[#7c3aed] text-[12px] font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed] mr-2 animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1e293b] leading-tight mb-6">Supercharge Your <br/> Digital Workflow</h1>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mb-8 leading-relaxed">Access premium AI tools, design assets, templates, and productivity software—all in one place.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button onClick={() => setView('products')} className="px-8 py-3 bg-[#7c3aed] text-white rounded-full font-bold text-sm shadow-lg shadow-purple-200 cursor-pointer">Explore Products</button>
            <button className="px-8 py-3 border border-[#ddd6fe] text-[#7c3aed] rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-purple-50 transition-all cursor-pointer"><Play size={16} fill="currentColor" /> Watch Demo</button>
          </div>
        </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 max-w-sm cursor-pointer">
              <img src="/banner.png"/>
            </div>
            </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-[#7c3aed] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
          <div className="md:border-r border-white/20"><h2 className="text-4xl font-extrabold mb-1">50K+</h2><p className="text-purple-100 text-sm font-medium uppercase tracking-wider">Active Users</p></div>
          <div className="md:border-r border-white/20"><h2 className="text-4xl font-extrabold mb-1">200+</h2><p className="text-purple-100 text-sm font-medium uppercase tracking-wider">Premium Tools</p></div>
          <div><h2 className="text-4xl font-extrabold mb-1">4.9</h2><p className="text-purple-100 text-sm font-medium uppercase tracking-wider">Rating</p></div>
        </div>
      </section>

      {/* --- TOOLS & CART SECTION --- */}
      <section className="bg-gray-50/30 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase">Premium Digital Tools</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-16">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            <div className="inline-flex bg-white border border-gray-100 rounded-full p-1 shadow-sm mt-10">
              <button onClick={() => setView('products')} className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${view === 'products' ? 'bg-[#7c3aed] text-white shadow-md' : 'text-gray-400'}`}>Products</button>
              <button onClick={() => setView('cart')} className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${view === 'cart' ? 'bg-[#7c3aed] text-white shadow-md' : 'text-gray-400'}`}>Cart ({cart.length})</button>
            </div>
          </div>

          {view === 'products' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((item) => (
                <div key={item.id} className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full text-left">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-[#7c3aed] group-hover:scale-110 transition-all overflow-hidden">{item.icon}</div>
                    <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${item.tagColor}`}>{item.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">{item.desc}</p>
                  <div className="mb-6 flex items-baseline gap-1"><span className="text-2xl font-extrabold text-slate-900">${item.price}</span><span className="text-gray-400 text-xs font-semibold">{item.period}</span></div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {item.features.map((f, i) => <li key={i} className="flex items-center gap-3 text-gray-500 text-[12px] font-medium leading-relaxed"><Check size={14} className="text-green-500 shrink-0" /> {f}</li>)}
                  </ul>
                  <button onClick={() => addToCart(item)} disabled={addedItemId === item.id} className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 ${addedItemId === item.id ? 'bg-green-500 text-white shadow-green-100' : 'bg-[#7c3aed] text-white hover:bg-[#6d28d9]'}`}>{addedItemId === item.id ? <><Check size={18}/> Added to Cart!</> : 'Buy Now'}</button>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-300">
              <div className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-8 uppercase">Your Cart</h2>
                {cart.length === 0 ? <p className="text-center py-20 text-gray-400 italic">Your cart is currently empty.</p> : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-5 bg-[#f8fafc] rounded-2xl border border-gray-50">
                        <div className="flex items-center gap-5">
                          <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center overflow-hidden p-1">{item.icon}</div>
                          <div><h4 className="font-bold text-slate-900 text-base leading-tight">{item.title}</h4><p className="text-slate-400 text-sm font-medium">${item.price}</p></div>
                        </div>
                        <button onClick={() => removeFromCart(index)} className="text-rose-500 text-sm font-bold hover:text-rose-700 transition-colors uppercase tracking-wider font-bold">Remove</button>
                      </div>
                    ))}
                    <div className="mt-10 pt-8 border-t border-gray-100">
                      <div className="flex justify-between items-center mb-8 px-2"><span className="text-gray-400 font-medium text-lg">Total:</span><span className="text-3xl font-black text-slate-900">${totalPrice}</span></div>
                      <button onClick={handleCheckout} className="w-full py-4 bg-[#8b5cf6] text-white rounded-2xl font-bold text-base hover:bg-[#7c3aed] shadow-xl transition-all uppercase tracking-widest">Proceed To Checkout</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- GET STARTED SECTION --- */}
      <section className="bg-gray-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mb-6 tracking-tight uppercase">Get Started In 3 Steps</h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-16">Start using premium digital tools in minutes, not hours.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: '01', title: 'Create Account', desc: 'Sign up for free in seconds. No credit card required to get started.', 
                icon: <img src="/user.png" className="w-12 h-12 object-contain" alt="step-1" /> },
              { id: '02', title: 'Choose Products', desc: 'Browse our catalog and select the tools that fit your needs.', 
                icon: <img src="/package.png" className="w-12 h-12 object-contain" alt="step-2" /> },
              { id: '03', title: 'Start Creating', desc: 'Download and start using your premium tools immediately.', 
                icon: <img src="/rocket.png" className="w-12 h-12 object-contain" alt="step-3" /> }
            ].map((step, idx) => (
              <div key={idx} className="relative bg-white p-10 md:p-12 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center">
                <div className="absolute top-6 right-8 w-9 h-9 bg-[#7c3aed] text-white text-[11px] font-black flex items-center justify-center rounded-full shadow-lg">{step.id}</div>
                <div className="w-24 h-24 bg-[#f5f3ff] rounded-full flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1e293b] mb-4 uppercase">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="bg-gray-50 py-20">
  <div className="max-w-5xl mx-auto px-4 text-center">
    
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] mb-4">
     Simple, Transparent Pricing
    </h2>
    <p className="text-gray-400 text-sm mb-10">
      Choose the plan that fits your needs. Upgrade or downgrade anytime.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      {/* Starter */}
      <div className="bg-white p-5 rounded-2xl border shadow-sm flex flex-col text-left 
      hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        
        <h3 className="text-lg font-bold">Starter</h3>
        <p className="text-gray-400 text-xs mb-3">Perfect for getting started</p>

        <div className="mb-4">
          <span className="text-2xl font-black">$0</span>
          <span className="text-xs text-gray-400">/month</span>
        </div>

        <ul className="space-y-2 text-xs mb-5 flex-grow">
          <li className="flex gap-2"><Check size={14}/> Access to 10 free tools</li>
          <li className="flex gap-2"><Check size={14}/> Basic templates</li>
          <li className="flex gap-2"><Check size={14}/> Community support</li>
          <li className="flex gap-2"><Check size={14}/> 1 project per month</li>
        </ul>

        <button className="bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700 font-bold">
          Get Started Free
        </button>
      </div>

      {/* Pro (Highlighted) */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-6 rounded-2xl 
      shadow-xl flex flex-col text-left text-white relative 
      scale-105 hover:scale-110 transition-all duration-300">

        <span className="absolute -top-3 left-1/2 -translate-x-1/2 
        bg-yellow-300 text-black text-[10px] px-3 py-1 rounded-full font-bold">
          MOST POPULAR
        </span>

        <h3 className="text-lg font-bold">Pro</h3>
        <p className="text-xs mb-3 text-purple-100">Best for professionals</p>

        <div className="mb-4">
          <span className="text-2xl font-black">$29</span>
          <span className="text-xs">/month</span>
        </div>

        <ul className="space-y-2 text-xs mb-5 flex-grow">
          <li className="flex gap-2"><Check size={14}/> Access to all premium tools</li>
          <li className="flex gap-2"><Check size={14}/> Unlimited templates</li>
          <li className="flex gap-2"><Check size={14}/> Priority support</li>
          <li className="flex gap-2"><Check size={14}/> Unlimited projects</li>
          <li className="flex gap-2"><Check size={14}/> Cloud sync</li>
          <li className="flex gap-2"><Check size={14}/> Advanced analytics</li>
        </ul>

        <button className="bg-white text-purple-600 py-2 rounded-lg text-sm hover:bg-gray-100 font-bold">
          Start Pro Trial
        </button>
      </div>

      {/* Enterprise */}
      <div className="bg-white p-5 rounded-2xl border shadow-sm flex flex-col text-left 
      hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        
        <h3 className="text-lg font-bold">Enterprise</h3>
        <p className="text-gray-400 text-xs mb-3">For teams and businesses</p>

        <div className="mb-4">
          <span className="text-2xl font-black">$99</span>
          <span className="text-xs text-gray-400">/month</span>
        </div>

        <ul className="space-y-2 text-xs mb-5 flex-grow">
          <li className="flex gap-2"><Check size={14}/> Everything in Pro</li>
          <li className="flex gap-2"><Check size={14}/> Team collaboration</li>
          <li className="flex gap-2"><Check size={14}/> Custom integrations</li>
          <li className="flex gap-2"><Check size={14}/> Dedicated support</li>
          <li className="flex gap-2"><Check size={14}/> SLA guarantee</li>
          <li className="flex gap-2"><Check size={14}/> Custom branding</li>
        </ul>

        <button className="bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700 font-bold">
          Contact Sales
        </button>
      </div>

    </div>
  </div>
</section>

      {/* --- CTA SECTION --- */}
      <section className="min-h-[350px] w-full flex items-center justify-center bg-gradient-to-br from-[#6332f6] via-[#8b2cf5] to-[#b624f4] px-4 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">Ready To Transform Your Workflow?</h1>
          <p className="text-base md:text-lg opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="w-full sm:w-auto bg-white text-[#8b2cf5] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all shadow-lg cursor-pointer">Explore Products</button>
            <button className="w-full sm:w-auto border-2 border-white/60 text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#8b2cf5] transition-all cursor-pointer">View Pricing</button>
          </div>
          <p className="text-xs md:text-sm opacity-80">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0b0e1a] text-white relative px-6 md:px-12 lg:px-24">
        <div className="h-1 w-full bg-gradient-to-r from-[#6332f6] to-[#b624f4] absolute left-0 top-0"></div>
        <div className="max-w-7xl mx-auto pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-semibold mb-6">Product</h4>
              <ul className="space-y-4 text-gray-400 text-sm"><li>Features</li><li>Pricing</li><li>Templates</li><li>Integrations</li></ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400 text-sm"><li>About</li><li>Blog</li><li>Careers</li><li>Press</li></ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-semibold mb-6">Resources</h4>
              <ul className="space-y-4 text-gray-400 text-sm"><li>Documentation</li><li>Help Center</li><li>Community</li><li>Contact</li></ul>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="font-semibold mb-6">Social Links</h4>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>
          <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex gap-6"><span>Privacy Policy</span><span>Terms of Service</span><span>Cookies</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;