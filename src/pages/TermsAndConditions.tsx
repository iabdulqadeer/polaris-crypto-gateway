
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900">Terms & Conditions</h1>
            <p className="text-xl text-secondary-600">
              Terms of service for using Palaris platform and services
            </p>
            <div className="text-sm text-secondary-500">Last updated: December 2024</div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">1. Agreement to Terms</h2>
              <p className="text-secondary-700 leading-relaxed">
                By accessing and using Palaris services operated by Vertamon SP Z O.O., you agree to be bound by these Terms and Conditions and all applicable laws and regulations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">2. Service Description</h2>
              <p className="text-secondary-700 leading-relaxed">
                Palaris provides virtual asset services including cryptocurrency custody, fiat onramp/offramp, SEPA transfers, and related financial services under Polish VASP licensing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">3. Eligibility</h2>
              <p className="text-secondary-700 leading-relaxed">
                To use our services, you must:
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Have legal capacity to enter into contracts</li>
                <li>Not be located in sanctioned jurisdictions</li>
                <li>Complete our KYC verification process</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">4. Account Registration</h2>
              <p className="text-secondary-700 leading-relaxed">
                Account creation requires accurate information and completion of identity verification. You are responsible for maintaining account security and promptly notifying us of unauthorized access.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">5. Fees and Charges</h2>
              <p className="text-secondary-700 leading-relaxed">
                Fees for services are clearly displayed and agreed upon before transactions. We reserve the right to modify fees with advance notice to users.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">6. Prohibited Activities</h2>
              <p className="text-secondary-700 leading-relaxed">
                Users may not engage in:
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Money laundering or terrorist financing</li>
                <li>Fraud or market manipulation</li>
                <li>Violation of sanctions or export controls</li>
                <li>Unauthorized access to our systems</li>
                <li>Any illegal activities</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">7. Risk Disclosure</h2>
              <p className="text-secondary-700 leading-relaxed">
                Cryptocurrency investments carry significant risks including price volatility, regulatory changes, and potential total loss of funds. Users should only invest what they can afford to lose.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">8. Limitation of Liability</h2>
              <p className="text-secondary-700 leading-relaxed">
                Our liability is limited to the maximum extent permitted by law. We are not liable for market losses, system downtime, or third-party actions beyond our control.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">9. Termination</h2>
              <p className="text-secondary-700 leading-relaxed">
                We may suspend or terminate accounts for violations of these terms, regulatory requirements, or suspicious activity. Users may close accounts with proper notice and settlement of obligations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">10. Governing Law</h2>
              <p className="text-secondary-700 leading-relaxed">
                These terms are governed by Polish law. Disputes will be resolved through Polish courts or agreed arbitration procedures.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">11. Contact Information</h2>
              <p className="text-secondary-700 leading-relaxed">
                For questions about these terms or our services, contact us at:
              </p>
              <div className="bg-secondary-50 p-4 rounded-lg">
                <p className="text-secondary-700 font-medium">Legal Department</p>
                <p className="text-secondary-700">Email: legal@palaris.io</p>
                <p className="text-secondary-700">Vertamon SP Z O.O.</p>
                <p className="text-secondary-700">Poland</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
