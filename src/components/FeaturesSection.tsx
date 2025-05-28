
import { Home, User, FileText, List } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Home,
      title: "Easy SEPA Transfers",
      description: "Seamless Euro transfers with fast processing and transparent fees across the EU."
    },
    {
      icon: User,
      title: "Crypto Wallets with Compliance Built-In",
      description: "Secure crypto storage with built-in regulatory compliance and KYC verification."
    },
    {
      icon: FileText,
      title: "Fiat Onramp/Offramp",
      description: "Convert between fiat and crypto currencies with competitive rates and instant processing."
    },
    {
      icon: List,
      title: "Transparent Fees & Secure KYC",
      description: "Clear pricing structure with no hidden fees and bank-grade security protocols."
    },
    {
      icon: Home,
      title: "Real-Time Dashboard",
      description: "Monitor your portfolio, transactions, and compliance status in one unified interface."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900">
            Built for <span className="text-primary-900">Modern Finance</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Experience the future of regulated crypto and fiat services with our comprehensive platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl border border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary-900" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-secondary-900">{feature.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-semibold text-secondary-900">Accepted Payment Methods</h3>
          <div className="flex justify-center items-center space-x-12 flex-wrap gap-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-secondary-50 rounded-lg">
              <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">VISA</span>
              </div>
              <span className="text-sm font-medium text-secondary-700">Visa</span>
            </div>
            
            <div className="flex items-center space-x-2 px-4 py-2 bg-secondary-50 rounded-lg">
              <div className="w-8 h-6 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">MC</span>
              </div>
              <span className="text-sm font-medium text-secondary-700">MasterCard</span>
            </div>
            
            <div className="flex items-center space-x-2 px-4 py-2 bg-secondary-50 rounded-lg">
              <div className="w-8 h-6 bg-primary-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">SEPA</span>
              </div>
              <span className="text-sm font-medium text-secondary-700">SEPA</span>
            </div>
            
            <div className="flex items-center space-x-2 px-4 py-2 bg-secondary-50 rounded-lg">
              <div className="w-8 h-6 bg-secondary-700 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">SW</span>
              </div>
              <span className="text-sm font-medium text-secondary-700">SWIFT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
