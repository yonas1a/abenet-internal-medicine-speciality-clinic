import { motion } from 'motion/react';
import { PhoneCall } from 'lucide-react';

import image2 from '../asset/image-2.jpg';

export default function CTA() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-primary-dark/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-[0.05]"></div>
          
          <div className="grid lg:grid-cols-2 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-12 lg:p-20 flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Quality Healthcare is Just a Call Away
              </h2>
              <p className="text-primary-100 text-lg mb-10 max-w-lg">
                Don't delay your health needs. Our professional team is ready to provide you with the best medical care. Schedule your visit today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:0911126069" 
                  className="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-500 text-white rounded-full font-bold hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl shadow-red-500/30"
                >
                  <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-300"></span>
                  </span>
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                  Call 0911126069
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-dark text-white rounded-full font-bold border border-primary-light/30 hover:bg-primary/80 transition-colors"
                >
                  Book Appointment
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block h-full min-h-[500px] relative"
            >
              <div className="absolute inset-0 right-0 bg-gradient-to-r from-primary to-transparent w-32 z-10 hidden lg:block"></div>
              <img 
                src={image2} 
                alt="Abenet Medical Center Professional" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
