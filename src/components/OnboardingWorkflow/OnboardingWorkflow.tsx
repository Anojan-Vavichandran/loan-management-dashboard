import { useBorrowerStore } from "@/store/useBorrowerStore";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";

export function OnboardingWorkflow() {
  const { workflow } = useBorrowerStore();

  return (
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
  );
}