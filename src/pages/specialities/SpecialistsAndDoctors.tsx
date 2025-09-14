import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SpecialistsAndDoctors = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Marketing for Specialists and Doctors</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Specialized Marketing for Medical Specialists
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                We help medical specialists and individual practitioners build their reputation, 
                attract referrals, and connect with patients seeking specialized medical care.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Specialist Areas:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Cardiology</li>
                    <li>• Orthopedics</li>
                    <li>• Neurology</li>
                    <li>• Gastroenterology</li>
                    <li>• Endocrinology</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Marketing Focus:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Professional credibility</li>
                    <li>• Referral relationship building</li>
                    <li>• Patient education</li>
                    <li>• Condition-specific content</li>
                    <li>• Treatment innovation showcase</li>
                  </ul>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Build Specialist Practice
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SpecialistsAndDoctors;