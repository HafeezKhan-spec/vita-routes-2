import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const DentalClinics = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Marketing for Dental Clinics</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Smile-Worthy Marketing for Dental Practices
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                We help dental practices attract new patients, promote preventive care, and showcase 
                cosmetic procedures while building trust in the local community.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Services We Promote:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• General dentistry</li>
                    <li>• Cosmetic procedures</li>
                    <li>• Orthodontics</li>
                    <li>• Oral surgery</li>
                    <li>• Pediatric dentistry</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Marketing Tactics:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Before/after galleries</li>
                    <li>• Family-friendly content</li>
                    <li>• Preventive care education</li>
                    <li>• New patient specials</li>
                    <li>• Technology showcases</li>
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

export default DentalClinics;