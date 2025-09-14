import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Chiropractors = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Marketing for Chiropractors</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Grow Your Chiropractic Practice with Targeted Marketing
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                Our specialized marketing strategies help chiropractors attract new patients, 
                educate the community about chiropractic care, and build long-term patient relationships.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Marketing Focus:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Local SEO optimization</li>
                    <li>• Pain relief content</li>
                    <li>• Wellness education</li>
                    <li>• Patient testimonials</li>
                    <li>• Injury prevention tips</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Target Conditions:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Back pain relief</li>
                    <li>• Neck pain treatment</li>
                    <li>• Sports injuries</li>
                    <li>• Auto accident recovery</li>
                    <li>• Posture correction</li>
                  </ul>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Grow Practice
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chiropractors;