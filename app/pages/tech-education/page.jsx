'use client'

import * as React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Book, Users, Monitor, Lightbulb, Award } from 'lucide-react'

export default function TechEducation() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 bg-opacity-95 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <GraduationCap className="h-16 w-16 text-purple-400" />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Tech Education
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
              Empower your team with cutting-edge technology skills
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
              Explore Courses
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-800 bg-opacity-95 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our Tech Education Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Book, title: "Blockchain Development", description: "Learn to build decentralized applications and smart contracts." },
              { icon: Monitor, title: "AI and Machine Learning", description: "Master the fundamentals of AI and implement ML models." },
              { icon: Users, title: "Cybersecurity", description: "Understand threats and implement robust security measures." },
              { icon: Lightbulb, title: "Full Stack Development", description: "Become proficient in both front-end and back-end technologies." },
              { icon: Award, title: "Cloud Computing", description: "Learn to design, deploy, and manage cloud infrastructure." },
              { icon: GraduationCap, title: "Data Science", description: "Analyze and interpret complex data to drive decision-making." },
            ].map((course, index) => (
              <Card key={index} className="bg-gray-800 border border-purple-500 hover:border-pink-500 transition-all duration-300">
                <CardHeader>
                  <course.icon className="h-10 w-10 text-purple-400 mb-2" />
                  <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{course.description}</p>
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
                Why Choose Our Tech Education?
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-purple-400" />
                  <span>Industry-expert instructors</span>
                </li>
                <li className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-purple-400" />
                  <span>Hands-on, project-based learning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-purple-400" />
                  <span>Flexible learning options (online, in-person, hybrid)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-purple-400" />
                  <span>Up-to-date curriculum aligned with industry needs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-purple-400" />
                  <span>Career support and networking opportunities</span>
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 mt-4">
                Learn More
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                alt="Tech Education"
                src="/TechEdu.png"
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
            Our Learning Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Foundational Knowledge", description: "Build a strong theoretical base in your chosen technology." },
              { step: 2, title: "Practical Application", description: "Apply your knowledge through hands-on projects and exercises." },
              { step: 3, title: "Industry Integration", description: "Learn how to apply your skills in real-world business scenarios." },
              { step: 4, title: "Continuous Growth", description: "Stay updated with the latest trends and advancements in tech." },
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
              Ready to Advance Your Tech Skills?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
              Join our tech education programs and stay ahead in the rapidly evolving world of technology.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
              Enroll Now
            </Button>
          </div>
        </div>
      </section>
   </div>
  )
}