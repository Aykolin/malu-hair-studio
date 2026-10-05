import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        <span>© 2026 Malu Hair Studio.</span>
        <Link href="/direitos">Todos os direitos reservados</Link>
        <span className="footer-separator" aria-hidden="true">
          |
        </span>
        <span>
          Desenvolvido por{" "}
          <a href="https://kauanystudio.com/" target="_blank" rel="noreferrer">
            KS Studio
          </a>
        </span>
      </p>
    </footer>
  );
}
