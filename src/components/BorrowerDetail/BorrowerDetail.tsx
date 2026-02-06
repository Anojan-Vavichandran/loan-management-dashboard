import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertCircle, ShieldAlert, Mail, Phone } from "lucide-react";
import { useBorrowerStore } from "@/store/useBorrowerStore";
import { LoanSummaryCard } from "../LoanSummaryCard/LoanSummaryCard";
import { useAuthStore } from "@/store/useAuthStore";

export function BorrowerDetail() {
  const { activeBorrowerDetail } = useBorrowerStore();
  const { userRole } = useAuthStore();

  if (!activeBorrowerDetail) return (
    <div className="flex items-center justify-center h-64 text-slate-400 italic">
      Select a borrower to view details
    </div>
  );


  const handleAction = (actionName: string) => {
    console.log(`Action: ${actionName} for Borrower ID: ${activeBorrowerDetail.id}`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header Info */}
      <div className="flex justify-between items-center pb-4 border-b">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">{activeBorrowerDetail.name}</h2>
          <div className="flex gap-4 mt-2 text-slate-500 text-sm">
            <span className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
              <Mail size={14}/> {activeBorrowerDetail.email}
            </span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
              <Phone size={14}/> {activeBorrowerDetail.phone}
            </span>
          </div>
        </div>
        <Badge className="bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100 font-bold px-3 py-1">
          {activeBorrowerDetail.status}
        </Badge>
      </div>

   
      <LoanSummaryCard activeBorrowerDetail={activeBorrowerDetail} />

      {/* AI Explainability */}
      <Accordion type="single" collapsible defaultValue="ai-insights" className="border rounded-xl bg-white shadow-sm overflow-hidden border-slate-200">
        <AccordionItem value="ai-insights" className="border-none">
          <AccordionTrigger className="px-4 py-3 bg-slate-50 hover:no-underline transition-all">
            <div className="flex items-center gap-2 font-bold text-slate-700">
              <ShieldAlert className="text-blue-600" size={18} />
              AI Explainability & Insights
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 pt-2 space-y-3">
            {activeBorrowerDetail.ai_flags.map((flag: string, i: number) => (
              <div key={i} className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-md text-xs border border-red-100">
                <AlertCircle size={14} className="shrink-0" /> {flag}
              </div>
            ))}
            
            <div className="flex flex-wrap gap-2 pt-4">
              <Button size="sm" variant="outline" onClick={() => handleAction("Request Documents")}>
                Request Documents
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleAction("Send to Valuer")}>
                Send to Valuer
              </Button>
              <Button size="sm" className={`${userRole === 'Admin' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-500'} ml-auto px-6`} onClick={() => handleAction("Approve Loan")} disabled={userRole !== 'Admin'} >
                Approve Loan
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Risk Callout Section */}
      <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-orange-100 p-2 rounded-full">
            <AlertCircle className="text-orange-500" size={20} />
          </div>
          <div>
            <p className="text-[10px] font-black text-orange-800 uppercase tracking-wider">Risk Signal Identified</p>
            <p className="text-sm text-orange-700 font-medium">{activeBorrowerDetail.risk_signal}</p>
          </div>
        </div>
        <Button 
          size="sm" 
          variant="destructive" 
          className="w-full md:w-auto font-bold shadow-sm"
          onClick={() => handleAction("Escalate to Credit Committee")}
        >
          Escalate to Credit Committee
        </Button>
      </div>
    </div>
  );
}