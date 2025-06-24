import { useState, useRef, useEffect } from 'react';

const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'bridal', label: 'Bridal Makeup' },
  { value: 'party', label: 'Party Glam' },
  { value: 'hair', label: 'Hair Styling' },
  { value: '3d', label: '3D Makeup' },
  { value: 'photoshoot', label: 'Photoshoot' },
  { value: 'makeover', label: 'Complete Makeover' },
  { value: 'other', label: 'Other' },
];

const CustomDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const selected = serviceOptions.find(opt => opt.value === value) || serviceOptions[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="w-full p-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-pink-100 dark:border-white/20 text-left text-pink-500 dark:text-white placeholder-pink-300 dark:placeholder-gray-400 focus:outline-none focus:border-pink-200 dark:focus:border-white/40 transition-all duration-300 flex items-center justify-between"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selected.label}</span>
        <svg className={`ml-2 w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <ul className="absolute z-20 mt-2 w-full bg-white/90 dark:bg-gray-900/90 border border-pink-100 dark:border-white/20 rounded-2xl shadow-xl max-h-60 overflow-auto animate-fade-in" tabIndex={-1} role="listbox">
          {serviceOptions.map((opt) => (
            <li
              key={opt.value}
              className={`px-4 py-3 cursor-pointer text-pink-500 dark:text-white hover:bg-pink-100/60 dark:hover:bg-pink-500/10 rounded-2xl transition ${value === opt.value ? 'bg-pink-100/40 dark:bg-pink-500/20 font-semibold' : ''}`}
              onClick={() => { onChange(opt.value); setOpen(false); }}
              role="option"
              aria-selected={value === opt.value}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Contact = () => {
  const [service, setService] = useState('');
  const [otherService, setOtherService] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    date: '',
    time: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', message: string }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const payload = {
        ...form,
        service,
        otherService: service === 'other' ? otherService : undefined,
      };
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', message: 'Your message has been sent! I will get back to you soon.' });
        setForm({ name: '', email: '', contact: '', date: '', time: '', message: '' });
        setService('');
        setOtherService('');
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to send. Please check your connection and try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-black"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(255,182,193,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-[radial-gradient(circle_at_80%_80%,rgba(173,216,230,0.08),transparent_70%)] dark:bg-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            <span className="bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Book Your Session
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-3xl mx-auto">
            Ready to transform? Let's create your perfect look together.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-light text-pink-500 dark:text-white mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Ready to start your beauty transformation journey? I'm here to help you look and feel your absolute best for any occasion.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center p-6 bg-white/90 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-pink-100 dark:border-white/10 shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-500 dark:to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-pink-500 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-pink-500 dark:text-white font-medium">Phone</h4>
                  <p className="text-gray-500 dark:text-gray-400">+91 93203 87216</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-white/90 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-pink-100 dark:border-white/10 shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-500 dark:to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-pink-500 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-pink-500 dark:text-white font-medium">Instagram</h4>
                  <p className="text-gray-500 dark:text-gray-400"><a href="https://www.instagram.com/smakeup1719?igsh=MWV5OGJzMXJsNXI0cw==">@styledbyneha</a></p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-white/90 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-pink-100 dark:border-white/10 shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-500 dark:to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-pink-500 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-pink-500 dark:text-white font-medium">Location</h4>
                  <p className="text-gray-500 dark:text-gray-400">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/90 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-pink-100 dark:border-white/10 shadow-xl">
            <h3 className="text-2xl font-light text-pink-500 dark:text-white mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name" 
                    className="w-full p-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-pink-100 dark:border-white/20 text-pink-500 dark:text-white placeholder-pink-300 dark:placeholder-gray-400 focus:outline-none focus:border-pink-200 dark:focus:border-white/40 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com" 
                    className="w-full p-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-pink-100 dark:border-white/20 text-pink-500 dark:text-white placeholder-pink-300 dark:placeholder-gray-400 focus:outline-none focus:border-pink-200 dark:focus:border-white/40 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Contact Number</label>
                  <input 
                    type="tel" 
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="Your contact number" 
                    className="w-full p-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-pink-100 dark:border-white/20 text-pink-500 dark:text-white placeholder-pink-300 dark:placeholder-gray-400 focus:outline-none focus:border-pink-200 dark:focus:border-white/40 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Service</label>
                <CustomDropdown value={service} onChange={setService} />
                {service === 'other' && (
                  <input
                    type="text"
                    name="otherService"
                    value={otherService}
                    onChange={e => setOtherService(e.target.value)}
                    placeholder="Please specify the service"
                    className="mt-3 w-full p-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-pink-100 dark:border-white/20 text-pink-500 dark:text-white placeholder-pink-300 dark:placeholder-gray-400 focus:outline-none focus:border-pink-200 dark:focus:border-white/40 transition-all duration-300"
                    required
                  />
                )}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full p-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-pink-100 dark:border-white/20 text-pink-500 dark:text-white placeholder-pink-300 dark:placeholder-gray-400 focus:outline-none focus:border-pink-200 dark:focus:border-white/40 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Preferred Time</label>
                  <input 
                    type="time" 
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full p-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-pink-100 dark:border-white/20 text-pink-500 dark:text-white placeholder-pink-300 dark:placeholder-gray-400 focus:outline-none focus:border-pink-200 dark:focus:border-white/40 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea 
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your vision..." 
                  rows={4}
                  className="w-full p-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-pink-100 dark:border-white/20 text-pink-500 dark:text-white placeholder-pink-300 dark:placeholder-gray-400 focus:outline-none focus:border-pink-200 dark:focus:border-white/40 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-8 py-4 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-500 dark:to-purple-500 text-pink-500 dark:text-white font-medium rounded-2xl hover:from-pink-200 hover:to-purple-200 dark:hover:from-pink-600 dark:hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <svg className="animate-spin h-6 w-6 text-pink-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                ) : (
                  'Send Message'
                )}
              </button>
              {status && (
                <div className={`mt-4 text-center rounded-2xl p-4 font-medium ${status.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-200' : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-200'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 