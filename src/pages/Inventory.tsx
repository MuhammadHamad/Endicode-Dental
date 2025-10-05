import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

export default function Inventory() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Inventory</h1>
          <p className="text-muted-foreground mt-1">Track consumables and supplies</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Current Stock
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Inventory items will appear here</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
