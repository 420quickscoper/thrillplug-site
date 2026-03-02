export default function PrivacyPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-32 md:py-48 text-muted">
            <h1 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter mb-4">Privacy Policy</h1>
            <p className="font-mono text-sm opacity-60 mb-12">Last Updated: March 2, 2026</p>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Collection</h2>
                <p className="leading-relaxed">
                    Thrillplug Limited is committed to compliance with the Personal Data (Privacy) Ordinance (PDPO) of Hong Kong and the EU GDPR. We collect minimal personal data necessary for business communication and invoicing, such as names, business addresses, and email addresses.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Tracking & Cookies</h2>
                <p className="leading-relaxed">
                    Our website, thrillplug.com, does not currently utilize third-party tracking pixels (e.g., Google Analytics or Meta Pixel). We do not track your browsing behavior across the web.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="leading-relaxed">
                    We implement professional-grade security measures to protect client data. We do not share your personal information with third parties except as required to fulfill our contractual obligations or by law.
                </p>
            </section>
        </div>
    );
}
