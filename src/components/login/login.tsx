import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Lock } from "lucide-react";

export function Login() {
  const login = useAuthStore((state) => state.login);

  return (
    <div className="h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="max-w-md w-full shadow-2xl border-none">
        <CardHeader className="text-center space-y-1">
          <div className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
            <Lock className="text-blue-600" size={24} />
          </div>
          <CardTitle className="text-2xl font-black">Welcome Back</CardTitle>
          <p className="text-slate-500 text-sm">Please select your role to continue</p>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
<Button 
  onClick={() => login('Admin', 'System Admin')} 
  className="w-full h-12 bg-gradient-to-tr from-indigo-500 to-blue-600 text-white border-indigo-200 transition-all duration-300 hover:scale-[1.02] hover:brightness-110 hover:shadow-lg active:scale-[0.98] font-bold"
>
  Enter as Admin
</Button>

<Button 
  onClick={() => login('Broker', 'Robert Turner')} 
  className="w-full h-12 bg-gradient-to-tr from-emerald-500 to-teal-600 text-white border-emerald-200 transition-all duration-300 hover:scale-[1.02] hover:brightness-110 hover:shadow-lg active:scale-[0.98] font-bold"
>
  Enter as Broker 
</Button>
        </CardContent>
        <CardFooter>
          <p className="text-[10px] text-center w-full text-slate-400 uppercase tracking-widest">
            Secured Enterprise Access
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}