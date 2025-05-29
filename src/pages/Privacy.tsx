
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900">Privacy Policy</h1>
            <p className="text-xl text-secondary-600">
              How we collect, use, and protect your personal data
            </p>
            <div className="text-sm text-secondary-500">Last updated: December 2024</div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">1. Introduction</h2>
              <p className="text-secondary-700 leading-relaxed">
                This Privacy Policy explains how Palaris (Vertamon SP Z O.O.) collects, uses, and protects your personal data in accordance with the General Data Protection Regulation (GDPR).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">2. Data We Collect</h2>
              <p className="text-secondary-700 leading-relaxed">
                We collect personal information like name, email, address, KYC documents, and transaction data necessary for providing our services and maintaining regulatory compliance.
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Personal identification information (name, address, date of birth)</li>
                <li>Contact information (email, phone number)</li>
                <li>Financial information for KYC/AML compliance</li>
                <li>Transaction history and account activity</li>
                <li>Device and usage information</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">3. How We Use Your Data</h2>
              <p className="text-secondary-700 leading-relaxed">
                Data is used for account management, regulatory compliance, and service provision. We process your data to:
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Prevent fraud and enhance security</li>
                <li>Communicate with you about your account</li>
                <li>Improve our services and user experience</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">4. Data Sharing</h2>
              <p className="text-secondary-700 leading-relaxed">
                We do not sell user data to third parties. We may share your data only when:
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Required by law or regulatory authorities</li>
                <li>Necessary for service provision (with trusted partners)</li>
                <li>To prevent fraud or protect our legal rights</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">5. Your Rights</h2>
              <p className="text-secondary-700 leading-relaxed">
                You have the right to access, correct, or delete your data anytime. Under GDPR, you also have the right to:
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Request access to your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data (where legally permissible)</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">6. Data Security</h2>
              <p className="text-secondary-700 leading-relaxed">
                Data is encrypted and stored securely on EU servers. We implement industry-standard security measures including encryption, access controls, and regular security audits.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">7. Contact Information</h2>
              <p className="text-secondary-700 leading-relaxed">
                For data inquiries or to exercise your rights under GDPR, contact us at:
              </p>
              <div className="bg-secondary-50 p-4 rounded-lg">
                <p className="text-secondary-700 font-medium">Privacy Officer</p>
                <p className="text-secondary-700">Email: privacy@palaris.io</p>
                <p className="text-secondary-700">Vertamon SP Z O.O.</p>
                <p className="text-secondary-700">Poland</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">8. Changes to This Policy</h2>
              <p className="text-secondary-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
