import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        © 2026 Malu Hair Studio. <Link href="/direitos">All Rights Reserved.</Link>
        <span aria-hidden="true"> | </span>
        Desenvolvido por{" "}
        <a href="https://kauanystudio.com/" target="_blank" rel="noreferrer">
          KS Studio
        </a>
      </p>
    </footer>
  );
}
