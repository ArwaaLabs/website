'use client'

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Braces, Cpu, GraduationCap, MapPin, Code, Star, Phone, Mail } from 'lucide-react'

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0)
  const [activeProject, setActiveProject] = React.useState(0)

  const testimonials = [
    { name: "John Doe", role: "CEO, Tech Innovators", content: "ArwaaLabs delivered an exceptional blockchain solution that revolutionized our business processes. Their expertise in smart contract development and blockchain integration was invaluable to our project's success." },
    { name: "Jane Smith", role: "CTO, AI Ventures", content: "The AI integration provided by ArwaaLabs has significantly improved our data analysis capabilities. Their machine learning models have increased our predictive accuracy by 40%, leading to better decision-making across our organization." },
    { name: "Mike Johnson", role: "Educator, Future Tech Institute", content: "ArwaaLabs' educational programs have been instrumental in upskilling our workforce. Their comprehensive blockchain and AI courses have equipped our team with cutting-edge knowledge, positioning us at the forefront of technological innovation." },
    { name: "Sarah Brown", role: "Founder, Crypto Startup", content: "The expertise and support from ArwaaLabs were crucial in launching our successful DeFi platform. Their in-depth understanding of the crypto ecosystem and robust development practices ensured a secure and efficient product." },
  ]

  const projects = [
    { title: "DeFi Platform", description: "Developed a decentralized finance solution enabling seamless peer-to-peer transactions, yield farming, and liquidity provision." },
    { title: "AI-Powered Analytics Dashboard", description: "Created a business intelligence tool leveraging machine learning for predictive analytics and intuitive data querying." },
    { title: "Blockchain Education Portal", description: "Designed an interactive learning platform focused on blockchain technology with hands-on coding exercises and video lectures." },
    { title: "Smart Contract Audit System", description: "Engineered an automated auditing tool that identifies vulnerabilities and enhances blockchain application security." },
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length, projects.length])

  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [])

  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 bg-opacity-95 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="mb-8">
              <img 
                src="/Logo.png"
                alt="ArwaaLabs Logo"
                className="h-20 w-auto" 
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Welcome to ArwaaLabs
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
              Pioneering the Future of Technology at the Intersection of Blockchain, AI, and Education
            </p>
            <div className="space-x-4">
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                onClick={() => window.location.assign("/#services")}
              >
                Explore Our Services
              </Button>
              <Button
                variant="outline"
                className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-gray-900"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="w-full py-12 bg-gray-800 bg-opacity-95 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our Comprehensive Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Braces,
                title: "Blockchain Solutions",
                items: [
                  "Smart contract development",
                  "DApp creation",
                  "Blockchain integration",
                  "Tokenization services",
                ],
                link: "/pages/blockchain-services",
              },
              {
                icon: Cpu,
                title: "AI Integration",
                items: [
                  "Machine learning model development",
                  "Natural language processing",
                  "Computer vision solutions",
                  "AI-powered analytics",
                ],
                link: "/pages/ai-integration",
              },
              {
                icon: GraduationCap,
                title: "Tech Education",
                items: [
                  "Blockchain development courses",
                  "AI and machine learning workshops",
                  "Cybersecurity training",
                  "Custom corporate training programs",
                ],
                link: "/pages/tech-education",
              },
              {
                icon: Code,
                title: "Full Stack Development",
                items: [
                  "Front-end development",
                  "Back-end services",
                  "Database design and optimization",
                  "DevOps and cloud deployment",
                ],
                link: "/pages/full-stack-development",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 p-6 bg-gray-800 rounded-lg shadow-lg transition-transform hover:scale-105 border border-purple-500 hover:border-pink-500"
              >
                <service.icon className="h-12 w-12 text-purple-400" />
                <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {service.title}
                </h3>
                <ul className="text-gray-300 text-sm list-disc list-inside">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Link href={service.link}>
                  <Button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
                    Explore {service.title}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="w-full py-12 bg-gray-900 bg-opacity-95 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Innovative Projects Delivered
          </h2>
          <div className="relative overflow-hidden h-80">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80 transition-opacity duration-500 ${
                  index === activeProject ? "opacity-100" : "opacity-0"
                } border border-purple-500`}
              >
                <CardContent className="p-6 flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeProject
                    ? "bg-gradient-to-r from-purple-400 to-pink-600"
                    : "bg-gray-600"
                }`}
                onClick={() => setActiveProject(index)}
              />
            ))}
          </div>
          
          {/* Projects Under Development (Subcategory) */}
          <h3 className="text-2xl font-bold tracking-tighter text-center mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Projects Under Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 project-card-container">
            {/* Smart Appointments Card */}
            <div className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] project-card bg-gray-800/60 border border-purple-500 shadow-lg min-h-[280px] md:min-h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 to-pink-700/70 z-10 opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute left-4 top-4 z-20">
                <div className="text-white/90 transform transition-all duration-500 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                    <path d="M8 2v4" className="text-purple-300" />
                    <path d="M16 2v4" className="text-pink-300" />
                    <rect x="2" y="6" width="20" height="16" rx="2" className="text-purple-400" />
                    <path d="M6 10h12" className="text-purple-300" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 z-20 p-4 pl-20 sm:p-5 sm:pl-20 md:p-6 md:pl-20 flex flex-col justify-end">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-500/70 backdrop-blur-sm text-white rounded-full">Healthcare</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-pink-500/70 backdrop-blur-sm text-white rounded-full">Appointment System</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Smart Appointments</h3>
                  <p className="text-gray-200 text-xs sm:text-sm">A comprehensive healthcare appointment system for Dr. Imran's Healthcare & Diagnostic Centre, providing quality healthcare services with easy online booking.</p>
                  <div className="pt-2 sm:pt-3">
                    <a 
                      href="https://smartappointment.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-purple-300 text-sm hover:text-white transition-colors group-hover:underline"
                    >
                      Visit Project <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Musahamat Card */}
            <div className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] project-card bg-gray-800/60 border border-purple-500 shadow-lg min-h-[280px] md:min-h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 to-pink-700/70 z-10 opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute left-4 top-4 z-20">
                <div className="text-white/90 transform transition-all duration-500 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="text-purple-400" />
                    <path d="M8 12l2 2 4-4" className="text-pink-300" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 z-20 p-4 pl-20 sm:p-5 sm:pl-20 md:p-6 md:pl-20 flex flex-col justify-end">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-500/70 backdrop-blur-sm text-white rounded-full">Real Estate</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-pink-500/70 backdrop-blur-sm text-white rounded-full">Blockchain</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Musahamat</h3>
                  <p className="text-gray-200 text-xs sm:text-sm">Revolutionizing real estate investments through tokenization, enabling fractional ownership and enhanced liquidity with blockchain technology.</p>
                  <div className="pt-2 sm:pt-3">
                    <a 
                      href="https://www.musahamat.co/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-purple-300 text-sm hover:text-white transition-colors group-hover:underline"
                    >
                      Visit Project <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="w-full py-12 bg-gray-800 bg-opacity-95 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Client Testimonials
          </h2>
          <div className="relative overflow-hidden h-80">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80 transition-opacity duration-500 ${
                  index === activeTestimonial ? "opacity-100" : "opacity-0"
                } border border-purple-500`}
              >
                <CardContent className="p-6 flex flex-col justify-center h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-purple-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-lg italic">
                    {testimonial.content}
                  </p>
                  <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeTestimonial
                    ? "bg-gradient-to-r from-purple-400 to-pink-600"
                    : "bg-gray-600"
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-900 bg-opacity-95 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section id="about" className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                About ArwaaLabs
              </h2>
              <p className="text-gray-300 md:text-xl">
                ArwaaLabs is at the forefront of technological innovation,
                specializing in Blockchain solutions, AI integration, and Tech
                Education. Our mission is to empower businesses and individuals
                with cutting-edge technologies and knowledge to thrive in the
                digital age.
              </p>
              <p className="text-gray-300 md:text-xl">
                With a team of expert developers, researchers, and educators,
                we're committed to pushing the boundaries of what's possible in
                the realms of blockchain and artificial intelligence. Our
                collaborative approach ensures tailored solutions for each
                client.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-purple-400" />
                  <span className="text-gray-300">Qazigund Anantnag, J&K India 192221</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-purple-400" />
                  <span className="text-gray-300">+919906841596</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-purple-400" />
                  <span className="text-gray-300">business@arwaalabs.com</span>
                </div>
              </div>
            </section>

            <section id="contact">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Contact Us
              </h2>
             
              <form className="space-y-4 mt-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}