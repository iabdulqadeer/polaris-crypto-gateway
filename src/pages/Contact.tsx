
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const emailSubject = encodeURIComponent(formData.subject || 'Contact Form Submission');
    const emailBody = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:support@palaris.io?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your default email client should now open with the pre-filled message.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Contact <span className="text-primary-900">Palaris</span>
            </h1>
            <p className="text-xl text-secondary-600">
              Get in touch with our team for support, partnerships, or general inquiries.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl border border-secondary-200 shadow-lg">
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Account Issues">Account Issues</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Compliance">Compliance</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                      placeholder="Please describe your inquiry in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-900 hover:bg-primary-800 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>

                <p className="text-sm text-secondary-600 mt-4">
                  * Required fields. We'll respond within 24 hours during business days.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">Get in touch</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    Our team is here to help with any questions about Palaris services, technical support, or partnership opportunities.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Email Support</h3>
                      <p className="text-secondary-600">support@palaris.io</p>
                      <p className="text-sm text-secondary-500">For general inquiries and support</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Phone Support</h3>
                      <p className="text-secondary-600">Available for verified customers</p>
                      <p className="text-sm text-secondary-500">Login to your account for phone support</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Office Location</h3>
                      <p className="text-secondary-600">Vertamon SP Z O.O.</p>
                      <p className="text-secondary-600">Ul. Piotrkowska 116/52</p>
                      <p className="text-secondary-600">Lodz, Lodzkie 90-006</p>
                      <p className="text-secondary-600">Poland</p>
                      <p className="text-sm text-secondary-500">Licensed VASP Provider</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Business Hours</h3>
                      <p className="text-secondary-600">Monday - Friday: 9:00 AM - 6:00 PM CET</p>
                      <p className="text-sm text-secondary-500">Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-secondary-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-secondary-900 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <a href="/faq" className="block text-primary-900 hover:text-primary-700 transition-colors">
                      Frequently Asked Questions
                    </a>
                    <a href="/security" className="block text-primary-900 hover:text-primary-700 transition-colors">
                      Security Information
                    </a>
                    <a href="/compliance" className="block text-primary-900 hover:text-primary-700 transition-colors">
                      Compliance & Licensing
                    </a>
                    <a href="mailto:partnerships@palaris.io" className="block text-primary-900 hover:text-primary-700 transition-colors">
                      Partnership Inquiries
                    </a>
                  </div>
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

export default Contact;
