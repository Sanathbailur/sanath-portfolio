// import { Mail, Linkedin, Github, Bot } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';

// const Contact = () => {
//   const contactMethods = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'your.email@example.com',
//       href: 'mailto:your.email@example.com',
//       color: 'hsl(0 84% 60%)',
//     },
//     {
//       icon: Linkedin,
//       label: 'LinkedIn',
//       value: 'linkedin.com/in/yourprofile',
//       href: 'https://linkedin.com/in/yourprofile',
//       color: 'hsl(210 90% 50%)',
//     },
//     {
//       icon: Github,
//       label: 'GitHub',
//       value: 'github.com/yourusername',
//       href: 'https://github.com/yourusername',
//       color: 'hsl(220 15% 20%)',
//     },
//   ];

//   return (
//     <section id="contact" className="section-container">
//       <div className="text-center mb-16 animate-fade-in-up">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           Get In <span className="gradient-text">Touch</span>
//         </h2>
//         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//           Let's connect and discuss how we can work together
//         </p>
//       </div>

//       <div className="max-w-4xl mx-auto">
//         {/* Contact Cards */}
//         <div className="grid md:grid-cols-3 gap-6 mb-8">
//           {contactMethods.map((method, index) => {
//             const Icon = method.icon;
//             return (
//               <Card
//                 key={method.label}
//                 className="hover-scale hover-glow group animate-fade-in-up"
//                 style={{
//                   animationDelay: `${index * 0.1}s`,
//                   boxShadow: 'var(--shadow-elegant)',
//                 }}
//               >
//                 <CardContent className="p-6 text-center space-y-4">
//                   <div
//                     className="w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
//                     style={{
//                       background: `${method.color}20`,
//                       color: method.color,
//                     }}
//                   >
//                     <Icon className="h-8 w-8" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-2">{method.label}</h3>
//                     <a
//                       href={method.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
//                     >
//                       {method.value}
//                     </a>
//                   </div>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         {/* AI Assistant Button */}
//         <Card
//           className="hover-scale hover-glow animate-fade-in-up"
//           style={{
//             animationDelay: '0.3s',
//             background: 'var(--gradient-primary)',
//             boxShadow: 'var(--shadow-glow)',
//           }}
//         >
//           <CardContent className="p-8 text-center">
//             <Bot className="h-16 w-16 mx-auto mb-4 text-primary-foreground" />
//             <h3 className="text-2xl font-bold mb-2 text-primary-foreground">
//               Ask My AI Assistant
//             </h3>
//             <p className="text-primary-foreground/90 mb-6">
//               Have questions about my experience or projects? Chat with my AI assistant for instant answers!
//             </p>
//             <Button
//               size="lg"
//               variant="secondary"
//               className="hover-scale"
//             >
//               <Bot className="mr-2 h-5 w-5" />
//               Start Conversation
//             </Button>
//           </CardContent>
//         </Card>

//         {/* Additional CTA */}
//         <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
//           <p className="text-muted-foreground mb-4">
//             Prefer a more traditional approach?
//           </p>
//           <Button
//             size="lg"
//             className="hover-scale"
//             style={{ boxShadow: 'var(--shadow-elegant)' }}
//             asChild
//           >
//             <a href="mailto:your.email@example.com">
//               <Mail className="mr-2 h-5 w-5" />
//               Send Direct Email
//             </a>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { Mail, Linkedin, Github, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AIAssistant from "@/components/AIAssistant";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sanathpbailur@gmail.com',
      href: 'mailto:sanathpbailur@gmail.com',
      color: 'hsl(0 84% 60%)',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sanath-p-bailur',
      href: 'https://www.linkedin.com/in/sanath-p-bailur',
      color: 'hsl(210 90% 50%)',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Sanathbailur',
      href: 'https://github.com/Sanathbailur',
      color: 'hsl(220 15% 20%)',
    },
  ];

  return (
    <>
      <section id="contact" className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={method.label}
                  className="hover-scale hover-glow group animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    boxShadow: 'var(--shadow-elegant)',
                  }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${method.color}20`,
                        color: method.color,
                      }}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{method.label}</h3>
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                      >
                        {method.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* AI Assistant Button */}
          <Card
            className="hover-scale hover-glow animate-fade-in-up"
            style={{
              animationDelay: '0.3s',
              background: 'var(--gradient-primary)',
              boxShadow: 'var(--shadow-glow)',
            }}
          >
            <CardContent className="p-8 text-center">
              <Bot className="h-16 w-16 mx-auto mb-4 text-primary-foreground" />
              <h3 className="text-2xl font-bold mb-2 text-primary-foreground">
                Ask My AI Assistant
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Have questions about my experience or projects? Chat with my AI assistant for instant answers!
              </p>
             <Button
  size="lg"
  variant="secondary"
  className="hover-scale"
  onClick={() => document.getElementById("ai-open")?.click()}
>
  <Bot className="mr-2 h-5 w-5" />
  Start Conversation
</Button>

            </CardContent>
          </Card>

          {/* Additional CTA */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-muted-foreground mb-4">
              Prefer a more traditional approach?
            </p>
            <Button
              size="lg"
              className="hover-scale"
              style={{ boxShadow: 'var(--shadow-elegant)' }}
              asChild
            >
              <a href="mailto:sanathbpoojary@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Direct Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ⭐ AI Assistant Component (Correct Position) */}
      <AIAssistant />
    </>
  );
};

export default Contact;
