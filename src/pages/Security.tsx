
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, AlertTriangle, Key, Server } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All data is encrypted both in transit and at rest using industry-standard AES-256 encryption protocols."
    },
    {
      icon: Key,
      title: "Two-Factor Authentication",
      description: "Mandatory 2FA for all accounts using TOTP, SMS, or hardware security keys for enhanced account protection."
    },
    {
      icon: Lock,
      title: "Multi-Signature Wallets",
      description: "Cryptocurrency funds are secured using multi-signature technology requiring multiple approvals for transactions."
    },
    {
      icon: Server,
      title: "Cold Storage",
      description: "95% of cryptocurrency assets are stored offline in air-gapped cold storage systems for maximum security."
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous monitoring of all systems and transactions with AI-powered fraud detection and prevention."
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Dedicated security team with rapid incident response capabilities and established recovery procedures."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Bank-Grade <span className="text-primary-900">Security</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Your funds and data are protected by enterprise-level security measures designed to exceed industry standards.
            </p>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">{feature.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Standards */}
        <section className="bg-secondary-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Compliance & Standards
              </h2>
              <p className="text-xl text-secondary-600">
                We adhere to the highest international security and compliance standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Regulatory Compliance</h3>
                <ul className="space-y-2 text-secondary-600">
                  <li className="flex items-center"><div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>Polish VASP License</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>GDPR Compliance</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>AML/KYC Procedures</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>EU Financial Regulations</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Security Certifications</h3>
                <ul className="space-y-2 text-secondary-600">
                  <li className="flex items-center"><div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>PCI DSS Level 1</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>Regular Penetration Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Security Team */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Security Questions?
            </h2>
            <p className="text-xl text-secondary-600 mb-8">
              Our security team is available to address any concerns or questions you may have.
            </p>
            <a 
              href="mailto:security@palaris.io"
              className="inline-flex items-center bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              <Shield className="w-5 h-5 mr-2" />
              Contact Security Team
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Security;
