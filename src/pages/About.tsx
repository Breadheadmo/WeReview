import Footer from '../components/Footer';
import { Shield, Users, Award, Target, CheckCircle, Clock, FileText } from 'lucide-react';

const About = () => {
  return (
    <>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-dark-slate to-dark-gray text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                About CarInspect Pro
              </h1>
              <p className="text-xl text-muted-gray">
                Your trusted partner in vehicle inspection services, providing peace of mind for every car purchase.
              </p>
            </div>
          </div>
            </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">Our Story</h2>
                <p className="text-lg text-secondary-gray leading-relaxed mb-6">
                  CarInspect Pro was founded with a simple mission: to protect car buyers from costly surprises and hidden defects. We've seen too many people purchase vehicles only to discover expensive problems shortly after.
                </p>
                <p className="text-lg text-secondary-gray leading-relaxed mb-6">
                  Our team of certified automotive professionals brings decades of combined experience in vehicle inspection, diagnostics, and automotive engineering. We understand what to look for and how to communicate our findings in clear, actionable terms.
                </p>
                <p className="text-lg text-secondary-gray leading-relaxed">
                  Today, we're proud to be South Africa's most trusted independent car inspection service, having helped thousands of customers make confident purchasing decisions.
                </p>
              </div>
              <div className="bg-light-gray p-8 rounded-lg border border-light-border">
                <h3 className="text-2xl font-bold text-primary-text mb-6">Our Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-brand-green flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary-text">Integrity</h4>
                      <p className="text-secondary-gray">We provide honest, unbiased assessments</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-brand-green flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary-text">Excellence</h4>
                      <p className="text-secondary-gray">We maintain the highest professional standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-brand-green flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary-text">Customer Focus</h4>
                      <p className="text-secondary-gray">Your peace of mind is our priority</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Mission & Vision */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Target className="h-12 w-12 text-brand-green mb-6" />
                <h3 className="text-2xl font-bold text-primary-text mb-4">Our Mission</h3>
                <p className="text-lg text-secondary-gray leading-relaxed">
                  To empower car buyers with comprehensive, independent vehicle inspections that reveal the true condition of vehicles, enabling informed purchasing decisions and protecting investments.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Award className="h-12 w-12 text-brand-green mb-6" />
                <h3 className="text-2xl font-bold text-primary-text mb-4">Our Vision</h3>
                <p className="text-lg text-secondary-gray leading-relaxed">
                  To be recognized as South Africa's leading car inspection service, setting the standard for thoroughness, professionalism, and customer care in the automotive industry.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Our Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">How We Ensure Peace of Mind</h2>
              <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
                Our systematic approach guarantees thorough, reliable inspections every time
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold text-primary-text mb-4">Initial Assessment</h3>
                <p className="text-secondary-gray">We start with a comprehensive visual inspection, documenting the vehicle's overall condition and identifying areas of concern.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold text-primary-text mb-4">Detailed Testing</h3>
                <p className="text-secondary-gray">Our certified inspectors perform mechanical checks, diagnostic tests, and road tests to evaluate all vehicle systems.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold text-primary-text mb-4">Comprehensive Report</h3>
                <p className="text-secondary-gray">You receive a detailed written report with findings, recommendations, and estimated repair costs for any issues discovered.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Why Trust Us */}
        <section className="py-20 bg-dark-slate text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Buyers Trust Us</h2>
              <p className="text-xl text-muted-gray max-w-3xl mx-auto">
                We've built our reputation on delivering honest, thorough, and professional service
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-8 w-8 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Independent & Unbiased</h3>
                    <p className="text-muted-gray">We have no financial interest in whether you buy the car or not. Our only commitment is to the truth.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-8 w-8 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Years of Experience</h3>
                    <p className="text-muted-gray">Our team has performed thousands of inspections, giving us the expertise to spot issues others might miss.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comprehensive Coverage</h3>
                    <p className="text-muted-gray">From engine diagnostics to accident history, we check everything that matters to your purchase decision.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-green p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-white">What Our Customers Say</h3>
                <blockquote className="text-lg italic mb-4 text-white">
                  "CarInspect Pro saved me from making a costly mistake. Their detailed report revealed hidden damage that would have cost me thousands to repair. Worth every penny!"
                </blockquote>
                <div className="font-semibold text-white">- Sarah M., Johannesburg</div>
                <blockquote className="text-lg italic mb-4 mt-6 text-white">
                  "Professional, thorough, and honest. I wouldn't buy another used car without their inspection first."
                </blockquote>
                <div className="font-semibold text-white">- Mike D., Cape Town</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment to Transparency Section (now last) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Our Commitment to Transparency</h2>
              <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
                We believe every car buyer deserves clear, honest information. Our inspectors walk you through every detail, explain findings in plain language, and answer all your questions—so you can buy with confidence.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-light-gray p-8 rounded-lg shadow-lg text-center">
                <Shield className="h-12 w-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-text mb-2">No Hidden Surprises</h3>
                <p className="text-secondary-gray">We document every issue, big or small, so you know exactly what you're getting.</p>
              </div>
              <div className="bg-light-gray p-8 rounded-lg shadow-lg text-center">
                <FileText className="h-12 w-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-text mb-2">Clear, Actionable Reports</h3>
                <p className="text-secondary-gray">Our reports are easy to understand and include recommendations for next steps.</p>
              </div>
              <div className="bg-light-gray p-8 rounded-lg shadow-lg text-center">
                <Users className="h-12 w-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-text mb-2">Education & Support</h3>
                <p className="text-secondary-gray">We take time to educate you about your vehicle's condition and answer all your questions.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
  <Footer />
    </>
  );
};

export default About;