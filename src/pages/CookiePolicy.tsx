
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900">Cookie Policy</h1>
            <p className="text-xl text-secondary-600">
              How we use cookies and tracking technologies on our platform
            </p>
            <div className="text-sm text-secondary-500">Last updated: December 2024</div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">1. What Are Cookies</h2>
              <p className="text-secondary-700 leading-relaxed">
                Cookies are small text files stored on your device when you visit our website. They help us provide you with a better browsing experience and enable certain functionality.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">2. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Essential Cookies</h3>
                  <p className="text-secondary-700">Required for the website to function properly, including login sessions, security features, and basic functionality.</p>
                </div>

                <div className="bg-secondary-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Performance Cookies</h3>
                  <p className="text-secondary-700">Help us understand how visitors interact with our website by collecting anonymous information about page visits and user behavior.</p>
                </div>

                <div className="bg-secondary-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Functional Cookies</h3>
                  <p className="text-secondary-700">Remember your preferences and settings to provide a more personalized experience during future visits.</p>
                </div>

                <div className="bg-secondary-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Marketing Cookies</h3>
                  <p className="text-secondary-700">Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">3. How We Use Cookies</h2>
              <p className="text-secondary-700 leading-relaxed">
                We use cookies for various purposes including:
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Maintaining your login session and security</li>
                <li>Remembering your preferences and settings</li>
                <li>Analyzing website usage and performance</li>
                <li>Preventing fraud and ensuring platform security</li>
                <li>Improving our services and user experience</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">4. Third-Party Cookies</h2>
              <p className="text-secondary-700 leading-relaxed">
                We may use third-party services that place cookies on your device, including:
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Security and fraud prevention services</li>
                <li>Customer support and chat services</li>
                <li>Payment processing services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">5. Managing Cookies</h2>
              <p className="text-secondary-700 leading-relaxed">
                You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Cookie Preferences</h3>
                <p className="text-primary-800 mb-4">Manage your cookie preferences for this website:</p>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" checked disabled className="mr-3" />
                    <span className="text-primary-900">Essential Cookies (Required)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-primary-900">Performance Cookies</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-primary-900">Functional Cookies</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-primary-900">Marketing Cookies</span>
                  </label>
                </div>
                <button className="mt-4 bg-primary-900 text-white px-6 py-2 rounded-lg hover:bg-primary-800 transition-colors">
                  Save Preferences
                </button>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">6. Browser Settings</h2>
              <p className="text-secondary-700 leading-relaxed">
                You can manage cookies through your browser settings:
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Chrome: Settings → Privacy and Security → Cookies</li>
                <li>Firefox: Options → Privacy & Security → Cookies</li>
                <li>Safari: Preferences → Privacy → Cookies</li>
                <li>Edge: Settings → Cookies and Site Permissions</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-secondary-900">7. Contact Us</h2>
              <p className="text-secondary-700 leading-relaxed">
                If you have questions about our Cookie Policy, contact us at:
              </p>
              <div className="bg-secondary-50 p-4 rounded-lg">
                <p className="text-secondary-700 font-medium">Privacy Team</p>
                <p className="text-secondary-700">Email: privacy@palaris.io</p>
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

export default CookiePolicy;
