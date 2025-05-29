
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileCheck, Users, Search, Shield, Globe, AlertCircle } from 'lucide-react';

const Compliance = () => {
  const complianceAreas = [
    {
      icon: FileCheck,
      title: "VASP Licensing",
      description: "Fully licensed Virtual Asset Service Provider under Polish financial regulations, ensuring complete legal compliance for all operations."
    },
    {
      icon: Users,
      title: "KYC/AML Procedures",
      description: "Comprehensive Know Your Customer and Anti-Money Laundering procedures that meet EU standards and prevent illicit activities."
    },
    {
      icon: Search,
      title: "Sanctions Screening",
      description: "Real-time screening against global sanctions lists including EU, UN, OFAC, and other international watchlists."
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Full GDPR compliance with robust data protection measures, user rights management, and privacy-by-design principles."
    },
    {
      icon: Globe,
      title: "International Standards",
      description: "Adherence to FATF recommendations and international best practices for virtual asset service providers."
    },
    {
      icon: AlertCircle,
      title: "Risk Management",
      description: "Comprehensive risk assessment framework covering operational, financial, and regulatory risks with continuous monitoring."
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
              Regulatory <span className="text-primary-900">Compliance</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Operating under full Polish VASP licensing with comprehensive compliance measures to ensure the highest standards of regulatory adherence.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <FileCheck className="w-4 h-4 mr-2" />
              Licensed VASP in Poland
            </div>
          </div>
        </section>

        {/* Compliance Areas */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                    <area.icon className="w-8 h-8 text-primary-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">{area.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Framework */}
        <section className="bg-secondary-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Our Regulatory Framework
              </h2>
              <p className="text-xl text-secondary-600">
                Comprehensive compliance measures designed to exceed regulatory requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Customer Due Diligence</h3>
                <ul className="space-y-2 text-secondary-600 text-sm">
                  <li>• Identity verification</li>
                  <li>• Source of funds verification</li>
                  <li>• Enhanced due diligence for high-risk customers</li>
                  <li>• Ongoing monitoring and review</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Transaction Monitoring</h3>
                <ul className="space-y-2 text-secondary-600 text-sm">
                  <li>• Real-time transaction screening</li>
                  <li>• Suspicious activity reporting</li>
                  <li>• Pattern analysis and detection</li>
                  <li>• Automated compliance alerts</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Regulatory Reporting</h3>
                <ul className="space-y-2 text-secondary-600 text-sm">
                  <li>• Automated regulatory filings</li>
                  <li>• Comprehensive audit trails</li>
                  <li>• Regular compliance reports</li>
                  <li>• Regulatory change management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Compliance */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Compliance Inquiries
            </h2>
            <p className="text-xl text-secondary-600 mb-8">
              For questions about our compliance procedures or regulatory status, contact our compliance team.
            </p>
            <a 
              href="mailto:compliance@palaris.io"
              className="inline-flex items-center bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              <FileCheck className="w-5 h-5 mr-2" />
              Contact Compliance Team
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Compliance;
