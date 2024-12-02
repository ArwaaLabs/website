'use client';

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Braces, Code, Lock, Coins } from "lucide-react";

export default function BlockchainSolutions() {
  const [clientWidth, setClientWidth] = React.useState(null);

  React.useEffect(() => {
    // Safe use of window object inside useEffect
    setClientWidth(window.innerWidth);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 bg-opacity-95 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Braces className="h-16 w-16 text-purple-400" />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Blockchain Solutions
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
              Revolutionize your business with cutting-edge Blockchain technology
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full py-12 bg-gray-800 bg-opacity-95 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our Blockchain Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Smart Contract Development", description: "Create secure and efficient smart contracts for various Blockchain platforms." },
              { icon: Lock, title: "Decentralized Applications (DApps)", description: "Build robust and scalable decentralized applications for Web3." },
              { icon: Coins, title: "Tokenization Services", description: "Develop and launch custom tokens for your business or project." },
              { icon: Braces, title: "Blockchain Integration", description: "Seamlessly integrate Blockchain technology into your existing systems." },
              { icon: Code, title: "Consensus Mechanism Design", description: "Design and implement custom consensus mechanisms for your Blockchain network." },
              { icon: Lock, title: "Blockchain Security Audits", description: "Comprehensive security audits to ensure the integrity of your Blockchain solutions." },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-800 border border-purple-500 hover:border-pink-500 transition-all duration-300"
              >
                <CardHeader>
                  <service.icon className="h-10 w-10 text-purple-400 mb-2" />
                  <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 bg-opacity-95 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Why Choose Our Blockchain Solutions?
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Braces className="h-5 w-5 text-purple-400" />
                  <span>Expert team with years of Blockchain experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Braces className="h-5 w-5 text-purple-400" />
                  <span>Customized solutions tailored to your business needs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Braces className="h-5 w-5 text-purple-400" />
                  <span>Cutting-edge technology and best practices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Braces className="h-5 w-5 text-purple-400" />
                  <span>Comprehensive support and maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Braces className="h-5 w-5 text-purple-400" />
                  <span>Seamless integration with existing systems</span>
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 mt-4">
                Learn More
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                alt="Blockchain Technology"
                src="/BlockTech.png"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg border-2 border-purple-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="w-full py-12 bg-gray-800 bg-opacity-95 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our Blockchain Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Requirement Analysis", description: "We work closely with you to understand your specific needs and goals." },
              { step: 2, title: "Solution Design", description: "Our experts design a tailored Blockchain solution to meet your requirements." },
              { step: 3, title: "Development & Testing", description: "We develop and rigorously test the solution to ensure reliability and security." },
              { step: 4, title: "Deployment & Support", description: "We deploy the solution and provide ongoing support and maintenance." },
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
              Ready to Transform Your Business with Blockchain?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
              Let's discuss how our Blockchain solutions can revolutionize your operations and drive innovation.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
