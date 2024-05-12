import Intro from "@/components/home/Intro";
import { Reviews } from "@/components/home/Reviews";
import ValueProposition from "@/components/home/ValueProposition";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Intro />
      <ValueProposition />
      <Reviews />
    </main>
  );
}
