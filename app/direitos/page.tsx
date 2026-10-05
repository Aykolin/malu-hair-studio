import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Direitos e propriedade intelectual | Malu Hair Studio",
  description:
    "Informações sobre os direitos, a criação, o layout, o código e os conteúdos do website Malu Hair Studio.",
  alternates: { canonical: "/direitos" },
};

export default function DireitosPage() {
  return (
    <>
      <header className="legal-header">
        <Link className="brand" href="/" aria-label="Malu Hair Studio — voltar ao início">
          <span className="brand-mark" aria-hidden="true">
            M
          </span>
          <span>
            Malu <strong>Hair Studio</strong>
          </span>
        </Link>
        <Link className="legal-back" href="/">
          Voltar ao site
        </Link>
      </header>

      <main className="legal-page">
        <article className="legal-article">
          <p className="legal-kicker">Sobre a criação</p>
          <h1>Direitos e propriedade intelectual</h1>
          <p className="legal-intro">
            Este website é um projeto demonstrativo desenvolvido pelo KS Studio para apresentar uma
            experiência de loja online.
          </p>

          <section>
            <h2>Layout e código</h2>
            <p>
              A estrutura visual, a organização das páginas e a implementação do website integram o
              trabalho de criação apresentado aqui. A reprodução, distribuição ou utilização desses
              elementos em outro projeto depende da autorização dos respectivos titulares dos
              direitos.
            </p>
          </section>

          <section>
            <h2>Conteúdo e marcas</h2>
            <p>
              Textos, imagens, nomes de marcas e demais materiais podem ter titulares e condições de
              uso próprios. A presença de uma marca ou peça nesta demonstração não indica vínculo
              comercial ou autorização para reutilizá-la.
            </p>
          </section>

          <section>
            <h2>Um projeto para inspirar o seu</h2>
            <p>
              Quer apresentar sua marca com um website próprio? Conheça o trabalho do KS Studio e
              descubra possibilidades para a sua presença digital.
            </p>
            <Button asChild size="lg" className="gold-button legal-cta">
              <a href="https://kauanystudio.com/" target="_blank" rel="noreferrer">
                Entrar em contato com a KS Studio
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </section>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
