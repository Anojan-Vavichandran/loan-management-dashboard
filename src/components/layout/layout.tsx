import React from "react";
import { Search, Bell, HelpCircle, LayoutDashboard } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

export function Layout({ children }: { children: React.ReactNode }) {
const { userRole } = useAuthStore();
  const avatarLetter = userRole ? userRole.charAt(0).toUpperCase() : '?';
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

      
      {/* Header */}
      <header className="h-16 border-b bg-white/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white">
            <LayoutDashboard size={20} />
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            DemoApp
          </h1>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
            <input 
              type="text" 
              placeholder="Search borrowers..." 
              className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>
          <HelpCircle size={20} className="cursor-pointer hover:text-slate-600 transition-colors" />
          <div className="relative">
            <Bell size={20} className="cursor-pointer hover:text-slate-600 transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
        <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center font-black text-sm shadow-sm transition-all
            ${userRole === 'Admin' 
              ? 'bg-gradient-to-tr from-indigo-500 to-blue-600 text-white border-indigo-200' 
              : 'bg-gradient-to-tr from-emerald-500 to-teal-600 text-white border-emerald-200'
            }`}>
            {avatarLetter}
          </div>
        </div>
      </header>

      {/* Main Content  */}
      <div className="max-w-[1600px] mx-auto w-full p-6">
        {children}
      </div>
    </div>
  );
}