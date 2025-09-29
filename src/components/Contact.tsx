import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:robel4872@gmail.com",
      label: "robel4872@gmail.com",
      description: "Let's discuss opportunities"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/robel-yonas",
      label: "Robel Yonas",
      description: "Professional network"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/RobelYonas",
      label: "@RobelYonas",
      description: "View my repositories"
    },
    {
      name: "Phone",
      icon: Mail,
      href: "tel:+46722405372",
      label: "+46 722 405 372",
      description: "Call me directly"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.2, ease: [0.215, 0.610, 0.355, 1.000] }}
        >
          <div className="grid grid-cols-12 gap-8 items-center mb-24">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-5xl lg:text-6xl font-light tracking-tight mb-8">
                Let's Build
                <br />
                Something Amazing
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Interested in collaborating on innovative projects? I'm passionate about 
                full-stack development, machine learning, and creating scalable solutions 
                that solve real-world problems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Currently pursuing Master's degree</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm text-muted-foreground">Open to internships & collaborations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-sm text-muted-foreground">Response within 24 hours</span>
                </div>
              </div>
            </div>
            
            <div className="col-span-12 lg:col-span-6">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-muted/30 p-8 rounded-lg border border-border">
                  <h3 className="text-xl mb-6">Send Me a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-muted-foreground mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="w-full h-12 bg-background rounded border border-border px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="your.email@example.com"
                          className="w-full h-12 bg-background rounded border border-border px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell me about your project, collaboration idea, or just say hello..."
                        className="w-full bg-background rounded border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground h-12 rounded hover:bg-primary/90 transition-colors flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="group relative p-6 bg-card/50 backdrop-blur rounded-lg border border-border hover:border-primary/20 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.215, 0.610, 0.355, 1.000]
                }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <ArrowUpRight 
                      size={16} 
                      className="text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                    />
                  </div>
                  
                  <h3 className="text-lg font-light mb-2 group-hover:text-primary transition-colors duration-300">
                    {link.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {link.description}
                  </p>
                  
                  <p className="text-xs text-muted-foreground/70 font-mono">
                    {link.label}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.a
              href="mailto:robel4872@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
              whileHover={{ scale: 1.05, gap: 16 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="tracking-[0.1em]">Send Message</span>
              <ArrowUpRight 
                size={18} 
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
              />
            </motion.a>
            
            <p className="text-sm text-muted-foreground mt-4">
              Or call me directly to discuss opportunities
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}