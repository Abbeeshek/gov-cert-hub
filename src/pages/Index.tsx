import { Shield, FileText, Award, Users, Building2, Scale, Eye, Briefcase, GraduationCap, Store, Network } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    
    <div className="relative z-10 container mx-auto px-6 py-20 text-center">
      <div className="animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-subtle bg-charcoal/50 backdrop-blur-sm mb-8">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm font-sans text-muted-foreground tracking-wide">Network Global Ecosystem</span>
        </div>
      </div>
      
      <h1 className="animate-fade-up opacity-0 font-serif text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
        <span className="text-foreground">GOVERNMENT</span>
        <br />
        <span className="text-gradient-gold">CERTIFICATE PROGRAMS</span>
      </h1>
      
      <p className="animate-fade-up opacity-0 font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light tracking-wide" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
        Awareness. Access. Empowerment Through Certification.
      </p>
      
      <div className="animate-fade-up opacity-0 flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
        <button className="px-8 py-4 bg-primary text-primary-foreground font-sans font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
          Explore Programs
        </button>
        <button className="px-8 py-4 border border-border text-foreground font-sans font-medium rounded-lg hover:bg-secondary transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

const AboutSection = () => (
  <section className="py-24 bg-charcoal">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-subtle mb-6">
          <span className="text-xs font-sans text-primary tracking-widest uppercase">About The Platform</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8">
          Your Gateway to <span className="text-primary">Official Certification</span>
        </h2>
        
        <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8">
          We provide comprehensive awareness and step-by-step guidance for legitimate government-recognized 
          certificate programs within the Network Global ecosystem. Our platform bridges the gap between 
          citizens and official certification opportunities, ensuring transparent access to programs that 
          can transform careers and businesses.
        </p>
        
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
          <div className="text-center">
            <p className="font-serif text-4xl font-semibold text-primary mb-2">500+</p>
            <p className="font-sans text-sm text-muted-foreground">Programs Listed</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-semibold text-primary mb-2">50K+</p>
            <p className="font-sans text-sm text-muted-foreground">Certifications Guided</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-semibold text-primary mb-2">100%</p>
            <p className="font-sans text-sm text-muted-foreground">Legitimate Sources</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const KeyAreasSection = () => {
  const areas = [
    {
      icon: Eye,
      title: "Program Awareness",
      description: "Comprehensive database of government-recognized certificate programs across sectors, with detailed eligibility criteria and benefits."
    },
    {
      icon: FileText,
      title: "Application Guidance",
      description: "Step-by-step assistance through the application process, document preparation, and submission protocols for each program."
    },
    {
      icon: Award,
      title: "Skill & Career Enablement",
      description: "Connect certifications to career advancement opportunities, skill development pathways, and professional growth."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-subtle mb-6">
            <span className="text-xs font-sans text-primary tracking-widest uppercase">Key Areas</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            How We <span className="text-primary">Empower</span> You
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div 
              key={area.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-gold-subtle transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold-subtle transition-colors duration-300">
                <area.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">{area.title}</h3>
              <p className="font-sans text-muted-foreground leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AudienceSection = () => {
  const audiences = [
    { icon: GraduationCap, label: "Students" },
    { icon: Briefcase, label: "Job Seekers" },
    { icon: Users, label: "Professionals" },
    { icon: Store, label: "MSMEs" },
    { icon: Network, label: "Members" }
  ];

  return (
    <section className="py-24 bg-charcoal-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-subtle mb-6">
            <span className="text-xs font-sans text-primary tracking-widest uppercase">Who It&apos;s For</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Built for <span className="text-primary">Everyone</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you&apos;re starting your career or scaling your business, our platform serves your certification needs.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {audiences.map((item) => (
            <div 
              key={item.label}
              className="flex items-center gap-3 px-6 py-4 rounded-full bg-charcoal border border-border hover:border-gold-subtle transition-all duration-300 group"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-sans text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EcosystemSection = () => {
  const integrations = [
    { icon: Briefcase, title: "Jobs", description: "Connect certifications to employment opportunities" },
    { icon: GraduationCap, title: "Skills", description: "Align with skill development initiatives" },
    { icon: Store, title: "MSME Services", description: "Business certification and compliance support" },
    { icon: Building2, title: "Government Schemes", description: "Access to allied government benefits" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-subtle mb-6">
              <span className="text-xs font-sans text-primary tracking-widest uppercase">Ecosystem Integration</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Part of a <span className="text-primary">Larger Vision</span>
            </h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8">
              Our certificate programs seamlessly integrate with the broader Network Global ecosystem, 
              creating synergies between employment, skill development, MSME support, and government initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {integrations.map((item) => (
              <div 
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-gold-subtle transition-all duration-300 group"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ResponsibleSection = () => {
  const principles = [
    { icon: Eye, title: "Transparency", description: "Clear information on all programs and processes" },
    { icon: Shield, title: "Legitimacy", description: "Only verified government-recognized programs" },
    { icon: Scale, title: "Compliance", description: "Adherence to all regulatory requirements" },
    { icon: Award, title: "Ethical Facilitation", description: "Honest guidance without false promises" }
  ];

  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-subtle mb-6">
            <span className="text-xs font-sans text-primary tracking-widest uppercase">Our Approach</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Responsible <span className="text-primary">Facilitation</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            We operate with the highest standards of integrity and accountability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {principles.map((item) => (
            <div key={item.title} className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gold-subtle flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="font-sans text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisionSection = () => (
  <section className="py-32 bg-background relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-subtle mb-8">
          <span className="text-xs font-sans text-primary tracking-widest uppercase">Our Vision</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-8 leading-tight">
          Empowering a nation through{" "}
          <span className="text-gradient-gold">certified excellence</span>
        </h2>
        
        <p className="font-sans text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
          We envision a future where every citizen has transparent access to government certification 
          opportunities—where credentials unlock potential, enable careers, strengthen businesses, 
          and contribute to national growth.
        </p>
        
        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-charcoal border-t border-border">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-serif text-xl font-semibold text-foreground">Government Certificate Programs</span>
        </div>
        
        <p className="font-sans text-sm text-muted-foreground">
          Part of the Network Global Ecosystem
        </p>
        
        <p className="font-sans text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <KeyAreasSection />
      <AudienceSection />
      <EcosystemSection />
      <ResponsibleSection />
      <VisionSection />
      <Footer />
    </main>
  );
};

export default Index;
