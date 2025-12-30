// import { Download, Mail } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Hero = () => {
//   const scrollToContact = () => {
//     const element = document.querySelector('#contact');
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//       style={{ background: 'var(--gradient-hero)' }}
//     >
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
//       </div>

//       <div className="section-container relative z-10">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <div className="space-y-6 animate-fade-in-up">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full animate-scale-in">
//               <span className="text-4xl animate-float">👋</span>
//               <span className="text-primary font-semibold">Hi there!</span>
//             </div>

//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//               I'm <span className="gradient-text">Your Name</span>
//             </h1>

//             <p className="text-xl md:text-2xl text-muted-foreground">
//               Full Stack Developer & Creative Problem Solver
//             </p>

//             <p className="text-lg text-muted-foreground max-w-xl">
//               Passionate about building elegant solutions and crafting exceptional digital experiences. 
//               I turn ideas into reality with clean code and modern technologies.
//             </p>

//             <div className="flex flex-wrap gap-4 pt-4">
//               <Button
//                 size="lg"
//                 className="hover-scale group"
//                 style={{ boxShadow: 'var(--shadow-elegant)' }}
//               >
//                 <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
//                 Download Resume
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="hover-scale hover-glow"
//                 onClick={scrollToContact}
//               >
//                 <Mail className="mr-2 h-5 w-5" />
//                 Contact Me
//               </Button>
//             </div>
//           </div>

//           {/* Profile Image */}
//           <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
//             <div className="relative w-full max-w-md mx-auto">
//               <div
//                 className="absolute inset-0 rounded-full blur-2xl opacity-50"
//                 style={{ background: 'var(--gradient-primary)' }}
//               />
//               <div className="relative aspect-square rounded-full overflow-hidden border-4 border-primary/20 hover-scale hover-glow">
//                 <img
//                   src="/assets/sanath.jpg"
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sanathImg from '@/assets/sanath.jpg';


const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full animate-scale-in">
              <span className="text-4xl animate-float">👋</span>
              <span className="text-primary font-semibold">Hi there!</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I'm <span className="gradient-text">Sanath</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer & Creative Problem Solver
            </p>

            <p className="text-xl md:text-2xl text-muted-foreground">
              🚀 Smart India Hackathon Finalist – 2025
            </p>
           

            <p className="text-lg text-muted-foreground max-w-xl">
              Passionate about building elegant solutions and crafting exceptional digital experiences. 
              I turn ideas into reality with clean code and modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
          <a
  href="/SANATH_RESUME.pdf"
  download="SANATH_RESUME.pdf"
>
  <Button
    size="lg"
    className="hover-scale group"
    style={{ boxShadow: 'var(--shadow-elegant)' }}
  >
    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
    Download Resume
  </Button>
</a>
              <Button
                size="lg"
                variant="outline"
                className="hover-scale hover-glow"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-50"
                style={{ background: 'var(--gradient-primary)' }}
              />
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-primary/20 hover-scale hover-glow">
                <img
                 src={sanathImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

