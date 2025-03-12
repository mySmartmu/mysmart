// src/components/ContactForm.tsx
'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'general',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Log the raw response for debugging
      const responseText = await response.text();
      console.log('Raw API response:', responseText);
      
      // Try to parse the response as JSON
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', parseError);
        throw new Error('The server response was not in JSON format. It might be returning an error page.');
      }
      
      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong with status: ' + response.status);
      }
      
      console.log('Form submitted successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: 'general', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send your message');
    } finally {
      setIsSubmitting(false);
      // Reset status after 8 seconds (increased from 5 to give more time to read error messages)
      setTimeout(() => setSubmitStatus(null), 8000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg shadow-md">
      {submitStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Your message has been sent successfully! We&apos;ll be in touch soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          <p className="font-medium mb-1">Error sending message:</p>
          <p>{errorMessage || 'There was an error sending your message. Please try again or contact us directly.'}</p>
        </div>
      )}
      
      <div className="mb-4">
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          placeholder="Name" 
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400 text-gray-800"
        />
      </div>
      
      <div className="mb-4">
        <input 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          placeholder="Email" 
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400 text-gray-800"
        />
      </div>
      
      <div className="mb-4">
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone (optional)" 
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400 text-gray-800"
        />
      </div>
      
      <div className="mb-4">
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-800"
        >
          <option value="general">General Inquiry</option>
          <option value="software">Software & SaaS Solutions</option>
          <option value="hardware">Hardware & IT Infrastructure</option>
          <option value="web">Web & Digital Services</option>
          <option value="home">Home Automation</option>
        </select>
      </div>
      
      <div className="mb-4">
        <textarea 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          placeholder="Message" 
          required
          rows={4}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400 text-gray-800"
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded transition-colors disabled:bg-slate-400"
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}