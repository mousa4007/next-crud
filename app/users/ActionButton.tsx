"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

interface IProps {
  title: string;
}
export const ActionButton = ({ title }: IProps) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {pending ? "" : title}
      {pending ? <Loader2 className="animate-spin" /> : ""}
    </Button>
  );
};

