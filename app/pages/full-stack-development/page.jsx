'use client'

import * as React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, Database, Globe, Layers, Zap } from 'lucide-react'

export default function FullStackDevelopment() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 bg-opacity-95 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Code className="h-16 w-16 text-purple-400" />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Full Stack Development
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
              Comprehensive solutions for your entire technology stack
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-800 bg-opacity-95 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our Full Stack Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Front-end Development", description: "Create responsive and interactive user interfaces using modern frameworks." },
              { icon: Server, title: "Back-end Development", description: "Build robust server-side applications and APIs to power your services." },
              { icon: Database, title: "Database Management", description: "Design and optimize databases for efficient data storage and retrieval." },
              { icon: Layers, title: "DevOps", description: "Implement CI/CD pipelines and manage cloud infrastructure for seamless deployment." },
              { icon: Zap, title: "Performance Optimization", description: "Enhance application speed and efficiency across the entire stack." },
              { icon: Code, title: "API Integration", description: "Seamlessly connect your applications with third-party services and APIs." },
            ].map((service, index) => (
              <Card key={index} className="bg-gray-800 border border-purple-500 hover:border-pink-500 transition-all duration-300">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-purple-400 mb-2" />
                  <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 bg-opacity-95 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Why Choose Our Full Stack Development?
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-purple-400" />
                  <span>End-to-end solutions for your entire technology stack</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-purple-400" />
                  <span>Expertise in the latest frameworks and technologies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-purple-400" />
                  <span>Scalable and maintainable code architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-purple-400" />
                  <span>Agile development methodology for faster delivery</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-purple-400" />
                  <span>Continuous support and maintenance</span>
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 mt-4">
                Learn More
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                alt="Full Stack Development"
                src="/FullStack.png"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg border-2 border-purple-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-800 bg-opacity-95 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Requirements Gathering", description: "We work closely with you to understand your project needs and goals." },
              { step: 2, title: "Design & Architecture", description: "Our experts design a scalable and efficient architecture for your application." },
              { step: 3, title: "Development & Testing", description: "We implement the solution with rigorous testing at each stage." },
              { step: 4, title: "Deployment & Maintenance", description: "We deploy your application and provide ongoing support and updates." },
            ].map((phase, index) => (
              <Card key={index} className="bg-gray-800 border border-purple-500 hover:border-pink-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {phase.step}
                  </CardTitle>
                  <CardTitle className="text-xl font-bold text-gray-300">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 bg-opacity-95 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Ready to Build Your Next Big Project?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
              Let's discuss how our full stack development services can bring your ideas to life.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}