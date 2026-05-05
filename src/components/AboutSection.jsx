import { Film, User, Briefcase } from "lucide-react"

export const AboutSection = () =>  {
    return (
        <section className="py-24 px-4 relative" id="about">
            <div className="container mx-auto max-w-5xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate WEB DEVELOPER
                        </h3>

                        <p className="text-muted-foreground">
                            With over 2 years of experience in web development, I specialize in creating responsive and user-friendly websites and applications.
                        </p>

                        <p className="text-muted-foreground">
                            My expertise includes HTML, CSS, JavaScript, and various web frameworks, allowing me to build modern and efficient web solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                            <a href="#contact" className="cosmic-button">
                                Contact Me
                            </a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-6"> 
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Film className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        WEB Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Creating amazing websites to make work extra ordinary   
                                    </p>
                                </div>
                            </div>
                        </div>  

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Design Sense
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Creating everything with amazing design sense and knowledge.
                                    </p>
                                </div>
                            </div>
                        </div>  

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Project Management
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to completion with agile methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>  

                    </div>
                </div>
            </div>
        </section>
    )
}