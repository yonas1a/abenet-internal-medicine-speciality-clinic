import { Activity, Heart, ShieldCheck, Stethoscope, Users, Wind } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Cardiovascular Care',
    description: 'Comprehensive diagnosis and management of heart and blood vessel conditions.',
    icon: Heart,
  },
  {
    title: 'Endocrinology & Diabetes',
    description: 'Expert care for metabolic disorders, thyroid conditions, and diabetes management.',
    icon: Activity,
  },
  {
    title: 'Pulmonology',
    description: 'Treatment for respiratory diseases, asthma, COPD, and other lung conditions.',
    icon: Wind,
  },
  {
    title: 'Gastroenterology',
    description: 'Expert evaluation and treatment of digestive tract and liver disorders.',
    icon: Stethoscope,
  },
  {
    title: 'Preventive Medicine',
    description: 'Routine check-ups, screenings, and lifestyle counseling to keep you healthy.',
    icon: ShieldCheck,
  },
  {
    title: 'Senior Health Care',
    description: 'Specialized geriatric care focusing on the complex health needs of older adults.',
    icon: Users,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-semibold text-primary tracking-wide uppercase">Our Services</h2>
          <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive Internal Medicine
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            We provide specialized, evidence-based care across a wide range of adult medical conditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-50 text-primary rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
