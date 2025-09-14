import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SkinClinics = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Marketing for Skin Clinics</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Beautiful Marketing for Dermatology and Aesthetic Practices
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                We help dermatology and aesthetic practices showcase their expertise in both medical 
                skin care and cosmetic procedures, attracting patients seeking healthy, beautiful skin.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Treatment Areas:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Medical dermatology</li>
                    <li>• Cosmetic procedures</li>
                    <li>• Acne treatment</li>
                    <li>• Anti-aging solutions</li>
                    <li>• Skin cancer screening</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Visual Marketing:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Before/after photography</li>
                    <li>• Treatment videos</li>
                    <li>• Skin care education</li>
                    <li>• Product recommendations</li>
                    <li>• Seasonal skin tips</li>
                  </ul>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Enhance Beauty Marketing
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkinClinics;