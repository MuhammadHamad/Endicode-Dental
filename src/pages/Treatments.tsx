import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function Treatments() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Treatment Records</h1>
          <p className="text-muted-foreground mt-1">View and manage treatment history</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Treatments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Treatment records will appear here</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
