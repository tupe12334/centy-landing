import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              Centy
            </span>
            <span className="text-sm text-[var(--foreground)]/50">
              Open Source Issue Tracking
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://app.centy.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors"
            >
              App
            </Link>
            <Link
              href="https://docs.centy.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://docs.centy.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors"
            >
              Support
            </Link>
            <Link
              href="https://github.com/centy-io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--secondary)] text-center">
          <p className="text-sm text-[var(--foreground)]/50">
            Built with Next.js and deployed on Cloudflare Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
