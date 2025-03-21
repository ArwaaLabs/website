'use client'

import * as React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Brain, BarChart, Eye, MessageSquare, Zap } from 'lucide-react'

export default function AIIntegration() {
  return (
   <div>
       <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 bg-opacity-95 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Cpu className="h-16 w-16 text-purple-400" />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              AI Integration
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
              Empower your business with cutting-edge artificial intelligence solutions
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
              Explore AI Solutions
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-800 bg-opacity-95 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our AI Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Machine Learning", description: "Develop custom machine learning models to extract insights from your data." },
              { icon: MessageSquare, title: "Natural Language Processing", description: "Implement NLP solutions for text analysis, chatbots, and more." },
              { icon: Eye, title: "Computer Vision", description: "Create image and video analysis solutions for various applications." },
              { icon: BarChart, title: "Predictive Analytics", description: "Leverage AI for accurate forecasting and decision-making." },
              { icon: Zap, title: "AI-Powered Automation", description: "Streamline your processes with intelligent automation solutions." },
              { icon: Cpu, title: "Edge AI", description: "Deploy AI models on edge devices for real-time processing and reduced latency." },
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
                Why Choose Our AI Integration?
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Cpu className="h-5 w-5 text-purple-400" />
                  <span>State-of-the-art AI models and algorithms</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Cpu className="h-5 w-5 text-purple-400" />
                  <span>Customized AI solutions for your specific needs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Cpu className="h-5 w-5 text-purple-400" />
                  <span>Seamless integration with existing systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Cpu className="h-5 w-5 text-purple-400" />
                  <span>Scalable solutions that grow with your business</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Cpu className="h-5 w-5 text-purple-400" />
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 mt-4">
                Learn More
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                alt="AI Integration Technology"
                src="/AITech.png"
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
            Our AI Integration Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Assessment", description: "We analyze your business needs and identify AI opportunities." },
              { step: 2, title: "Solution Design", description: "Our experts design a tailored AI solution to meet your requirements." },
              { step: 3, title: "Development & Training", description: "We develop and train AI models using your data for optimal performance." },
              { step: 4, title: "Integration & Deployment", description: "We seamlessly integrate the AI solution into your existing systems." },
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
              Ready to Harness the Power of AI?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
              Let's discuss how our AI integration can transform your business and drive innovation.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
              Get Started with AI
            </Button>
          </div>
        </div>
      </section>
   </div>  )
}