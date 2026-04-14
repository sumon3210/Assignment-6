import React from 'react';
import { Home, Clock, BarChart2, Plus } from 'lucide-react';

const KeenKeeperApp = () => {
  // Stats Data
  const stats = [
    { label: 'Total Friends', value: 10 },
    { label: 'On Track', value: 3 },
    { label: 'Need Attention', value: 6 },
    { label: 'Interactions This Month', value: 12 },
  ];

  // Friends Data
  const friends = [
    { id: 1, name: 'David Kim', lastSeen: '62d ago', tags: ['WORK'], status: 'Almost Due', color: 'bg-orange-400', img: 'https://i.pravatar.cc/150?u=a1' },
    { id: 2, name: 'Emma Wilson', lastSeen: '62d ago', tags: ['FAMILY'], status: 'Overdue', color: 'bg-red-500', img: 'https://i.pravatar.cc/150?u=a2' },
    { id: 3, name: 'Lisa Nakamura', lastSeen: '62d ago', tags: ['WORK'], status: 'Overdue', color: 'bg-red-500', img: 'https://i.pravatar.cc/150?u=a3' },
    { id: 4, name: 'James Wright', lastSeen: '62d ago', tags: ['HOBBY', 'TRAVEL'], status: 'Overdue', color: 'bg-red-500', img: 'https://i.pravatar.cc/150?u=a4' },
    { id: 5, name: 'David Kim', lastSeen: '62d ago', tags: ['WORK'], status: 'Overdue', color: 'bg-red-500', img: 'https://i.pravatar.cc/150?u=a5' },
    { id: 6, name: 'Emma Wilson', lastSeen: '62d ago', tags: ['FAMILY'], status: 'On-Track', color: 'bg-[#2D4F3F]', img: 'https://i.pravatar.cc/150?u=a6' },
    { id: 7, name: 'Lisa Nakamura', lastSeen: '62d ago', tags: ['WORK'], status: 'On-Track', color: 'bg-[#2D4F3F]', img: 'https://i.pravatar.cc/150?u=a7' },
    { id: 8, name: 'James Wright', lastSeen: '62d ago', tags: ['HOBBY', 'TRAVEL'], status: 'Almost Due', color: 'bg-orange-400', img: 'https://i.pravatar.cc/150?u=a8' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20">
      {/* --- Section 1: Navbar --- */}
      <nav className="flex items-center justify-between px-4 md:px-10 py-4 border-b bg-white border-gray-100 sticky top-0 z-50">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">KeenKeeper</h1>
        </div>
        <div className="flex items-center space-x-2 md:space-x-6">
          <button className="flex items-center gap-2 bg-[#2D4F3F] text-white px-4 py-2 rounded-md text-sm font-medium">
            <Home size={18} /> <span className="hidden sm:inline">Home</span>
          </button>
          <button className="flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors">
            <Clock size={18} /> <span className="hidden sm:inline">Timeline</span>
          </button>
          <button className="flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors">
            <BarChart2 size={18} /> <span className="hidden sm:inline">Stats</span>
          </button>
        </div>
      </nav>

      {/* --- Section 2: Hero Header --- */}
      <header className="flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 bg-white">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#1A2B3B] mb-4">
          Friends to keep close in your life
        </h2>
        <p className="max-w-2xl text-slate-500 text-sm md:text-base leading-relaxed mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="flex items-center gap-2 bg-[#2D4F3F] hover:bg-[#243f32] text-white px-8 py-3 rounded-md shadow-md transition-all">
          <Plus size={20} /> <span className="font-semibold">Add a Friend</span>
        </button>
      </header>

      {/* --- Section 3: Stats Dashboard --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 -mt-10 mb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-3xl font-bold text-[#2D4F3F]">{stat.value}</h3>
              <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Section 4: Friends Grid --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <h2 className="text-xl font-bold text-slate-800 mb-8">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <div key={friend.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
              {/* Profile Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-5 border-4 border-gray-50 shadow-inner">
                <img src={friend.img} alt={friend.name} className="w-full h-full object-cover" />
              </div>

              {/* Info */}
              <h4 className="font-bold text-slate-800 text-xl mb-1">{friend.name}</h4>
              <p className="text-gray-400 text-xs mb-4">{friend.lastSeen}</p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {friend.tags.map((tag, i) => (
                  <span key={i} className="bg-emerald-50 text-emerald-600 text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status Button */}
              <button className={`${friend.color} text-white text-[11px] font-bold px-6 py-1.5 rounded-full uppercase tracking-tighter shadow-sm hover:opacity-90 transition-opacity`}>
                {friend.status}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeenKeeperApp;