import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Receipt } from "lucide-react";

export default function Invoices() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Invoices & Payments</h1>
          <p className="text-muted-foreground mt-1">Manage billing and payments</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5" />
              Pending Invoices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Invoice records will appear here</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
