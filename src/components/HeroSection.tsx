
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                Licensed Polish VASP
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 leading-tight">
                Secure. Compliant.{' '}
                <span className="text-primary-900">Effortless</span>{' '}
                Crypto & Fiat Access.
              </h1>
              
              <p className="text-xl text-secondary-600 leading-relaxed max-w-2xl">
                Palaris is the digital gateway for regulated crypto and fiat services. 
                Operated by Vertamon SP Z O.O., a fully licensed Polish VASP.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all hover:scale-105"
                onClick={() => window.open('https://app.palaris.io/register', '_self')}
              >
                Register Now
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary-300 text-primary-900 hover:bg-primary-50 px-8 py-4 text-lg font-medium rounded-lg transition-all hover:scale-105"
                onClick={() => window.open('/learn-more', '_self')}
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8">
              <div className="flex items-center space-x-2 text-secondary-600">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">EU Regulated</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary-600">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary-600">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Secure KYC</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-secondary-900">Dashboard</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-900">€12,450</div>
                      <div className="text-sm text-secondary-600">Fiat Balance</div>
                    </div>
                    <div className="bg-secondary-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-secondary-900">0.5 BTC</div>
                      <div className="text-sm text-secondary-600">Crypto Balance</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-secondary-600">SEPA Transfer</span>
                      <span className="text-sm font-medium text-green-600">+€1,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-secondary-600">BTC Purchase</span>
                      <span className="text-sm font-medium text-secondary-900">0.1 BTC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
