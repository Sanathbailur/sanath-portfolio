import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'TripVerse Go – Travel Planning & Booking Platform',
      description:
        'A full-stack travel planning and booking platform that allows users to explore destinations by country, view day-wise trip itineraries, interactive maps, and book flights, hotels, buses, trains, and car rentals. Includes traveler, travel company, and admin dashboards.',
      image:
        'https://images.unsplash.com/photo-1502920514313-52581002a659?w=800&h=500&fit=crop',
      tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/Sanathbailur/tripverse-go',
      demo: 'https://tripverse-go.vercel.app',
    },

    {
      title: 'Freechats – Real-Time Chat Application',
      description:
        'A modern WhatsApp-style chat application with real-time messaging, user authentication, contact management, status (stories), image sharing, and profile customization powered by Supabase.',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=500&fit=crop',
      tags: ['React', 'TypeScript', 'Supabase', 'Vite', 'Tailwind CSS'],
      github: 'https://github.com/Sanathbailur/Freechat',
      demo: 'https://freechat-eta.vercel.app',
    },

    {
      title: 'SpeedDriveX',
      description:
        'A fast-paced 3D car racing web game built with React. Features smooth vehicle controls, endless road gameplay, nature-themed tracks, and responsive mobile support.',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop',
      tags: ['React', 'JavaScript', 'HTML5 Canvas', 'Game Physics'],
      github: 'https://github.com/Sanathbailur/DriveX',
      demo: 'https://speedrivex.netlify.app',
    },

    {
      title: 'SkyNexa – Smart Weather Forecast App',
      description:
        'SkyNexa is a modern weather forecast application offering real-time weather updates, 5-day forecasts, and location-based predictions with a clean, responsive UI.',
      image:
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop',
      tags: ['React', 'Vite', 'OpenWeatherMap API', 'TypeScript', 'CSS'],
      github: 'https://github.com/Sanathbailur/SkyNexa_Weather_app',
      demo: 'https://skynexea.netlify.app',
    },

    {
      title: 'Fitness Tracking App',
      description:
        'A frontend fitness tracking web application that helps users monitor workouts, calories, nutrition, and fitness progress through an interactive dashboard and charts.',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop',
      tags: ['Frontend', 'React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/Sanathbailur/fitness-tracking-app',
      demo: 'https://fitness-tracks-app.netlify.app',
    },

    // 👇 Coming Soon Placeholder
    {
      comingSoon: true,
    },
  ];

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my recent work and personal projects
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`group overflow-hidden animate-fade-in-up border-border/50 ${
              project.comingSoon
                ? 'opacity-60 cursor-not-allowed'
                : 'hover-scale hover-glow'
            }`}
            style={{
              animationDelay: `${index * 0.1}s`,
              boxShadow: 'var(--shadow-elegant)',
            }}
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-video">
              <img
                src={
                  project.comingSoon
                    ? 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop'
                    : project.image
                }
                alt="Project preview"
                className="w-full h-full object-cover transition-transform duration-500"
              />
              {project.comingSoon && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold tracking-wide">
                    Coming Soon 🚧
                  </span>
                </div>
              )}
            </div>

            {!project.comingSoon && (
              <>
                <CardHeader>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Button variant="outline" className="flex-1 hover-scale" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>

                  <Button className="flex-1 hover-scale" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
