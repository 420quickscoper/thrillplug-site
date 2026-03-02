export default function RefundPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-32 md:py-48 text-muted">
            <h1 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter mb-4">Refund & Cancellation Policy</h1>

            <section className="mb-12 mt-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Service Commitment</h2>
                <p className="leading-relaxed mb-4">
                    At Thrillplug, we operate on a "Pure Signal" basis. Our goal is high-potency results for every client.
                </p>
                <p className="leading-relaxed font-bold text-foreground">
                    All services are delivered digitally via email or secure client portals and involve no physical shipment.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Refund Terms</h2>
                <ul className="list-none space-y-6">
                    <li>
                        <strong className="text-foreground block mb-2">Contract-Specific Terms:</strong>
                        <p className="leading-relaxed">Specific refund and cancellation terms are defined within each individual Service Contract signed between Thrillplug Limited and the Client. These bespoke terms supersede any general policy.</p>
                    </li>
                    <li>
                        <strong className="text-foreground block mb-2">Satisfaction Guarantee:</strong>
                        <p className="leading-relaxed">If a specific contract does not define refund terms, we offer a Satisfaction Guarantee. If you are not satisfied with the initial deliverables, please contact us within 14 days to discuss a remedy or pro-rata refund.</p>
                    </li>
                    <li>
                        <strong className="text-foreground block mb-2">Termination:</strong>
                        <p className="leading-relaxed">Clients may typically terminate ongoing service agreements with written notice (e.g., 30 to 45 days), subject to the terms of their specific contract.</p>
                    </li>
                </ul>
            </section>
        </div>
    );
}
