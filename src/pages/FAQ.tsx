
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Frequently Asked <span className="text-primary-900">Questions</span>
            </h1>
            <p className="text-xl text-secondary-600">
              Find answers to common questions about Polaris services, compliance, and platform features.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <div className="bg-secondary-50">
          <FAQSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
