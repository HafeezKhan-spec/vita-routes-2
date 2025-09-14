import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FertilityClinics = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Marketing for Fertility Clinics</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Sensitive Marketing for Fertility and Reproductive Health
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                We understand the emotional journey of fertility treatment and create compassionate, 
                hopeful marketing strategies that connect with couples seeking reproductive care.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Treatment Focus:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• IVF procedures</li>
                    <li>• Egg freezing</li>
                    <li>• Male fertility treatment</li>
                    <li>• Genetic testing</li>
                    <li>• Fertility preservation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Marketing Approach:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Compassionate messaging</li>
                    <li>• Success story sharing</li>
                    <li>• Educational webinars</li>
                    <li>• Support group promotion</li>
                    <li>• Insurance navigation</li>
                  </ul>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Support Families
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FertilityClinics;