'use client';
import { Phone } from '../components/phone/Phone';
import { ArrowRight, CheckCircle, Clock, Shield, Star, Car, Menu, X, Download, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';

// Button Component
function Button({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default', 
  onClick,
  ...props 
}) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
  };
  
  const sizes = {
    default: 'h-10 py-2 px-4',
    lg: 'h-11 px-8',
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

// Card Component
function Card({ 
  children, 
  className = '',
  ...props 
}) {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
    

      {/* Partner Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 pt-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let s become
              <span className="block text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
                partners
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our platform in three simple steps and start earning money today
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-orange-500 to-red-600 transform -translate-x-1/2 z-0"></div>
            
            {/* Timeline Dots */}
          

            {/* Registration Step */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 relative z-20">
              <div className="order-2 lg:order-1">
                <Phone className="w-80" bg="red" >
                  <div className="p-6 bg-gradient-to-b from-red-600 to-red-500 text-white mt-4">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold">Partner Registration</h3>
                      <p className="text-red-100 text-sm mt-2">Create your driver account</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <div className="bg-white/20 rounded-lg p-3">
                          <span className="text-white/70">John Doe</span>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <div className="bg-white/20 rounded-lg p-3">
                          <span className="text-white/70">+1 (555) 123-4567</span>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <div className="bg-white/20 rounded-lg p-3">
                          <span className="text-white/70">john.doe@email.com</span>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">City</label>
                        <div className="bg-white/20 rounded-lg p-3">
                          <span className="text-white/70">New York</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-white text-red-600 hover:bg-gray-100 font-semibold">
                        Continue
                      </Button>
                    </div>
                  </div>
                </Phone>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Registration</h3>
                </div>
                
                <p className="text-gray-300 text-lg mb-8">
                  Complete your profile with basic information and get started 
                  with our easy registration process. We ll verify your details 
                  and get you onboarded quickly.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Quick 5-minute setup</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Secure verification process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">24/7 support available</span>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white mt-8"
                >
                  Start Registration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Validation Step */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 relative z-20">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Validation</h3>
                </div>
                
                <p className="text-gray-300 text-lg mb-8">
                  Upload your documents and complete the verification process. 
                  Our team will review your application and approve you within 24 hours.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-orange-400" />
                    <span className="text-gray-300">Secure document upload</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-orange-400" />
                    <span className="text-gray-300">Fast 24-hour approval</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400" />
                    <span className="text-gray-300">Background check included</span>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white mt-8"
                >
                  Upload Documents
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div>
                <Phone className="w-80" bg="orange">
                  <div className="p-6 bg-gradient-to-b from-orange-600 to-red-600 text-white mt-4">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold">Document Verification</h3>
                      <p className="text-orange-100 text-sm mt-2">Upload required documents</p>
                    </div>
                    
                    <div className="space-y-4">
                      <Card className="bg-white/20 border-white/20 p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">Driver s License</p>
                            <p className="text-white/70 text-sm">Required</p>
                          </div>
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        </div>
                      </Card>
                      
                      <Card className="bg-white/20 border-white/20 p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">Vehicle Registration</p>
                            <p className="text-white/70 text-sm">Required</p>
                          </div>
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        </div>
                      </Card>
                      
                      <Card className="bg-white/20 border-white/20 p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">Insurance</p>
                            <p className="text-white/70 text-sm">Required</p>
                          </div>
                          <div className="w-5 h-5 border-2 border-white/50 rounded-full"></div>
                        </div>
                      </Card>
                      
                      <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 font-semibold">
                        Upload Documents
                      </Button>
                    </div>
                  </div>
                </Phone>
              </div>
            </div>

            {/* Training Step */}
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-20">
              <div className="order-2 lg:order-1">
                <Phone className="w-80" bg="wine">
                  <div className="p-6 bg-gradient-to-b from-red-700 to-red-600 text-white mt-4 h-full">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold">Training Complete</h3>
                      <p className="text-red-100 text-sm mt-2">Ready to start earning</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Star className="h-8 w-8 text-yellow-400 fill-current" />
                        </div>
                        <p className="text-lg font-semibold">Congratulations!</p>
                        <p className="text-red-100 text-sm">You re now a certified Yassir driver</p>
                      </div>
                      
                      <div className="bg-white/20 rounded-xl p-4 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Safety Training</span>
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">App Navigation</span>
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Customer Service</span>
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Payment Process</span>
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                      </div>
                      
                      <Button className="w-full bg-white text-red-600 hover:bg-gray-100 font-semibold">
                        Start Driving
                      </Button>
                    </div>
                  </div>
                </Phone>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Training</h3>
                </div>
                
                <p className="text-gray-300 text-lg mb-8">
                  Complete our comprehensive training program and get certified. 
                  Learn about safety, customer service, and how to maximize your earnings.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-300">Interactive training modules</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-red-400" />
                    <span className="text-gray-300">Safety certification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-red-400" />
                    <span className="text-gray-300">Ongoing support & resources</span>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white mt-8"
                >
                  View Training
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to start earning?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of drivers who have already transformed their income with Yassir
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto"
            >
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-red-600 text-lg px-8 py-6 h-auto"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-12 text-red-100">
            <p className="text-sm">Available on iOS and Android</p>
          </div>
        </div>
      </section>

 
    </main>
  );
}