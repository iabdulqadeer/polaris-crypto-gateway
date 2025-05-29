
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CreditCard, Shield, Banknote, BarChart3, Clock, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Fiat Onramp/Offramp",
      description: "Seamlessly convert between fiat currencies and cryptocurrencies with competitive rates and instant processing. Support for EUR with SEPA and SWIFT transfers.",
      benefits: ["Instant conversions", "Competitive rates", "Multi-currency support", "Low fees"]
    },
    {
      icon: Banknote,
      title: "SEPA & SWIFT Payments",
      description: "Fast and secure Euro transfers across the EU with transparent pricing. Full integration with traditional banking systems.",
      benefits: ["Same-day processing", "EU-wide coverage", "Bank-grade security", "Transparent fees"]
    },
    {
      icon: Shield,
      title: "Crypto Custody",
      description: "Enterprise-grade cryptocurrency storage with multi-signature security, cold storage, and institutional-level protection.",
      benefits: ["Multi-sig wallets", "Cold storage", "Insurance coverage", "24/7 monitoring"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboard",
      description: "Comprehensive portfolio management with live market data, transaction history, and performance analytics.",
      benefits: ["Live market data", "Portfolio tracking", "Transaction history", "Performance analytics"]
    },
    {
      icon: Clock,
      title: "Low Fees",
      description: "Transparent pricing structure with no hidden costs. Competitive rates for all services including trading, transfers, and custody.",
      benefits: ["No hidden fees", "Competitive rates", "Volume discounts", "Clear pricing"]
    },
    {
      icon: CheckCircle,
      title: "Compliance Integration",
      description: "Built-in KYC/AML processes, sanctions screening, and full regulatory compliance with Polish VASP requirements.",
      benefits: ["Automated KYC", "AML screening", "Regulatory reporting", "Polish VASP licensed"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900">
                Powerful <span className="text-primary-900">Features</span> for Modern Finance
              </h1>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Discover the comprehensive suite of tools and services that make Palaris the trusted choice for regulated crypto and fiat operations.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-primary-900" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-secondary-900">{feature.title}</h3>
                      <p className="text-secondary-600 leading-relaxed">{feature.description}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-secondary-900 uppercase tracking-wide">Key Benefits</h4>
                      <ul className="space-y-1">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-secondary-600">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-secondary-600 mb-8">
              Join thousands of users who trust Palaris for their crypto and fiat needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-medium transition-colors">
                Register Now
              </button>
              <button className="border border-primary-300 text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
