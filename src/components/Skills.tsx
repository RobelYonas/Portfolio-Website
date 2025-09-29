import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5/CSS", level: 95 }
      ]
    },
    {
      title: "Backend & Mobile",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 90 },
        { name: "Kotlin", level: 85 },
        { name: "Java", level: 80 },
        { name: "Android", level: 85 }
      ]
    },
    {
      title: "Data & ML",
      skills: [
        { name: "PyTorch", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "Firebase", level: 88 },
        { name: "SHAP Analysis", level: 75 },
        { name: "Machine Learning", level: 80 }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Socket.IO", level: 85 },
        { name: "JWT Auth", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-16 text-center">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-xl mb-8 text-center">{category.title}</h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="h-1 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}