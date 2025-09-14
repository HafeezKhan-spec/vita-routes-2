import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroBackground from '@/assets/hero-bg.jpg';

const Home = () => {
  const services = [
    {
      title: 'Medical SEO',
      description: 'Increase your online visibility and attract more patients through strategic search engine optimization.',
    },
    {
      title: 'Social Media Marketing',
      description: 'Build trust and engage with patients through professional social media management.',
    },
    {
      title: 'Content Marketing',
      description: 'Educate and inform patients with high-quality, medically accurate content.',
    },
    {
      title: 'Paid Marketing',
      description: 'Drive immediate results with targeted advertising campaigns for healthcare practices.',
    },
    {
      title: 'Reputation Management',
      description: 'Monitor and improve your online reputation to build patient trust and credibility.',
    },
    {
      title: 'Website Design',
      description: 'Create HIPAA-compliant, user-friendly websites that convert visitors into patients.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-hero min-h-[600px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(210, 230, 255, 0.9), rgba(255, 255, 255, 0.95)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Top Healthcare Marketing Agency
            </h1>
            <h2 className="text-xl md:text-2xl text-medical-gray mb-6">
              Advancing Medical Marketing Services in USA
            </h2>
            <p className="text-lg text-medical-gray mb-8">
              From Click to Appointment, HIPAA-Aware Patient Growth for Clinics and Hospitals.
            </p>
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-3"
            >
              BOOK A CALL
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-medical-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Healthcare Marketing Services
            </h2>
            <p className="text-lg text-medical-gray max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed specifically for healthcare providers, 
              ensuring HIPAA compliance and patient-focused strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-medical-gray leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Grow Your Healthcare Practice?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Partner with us to implement proven marketing strategies that drive patient acquisition 
            while maintaining the highest standards of healthcare compliance.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-3"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;