import { AboutSection } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { NightRainBG } from "../components/NightRainBG"
import { ThemeToggle } from "../components/ThemeToggle"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectSection } from "../components/ProjectSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { Alert } from "../components/Alert"

// For SEO
import { Helmet } from "react-helmet-async"

import { useState } from "react"



export const Home = () => {
    const [showAlert, setShowAlert] = useState(false);

    return (
        <>
        {/* For SEO */}
        <Helmet>
            <title>Tanishq Lather | Portfolio</title>
             <meta name="description" content="Tanishq Lather's Portfolio Website" />
             <meta name="keywords" content="Tanishq Lather, Portfolio, Web Developer, React Developer, Frontend Developer" />
             <meta name="author" content="Tanishq Lather" />
             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
             <link rel="canonical" href="https://tanishqlather.vercel.app/" />
        </Helmet>

        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects  */}
            <NightRainBG />

            {/* Navbar  */}
            <Navbar />

            {/* Alert  */}
            <Alert showAlert={showAlert} setShowAlert={setShowAlert} />

            {/* Main Content  */}
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection showAlert={showAlert} setShowAlert={setShowAlert} />

            {/* Footer  */}
            <Footer />
            
        </div>
        </>
    )
}