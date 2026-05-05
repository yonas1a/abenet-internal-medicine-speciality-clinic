import { motion } from 'motion/react';
import { Award, Clock, HeartHandshake } from 'lucide-react';

import image1 from '../asset/image-1.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-0"
          >
            <h2 className="text-sm font-semibold text-primary tracking-wide uppercase">About Abenet Clinic</h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Dedicated to Your Health & Well-being
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              At Abenet Internal Medicine Speciality Clinic, we are committed to providing compassionate, evidence-based medical care. Our team of experienced specialists takes a patient-centric approach, focusing on accurate diagnosis, personalized treatment plans, and long-term health management.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Expert Specialists</h4>
                  <p className="mt-1 text-slate-600">Board-certified physicians with years of clinical excellence.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Patient-Centered Care</h4>
                  <p className="mt-1 text-slate-600">We listen to your concerns and involve you in medical decisions.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Modern Facilities</h4>
                  <p className="mt-1 text-slate-600">Equipped with the latest diagnostic technology for accurate results.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={image1}
                alt="Abenet Clinic Expert Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-sm font-medium text-slate-600 leading-tight">
                  Years of<br />Medical Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
