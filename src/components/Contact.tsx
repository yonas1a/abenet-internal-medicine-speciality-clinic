import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-semibold text-primary tracking-wide uppercase">Contact & Location</h2>
          <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
            Visit Abenet Clinic
          </h3>
          <p className="mt-4 text-xl text-slate-400">
            We are here to answer your questions and provide the care you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 rounded-3xl p-8 sm:p-10"
          >
            <h4 className="text-2xl font-bold mb-8">Get In Touch</h4>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 text-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-lg font-medium text-white mb-1">Clinic Location</h5>
                  <p className="text-slate-400 leading-relaxed">
                    Addis ababa<br />
                    Lideta Condominium
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 text-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-lg font-medium text-white mb-1">Phone</h5>
                  <p className="text-slate-400">0911126069</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 text-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-lg font-medium text-white mb-1">Email</h5>
                  <a href="mailto:abenetinternalmedicine@gmail.com" className="text-slate-400 hover:text-white transition-colors">abenetinternalmedicine@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 text-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-lg font-medium text-white mb-1">Working Hours</h5>
                  <p className="text-slate-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-slate-400">Saturday: 8:00 AM - 2:00 PM</p>
                  <p className="text-slate-400">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl"
          >
            <h4 className="text-2xl font-bold text-slate-900 mb-2">Book an Appointment</h4>
            <p className="text-slate-500 mb-8">Fill out the form below and we will contact you shortly.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary bg-slate-50 text-slate-900 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary bg-slate-50 text-slate-900 outline-none transition-colors"
                    placeholder="+251 9..."
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary bg-slate-50 text-slate-900 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-2">Reason for Visit</label>
                <textarea
                  id="reason"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary bg-slate-50 text-slate-900 outline-none transition-colors resize-none"
                  placeholder="Tell us briefly about your symptoms or request..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white rounded-lg px-4 py-3 flex items-center justify-center font-semibold hover:bg-primary-dark transition-colors"
              >
                Request Appointment
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
