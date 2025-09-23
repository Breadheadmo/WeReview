import Footer from '../components/Footer';
import { Shield, Eye, Users, Wrench, FileText, Car, Clock, AlertTriangle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Full Package - excludes advisory/consultation",
      price: "R2,315.00",
      icon: Shield,
      description: "Our most comprehensive inspection package covering all mechanical, electrical, and safety systems.",
      includes: [
        "Complete visual inspection",
        "Engine diagnostics",
        "Transmission assessment",
        "Brake system evaluation",
        "Suspension and steering check",
        "Electrical systems test",
        "Safety equipment verification",
        "Detailed written report"
      ]
    },
    {
      id: 2,
      name: "Visual Inspection & Service History",
      price: "R750.00",
      icon: Eye,
      description: "Thorough visual assessment of the vehicle's condition plus service history review.",
      includes: [
        "Exterior condition assessment",
        "Interior wear evaluation",
        "Paint and body inspection",
        "Service history analysis",
        "Basic functionality check",
        "Visual report with photos"
      ]
    },
    {
      id: 3,
      name: "Consultation/Advisory",
      price: "R650.00",
      icon: Users,
      description: "Expert consultation and advice on vehicle purchase decisions.",
      includes: [
        "Pre-purchase consultation",
        "Market value assessment",
        "Purchase recommendation",
        "Negotiation advice",
        "Post-inspection discussion",
        "Written advisory report"
      ]
    },
    {
      id: 4,
      name: "Diagnostics",
      price: "R700.00",
      icon: Wrench,
      description: "Advanced computer diagnostics to identify hidden mechanical and electrical issues.",
      includes: [
        "OBD-II diagnostic scan",
        "Error code analysis",
        "Performance monitoring",
        "Emission system check",
        "Electronic control unit testing",
        "Diagnostic report"
      ]
    },
    {
      id: 5,
      name: "HPI/Police Interest/Clearance",
      price: "R350.00",
      icon: FileText,
      description: "Comprehensive background check to ensure the vehicle is legally clear.",
      includes: [
        "Stolen vehicle check",
        "Finance outstanding verification",
        "Insurance write-off history",
        "Previous owner information",
        "Legal clearance certificate"
      ]
    },
    {
      id: 6,
      name: "Test Drive Only",
      price: "R650.00",
      icon: Car,
      description: "Professional test drive evaluation of vehicle performance and handling.",
      includes: [
        "Road performance assessment",
        "Handling evaluation",
        "Braking system test",
        "Transmission operation check",
        "Engine performance analysis",
        "Drive quality report"
      ]
    },
    {
      id: 7,
      name: "Test Drive (When Taken With Other Onsite Services)",
      price: "R300.00",
      icon: Clock,
      description: "Add-on test drive service when combined with other inspection services.",
      includes: [
        "Performance road test",
        "Handling assessment",
        "System functionality check",
        "Integrated with main inspection"
      ]
    },
    {
      id: 8,
      name: "Accident Repair History Report",
      price: "R215.00",
      icon: AlertTriangle,
      description: "Detailed analysis of any previous accident damage and repair quality.",
      includes: [
        "Accident history research",
        "Repair quality assessment",
        "Structural integrity check",
        "Insurance claim history",
        "Damage assessment report"
      ]
    }
  ];

  return (
    <>
      <div className="min-h-screen pt-16 px-2 sm:px-4">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text mb-2 sm:mb-4">Our Services</h2>
              <p className="text-base sm:text-xl text-secondary-gray max-w-3xl mx-auto">
                Comprehensive inspection services tailored to your needs and budget
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-light-border mb-6">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="bg-brand-green p-3 rounded-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary-text mb-2">{service.name}</h3>
                        <p className="text-3xl font-bold text-brand-green mb-4">{service.price}</p>
                        <p className="text-secondary-gray mb-6">{service.description}</p>
                      </div>
                    </div>
                    <div className="border-t border-light-border pt-6">
                      <h4 className="font-semibold text-primary-text mb-4">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.includes.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-brand-green rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-secondary-gray">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Service Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Our Service Process</h2>
              <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
                From booking to final report, we ensure a smooth and professional experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold text-primary-text mb-4">Book Your Inspection</h3>
                <p className="text-secondary-gray">Choose your service package and schedule your inspection at a convenient time and location.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold text-primary-text mb-4">Professional Inspection</h3>
                <p className="text-secondary-gray">Our certified inspector arrives on time and conducts a thorough evaluation of the vehicle.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold text-primary-text mb-4">Detailed Analysis</h3>
                <p className="text-secondary-gray">We analyze all findings and prepare a comprehensive report with recommendations.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">4</div>
                <h3 className="text-xl font-bold text-primary-text mb-4">Receive Report</h3>
                <p className="text-secondary-gray">Get your detailed inspection report and expert consultation on your purchase decision.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose Our Services */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Why Choose Our Services</h2>
              <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
                Professional standards, expert knowledge, and customer satisfaction guaranteed
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Shield className="h-16 w-16 text-brand-green mx-auto mb-6" />
                <h3 className="text-xl font-bold text-primary-text mb-4">Certified Inspectors</h3>
                <p className="text-secondary-gray">All our inspectors are certified automotive professionals with extensive experience in vehicle evaluation and diagnostics.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <FileText className="h-16 w-16 text-brand-green mx-auto mb-6" />
                <h3 className="text-xl font-bold text-primary-text mb-4">Comprehensive Reports</h3>
                <p className="text-secondary-gray">Receive detailed written reports with photographs, findings, and clear recommendations for every inspection service.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Clock className="h-16 w-16 text-brand-green mx-auto mb-6" />
                <h3 className="text-xl font-bold text-primary-text mb-4">Fast Turnaround</h3>
                <p className="text-secondary-gray">Quick scheduling and prompt delivery of inspection results, so you can make timely purchasing decisions.</p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-dark-slate text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Schedule Your Inspection?</h2>
            <p className="text-xl text-muted-gray mb-8 max-w-2xl mx-auto">
              Don't take chances with your next vehicle purchase. Get the professional inspection you need for peace of mind.
            </p>
            <a
              href="/book-inspection"
              className="inline-block bg-brand-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors transform hover:scale-105"
            >
              Book Your Inspection Now
            </a>
          </div>
        </section>

        {/* Our Process Section (copied from Home page) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Our Process</h2>
              <p className="text-xl text-secondary-gray max-w-3xl mx-auto">How we work to deliver peace of mind for every car purchase</p>
            </div>
            <div className="grid md:grid-cols-4 gap-10">
              <div className="text-center">
                <div className="bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold text-primary-text mb-2">Book Your Inspection</h3>
                <p className="text-secondary-gray">Choose your service and schedule an inspection at your convenience.</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold text-primary-text mb-2">Professional Evaluation</h3>
                <p className="text-secondary-gray">Our certified inspector conducts a thorough, unbiased assessment of the vehicle.</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold text-primary-text mb-2">Detailed Report</h3>
                <p className="text-secondary-gray">Receive a comprehensive written report with findings and recommendations.</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">4</div>
                <h3 className="text-xl font-bold text-primary-text mb-2">Expert Consultation</h3>
                <p className="text-secondary-gray">Get advice and answers to your questions so you can make an informed decision.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;