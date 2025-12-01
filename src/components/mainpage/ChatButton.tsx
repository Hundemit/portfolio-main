"use client";

import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export function ChatButton() {
  const handleChatClick = () => {
    console.log("Chat clicked");
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <Button
        variant="outline"
        onClick={handleChatClick}
        className="w-full max-w-2xl"
      >
        <Bot />
        Chat with me
      </Button>
    </section>
  );
}
