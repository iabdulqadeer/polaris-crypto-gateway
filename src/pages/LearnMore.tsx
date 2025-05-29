import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, Users, Building2, CheckCircle } from 'lucide-react';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Learn More About Palaris
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover how Palaris provides a secure, compliant gateway for crypto and fiat services across Europe
          </p>
        </div>

        {/* What is Palaris */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-6 flex items-center">
            <Shield className="w-8 h-8 text-primary-900 mr-3" />
            What is Palaris?
          </h2>
          <div className="bg-primary-50 rounded-lg p-8">
            <p className="text-lg text-secondary-700 leading-relaxed">
              Palaris is a licensed Polish VASP (Virtual Asset Service Provider) offering a secure gateway for crypto and fiat services. 
              Operated by Vertamon SP Z O.O., we combine regulatory compliance with seamless financial access across Europe and beyond. 
              Our platform bridges the gap between traditional finance and digital assets, ensuring full transparency and legal compliance.
            </p>
          </div>
        </section>

        {/* Core Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">Our Core Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-secondary-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Fiat Onramp/Offramp</h3>
              <p className="text-secondary-600">
                Deposit or withdraw euros via SEPA and SWIFT with full transparency and reliability. 
                Connect your traditional bank account seamlessly.
              </p>
            </div>
            
            <div className="bg-white border border-secondary-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Crypto Wallets & Transfers</h3>
              <p className="text-secondary-600">
                Store, send, and receive digital assets with secure multi-signature wallets. 
                Support for major cryptocurrencies with institutional-grade security.
              </p>
            </div>
            
            <div className="bg-white border border-secondary-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Business Payments</h3>
              <p className="text-secondary-600">
                Accept crypto and settle in EUR. Payout to your own business account securely 
                with automated conversion and settlement processes.
              </p>
            </div>
            
            <div className="bg-white border border-secondary-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">KYC & AML Infrastructure</h3>
              <p className="text-secondary-600">
                Built-in identity verification and transaction screening for legal peace of mind. 
                Automated compliance checks and reporting.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Palaris */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">Why Choose Palaris?</h2>
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-8">
            <div className="grid gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Regulated in Poland under the VASP framework</h4>
                  <p className="text-secondary-600">Full compliance with Polish and EU regulations for virtual asset services</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Compliant with GDPR, AMLD5, and EU financial regulations</h4>
                  <p className="text-secondary-600">Comprehensive data protection and anti-money laundering compliance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Cold storage, 2FA, and end-to-end encryption</h4>
                  <p className="text-secondary-600">Bank-grade security measures protecting your digital assets</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Transparent pricing — no hidden fees</h4>
                  <p className="text-secondary-600">Clear, upfront pricing with no surprise charges or hidden costs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Dedicated support for both individual and business users</h4>
                  <p className="text-secondary-600">Personal assistance and guidance for all your crypto and fiat needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who is it for */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 flex items-center">
            <Users className="w-8 h-8 text-primary-900 mr-3" />
            Who is it for?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-secondary-200 rounded-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-900" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">Freelancers & Individuals</h3>
              <p className="text-secondary-600">
                Looking for a reliable crypto-fiat bridge to manage personal finances and international payments
              </p>
            </div>
            
            <div className="text-center p-6 border border-secondary-200 rounded-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary-900" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">Online Platforms & Merchants</h3>
              <p className="text-secondary-600">
                Needing regulated payout rails and secure payment processing for digital commerce
              </p>
            </div>
            
            <div className="text-center p-6 border border-secondary-200 rounded-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-900" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">Crypto-Native Businesses</h3>
              <p className="text-secondary-600">
                That want to operate compliantly in Europe while maintaining crypto-first operations
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Started with Palaris</h2>
          <p className="text-xl mb-8 text-primary-100">
            Palaris helps you stay compliant, scale faster, and manage crypto and fiat in one secure platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 text-lg font-medium rounded-lg transition-all hover:scale-105"
              onClick={() => window.open('https://app.palaris.io/register', '_self')}
            >
              Register Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white bg-transparent hover:bg-white hover:text-primary-900 px-8 py-4 text-lg font-medium rounded-lg transition-all hover:scale-105"
              onClick={() => window.open('/contact', '_self')}
            >
              Contact Us
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LearnMore;
