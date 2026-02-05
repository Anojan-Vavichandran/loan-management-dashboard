import { useBorrowerStore } from "@/store/useBorrowerStore";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { CheckCircle2, Circle } from "lucide-react";

export function BrokerOverview() {
  const { broker, workflow } = useBorrowerStore();

  return (
    <div className="space-y-6">
      <Card className="p-4 bg-slate-900 text-white border-none shadow-lg">
        <h3 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Broker Details</h3>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl font-black">
            {broker.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="font-bold text-lg">{broker.name}</p>
            <p className="text-xs text-blue-300 italic">{broker.deals} Deals • {broker.approval_rate} Success</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border border-slate-700">
          <span className="text-xs font-bold">AI Assistant</span>
          <Switch defaultChecked />
        </div>
      </Card>

      <div className="space-y-4 px-2">
        <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Onboarding Workflow</h3>
        <div className="space-y-0">
          {workflow.map((step, i) => (
            <div key={i} className="flex gap-3 relative pb-6 group">
              {i !== workflow.length - 1 && <div className="absolute left-[9px] top-5 w-[2px] h-full bg-slate-100" />}
              {i < 4 ? <CheckCircle2 size={20} className="text-green-500 bg-white z-10" /> : <Circle size={20} className="text-slate-300 bg-white z-10" />}
              <span className={`text-xs ${i < 4 ? 'font-bold text-slate-800' : 'text-slate-400'}`}>{i + 1}. {step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}