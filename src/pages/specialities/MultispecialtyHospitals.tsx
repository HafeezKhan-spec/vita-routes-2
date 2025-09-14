import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MultispecialtyHospitals = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Marketing for Multispecialty Hospitals</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Comprehensive Marketing for Large Healthcare Systems
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                We help multispecialty hospitals and health systems market their diverse range of services, 
                coordinate care messaging, and build community trust across multiple medical specialties.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Specialty Areas:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Emergency services</li>
                    <li>• Surgical specialties</li>
                    <li>• Internal medicine</li>
                    <li>• Diagnostic imaging</li>
                    <li>• Rehabilitation services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Marketing Strategy:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Service line marketing</li>
                    <li>• Physician recruitment</li>
                    <li>• Community health events</li>
                    <li>• Quality metrics showcase</li>
                    <li>• Technology demonstrations</li>
                  </ul>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Expand Reach
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MultispecialtyHospitals;