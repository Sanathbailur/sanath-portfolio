import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Presidency University, Bangalore',
      period: '2024 - 2026',
      description:
        'Currently pursuing MCA with a focus on Full Stack Development, Cloud Technologies, and AI-driven solutions.',
      achievements: [
        'Active Project Builder',
        'AI & MERN Stack Enthusiast',
        'SIH Hackathon Finalist 2024',
      ],
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Dr. B.B. Hegde First Grade College, Kundapura',
      period: '2020 - 2023',
      description:
        'Completed BCA with strong fundamentals in programming, database systems, and software engineering.',
      achievements: ['7.8 CGPA', 'Project: Advance Image Processing'],
    },
  ];

  const certificates = [
    {
      name: 'Oracle AI Foundation Certification',
      issuer: 'Oracle',
      date: '2025',
      icon: '🤖',
      file: '/SANATH_foundation.pdf',
    },
    {
      name: 'Generative AI Certification',
      issuer: 'Industry Certification',
      date: '2025',
      icon: '🧠',
      file: '/SANATH_generative.pdf',
    },
    {
      name: 'Smart India Hackathon Finalist',
      issuer: 'Government of India – SIH 2024',
      date: '2025',
      icon: '🚀',
      file: '/sih-certificate.html',
    },
  ];

  return (
    <section id="education" className="section-container bg-muted/30">
      {/* Section Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Education & <span className="gradient-text">Certificates</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My academic journey and professional certifications
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-20 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          Education
        </h3>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={edu.degree}
              className="hover-scale hover-glow animate-fade-in-up border-l-4 border-l-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>

                  <Badge
                    variant="secondary"
                    className="mx-auto md:mx-0 flex items-center gap-1"
                  >
                    <Calendar className="h-3 w-3" />
                    {edu.period}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 text-center md:text-left">
                <p className="text-muted-foreground">{edu.description}</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {edu.achievements.map((a) => (
                    <Badge key={a}>{a}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certificates Section */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-10 flex items-center justify-center gap-2">
          <Award className="h-6 w-6 text-primary" />
          Certificates
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card
              key={cert.name}
              onClick={() => window.open(cert.file, '_blank')}
              className="cursor-pointer hover-scale hover-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-3 text-center">
                <div className="text-5xl">{cert.icon}</div>
                <h4 className="font-semibold">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <Badge variant="outline">{cert.date}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
