import { Mail, Phone, MapPin, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

export const ContactSection = ({ showAlert, setShowAlert }) => {
    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();

        if (!form.current) {
          console.error('EmailJS form ref is not set');
          return;
        }

        emailjs
          .sendForm('service_heh1vgf', 'template_qv8ejlm', form.current, import.meta.env.VITE_PUBLIC_KEY)
          .then(() => {
            setShowAlert(true);
            form.current.reset();
            setTimeout(() => {
                setShowAlert(false);
            }, 5000);
          })
          .catch((error) => {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
          });
    }

    return (
        <section 
          id="contact" 
          className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Get in <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mx-auto max-w-2xl mb-12">
                    Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                        <div className="space-y-6 justify-center">

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a href="mailto:tanishqlather@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        tanishqlather@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        Not available
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        karnal, Haryana, India
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect with me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/tanishq-lather/" target="_blank">
                                    <i className="fa-brands fa-linkedin fa-lg"></i>
                                </a>
                                <a href="https://x.com/Tanishq_lather" target="_blank">
                                    <i className="fa-brands fa-x-twitter fa-lg"></i>
                                </a>
                                <a href="https://www.instagram.com/tanishq_lather/?hl=en" target="_blank">
                                    <i className="fa-brands fa-instagram fa-lg"></i>
                                </a>
                                <a href="https://www.youtube.com/@Separate_Vibe" target="_blank">
                                    <i className="fa-brands fa-youtube fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label>
                                <input 
                                  type="text"
                                  id="name"
                                  name="from_name"
                                  required
                                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                  placeholder="Tanishq lather.."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your email</label>
                                <input 
                                  type="email"
                                  id="email"
                                  name="from_email"
                                  required
                                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                  placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your message</label>
                                <textarea 
                                  id="message"
                                  name="message"
                                  required
                                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                  placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button 
                              type="submit" 
                              className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2",
                                
                              )}
                            >
                                Send Message
                                <Send size={16} />
                              </button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}