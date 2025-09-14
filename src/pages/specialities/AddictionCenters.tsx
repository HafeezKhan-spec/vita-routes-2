import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AddictionCenters = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Marketing for Addiction Centers</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Compassionate Marketing for Addiction Treatment Centers
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                We specialize in sensitive, ethical marketing strategies for addiction treatment centers, 
                helping you reach those in need while maintaining the highest standards of care and compliance.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Our Approach:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Compassionate messaging</li>
                    <li>• Crisis intervention support</li>
                    <li>• Family-focused content</li>
                    <li>• Recovery success stories</li>
                    <li>• Educational resources</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Compliance Focus:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• HIPAA regulations</li>
                    <li>• State licensing requirements</li>
                    <li>• Ethical advertising standards</li>
                    <li>• Patient confidentiality</li>
                    <li>• Insurance verification</li>
                  </ul>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Help More Patients
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddictionCenters;