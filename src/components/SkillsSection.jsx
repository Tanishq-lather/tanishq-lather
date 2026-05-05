import {useState} from "react";
import {cn} from "../lib/utils";

const skills = [
    // Technicals programminnf and scripting
    {name: "JavaScript", level: 90, category: "Programming"},
    {name: "ReactJS", level: 90, category: "Programming"},
    {name: "Node.js", level: 85, category: "Programming"},
    {name: "MongoDB", level: 70, category: "Programming"},
    {name: "Express.js", level: 80, category: "Programming"},
    
    // Software
    {name: "VS Code", level: 95, category: "Software"},
    {name: "Git", level: 85, category: "Software"},
    {name: "Postman", level: 65, category: "Software"},
    {name: "Canva", level: 90, category: "Software"},
    
    // Soft skills
    {name: "Logical Thinking", level: 95, category: "Soft Skills"},
    {name: "Collaboration", level: 80, category: "Soft Skills"},
    {name: "Adaptability", level: 100, category: "Soft Skills"},
    {name: "Problem Solving", level: 90, category: "Soft Skills"},

]

const categories = ["all", "Programming", "Software", "Soft Skills"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((
        skill => activeCategory === "all" || skill.category === activeCategory
    ))
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <div>
                        {categories.map((category, key) => (
                            <button 
                                key={key}
                                className={cn("px-5 py-2 rounded-full transition-colors duration-300", {
                                    "bg-primary text-primary-foreground": activeCategory === category,
                                    "bg-secondary/70 text-foreground hover:bg-secondary": activeCategory !== category
                                })}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"> 
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary-50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow-1.5s_ease-out]" style={{width: `${skill.level}%`}}/>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )

}