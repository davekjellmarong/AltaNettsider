import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} AltaNettsider · Håndlaget i Nord-Norge
        </span>
        <div className="flex gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <Link href="/#prosjekter" className="hover:text-foreground">
            Prosjekter
          </Link>
          <Link href="/#prosess" className="hover:text-foreground">
            Prosess
          </Link>
          <Link href="/priser" className="hover:text-foreground">
            Pris
          </Link>
          <Link href="/kontakt" className="hover:text-foreground">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
