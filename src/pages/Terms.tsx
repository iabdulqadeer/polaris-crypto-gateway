
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900">Terms & Conditions</h1>
            <p className="text-xl text-secondary-600">
              Terms of service for using the Polaris platform
            </p>
            <div className="text-sm text-secondary-500">Last updated: December 2024</div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">1. Acceptance of Terms</h2>
              <p className="text-secondary-700 leading-relaxed">
                By accessing or using the Polaris platform, you agree to the following terms and conditions. These terms constitute a legally binding agreement between you and Vertamon SP Z O.O.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">2. Eligibility</h2>
              <p className="text-secondary-700 leading-relaxed">
                You must be 18+ and legally eligible to use our services. By using our platform, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>You are at least 18 years of age</li>
                <li>You have the legal capacity to enter into contracts</li>
                <li>You are not located in a sanctioned jurisdiction</li>
                <li>You are not on any prohibited persons list</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">3. KYC and AML Compliance</h2>
              <p className="text-secondary-700 leading-relaxed">
                All users must pass mandatory KYC (Know Your Customer) and AML (Anti-Money Laundering) checks before accessing our services. This includes:
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Identity verification with government-issued documents</li>
                <li>Address verification</li>
                <li>Source of funds documentation when required</li>
                <li>Ongoing monitoring and periodic reviews</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">4. Services</h2>
              <p className="text-secondary-700 leading-relaxed">
                Services may include crypto buying/selling, SEPA payments, wallet services, and related financial services. We reserve the right to:
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Modify or discontinue services at any time</li>
                <li>Set limits on transaction amounts</li>
                <li>Refuse service for any reason</li>
                <li>Charge fees for our services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">5. Account Management</h2>
              <p className="text-secondary-700 leading-relaxed">
                We reserve the right to suspend or terminate accounts for suspicious activity, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Violation of these terms</li>
                <li>Suspicious or fraudulent activity</li>
                <li>Non-compliance with KYC/AML requirements</li>
                <li>Regulatory or legal requirements</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">6. User Responsibilities</h2>
              <p className="text-secondary-700 leading-relaxed">
                You are responsible for the accuracy of submitted information and must:
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Provide accurate and up-to-date information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Use our services only for lawful purposes</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">7. Limitations of Liability</h2>
              <p className="text-secondary-700 leading-relaxed">
                We are not liable for third-party platform issues or blockchain delays. Our liability is limited to the maximum extent permitted by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">8. Risk Disclosure</h2>
              <p className="text-secondary-700 leading-relaxed">
                Cryptocurrency trading involves substantial risk of loss. You should carefully consider whether trading is suitable for you in light of your financial condition.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">9. Governing Law</h2>
              <p className="text-secondary-700 leading-relaxed">
                Disputes are subject to Polish law and jurisdiction. Any legal disputes will be resolved in the courts of Poland.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">10. Contact Information</h2>
              <p className="text-secondary-700 leading-relaxed">
                For questions about these terms, contact us at:
              </p>
              <div className="bg-secondary-50 p-4 rounded-lg">
                <p className="text-secondary-700 font-medium">Legal Department</p>
                <p className="text-secondary-700">Email: legal@polaris.exchange</p>
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

export default Terms;
