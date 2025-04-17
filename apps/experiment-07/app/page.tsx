import type { Metadata } from "next";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Experiment 07 - Crafted.is",
};

export default function Page() {
  return (
    <div className="min-h-svh">
      <Header />
    </div>
  );
}
