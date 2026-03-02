import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border mt-32 py-12 px-6 md:px-12 text-muted text-sm font-mono">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div>
                    <p className="font-sans font-bold text-foreground mb-4">Thrillplug Limited.</p>
                    <address className="not-italic opacity-70 mb-4 max-w-xs leading-relaxed">
                        Flat 1019B, 10/F, Liven House<br />
                        No 61-63 King Yip Street<br />
                        Kwun Tong, Hong Kong<br /><br />
                        Phone: +43 1343 354 029<br />
                        Business Registration Number: 79458399
                    </address>
                    <p className="opacity-70">&copy; {currentYear} Thrillplug. All rights reserved.</p>
                </div>

                <nav className="flex flex-col md:text-right gap-3 uppercase tracking-wider text-xs">
                    <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                    <Link href="/refund" className="hover:text-foreground transition-colors">Refund & Cancellation</Link>
                    <Link href="/legal" className="hover:text-foreground transition-colors">Legal Notice</Link>
                </nav>
            </div>
        </footer>
    );
}
