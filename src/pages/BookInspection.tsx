import React, { useState } from 'react';
import { Calendar, Car, CheckCircle, User, Phone, Mail, MapPin } from 'lucide-react';

interface FormData {
  // Personal Information
  name: string;
  surname: string;
  phone: string;
  email: string;
  physicalAddress: string;
  suburb: string;
  city: string;
  postalCode: string;
  
  // Dealer/Seller Information
  dealershipName: string;
  contactPerson: string;
  contactNumber: string;
  vehicleAddress: string;
  vehicleSuburb: string;
  vehicleCity: string;
  vehiclePostalCode: string;
  
  // Inspection Dates
  dateOption1: string;
  dateOption2: string;
  dateOption3: string;
  
  // Vehicle Information
  vehicleMake: string;
  vehicleModel: string;
  yearOfRegistration: string;
  vehicleColour: string;
  vinNumber: string;
  
  // Services
  selectedServices: string[];
  
  // Additional Information
  message: string;
}

const BookInspection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    phone: '',
    email: '',
    physicalAddress: '',
    suburb: '',
    city: '',
    postalCode: '',
    dealershipName: '',
    contactPerson: '',
    contactNumber: '',
    vehicleAddress: '',
    vehicleSuburb: '',
    vehicleCity: '',
    vehiclePostalCode: '',
    dateOption1: '',
    dateOption2: '',
    dateOption3: '',
    vehicleMake: '',
    vehicleModel: '',
    yearOfRegistration: '',
    vehicleColour: '',
    vinNumber: '',
    selectedServices: [],
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { id: 'full-package', name: 'Full Package - excludes advisory/consultation', price: 'R2,315.00' },
    { id: 'visual-inspection', name: 'Visual Inspection & Service History', price: 'R750.00' },
    { id: 'consultation', name: 'Consultation/Advisory', price: 'R650.00' },
    { id: 'diagnostics', name: 'Diagnostics', price: 'R700.00' },
    { id: 'hpi-clearance', name: 'HPI/Police Interest/Clearance', price: 'R350.00' },
    { id: 'test-drive-only', name: 'Test Drive Only', price: 'R650.00' },
    { id: 'test-drive-addon', name: 'Test Drive (When Taken With Other Onsite Services)', price: 'R300.00' },
    { id: 'accident-history', name: 'Accident Repair History Report', price: 'R215.00' }
  ];

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

  const handleServiceChange = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId]
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields validation
    const requiredFields = [
      'name', 'surname', 'phone', 'email', 'physicalAddress', 'suburb', 'city', 'postalCode',
      'dealershipName', 'contactPerson', 'contactNumber', 'vehicleAddress', 'vehicleSuburb', 
      'vehicleCity', 'vehiclePostalCode', 'dateOption1', 'vehicleMake', 'vehicleModel', 
      'yearOfRegistration', 'vehicleColour', 'vinNumber'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field as keyof FormData]) {
        newErrors[field] = 'This field is required';
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Services validation
    if (formData.selectedServices.length === 0) {
      newErrors.services = 'Please select at least one service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const calculateTotal = () => {
    const priceMap: Record<string, number> = {
      'full-package': 2315,
      'visual-inspection': 750,
      'consultation': 650,
      'diagnostics': 700,
      'hpi-clearance': 350,
      'test-drive-only': 650,
      'test-drive-addon': 300,
      'accident-history': 215
    };
    
    return formData.selectedServices.reduce((total, serviceId) => {
      return total + (priceMap[serviceId] || 0);
    }, 0);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16 bg-light-gray flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-lg shadow-lg">
          <CheckCircle className="h-20 w-20 text-brand-green mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-primary-text mb-6">Inspection Request Submitted!</h2>
          <p className="text-lg text-secondary-gray mb-6">
            Thank you for your inspection request. We have received your information and will contact you within 24 hours to confirm your booking details.
          </p>
          <div className="bg-light-gray p-6 rounded-lg mb-6 border border-light-border">
            <h3 className="text-lg font-semibold text-primary-text mb-2">What happens next?</h3>
            <div className="text-left space-y-2 text-secondary-gray">
              <p>• Our team will review your request and contact you to confirm details</p>
              <p>• We'll coordinate with the seller/dealership for inspection access</p>
              <p>• You'll receive confirmation of your inspection date and time</p>
              <p>• Our certified inspector will conduct the inspection</p>
              <p>• You'll receive your detailed report within 24 hours</p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '', surname: '', phone: '', email: '', physicalAddress: '', suburb: '', city: '', postalCode: '',
                dealershipName: '', contactPerson: '', contactNumber: '', vehicleAddress: '', vehicleSuburb: '', 
                vehicleCity: '', vehiclePostalCode: '', dateOption1: '', dateOption2: '', dateOption3: '',
                vehicleMake: '', vehicleModel: '', yearOfRegistration: '', vehicleColour: '', vinNumber: '',
                selectedServices: [], message: ''
              });
            }}
            className="bg-brand-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
  <div className="min-h-screen pt-16 bg-light-gray px-2 sm:px-4">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-slate to-dark-gray text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            REQUEST AN INSPECTION QUOTE!
          </h1>
          <p className="text-xl text-muted-gray max-w-3xl mx-auto">
            Fill out our comprehensive form to request a detailed quote for your vehicle inspection. 
            We'll get back to you within 24 hours with confirmation and next steps.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12">
          
          {/* Personal Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
              <User className="h-6 w-6 text-brand-blue" />
              <h2 className="text-2xl font-bold text-primary-text">Personal Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-primary-text mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.name ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="First name"
                />
                {errors.name && <p className="mt-1 text-sm text-brand-red">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Surname *</label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.surname ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="Last name"
                />
                {errors.surname && <p className="mt-1 text-sm text-brand-red">{errors.surname}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.phone ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="+27 123 456 7890"
                />
                {errors.phone && <p className="mt-1 text-sm text-brand-red">{errors.phone}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.email ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-brand-red">{errors.email}</p>}
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primary-text mb-2">Physical Address *</label>
                <input
                  type="text"
                  name="physicalAddress"
                  value={formData.physicalAddress}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.physicalAddress ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="Street address"
                />
                {errors.physicalAddress && <p className="mt-1 text-sm text-brand-red">{errors.physicalAddress}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Suburb *</label>
                <input
                  type="text"
                  name="suburb"
                  value={formData.suburb}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.suburb ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="Suburb"
                />
                {errors.suburb && <p className="mt-1 text-sm text-brand-red">{errors.suburb}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.city ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="City"
                />
                {errors.city && <p className="mt-1 text-sm text-brand-red">{errors.city}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Postal Code *</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.postalCode ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="0000"
                />
                {errors.postalCode && <p className="mt-1 text-sm text-brand-red">{errors.postalCode}</p>}
              </div>
            </div>
          </div>

          {/* Dealer/Seller Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Phone className="h-6 w-6 text-brand-blue" />
              <h2 className="text-2xl font-bold text-primary-text">Dealership / Seller Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-primary-text mb-2">Dealership / Private Seller's Name *</label>
                <input
                  type="text"
                  name="dealershipName"
                  value={formData.dealershipName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.dealershipName ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="Dealership or seller name"
                />
                {errors.dealershipName && <p className="mt-1 text-sm text-brand-red">{errors.dealershipName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Contact Person *</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.contactPerson ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="Contact person name"
                />
                {errors.contactPerson && <p className="mt-1 text-sm text-brand-red">{errors.contactPerson}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Contact Number *</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.contactNumber ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="+27 123 456 7890"
                />
                {errors.contactNumber && <p className="mt-1 text-sm text-brand-red">{errors.contactNumber}</p>}
              </div>
              
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-primary-text mb-2">Address Of Where Vehicle(s) Can Be Viewed *</label>
                <input
                  type="text"
                  name="vehicleAddress"
                  value={formData.vehicleAddress}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.vehicleAddress ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="Vehicle viewing address"
                />
                {errors.vehicleAddress && <p className="mt-1 text-sm text-brand-red">{errors.vehicleAddress}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Suburb *</label>
                <input
                  type="text"
                  name="vehicleSuburb"
                  value={formData.vehicleSuburb}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.vehicleSuburb ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="Suburb"
                />
                {errors.vehicleSuburb && <p className="mt-1 text-sm text-brand-red">{errors.vehicleSuburb}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">City *</label>
                <input
                  type="text"
                  name="vehicleCity"
                  value={formData.vehicleCity}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.vehicleCity ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="City"
                />
                {errors.vehicleCity && <p className="mt-1 text-sm text-brand-red">{errors.vehicleCity}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Postal Code *</label>
                <input
                  type="text"
                  name="vehiclePostalCode"
                  value={formData.vehiclePostalCode}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.vehiclePostalCode ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="0000"
                />
                {errors.vehiclePostalCode && <p className="mt-1 text-sm text-brand-red">{errors.vehiclePostalCode}</p>}
              </div>
            </div>
          </div>

          {/* Inspection Dates */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="h-6 w-6 text-brand-blue" />
              <h2 className="text-2xl font-bold text-primary-text">Select 3 Possible Dates For The Inspection</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Date Option 1 *</label>
                <input
                  type="date"
                  name="dateOption1"
                  value={formData.dateOption1}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.dateOption1 ? 'border-brand-red' : 'border-light-border'
                  }`}
                />
                {errors.dateOption1 && <p className="mt-1 text-sm text-brand-red">{errors.dateOption1}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Date Option 2</label>
                <input
                  type="date"
                  name="dateOption2"
                  value={formData.dateOption2}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-light-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Date Option 3</label>
                <input
                  type="date"
                  name="dateOption3"
                  value={formData.dateOption3}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-light-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                />
              </div>
            </div>
          </div>

          {/* Vehicle Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Car className="h-6 w-6 text-brand-blue" />
              <h2 className="text-2xl font-bold text-primary-text">Vehicle Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Make Of Vehicle *</label>
                <input
                  type="text"
                  name="vehicleMake"
                  value={formData.vehicleMake}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.vehicleMake ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="e.g., Toyota, BMW, Ford"
                />
                {errors.vehicleMake && <p className="mt-1 text-sm text-brand-red">{errors.vehicleMake}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Vehicle Model *</label>
                <input
                  type="text"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.vehicleModel ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="e.g., Camry, 320i, Focus"
                />
                {errors.vehicleModel && <p className="mt-1 text-sm text-brand-red">{errors.vehicleModel}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Year Of First Registration *</label>
                <input
                  type="number"
                  name="yearOfRegistration"
                  value={formData.yearOfRegistration}
                  onChange={handleInputChange}
                  min="1980"
                  max={new Date().getFullYear()}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.yearOfRegistration ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="2020"
                />
                {errors.yearOfRegistration && <p className="mt-1 text-sm text-brand-red">{errors.yearOfRegistration}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-text mb-2">Colour Of Vehicle *</label>
                <input
                  type="text"
                  name="vehicleColour"
                  value={formData.vehicleColour}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.vehicleColour ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="e.g., White, Silver, Black"
                />
                {errors.vehicleColour && <p className="mt-1 text-sm text-brand-red">{errors.vehicleColour}</p>}
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primary-text mb-2">VIN Number *</label>
                <input
                  type="text"
                  name="vinNumber"
                  value={formData.vinNumber}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue ${
                    errors.vinNumber ? 'border-brand-red' : 'border-light-border'
                  }`}
                  placeholder="17-character Vehicle Identification Number"
                />
                {errors.vinNumber && <p className="mt-1 text-sm text-brand-red">{errors.vinNumber}</p>}
              </div>
            </div>
          </div>

          {/* Services Selection */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-primary-text mb-2">Choose The Services That You're Interested In:</h2>
              <p className="text-sm sm:text-base text-secondary-gray">Select one or more inspection services that meet your needs.</p>
              {errors.services && <p className="mt-2 text-sm text-brand-red">{errors.services}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {services.map((service) => (
                <div key={service.id} className="flex items-start space-x-3 p-3 sm:p-4 border border-light-border rounded-lg hover:bg-light-gray">
                  <input
                    type="checkbox"
                    id={service.id}
                    checked={formData.selectedServices.includes(service.id)}
                    onChange={() => handleServiceChange(service.id)}
                    className="mt-1 h-5 w-5 text-brand-blue rounded focus:ring-brand-blue"
                  />
                  <label htmlFor={service.id} className="flex-1 cursor-pointer">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <span className="text-primary-text font-medium text-sm sm:text-base">{service.name}</span>
                      <span className="text-brand-green font-bold text-base sm:text-lg">{service.price}</span>
                    </div>
                  </label>
                </div>
              ))}
            </div>
            {formData.selectedServices.length > 0 && (
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-light-gray rounded-lg border border-light-border">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                  <span className="text-base sm:text-lg font-semibold text-primary-text">Total Estimated Cost:</span>
                  <span className="text-xl sm:text-2xl font-bold text-brand-green">R{calculateTotal().toLocaleString()}.00</span>
                </div>
              </div>
            )}
          </div>

          {/* Additional Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary-text mb-4 sm:mb-6">Additional Information</h2>
            
            <div>
              <label className="block text-sm font-medium text-primary-text mb-2">Message/Additional Information</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-light-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue resize-none"
                placeholder="Please provide any additional details, special requirements, or questions about your inspection..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-brand-green text-white px-6 sm:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-600 transition-colors transform hover:scale-105 shadow-lg"
            >
              Submit Inspection Request
            </button>
            <p className="mt-4 text-secondary-gray">
              We'll review your request and contact you within 24 hours to confirm your booking details.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookInspection;