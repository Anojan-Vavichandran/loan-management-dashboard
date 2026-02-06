
import { BorrowerPipeline } from "./components/BorrowerPipeline/BorrowerPipeline";
import { BorrowerDetail } from "./components/BorrowerDetail/BorrowerDetail";
import { BrokerOverview } from "./components/BrokerOverview/BrokerOverview";
import { OnboardingWorkflow } from "./components/OnboardingWorkflow/OnboardingWorkflow";
import { Layout } from "./components/layout/layout";
  
function App() {
  return (
    <Layout>
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