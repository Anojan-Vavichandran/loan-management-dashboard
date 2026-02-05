import { Search, Bell, HelpCircle, LayoutDashboard } from "lucide-react";
import { BorrowerPipeline } from "./components/BorrowerPipeline/BorrowerPipeline";
import { BorrowerDetail } from "./components/BorrowerDetail/BorrowerDetail";
import { BrokerOverview } from "./components/BrokerOverview/BrokerOverview";


function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="h-16 border-b bg-white flex items-center justify-between px-8 sticky top-0 z-50 shadow-sm">
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
          <HelpCircle size={20} className="cursor-pointer hover:text-slate-600" />
          <div className="relative">
            <Bell size={20} className="cursor-pointer hover:text-slate-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300"></div>
        </div>
      </header>

      {/* Layout */}
      <main className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] mx-auto w-full h-[calc(100vh-64px)] overflow-hidden">
        
        {/* Borrower Pipeline */}
        <section className="lg:col-span-3 flex flex-col h-full overflow-hidden">
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <BorrowerPipeline />
          </div>
        </section>

        {/* Borrower Detail */}
        <section className="lg:col-span-6 flex flex-col h-full overflow-y-auto custom-scrollbar">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm min-h-full">
            <BorrowerDetail />
          </div>
        </section>

        {/* Broker Overview */}
        <section className="lg:col-span-3 flex flex-col h-full space-y-6">
          <BrokerOverview />
        </section>

      </main>
    </div>
  );
}

export default App;