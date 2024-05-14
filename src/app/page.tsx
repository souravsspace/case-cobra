import Intro from "@/components/home/Intro";
import KindaFooter from "@/components/home/KindaFooter";
import Reviews from "@/components/home/reviews/Reviews";
import ValueProposition from "@/components/home/ValueProposition";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Intro />
      <ValueProposition />
      <Reviews />
      <KindaFooter />
    </main>
  );
}
