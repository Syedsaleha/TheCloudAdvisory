import { Cloud, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2">
              <Cloud size={16} className="text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">Cloud & DevOps Experts</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Transform Your</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">
                Cloud Journey
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Expert courses, insightful books, and strategic consulting services to elevate your Cloud and DevOps capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/50 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200"
              >
                Explore Services
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="border-l-2 border-yellow-400 pl-4">
                <div className="text-3xl font-bold text-white">5000+</div>
                <div className="text-gray-400 text-sm">Students Trained</div>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div className="border-l-2 border-yellow-400 pl-4">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 backdrop-blur-xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="h-2 bg-gray-700 rounded-full w-3/4"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-100"></div>
                  <div className="h-2 bg-gray-700 rounded-full w-2/3"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                  <div className="h-2 bg-gray-700 rounded-full w-4/5"></div>
                </div>
                <div className="pt-4 space-y-3">
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-yellow-400 text-sm font-mono">$ kubectl get pods</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-blue-400 text-sm font-mono">$ terraform apply</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-yellow-400 text-sm font-mono">$ docker-compose up</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
