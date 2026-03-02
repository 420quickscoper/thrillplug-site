export default function LegalPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-32 md:py-48 text-muted">
            <h1 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter mb-12">Legal Notice <span className="text-2xl font-normal opacity-50">(Impressum)</span></h1>

            <div className="bg-neutral-900 border border-border p-8 rounded-sm">
                <dl className="space-y-6 text-sm md:text-base">
                    <div>
                        <dt className="text-xs uppercase tracking-widest text-muted mb-1 font-bold">Company Name</dt>
                        <dd className="font-mono text-foreground">Thrillplug Limited</dd>
                    </div>

                    <div>
                        <dt className="text-xs uppercase tracking-widest text-muted mb-1 font-bold">Registered Office</dt>
                        <dd className="font-mono text-foreground">Flat 1019B, 10/F Liven House, No 61-63 King Yip Street, Kwun Tong, Hong Kong</dd>
                    </div>

                    <div>
                        <dt className="text-xs uppercase tracking-widest text-muted mb-1 font-bold">Company Registration Number</dt>
                        <dd className="font-mono text-foreground">79458399</dd>
                    </div>

                    <div>
                        <dt className="text-xs uppercase tracking-widest text-muted mb-1 font-bold">Contact Email</dt>
                        <dd className="font-mono"><a href="mailto:julian@thrillplug.com" className="hover:text-foreground transition-colors">julian@thrillplug.com</a></dd>
                    </div>

                    <div>
                        <dt className="text-xs uppercase tracking-widest text-muted mb-1 font-bold">Payment Methods</dt>
                        <dd className="font-mono text-foreground">We accept payments via bank transfer and professional invoice. We do not process direct credit card payments through this portfolio website.</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}
