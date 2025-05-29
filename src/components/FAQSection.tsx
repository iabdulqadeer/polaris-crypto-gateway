
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Palaris?",
      answer: "Palaris is the trade name of Vertamon SP Z O.O., a regulated Polish VASP offering secure fiat and crypto services."
    },
    {
      question: "Is Palaris licensed?",
      answer: "Yes. Palaris operates under a Virtual Asset Service Provider (VASP) license issued in Poland."
    },
    {
      question: "What services does Palaris offer?",
      answer: "Fiat onramp/offramp, SEPA payments, crypto wallet infrastructure, and regulatory compliance."
    },
    {
      question: "Who can use Palaris?",
      answer: "Businesses and individuals (where legally allowed) excluding sanctioned jurisdictions."
    },
    {
      question: "What fiat currencies are supported?",
      answer: "EUR for SEPA and SWIFT payments."
    },
    {
      question: "Is there a KYC process?",
      answer: "Yes. All users must pass a full identity verification process before using services."
    },
    {
      question: "Are my funds safe?",
      answer: "We use segregated accounts and trusted custody partners to ensure safety and transparency."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900">
            Frequently Asked <span className="text-primary-900">Questions</span>
          </h2>
          <p className="text-xl text-secondary-600">
            Everything you need to know about Palaris and our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-secondary-100 last:border-b-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-secondary-50 transition-colors">
                  <span className="text-lg font-medium text-secondary-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-secondary-600 mb-4">Still have questions?</p>
          <a 
            href="mailto:support@palaris.io"
            className="text-primary-900 hover:text-primary-700 font-medium transition-colors"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
