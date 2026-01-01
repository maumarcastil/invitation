import { HeroSection } from "./components/HeroSection";
import { CountdownSection } from "./components/CountdownSection";
import { PartySection } from "./components/PartySection";
import { DressCodeSection } from "./components/DressCodeSection";
import { GiftsSection } from "./components/GiftsSection";
import { GallerySection } from "./components/GallerySection";
import { RSVPSection } from "./components/RSVPSection";
import { MusicButton } from "./components/MusicButton";
import { Divider } from "./components/Divider";

export default function Home() {
  // ==========================================
  // DATOS DEL EVENTO - Edita aquí tu información
  // ==========================================
  const eventData = {
    name: "Adriana",
    date: "24 de Enero, 2026",
    targetDate: "2026-01-24T20:00:00",
    phoneNumber: "+573028666354",
    rsvpMessage:
      "Hola, quiero confirmar mi asistencia a los XV años de Adriana 💕",
    party: {
      time: "20:00 hs",
      venue: "Marsellesa Eventos",
      address: "Cra. 52 #74-90, Barranquilla.",
      mapLink: "https://maps.app.goo.gl/PeYZxvjy7bD4cK9K7",
    },
    dressCode: {
      code: "Formal / Elegante",
      description: "Vestimenta: Vestido de gala o traje formal.",
      avoidColor: "Rosa y sus tonos",
    },
    photos: [
      { id: 1, url: "/img/1.jpeg", alt: "Foto 1" },
      { id: 2, url: "/img/2.jpeg", alt: "Foto 2" },
      { id: 3, url: "/img/3.jpeg", alt: "Foto 3" },
      { id: 4, url: "/img/4.jpeg", alt: "Foto 4" },
    ],
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Music Button */}
      <MusicButton />

      {/* Hero */}
      <HeroSection name={eventData.name} heroImage="/img/1.jpeg" />

      {/* Countdown */}
      <CountdownSection
        targetDate={eventData.targetDate}
        eventDate={eventData.date}
      />

      <Divider />

      {/* Party Info */}
      <PartySection
        time={eventData.party.time}
        venue={eventData.party.venue}
        address={eventData.party.address}
        mapLink={eventData.party.mapLink}
      />

      <Divider />

      {/* Dress Code */}
      <DressCodeSection
        code={eventData.dressCode.code}
        description={eventData.dressCode.description}
        avoidColor={eventData.dressCode.avoidColor}
      />

      <Divider />

      {/* Gifts */}
      <GiftsSection />

      {/* Gallery */}
      <GallerySection photos={eventData.photos} />

      <Divider />

      {/* RSVP */}
      <RSVPSection
        phoneNumber={eventData.phoneNumber}
        message={eventData.rsvpMessage}
      />

      {/* Footer */}
      <footer className="py-10 text-center bg-white border-t border-accent/10">
        <p className="text-4xl font-cursive text-accent mb-2">
          {eventData.name}
        </p>
        <p className="text-gray-400 text-sm font-serif">Mis XV Años</p>
        <p className="mt-6 text-xs text-gray-300">♡ 24 de Enero, 2026 ♡</p>
      </footer>
    </main>
  );
}
