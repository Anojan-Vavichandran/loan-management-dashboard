import { create } from 'zustand';


const loanData = {
  pipeline: {
    new: [
      { id: "1", name: "Sarah Dunn", loan_type: "Home Loan", amount: 300000, status: "Renew" },
      { id: "3", name: "Lisa Carter", loan_type: "Home Loan", amount: 450000, status: "New" }
    ],
    in_review: [
      { id: "2", name: "Alan Matthews", loan_type: "Personal Loan", amount: 20000, status: "In Review" }
    ],
    approved: []
  },
  details: {
    "1": {
      id: "1",
      name: "Sarah Dunn",
      email: "sarah.dunn@example.com",
      phone: "(355)123-4557",
      loan_amount: 300000,
      status: "In Review",
      employment: "At Tech Company",
      income: 120000,
      existing_loan: 240000,
      credit_score: 720,
      source_of_funds: "Declared",
      risk_signal: "Missing Source of Funds declaration",
      ai_flags: [
        "Income Inconsistent with Bank statements",
        "High Debt-to-Income Ratio detected"
      ]
    },
    "2": {
      id: "2",
      name: "Alan Matthews",
      email: "alan.m@example.com",
      phone: "(355)987-6543",
      loan_amount: 20000,
      status: "In Review",
      employment: "Freelancer",
      income: 50000,
      existing_loan: 5000,
      credit_score: 680,
      source_of_funds: "Savings",
      risk_signal: "Low credit history duration",
      ai_flags: ["Short employment history"]
    },
    "3": {
      id: "3",
      name: "Lisa Carter",
      email: "lisa.c@example.com",
      phone: "(355)555-0199",
      loan_amount: 450000,
      status: "New",
      employment: "Manager at Retail",
      income: 95000,
      existing_loan: 100000,
      credit_score: 750,
      source_of_funds: "Property Sale",
      risk_signal: "N/A",
      ai_flags: ["Clear record"]
    }
  },
  broker: {
    name: "Robert Turner",
    deals: 16,
    approval_rate: "75%",
    pending: 7660
  },
  workflow: [
    "Deal Intake",
    "IDV & Credit Check",
    "Document Upload",
    "AI Validation",
    "Credit Committee",
    "Approval & Docs",
    "Funder Syndication"
  ]
};


interface BorrowerStore {
  pipeline: typeof loanData.pipeline;
  broker: typeof loanData.broker;
  workflow: string[];
  activeTab: 'new' | 'in_review' | 'approved';
  activeBorrowerId: string;
  activeBorrowerDetail: any;
  
  
  setActiveTab: (tab: 'new' | 'in_review' | 'approved') => void;
  setActiveBorrower: (id: string) => void;
}

export const useBorrowerStore = create<BorrowerStore>((set) => ({
  pipeline: loanData.pipeline,
  broker: loanData.broker,
  workflow: loanData.workflow,
  activeTab: 'new',
  activeBorrowerId: "1",
  activeBorrowerDetail: loanData.details["1"],

  setActiveTab: (tab) => set({ activeTab: tab }),
  
  setActiveBorrower: (id) => set((state) => ({
    activeBorrowerId: id,
    activeBorrowerDetail: loanData.details[id as keyof typeof loanData.details] || loanData.details["1"]
  })),
}));