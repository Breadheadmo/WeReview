import Footer from '../components/Footer';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50 flex items-center justify-center px-2">
        <div className="w-full max-w-md mx-auto text-center bg-white p-4 sm:p-8 rounded-lg shadow-lg">
          <CheckCircle className="h-12 sm:h-16 w-12 sm:w-16 text-green-500 mx-auto mb-4 sm:mb-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-4 sm:mb-6">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <div className="text-xs sm:text-sm text-gray-500">
            Redirecting back to form in a few seconds...
          </div>
        </div>
      </div>
    );
  }

  return (
    <><div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-slate to-dark-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-gray">
              Get in touch with our team for questions, bookings, or to learn more about our inspection services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-primary-text mb-8">Get In Touch</h2>
              <p className="text-lg text-secondary-gray mb-8">
                We're here to help you make informed decisions about your next vehicle purchase.
                Contact us today to schedule an inspection or ask any questions you may have.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-green p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-text mb-1">Phone</h3>
                    <p className="text-secondary-gray">+27 123 456 7890</p>
                    <p className="text-sm text-muted-gray">Available 7 days a week</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-green p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-text mb-1">Email</h3>
                    <p className="text-secondary-gray">info@carinspectpro.co.za</p>
                    <p className="text-sm text-muted-gray">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-green p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-text mb-1">Our Address</h3>
                    <p className="text-secondary-gray">55 Richards Drive<br />Halfway House<br />Midrand 1685</p>
                    <p className="text-sm text-muted-gray">Nationwide service available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-green p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-text mb-1">Business Hours</h3>
                    <p className="text-secondary-gray">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-secondary-gray">Saturday: 8:00 AM - 4:00 PM</p>
                    <p className="text-secondary-gray">Sunday: 9:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary-text mb-6">Send Us A Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-text mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green ${errors.name ? 'border-brand-red' : 'border-light-border'}`}
                    placeholder="Your full name" />
                  {errors.name && <p className="mt-1 text-sm text-brand-red">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-text mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${errors.email ? 'border-brand-red' : 'border-light-border'}`}
                    placeholder="your.email@example.com" />
                  {errors.email && <p className="mt-1 text-sm text-brand-red">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary-text mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${errors.phone ? 'border-brand-red' : 'border-light-border'}`}
                    placeholder="+27 123 456 7890" />
                  {errors.phone && <p className="mt-1 text-sm text-brand-red">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-text mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue resize-none ${errors.message ? 'border-brand-red' : 'border-light-border'}`}
                    placeholder="Tell us how we can help you..." />
                  {errors.message && <p className="mt-1 text-sm text-brand-red">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-green text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-secondary-gray">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-light-gray p-6 rounded-lg border border-light-border">
              <h3 className="text-xl font-bold text-primary-text mb-3">How long does an inspection take?</h3>
              <p className="text-secondary-gray">
                A comprehensive inspection typically takes 2-3 hours depending on the service package selected.
                We'll provide you with an estimated timeframe when you book.
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg border border-light-border">
              <h3 className="text-xl font-bold text-primary-text mb-3">Do you travel to inspect vehicles?</h3>
              <p className="text-secondary-gray">
                Yes, we offer nationwide mobile inspection services. We come to the vehicle location at your convenience,
                whether it's at a dealership, private seller's home, or any other location.
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg border border-light-border">
              <h3 className="text-xl font-bold text-primary-text mb-3">When will I receive my inspection report?</h3>
              <p className="text-secondary-gray">
                You'll receive your detailed inspection report within 24 hours of the inspection completion.
                For urgent cases, same-day reports can be arranged.
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg border border-light-border">
              <h3 className="text-xl font-bold text-primary-text mb-3">What if the seller won't allow an inspection?</h3>
              <p className="text-secondary-gray">
                If a seller refuses to allow an independent inspection, this should be considered a red flag.
                We recommend being cautious about any purchase where the seller won't permit professional inspection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
  );
};

export default Contact;