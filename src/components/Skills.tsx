


import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import { SiJavascript, SiSupabase, SiPostman } from 'react-icons/si';
import { Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    { name: 'HTML & CSS', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'Python', icon: <FaPython className="text-blue-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-900 dark:text-white" /> },
    { name: 'Supabase', icon: <SiSupabase className="text-emerald-400" /> },
    { name: 'REST API', icon: <SiPostman className="text-orange-400" /> },
    { name: 'Website Development', icon: <Globe className="text-sky-400" /> },
  ];

  return (
    <section id="skills" className="section-container">
      {/* Heading */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I use to build modern web applications
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <Card
            key={skill.name}
            className="bg-card/60 border-border/40 hover-scale hover-glow animate-fade-in-up"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-sm font-semibold tracking-wide text-center">
                {skill.name}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
