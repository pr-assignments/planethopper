import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function ErrorDisplay({ message }: Readonly<{ message: string }>) {
  return (
    <Alert variant="destructive">
      <AlertTitle className="text-xl">
        <div className="flex gap-2 items-center">
          <AlertCircle />
          Error
        </div>
      </AlertTitle>
      <AlertDescription className="text-lg">{message}</AlertDescription>
    </Alert>
  );
}
