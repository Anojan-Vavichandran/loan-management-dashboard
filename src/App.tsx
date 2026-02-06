
import { BorrowerPipeline } from "./components/BorrowerPipeline/BorrowerPipeline";
import { BorrowerDetail } from "./components/BorrowerDetail/BorrowerDetail";
import { BrokerOverview } from "./components/BrokerOverview/BrokerOverview";
import { Layout } from "./components/layout/layout";
import { useAuthStore } from "./store/useAuthStore";
import { Login } from "./components/login/login";
import { Badge, Contact, LogOut } from "lucide-react";
  
function App() {

  const { isAuthenticated, userRole, logout } = useAuthStore();


  if (!isAuthenticated) {
    return <Login />;
  }
  return (
    <Layout>
      {/* Auth Info & Logout Bar */}
  <div className="flex justify-between items-center mb-6 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-3">
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border shadow-sm ${
      userRole === 'Admin' 
        ? 'bg-indigo-50 border-indigo-200 text-indigo-700' 
        : 'bg-emerald-50 border-emerald-200 text-emerald-700'
    }`}>
      <Contact size={16} className={userRole === 'Admin' ? 'text-indigo-500' : 'text-emerald-500'} />
    </div>
    
    <span className="text-sm text-slate-500 font-medium hidden md:inline">
      | Welcome, {userRole === 'Admin' ? 'Admin Account' : 'Broker Account'}
    </span>
    </div>
  </div>

  <button 
    onClick={logout}
    className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-red-500 transition-all hover:scale-105"
  >
    <LogOut size={14} />
    Sign Out
  </button>
</div>  
      
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-start">
        
        {/* borrower pipeline */}
        <aside className="lg:col-span-3 h-fit">
          <BorrowerPipeline />  
        </aside>

        {/* borrower detail */}
        <section className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm min-h-[600px]">
          <BorrowerDetail />
        </section>

        {/* broker overview */}
        <aside className="lg:col-span-3 space-y-6">
          <BrokerOverview />
      
        </aside>

      </main>
    </Layout>
  );
}

export default App;