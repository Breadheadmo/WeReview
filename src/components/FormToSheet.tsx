import { useState } from 'react';

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbw0n4aras0T5uVjoVDJodUW6KScDbUjCO5CgNvRPgmUAH_A1RmYQ7OzchSqqq47pygi/exec";

function FormToSheet() {
  const [formData, setFormData] = useState<{
    name: string;
    surname: string;
    phone: string;
    email: string;
    physicalAddress: string;
    suburb: string;
    city: string;
    postalCode: string;
    dealershipName: string;
    contactPerson: string;
    contactNumber: string;
    vehicleAddress: string;
    vehicleSuburb: string;
    vehicleCity: string;
    vehiclePostalCode: string;
    dateOption1: string;
    dateOption2: string;
    dateOption3: string;
    vehicleMake: string;
    vehicleModel: string;
    yearOfRegistration: string;
    vehicleColour: string;
    vinNumber: string;
    selectedServices: string[];
    message: string;
  }>({
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        selectedServices: checked
          ? [...prev.selectedServices, value]
          : prev.selectedServices.filter((s: string) => s !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(async res => {
        const text = await res.text();
        if (!res.ok) {
          alert('Error: ' + text);
          console.error('Response not OK:', text);
        } else {
          alert('Response: ' + text);
          console.log('Success:', text);
        }
      })
      .catch(error => {
        alert('Network error: ' + error);
        console.error('Network error:', error);
      });
  };

  return (
    <div>
      <h1>Request an Inspection Quote</h1>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Name' value={formData.name} onChange={handleChange} /> <br/>
        <input name='surname' placeholder='Surname' value={formData.surname} onChange={handleChange} /> <br/>
        <input name='phone' placeholder='Phone' value={formData.phone} onChange={handleChange} /> <br/>
        <input name='email' placeholder='Email' value={formData.email} onChange={handleChange} /> <br/>
        <input name='physicalAddress' placeholder='Physical Address' value={formData.physicalAddress} onChange={handleChange} /> <br/>
        <input name='suburb' placeholder='Suburb' value={formData.suburb} onChange={handleChange} /> <br/>
        <input name='city' placeholder='City' value={formData.city} onChange={handleChange} /> <br/>
        <input name='postalCode' placeholder='Postal Code' value={formData.postalCode} onChange={handleChange} /> <br/>
        <input name='dealershipName' placeholder='Dealership Name' value={formData.dealershipName} onChange={handleChange} /> <br/>
        <input name='contactPerson' placeholder='Contact Person' value={formData.contactPerson} onChange={handleChange} /> <br/>
        <input name='contactNumber' placeholder='Contact Number' value={formData.contactNumber} onChange={handleChange} /> <br/>
        <input name='vehicleAddress' placeholder='Vehicle Address' value={formData.vehicleAddress} onChange={handleChange} /> <br/>
        <input name='vehicleSuburb' placeholder='Vehicle Suburb' value={formData.vehicleSuburb} onChange={handleChange} /> <br/>
        <input name='vehicleCity' placeholder='Vehicle City' value={formData.vehicleCity} onChange={handleChange} /> <br/>
        <input name='vehiclePostalCode' placeholder='Vehicle Postal Code' value={formData.vehiclePostalCode} onChange={handleChange} /> <br/>
        <input name='dateOption1' placeholder='Date Option 1' value={formData.dateOption1} onChange={handleChange} /> <br/>
        <input name='dateOption2' placeholder='Date Option 2' value={formData.dateOption2} onChange={handleChange} /> <br/>
        <input name='dateOption3' placeholder='Date Option 3' value={formData.dateOption3} onChange={handleChange} /> <br/>
        <input name='vehicleMake' placeholder='Vehicle Make' value={formData.vehicleMake} onChange={handleChange} /> <br/>
        <input name='vehicleModel' placeholder='Vehicle Model' value={formData.vehicleModel} onChange={handleChange} /> <br/>
        <input name='yearOfRegistration' placeholder='Year of Registration' value={formData.yearOfRegistration} onChange={handleChange} /> <br/>
        <input name='vehicleColour' placeholder='Vehicle Colour' value={formData.vehicleColour} onChange={handleChange} /> <br/>
        <input name='vinNumber' placeholder='VIN Number' value={formData.vinNumber} onChange={handleChange} /> <br/>
        <label>Services:</label><br/>
        <label><input type='checkbox' name='selectedServices' value='Full Package' onChange={handleChange} /> Full Package</label><br/>
        <label><input type='checkbox' name='selectedServices' value='Visual Inspection & Service History' onChange={handleChange} /> Visual Inspection & Service History</label><br/>
        <label><input type='checkbox' name='selectedServices' value='Consultation/Advisory' onChange={handleChange} /> Consultation/Advisory</label><br/>
        <label><input type='checkbox' name='selectedServices' value='Diagnostics' onChange={handleChange} /> Diagnostics</label><br/>
        <label><input type='checkbox' name='selectedServices' value='HPI/Police Interest/Clearance' onChange={handleChange} /> HPI/Police Interest/Clearance</label><br/>
        <label><input type='checkbox' name='selectedServices' value='Test Drive Only' onChange={handleChange} /> Test Drive Only</label><br/>
        <label><input type='checkbox' name='selectedServices' value='Test Drive (When Taken With Other Onsite Services)' onChange={handleChange} /> Test Drive (When Taken With Other Onsite Services)</label><br/>
        <label><input type='checkbox' name='selectedServices' value='Accident Repair History Report' onChange={handleChange} /> Accident Repair History Report</label><br/>
        <textarea name='message' placeholder='Additional Information' value={formData.message} onChange={handleChange} /><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default FormToSheet;
