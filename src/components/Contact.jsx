import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="fade-up py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">
            Get In Touch
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-black">
            Let's Start Your Cloud Journey
          </h2>

          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your skills or business? Contact us anytime.
          </p>
        </div>

        {/* CONTACT + QUICK RESPONSE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* CONTACT INFO CARD */}
          <div className="bg-gradient-to-br from-black via-gray-900 to-black 
                          rounded-2xl p-10 border border-gray-800 shadow-2xl">

            <h3 className="text-3xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 
                                rounded-lg flex items-center justify-center">
                  <Mail size={24} className="text-yellow-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Email</div>
                  <div className="text-white font-medium">
                    contact@figuringservices.com
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 
                                rounded-lg flex items-center justify-center">
                  <Phone size={24} className="text-blue-500" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Phone</div>
                  <div className="text-white font-medium">
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 
                                rounded-lg flex items-center justify-center">
                  <MapPin size={24} className="text-yellow-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Location</div>
                  <div className="text-white font-medium">
                    Global Remote Services
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* QUICK RESPONSE BOX */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 
                          rounded-2xl p-10 shadow-2xl h-fit">
            <h3 className="text-3xl font-bold text-black mb-4">
              Quick Response
            </h3>
            <p className="text-gray-900 text-lg leading-relaxed">
              We typically respond within 24 hours.  
              For urgent inquiries, please contact us directly via email or phone.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
