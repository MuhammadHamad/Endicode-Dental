import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Calendar as CalendarIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Appointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  provider: string;
  type: string;
}

export default function Appointments() {
  const { toast } = useToast();
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: "1", patientName: "John Doe", date: "2025-10-10", time: "10:00", provider: "Dr. Smith", type: "Checkup" },
    { id: "2", patientName: "Jane Smith", date: "2025-10-10", time: "11:00", provider: "Dr. Johnson", type: "Cleaning" },
  ]);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const handleAddAppointment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Check for double booking
    const newDate = formData.get("date") as string;
    const newTime = formData.get("time") as string;
    const newProvider = formData.get("provider") as string;
    
    const isDoubleBooked = appointments.some(
      apt => apt.date === newDate && apt.time === newTime && apt.provider === newProvider
    );
    
    if (isDoubleBooked) {
      toast({ title: "Time slot already booked", variant: "destructive" });
      return;
    }
    
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      patientName: formData.get("patientName") as string,
      date: newDate,
      time: newTime,
      provider: newProvider,
      type: formData.get("type") as string,
    };
    
    setAppointments([...appointments, newAppointment]);
    setIsAddOpen(false);
    toast({ title: "Appointment scheduled successfully" });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Appointments</h1>
            <p className="text-muted-foreground mt-1">Manage your clinic schedule</p>
          </div>
          
          <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Schedule Appointment
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Schedule New Appointment</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddAppointment} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="patientName">Patient Name *</Label>
                  <Input id="patientName" name="patientName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date *</Label>
                  <Input id="date" name="date" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time *</Label>
                  <Input id="time" name="time" type="time" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="provider">Provider *</Label>
                  <Select name="provider" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dr. Smith">Dr. Smith</SelectItem>
                      <SelectItem value="Dr. Johnson">Dr. Johnson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Appointment Type *</Label>
                  <Select name="type" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Checkup">Checkup</SelectItem>
                      <SelectItem value="Cleaning">Cleaning</SelectItem>
                      <SelectItem value="Filling">Filling</SelectItem>
                      <SelectItem value="Root Canal">Root Canal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">Schedule</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-4">
          {appointments.map((apt) => (
            <Card key={apt.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  {apt.patientName}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Date & Time</p>
                  <p className="font-medium">{apt.date} at {apt.time}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Provider</p>
                  <p className="font-medium">{apt.provider}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Type</p>
                  <p className="font-medium">{apt.type}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
