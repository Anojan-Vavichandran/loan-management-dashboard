import { useBorrowerStore } from "@/store/useBorrowerStore";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { OnboardingWorkflow } from "../OnboardingWorkflow/OnboardingWorkflow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function BrokerOverview() {
  const { broker } = useBorrowerStore();

  const BrokerContent = () => (
    <div className="space-y-6">
      {/* Broker Profile Card */}
      <Card className="p-5 border-none shadow-sm bg-white lg:shadow-none lg:border lg:bg-transparent">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Broker Overview</h3>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">
            {broker.name.split(' ').map((n: string) => n[0]).join('')}
          </div>
          <div>
            <p className="font-bold text-slate-900 text-lg">{broker.name}</p>
            <p className="text-xs text-slate-500 italic font-medium">Verified Broker</p>
          </div>
        </div>

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

        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
          <Label htmlFor="ai-assist" className="text-xs font-bold text-slate-600 italic">E Ardsassist</Label>
          <Switch id="ai-assist" defaultChecked />
        </div>
      </Card>

      <OnboardingWorkflow />
    </div>
  );

  return (
    <>
      {/* Desktop View*/}
      <div className="hidden lg:block space-y-6">
        <BrokerContent />
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        <Accordion type="single" collapsible className="w-full bg-white border rounded-xl shadow-sm">
          <AccordionItem value="broker-details" className="border-none px-4">
            <AccordionTrigger className="text-sm font-bold text-slate-700 hover:no-underline py-4">
              View Broker & Workflow Details
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <BrokerContent />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}