export default function TermsPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-32 md:py-48 text-muted">
            <h1 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter mb-4">Terms of Service</h1>
            <p className="font-mono text-sm opacity-60 mb-12">Effective Date: March 2, 2026</p>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="leading-relaxed mb-4">
                    These Terms of Service govern the use of services provided by Thrillplug Limited, a company registered in Hong Kong. By engaging our services, you agree to these terms.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Service Provision</h2>
                <p className="leading-relaxed mb-4">
                    Thrillplug Limited provides professional services including, but not limited to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Bid Documentation & RFP Architecture:</strong> Preparation of bid evaluation reports and decision matrices.</li>
                    <li><strong>Digital Campaign Management:</strong> Implementation and optimization of digital marketing and Google Ads campaigns.</li>
                    <li><strong>Website Optimization:</strong> Technical audits of conversion-relevant components and performance reporting.</li>
                    <li><strong>Outreach & ABM Assets:</strong> Compilation of account briefs and messaging templates.</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                <p className="leading-relaxed">
                    Unless otherwise specified in a signed Service Contract, all "Results" (work results, data, reports, and materials) produced for a client vest in the client upon creation as "Work for Hire".
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                <p className="leading-relaxed">
                    These terms and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region (HKSAR).
                </p>
            </section>
        </div>
    );
}
