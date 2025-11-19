import { Award, Target, Zap, CheckCircle2 } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Industry Recognition', value: 'Certified Expert' },
  { icon: Target, label: 'Success Rate', value: '98%' },
  { icon: Zap, label: 'Active Projects', value: '25+' }
];

const highlights = [
  'Deep expertise in AWS, Azure, and Google Cloud Platform',
  'Published author with bestselling DevOps books',
  'Trained 500+ professionals across various industries',
  'Led cloud migrations for Fortune 500 companies',
  'Active community contributor and thought leader',
  'Certified in multiple cloud and DevOps technologies'
];

export default function About() {
  return (
    <section id="about" className="fade-up py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">About Me</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-black">
                Led by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">Pravin Mishra</span>
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
          Pravin Mishra is a Cloud Architect, DevOps Consultant, and AWS Authorized Instructor with deep expertise in cloud computing, automation, and modern infrastructure design. He holds multiple industry-leading certifications including AWS Solutions Architect – Professional and Azure Solutions Architect Expert.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
             With years of experience designing secure, scalable, and cost-efficient architectures on AWS and Azure, Pravin has helped startups and enterprises transform their cloud strategy through automation, DevOps adoption, and best-practice engineering.
            </p>
            
  <p className="text-lg text-gray-700 leading-relaxed">
             As an educator and mentor, he has trained thousands of students through books, courses, and real-world project guidance — helping them build strong careers in Cloud & DevOps.
            </p>

  <p className="text-lg text-gray-700 leading-relaxed">
             When not engineering solutions, Pravin enjoys exploring new technologies, reading, and travelling to new places.
            </p>
            
            <div className="grid grid-cols-3 gap-4 py-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <Icon className="mx-auto mb-2 text-yellow-400" size={28} />
                    <div className="text-2xl font-bold text-black">{stat.value}</div>
                    <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-blue-500 text-3xl font-bold">15+</div>
                <div className="text-gray-600 text-sm mt-1">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-yellow-400 text-3xl font-bold">20+</div>
                <div className="text-gray-600 text-sm mt-1">Technology Stacks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
