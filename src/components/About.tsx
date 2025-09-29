import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-16 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I'm an aspiring software engineer currently pursuing my Master's in Software Engineering 
                  and Management at the University of Gothenburg. With a strong foundation in computer science 
                  and hands-on experience in full-stack development, I'm passionate about continuous learning 
                  and tackling real-world challenges.
                </p>
                
                <p>
                  My expertise spans from data-driven development and machine learning to mobile app development 
                  with Android and Kotlin. I've worked on projects ranging from fintech applications to 
                  AI-powered parking detection systems, always focusing on scalable solutions and clean architecture.
                </p>
                
                <p>
                  Currently completing my bachelor's thesis on machine learning algorithms for flight delay 
                  prediction, I enjoy exploring the intersection of data science and software engineering. 
                  I thrive in agile environments and love collaborating with diverse teams to build 
                  innovative solutions.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}