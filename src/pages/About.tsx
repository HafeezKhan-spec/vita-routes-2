import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            About Advance Edge
          </h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Leading Healthcare Marketing Excellence
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                At Advance Edge, we specialize in providing comprehensive digital marketing solutions 
                exclusively for healthcare providers. Our team understands the unique challenges and 
                regulations that medical practices face in today's digital landscape.
              </p>
              <p className="text-medical-gray leading-relaxed">
                With years of experience in healthcare marketing, we've helped hundreds of medical 
                practices, clinics, and hospitals grow their patient base while maintaining strict 
                HIPAA compliance and ethical marketing standards.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Our Mission
                </h3>
                <p className="text-medical-gray">
                  To empower healthcare providers with cutting-edge marketing strategies that 
                  drive patient growth while maintaining the highest standards of compliance 
                  and professionalism.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Why Choose Us
                </h3>
                <p className="text-medical-gray">
                  We combine deep healthcare industry knowledge with proven digital marketing 
                  expertise to deliver results that matter - more qualified patients and 
                  sustainable practice growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;