import { MapPin, MessageCircle } from "lucide-react";

import { MapEmbed } from "@/components/map-embed";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

const whatsappNumber = "5514997284280";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

const services = [
  {
    number: "01",
    title: "Cortes",
    description: "Formas que respeitam seu estilo, seu momento e a rotina do seu cabelo.",
  },
  {
    number: "02",
    title: "Cor",
    description: "Tons, luzes e contrastes construídos com leitura cuidadosa de cada fio.",
  },
  {
    number: "03",
    title: "Tratamentos",
    description: "Protocolos de cuidado para devolver força, brilho e movimento aos cabelos.",
  },
  {
    number: "04",
    title: "Finalização",
    description: "Textura e acabamento para ocasiões especiais ou para se sentir ainda mais você.",
  },
];

const gallerySlots = [
  { id: "01", className: "gallery-card gallery-card--tall" },
  { id: "02", className: "gallery-card gallery-card--wide" },
  { id: "03", className: "gallery-card" },
  { id: "04", className: "gallery-card gallery-card--wide" },
  { id: "05", className: "gallery-card" },
  { id: "06", className: "gallery-card gallery-card--tall" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Malu Hair Studio",
  description: "Salão de beleza e cabeleireiras em Botucatu, com atendimento de Marcinha e Lucy.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Prudente de Moraes, 845",
    addressLocality: "Botucatu",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  telephone: "+55 14 99728-4280",
  sameAs: ["https://www.instagram.com/maluhairstudiobtu/"],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="route-progress" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Malu Hair Studio — início">
          <span className="brand-mark" aria-hidden="true">
            M
          </span>
          <span>
            Malu <strong>Hair Studio</strong>
          </span>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#trabalho">Trabalho</a>
          <a href="#profissionais">Profissionais</a>
          <a href="#localizacao">Localização</a>
        </nav>

        <Button asChild className="header-cta">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Malu%20Hair%20Studio.`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" />
            Agendar
          </a>
        </Button>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <h1 id="hero-title">
              Seu cabelo,
              <span className="gold-text" data-text="sua presença.">
                sua presença.
              </span>
            </h1>
            <p className="hero-lead">
              Técnica, escuta e cuidado em um espaço pensado para revelar a sua melhor versão — com
              Marcinha e Lucy, cabeleireiras em Botucatu.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg" className="gold-button">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Malu%20Hair%20Studio.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle aria-hidden="true" />
                  Agendar pelo WhatsApp
                </a>
              </Button>
              <a className="text-link" href="#trabalho">
                Conhecer o trabalho
              </a>
            </div>
          </div>

          <div
            className="hero-media image-slot"
            role="img"
            aria-label="Espaço reservado para foto principal"
          >
            <div className="slot-corners" aria-hidden="true" />
          </div>
        </section>

        <Reveal as="section" className="intro section-shell" id="trabalho">
          <div className="section-heading">
            <h2>Um trabalho que começa na escuta.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Cada cabelo tem história, textura e ritmo próprios. Por isso, cada atendimento parte
              de uma conversa cuidadosa para chegar a um resultado bonito, possível e
              verdadeiramente seu.
            </p>
            <p className="gold-note">Do detalhe ao movimento final.</p>
          </div>
        </Reveal>

        <Reveal as="section" className="services section-shell" aria-labelledby="services-title">
          <h2 className="services-title" id="services-title">
            Serviços
          </h2>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="section"
          className="professionals"
          id="profissionais"
          aria-labelledby="professionals-title"
        >
          <div className="section-shell">
            <div className="section-heading section-heading--light">
              <h2 id="professionals-title">Duas profissionais. Um olhar atento.</h2>
            </div>

            <div className="professional-grid">
              <article className="professional-card">
                <div
                  className="portrait-slot image-slot"
                  role="img"
                  aria-label="Espaço reservado para foto da Marcinha"
                />
                <div className="professional-copy">
                  <h3>Marcinha</h3>
                  <p>
                    Um olhar sensível para traduzir referências, desejos e rotina em um resultado
                    com identidade, leveza e acabamento.
                  </p>
                </div>
              </article>

              <article className="professional-card professional-card--offset">
                <div
                  className="portrait-slot image-slot"
                  role="img"
                  aria-label="Espaço reservado para foto da Lucy"
                />
                <div className="professional-copy">
                  <h3>Lucy</h3>
                  <p>
                    Cuidado próximo e atenção aos detalhes para criar cabelos que valorizam traços,
                    textura e personalidade.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="portfolio section-shell" aria-labelledby="portfolio-title">
          <div className="portfolio-heading">
            <div className="section-heading">
              <h2 id="portfolio-title">Transformações que falam por si.</h2>
            </div>
            <p>
              Estrutura pronta para receber os registros reais de cortes, cores, tratamentos e
              finalizações do studio.
            </p>
          </div>

          <section className="gallery-grid" aria-label="Espaços reservados para a galeria">
            {gallerySlots.map((slot) => (
              <div
                className={`${slot.className} image-slot`}
                key={slot.id}
                role="img"
                aria-label={`Espaço reservado para foto ${slot.id}`}
              />
            ))}
          </section>
        </Reveal>

        <Reveal as="section" className="location" id="localizacao" aria-labelledby="location-title">
          <div className="section-shell location-grid">
            <div className="location-copy">
              <h2 id="location-title">Seu momento começa aqui.</h2>
              <address>
                <MapPin aria-hidden="true" />
                <div>
                  <strong>Rua Prudente de Moraes, 845</strong>
                  <span>Botucatu — SP</span>
                </div>
              </address>
              <p className="location-note">
                Galeria ao lado do Riellis Center Hotel, última sala à esquerda. Anexo ao Riellis
                Center.
              </p>
              <Button asChild variant="outline" size="lg" className="map-button">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua%20Prudente%20de%20Moraes%2C%20845%2C%20Botucatu%20SP"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin aria-hidden="true" />
                  Abrir no Google Maps
                </a>
              </Button>
            </div>
            <MapEmbed />
          </div>
        </Reveal>

        <section className="contact" aria-labelledby="contact-title">
          <div className="contact-orbit" aria-hidden="true" />
          <div className="section-shell contact-inner">
            <h2 id="contact-title">Vamos cuidar do seu cabelo?</h2>
            <p>Fale diretamente com a equipe e encontre o melhor horário para você.</p>
            <div className="contact-actions">
              <Button asChild size="lg" className="gold-button">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20Lucy%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle aria-hidden="true" />
                  WhatsApp da Lucy
                </a>
              </Button>
              <Button asChild size="lg" className="gold-button">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20Marcinha%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle aria-hidden="true" />
                  WhatsApp da Marcinha
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="instagram-button">
                <a
                  href="https://www.instagram.com/maluhairstudiobtu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                  maluhairstudiobtu
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Conteúdo JSON-LD é criado apenas com constantes confiáveis deste arquivo.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
