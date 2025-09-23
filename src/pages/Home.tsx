import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Users, Phone, Mail, MapPin, Clock, Award, Star } from 'lucide-react';

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative text-white py-12 sm:py-16 md:py-20 lg:py-32"
        style={{
          backgroundImage: 'url(/images/hero-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
          <div className="w-full max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Trusted Car Inspections – Get Peace of Mind Before You Buy
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-muted-gray">
              We provide detailed, independent car inspections so you can make confident decisions when buying a vehicle.
            </p>
            <Link
              to="/book-inspection"
              className="inline-block bg-brand-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-600 transition-colors transform hover:scale-105 shadow-lg"
            >
              Book An Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text mb-2 sm:mb-4">About Us</h2>
            <p className="text-base sm:text-xl text-secondary-gray max-w-3xl mx-auto">
              We are independent car inspection specialists committed to protecting your investment and ensuring you make informed purchasing decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-primary-text mb-4 sm:mb-6">Why We Exist</h3>
              <p className="text-secondary-gray text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Buying a car is one of the biggest purchases you'll make. We understand the risks and uncertainties involved, which is why we've dedicated ourselves to providing comprehensive, unbiased vehicle inspections.
              </p>
              <p className="text-secondary-gray text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Our certified inspectors have years of experience identifying potential issues that could cost you thousands down the road. We give you the complete picture so you can negotiate with confidence or walk away if necessary.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 text-brand-green">
                <Shield className="h-6 w-6 text-brand-green" />
                <span className="font-semibold">Your protection is our priority</span>
              </div>
            </div>
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg mt-6 md:mt-0">
              <h4 className="text-lg sm:text-xl font-bold text-primary-text mb-4 sm:mb-6">Our Promise</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-gray text-sm sm:text-base">Thorough, professional inspections</span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-gray text-sm sm:text-base">Unbiased, independent assessments</span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-gray text-sm sm:text-base">Detailed written reports</span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-gray text-sm sm:text-base">Expert advice and consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text mb-2 sm:mb-4">Our Services</h2>
            <p className="text-base sm:text-xl text-secondary-gray max-w-3xl mx-auto">
              Comprehensive inspection services tailored to your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-light-gray p-4 sm:p-8 rounded-lg border border-light-border mb-6 sm:mb-0">
              <Shield className="h-10 sm:h-12 w-10 sm:w-12 text-brand-green mb-2 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-primary-text mb-2 sm:mb-4">Full Package Inspection</h3>
              <p className="text-sm sm:text-base text-secondary-gray mb-2 sm:mb-4">Complete comprehensive inspection covering all aspects of the vehicle</p>
              <p className="text-xl sm:text-2xl font-bold text-brand-green">R2,315.00</p>
            </div>

            <div className="bg-light-gray p-4 sm:p-8 rounded-lg border border-light-border mb-6 sm:mb-0">
              <CheckCircle className="h-10 sm:h-12 w-10 sm:w-12 text-brand-green mb-2 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-primary-text mb-2 sm:mb-4">Visual Inspection</h3>
              <p className="text-sm sm:text-base text-secondary-gray mb-2 sm:mb-4">Visual inspection and service history review</p>
              <p className="text-xl sm:text-2xl font-bold text-brand-green">R750.00</p>
            </div>

            <div className="bg-light-gray p-4 sm:p-8 rounded-lg border border-light-border">
              <Users className="h-10 sm:h-12 w-10 sm:w-12 text-brand-green mb-2 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-primary-text mb-2 sm:mb-4">Consultation</h3>
              <p className="text-sm sm:text-base text-secondary-gray mb-2 sm:mb-4">Expert advisory and consultation services</p>
              <p className="text-xl sm:text-2xl font-bold text-brand-green">R650.00</p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/services"
              className="inline-block bg-brand-green text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold text-base sm:text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text mb-2 sm:mb-4">Why Choose Us</h2>
            <p className="text-base sm:text-xl text-secondary-gray max-w-3xl mx-auto">
              Experience the difference of working with true professionals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center mb-6 sm:mb-0">
              <div className="bg-white w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                <Award className="h-8 sm:h-10 w-8 sm:w-10 text-brand-green" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-primary-text mb-1 sm:mb-2">Certified Experts</h3>
              <p className="text-sm sm:text-base text-secondary-gray">Our inspectors are certified professionals with years of experience</p>
            </div>

            <div className="text-center mb-6 sm:mb-0">
              <div className="bg-white w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                <Clock className="h-8 sm:h-10 w-8 sm:w-10 text-brand-green" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-primary-text mb-1 sm:mb-2">Fast Turnaround</h3>
              <p className="text-sm sm:text-base text-secondary-gray">Quick scheduling and prompt delivery of inspection reports</p>
            </div>

            <div className="text-center mb-6 sm:mb-0">
              <div className="bg-white w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                <Star className="h-8 sm:h-10 w-8 sm:w-10 text-brand-green" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-primary-text mb-1 sm:mb-2">Trusted Service</h3>
              <p className="text-sm sm:text-base text-secondary-gray">Thousands of satisfied customers trust our independent assessments</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                <Shield className="h-8 sm:h-10 w-8 sm:w-10 text-brand-green" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-primary-text mb-1 sm:mb-2">Peace of Mind</h3>
              <p className="text-sm sm:text-base text-secondary-gray">Comprehensive reports that give you confidence in your purchase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section (single, with no margin/padding at bottom) */}
  <section className="py-10 bg-dark-slate text-white mb-0 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Get In Touch</h2>
            <p className="text-base sm:text-xl text-muted-gray max-w-3xl mx-auto">
              Ready to schedule your inspection? Contact us today
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center mb-6 sm:mb-0">
              <div className="bg-brand-green w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <Phone className="h-6 sm:h-8 w-6 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2">Call Us</h3>
              <p className="text-sm sm:text-base text-muted-gray">+27 123 456 7890</p>
            </div>
            <div className="text-center mb-6 sm:mb-0">
              <div className="bg-brand-green w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <Mail className="h-6 sm:h-8 w-6 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2">Email Us</h3>
              <p className="text-sm sm:text-base text-muted-gray">info@carinspectpro.co.za</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-green w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <MapPin className="h-6 sm:h-8 w-6 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2">Location</h3>
              <p className="text-sm sm:text-base text-muted-gray">55 Richards Drive<br />Halfway House<br />Midrand 1685</p>
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/book-inspection"
              className="inline-block bg-brand-green text-white px-6 sm:px-8 py-2 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-600 transition-colors transform hover:scale-105"
            >
              Book Your Inspection Now
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text mb-2 sm:mb-4">Our Process</h2>
            <p className="text-base sm:text-xl text-secondary-gray max-w-3xl mx-auto">How we work to deliver peace of mind for every car purchase</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
            <div className="text-center mb-6 md:mb-0">
              <div className="bg-brand-green text-white w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-lg sm:text-2xl font-bold">1</div>
              <h3 className="text-base sm:text-xl font-bold text-primary-text mb-1 sm:mb-2">Book Your Inspection</h3>
              <p className="text-sm sm:text-base text-secondary-gray">Choose your service and schedule an inspection at your convenience.</p>
            </div>
            <div className="text-center mb-6 md:mb-0">
              <div className="bg-brand-green text-white w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-lg sm:text-2xl font-bold">2</div>
              <h3 className="text-base sm:text-xl font-bold text-primary-text mb-1 sm:mb-2">Professional Evaluation</h3>
              <p className="text-sm sm:text-base text-secondary-gray">Our certified inspector conducts a thorough, unbiased assessment of the vehicle.</p>
            </div>
            <div className="text-center mb-6 md:mb-0">
              <div className="bg-brand-green text-white w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-lg sm:text-2xl font-bold">3</div>
              <h3 className="text-base sm:text-xl font-bold text-primary-text mb-1 sm:mb-2">Detailed Report</h3>
              <p className="text-sm sm:text-base text-secondary-gray">Receive a comprehensive written report with findings and recommendations.</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-green text-white w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-lg sm:text-2xl font-bold">4</div>
              <h3 className="text-base sm:text-xl font-bold text-primary-text mb-1 sm:mb-2">Expert Consultation</h3>
              <p className="text-sm sm:text-base text-secondary-gray">Get advice and answers to your questions so you can make an informed decision.</p>
            </div>
          </div>
        </div>
      </section>
  </div>
  {/* Footer removed as requested */}
      <Footer />
    </>
  );
};

export default Home;