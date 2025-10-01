import React, { useState, useEffect } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdSend, MdDelete, MdVisibility } from 'react-icons/md';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [messages, setMessages] = useState([]);
  const [showTable, setShowTable] = useState(false);

  // Pengambilan data lama bila ada
  useEffect(() => {
    const existingMessages = [];
    setMessages(existingMessages);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill all fields!');
      return;
    }

    const newMessage = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleString('id-ID')
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent successfully!');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      const updatedMessages = messages.filter(msg => msg.id !== id);
      setMessages(updatedMessages);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all messages?')) {
      setMessages([]);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="bg-[#374151]">
        <div className="container mx-auto py-16 px-5 lg:px-0 text-center">
          <h2 className="font-light text-xl text-[#df6853] mb-3">Get In Touch</h2>
          <h1 className="font-bold text-3xl md:text-5xl text-white">Contact Us</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-5 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#374151] p-8 rounded-lg text-center group hover:bg-[#df6853] transition duration-300">
            <div className="bg-[#df6853] group-hover:bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MdPhone className="text-white group-hover:text-[#df6853]" size={28} />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Phone</h3>
            <p className="text-white/70">+62 123 456 7890</p>
          </div>

          <div className="bg-[#374151] p-8 rounded-lg text-center group hover:bg-[#df6853] transition duration-300">
            <div className="bg-[#df6853] group-hover:bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MdEmail className="text-white group-hover:text-[#df6853]" size={28} />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Email</h3>
            <p className="text-white/70">info@cookexperts.com</p>
          </div>

          <div className="bg-[#374151] p-8 rounded-lg text-center group hover:bg-[#df6853] transition duration-300">
            <div className="bg-[#df6853] group-hover:bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MdLocationOn className="text-white group-hover:text-[#df6853]" size={28} />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Location</h3>
            <p className="text-white/70">Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-[#374151] p-8 rounded-lg">
            <h3 className="text-white font-bold text-2xl mb-6">Send us a Message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-white/80 block mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#df6853] transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="text-white/80 block mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#df6853] transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-white/80 block mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#df6853] transition"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="text-white/80 block mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#df6853] transition resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#df6853] text-white py-3 rounded-lg font-semibold hover:bg-[#df6853]/90 transition flex items-center justify-center gap-2"
              >
                <MdSend size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-[#374151] p-8 rounded-lg h-full">
            <h3 className="text-white font-bold text-2xl mb-6">Visit Our Kitchen</h3>
            <div className="bg-black/30 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
                alt="Kitchen Location"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 text-white/80 space-y-2">
              <p>📍 Jl. Kuliner No. 123, Jakarta</p>
              <p>📞 Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p>📧 Weekend: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {messages.length > 0 && (
          <div className="mt-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h3 className="text-white font-bold text-2xl">
                Submitted Messages ({messages.length})
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowTable(!showTable)}
                  className="bg-[#374151] text-white px-4 py-2 rounded-lg hover:bg-[#df6853] transition flex items-center gap-2"
                >
                  <MdVisibility size={20} />
                  {showTable ? 'Hide' : 'Show'} Messages
                </button>
                {messages.length > 0 && (
                  <button
                    onClick={handleClearAll}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
                  >
                    <MdDelete size={20} />
                    Clear All
                  </button>
                )}
              </div>
            </div>

            {showTable && (
              <div className="bg-[#374151] rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#df6853]">
                      <tr>
                        <th className="px-6 py-4 text-left text-white font-semibold">No</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Name</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Email</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Subject</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Message</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Date</th>
                        <th className="px-6 py-4 text-center text-white font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages.map((msg, index) => (
                        <tr key={msg.id} className="border-b border-white/10  transition">
                          <td className="px-6 py-4 text-white">{index + 1}</td>
                          <td className="px-6 py-4 text-white">{msg.name}</td>
                          <td className="px-6 py-4 text-white">{msg.email}</td>
                          <td className="px-6 py-4 text-white">{msg.subject}</td>
                          <td className="px-6 py-4 text-white max-w-xs truncate" title={msg.message}>
                            {msg.message}
                          </td>
                          <td className="px-6 py-4 text-white text-sm whitespace-nowrap">{msg.date}</td>
                          <td className="px-6 py-4 text-center">
                            <button
                              onClick={() => handleDelete(msg.id)}
                              className="bg-red-600 text-white p-2 rounded  transition"
                              title="Delete message"
                            >
                              <MdDelete size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className='container mx-auto px-4 py-8 lg:py-16'>
        <Footer />
      </div>
    </div>
  );
}