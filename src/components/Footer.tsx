import { Stethoscope, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-4 md:mb-0">
            <div className="flex items-center gap-2 text-white">
              <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center">
                  <span className="text-2xl leading-none font-serif text-primary font-bold">A</span>
                  <div className="relative mx-1">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <Stethoscope className="w-5 h-5 text-slate-950 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={2.5} />
                  </div>
                  <span className="text-2xl leading-none font-serif text-primary font-bold">M</span>
                </div>
                <div className="flex flex-col items-center mt-[-2px]">
                  <span className="font-bold text-[0.7rem] text-primary tracking-wide uppercase">Abenet Medical</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/abenetinternalmedicine" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://tiktok.com/@abenetinternalmedicine" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Abenet Internal Medicine Speciality Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
