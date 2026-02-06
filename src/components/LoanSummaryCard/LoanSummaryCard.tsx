

interface LoanSummaryProps {
  activeBorrowerDetail: any;
}

export function LoanSummaryCard({ activeBorrowerDetail }: LoanSummaryProps) {
  const summaryItems = [
    { label: "Loan Amount", value: `${activeBorrowerDetail.loan_amount.toLocaleString()}` },
    { label: "Employment", value: activeBorrowerDetail.employment },
    { label: "Existing Loan", value: `${activeBorrowerDetail.existing_loan?.toLocaleString() || '0'}` },
    { label: "Credit Score", value: activeBorrowerDetail.credit_score },
    { label: "Source of Funds", value: activeBorrowerDetail.source_of_funds },
    { label: "Income", value: `${activeBorrowerDetail.income.toLocaleString()}` }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {summaryItems.map((item, i) => (
        <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-100 shadow-sm transition-hover hover:bg-slate-100/50">
          <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight mb-1">{item.label}</p>
          <p className="font-bold text-slate-800 flex items-center gap-1 text-sm">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}