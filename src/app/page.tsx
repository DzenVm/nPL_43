import { connection } from "next/server";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MechanicsGrid from "@/components/MechanicsGrid";
import AbsentList from "@/components/AbsentList";
import Walkthrough from "@/components/Walkthrough";
import Audience from "@/components/Audience";
import Requirements from "@/components/Requirements";
import DevNotes from "@/components/DevNotes";
import Faq from "@/components/Faq";
import ClosingBand from "@/components/ClosingBand";
import { SITE_URL } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Game",
  name: "Blimjoo",
  description:
    "Gra przeglądarkowa dla jednego gracza, w której prowadzi się posterunek handlowy na skraju mapy: zapasy, zwiad i korespondencja z sąsiadami rozłożone na cztery pory roku.",
  genre: ["Strategia", "Symulacja"],
  playMode: "SinglePlayer",
  applicationCategory: "Game",
  url: SITE_URL,
  inLanguage: "pl",
};

export default async function HomePage() {
  // Sezon w hero liczony jest od bieżącej daty na serwerze przy każdym
  // żądaniu — connection() wymusza dynamiczne renderowanie tej trasy.
  await connection();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Intro />
      <MechanicsGrid />
      <AbsentList />
      <Walkthrough />
      <Audience />
      <Requirements />
      <DevNotes />
      <Faq />
      <ClosingBand />
    </>
  );
}
