
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertCircle, ShieldAlert, Mail, Phone, DollarSign } from "lucide-react";
import { useBorrowerStore } from "@/store/useBorrowerStore";

export function BorrowerDetail() {
  const { activeBorrowerDetail } = useBorrowerStore();

  if (!activeBorrowerDetail) return null;

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex justify-between items-center pb-4 border-b">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">{activeBorrowerDetail.name}</h2>
          <div className="flex gap-4 mt-2 text-slate-500 text-sm">
            <span className="flex items-center gap-1"><Mail size={14}/> {activeBorrowerDetail.email}</span>
            <span className="flex items-center gap-1"><Phone size={14}/> {activeBorrowerDetail.phone}</span>
          </div>
        </div>
        <Badge className="bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100">
          {activeBorrowerDetail.status}
        </Badge>
      </div>

      {/* Detail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Loan Amount", value: `$${activeBorrowerDetail.loan_amount.toLocaleString()}`, icon: <DollarSign size={14}/> },
          { label: "Employment", value: activeBorrowerDetail.employment },
          { label: "Credit Score", value: activeBorrowerDetail.credit_score },
          { label: "Income", value: `$${activeBorrowerDetail.income.toLocaleString()}` }
        ].map((item, i) => (
          <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <p className="text-[10px] text-slate-400 uppercase font-bold">{item.label}</p>
            <p className="font-bold text-slate-800 flex items-center gap-1">{item.value}</p>
          </div>
        ))}
      </div>

      {/* AI Explainability */}
      <Accordion type="single" collapsible defaultValue="ai-insights" className="border rounded-xl bg-white shadow-sm overflow-hidden">
        <AccordionItem value="ai-insights" className="border-none">
          <AccordionTrigger className="px-4 py-3 bg-slate-50 hover:no-underline">
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
            
            {/* API Action Buttons */}
            <div className="flex flex-wrap gap-2 pt-4">
              <Button size="sm" variant="outline" className="text-xs">Request Documents</Button>
              <Button size="sm" variant="outline" className="text-xs">Send to Valuer</Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs px-6 ml-auto">Approve Loan</Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Risk Callout */}
      <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg flex justify-between items-center">
        <div className="flex items-center gap-3">
          <AlertCircle className="text-orange-500" size={24} />
          <div>
            <p className="text-xs font-bold text-orange-800 uppercase">Risk Signal Identified</p>
            <p className="text-sm text-orange-700">{activeBorrowerDetail.risk_signal}</p>
          </div>
        </div>
        <Button size="sm" variant="destructive" className="text-xs">Escalate</Button>
      </div>
    </div>
  );
}