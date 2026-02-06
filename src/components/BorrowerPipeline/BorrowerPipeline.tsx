import { useBorrowerStore } from "@/store/useBorrowerStore";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@/components/ui/label"

export function BorrowerPipeline() {
  const { pipeline, activeTab, setActiveTab, activeBorrowerId, setActiveBorrower } = useBorrowerStore();

 
  const currentList = pipeline[activeTab];

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xs text-slate-500 uppercase tracking-wider">Borrower Pipeline</h2>
      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="w-full">
        <TabsList className="grid grid-cols-3 bg-slate-100 p-1">
          <TabsTrigger value="new" className="text-xs">New</TabsTrigger>
          <TabsTrigger value="in_review" className="text-xs">In Review</TabsTrigger>
          <TabsTrigger value="approved" className="text-xs">Approved</TabsTrigger>
        </TabsList>
      </Tabs>

    {/* Radio Group */}
    <div className="mt-4 mb-6">
  <p className="text-[11px] font-bold text-slate-500 mb-3 tracking-widest uppercase">
    F-SANATISED ACTIVE
  </p>
  <RadioGroup defaultValue="active" className="flex items-center gap-6">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="active" id="active" />
      <Label htmlFor="active" className="text-xs font-semibold text-slate-700 cursor-pointer">
        Active
      </Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="inactive" id="inactive" />
      <Label htmlFor="inactive" className="text-xs font-semibold text-slate-700 cursor-pointer">
        Inactive
      </Label>
    </div>
  </RadioGroup>
</div>

      {/* Borrower List */}
      <div className="space-y-3">
        {currentList.length > 0 ? (
          currentList.map((borrower) => (
            <Card 
              key={borrower.id}
              className={`p-4 cursor-pointer transition-all border-l-4 ${
                activeBorrowerId === borrower.id 
                ? 'border-l-blue-600 bg-blue-50/30 shadow-sm' 
                : 'border-l-transparent hover:bg-slate-50'
              }`}
              onClick={() => setActiveBorrower(borrower.id)}
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 leading-none">{borrower.name}</h3>
                  <p className="text-xs text-slate-500">{borrower.loan_type}</p>
                  <Badge variant="secondary" className="text-[10px] h-5 bg-slate-200">
                    {borrower.status}
                  </Badge>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm text-slate-700">
                    {borrower.amount.toLocaleString()}
                  </p>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p className="text-center text-slate-400 py-10 text-sm italic">No records found</p>
        )}
      </div>
    </div>
  );
}