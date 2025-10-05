import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="text-center space-y-6 max-w-2xl px-4">
        <h1 className="text-5xl font-bold tracking-tight">Endicode Dental</h1>
        <p className="text-xl text-muted-foreground">
          Modern dental clinic management system. Streamline your practice with powerful tools.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/auth">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/auth">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
