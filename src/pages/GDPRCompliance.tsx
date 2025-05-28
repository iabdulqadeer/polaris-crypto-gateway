
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Download, Trash2, Eye, Edit, UserCheck } from 'lucide-react';

const GDPRCompliance = () => {
  const userRights = [
    {
      icon: Eye,
      title: "Right of Access",
      description: "Request a copy of all personal data we hold about you, including how it's processed and shared."
    },
    {
      icon: Edit,
      title: "Right to Rectification",
      description: "Correct any inaccurate or incomplete personal data we have on file about you."
    },
    {
      icon: Trash2,
      title: "Right to Erasure",
      description: "Request deletion of your personal data when it's no longer necessary for the original purpose."
    },
    {
      icon: Download,
      title: "Right to Data Portability",
      description: "Receive your personal data in a structured, machine-readable format for transfer to another service."
    },
    {
      icon: Shield,
      title: "Right to Object",
      description: "Object to processing of your personal data for direct marketing or other legitimate interests."
    },
    {
      icon: UserCheck,
      title: "Right to Withdraw Consent",
      description: "Withdraw your consent at any time where processing is based on your consent."
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
              GDPR <span className="text-primary-900">Compliance</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Your data protection rights under the General Data Protection Regulation and how to exercise them.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              Fully GDPR Compliant
            </div>
          </div>
        </section>

        {/* User Rights */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Your Data Protection Rights
              </h2>
              <p className="text-xl text-secondary-600">
                Under GDPR, you have comprehensive rights regarding your personal data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userRights.map((right, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                    <right.icon className="w-8 h-8 text-primary-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">{right.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exercise Rights */}
        <section className="bg-secondary-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                How to Exercise Your Rights
              </h2>
              <p className="text-xl text-secondary-600">
                Submit a request to exercise any of your GDPR rights through our secure process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-secondary-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">Request Process</h3>
                  <ol className="space-y-3 text-secondary-700">
                    <li className="flex items-start">
                      <span className="bg-primary-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                      <span>Submit your request via email or contact form</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                      <span>We verify your identity for security</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                      <span>We process your request within 30 days</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                      <span>You receive confirmation of action taken</span>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">Required Information</h3>
                  <ul className="space-y-2 text-secondary-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      Full name and email address
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      Account information (if applicable)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      Specific right you wish to exercise
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      Reason for the request (if applicable)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      Identity verification documents
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Data Protection Officer
              </h2>
              <p className="text-xl text-secondary-600">
                Contact our Data Protection Officer for any GDPR-related inquiries.
              </p>
            </div>

            <div className="bg-secondary-50 p-8 rounded-2xl text-center">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-secondary-900">Submit GDPR Request</h3>
                <p className="text-secondary-600">
                  Email us with your GDPR request and we'll respond within 30 days as required by law.
                </p>
                <a 
                  href="mailto:gdpr@polaris.io"
                  className="inline-flex items-center bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-medium transition-colors"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Contact Data Protection Officer
                </a>
                <div className="mt-6 pt-6 border-t border-secondary-200">
                  <p className="text-sm text-secondary-600">
                    Email: gdpr@polaris.io<br/>
                    Response Time: Within 30 days<br/>
                    Vertamon SP Z O.O., Poland
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GDPRCompliance;
