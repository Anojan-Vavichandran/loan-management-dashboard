import { useBorrowerStore } from "@/store/useBorrowerStore";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageSquare, CheckCircle2, Circle } from "lucide-react";

export function BrokerOverview() {
  const { broker, workflow } = useBorrowerStore();

  return (
    <div className="space-y-6">
      {/* 1. Broker Profile Section */}
      <Card className="p-5 border-none shadow-sm bg-white">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Broker Overview</h3>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">
            {broker.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="font-bold text-slate-900 text-lg">{broker.name}</p>
            <p className="text-xs text-slate-500 italic font-medium">Verified Broker</p>
          </div>
        </div>

        {/* Large numbers with labels  */}
        <div className="grid grid-cols-3 gap-2 mb-6 border-y py-4">
          <div className="text-center">
            <p className="text-xl font-bold text-slate-900">{broker.deals}</p>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Deals</p>
          </div>
          <div className="text-center border-x">
            <p className="text-xl font-bold text-slate-900">{broker.approval_rate}</p>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Approval</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-slate-900">{broker.pending}</p>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Pending</p>
          </div>
        </div>

        {/* Contact Buttons Group */}
        <div className="flex gap-2 mb-4">
          <Button variant="outline" size="sm" className="flex-1 text-xs gap-1 h-9">
            <Phone size={14} /> Call
          </Button>
          <Button variant="outline" size="sm" className="flex-1 text-xs gap-1 h-9">
            <Mail size={14} /> Email
          </Button>
          <Button variant="outline" size="sm" className="flex-1 text-xs gap-1 h-9">
            <MessageSquare size={14} /> Chat
          </Button>
        </div>

        {/* AI Assistant Toggle */}
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
          <Label htmlFor="ai-assist" className="text-xs font-bold text-slate-600 italic">E Ardsassist</Label>
          <Switch id="ai-assist" defaultChecked />
        </div>
      </Card>

      {/* 2. Onboarding Workflow Section */}
      <Card className="p-5 border-none shadow-sm bg-white">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">Onboarding Workflow</h3>
        <div className="space-y-0">
          {workflow.map((step, i) => (
            <div key={i} className="flex gap-4 relative pb-7 group">
              {/* Timeline Connector Line */}
              {i !== workflow.length - 1 && (
                <div className="absolute left-[9px] top-5 w-[2px] h-full bg-slate-100 group-hover:bg-blue-100 transition-colors" />
              )}
              
              <div className="z-10 bg-white">
                {i < 4 ? (
                  <CheckCircle2 size={20} className="text-green-500" />
                ) : (
                  <Circle size={20} className="text-slate-200" />
                )}
              </div>
              
              <div className="flex flex-col">
                <span className={`text-xs font-bold tracking-tight ${i < 4 ? 'text-slate-800' : 'text-slate-400'}`}>
                  {i + 1}. {step}
                </span>
                {i === 3 && <span className="text-[10px] text-blue-500 font-medium">In Progress...</span>}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}