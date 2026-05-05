import { AboutSection } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/navbar"
import { NightRainBG } from "../components/NightRainBG"
import { ThemeToggle } from "../components/ThemeToggle"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectSection } from "../components/ProjectSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { Alert } from "../components/Alert"

import { useState } from "react"



export const Home = () => {
    const [showAlert, setShowAlert] = useState(false);

    return (
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
    )
}