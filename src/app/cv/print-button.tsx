"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrintButton() {
  return (
    <Button
      onClick={() => window.print()}
      size="sm"
      className="bg-black text-white hover:bg-neutral-800 shadow-lg"
    >
      <Printer className="mr-2 h-4 w-4" />
      Sauvegarder en PDF
    </Button>
  );
}
