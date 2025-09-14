import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PaidMarketing = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Paid Marketing</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Drive Immediate Results with Targeted Medical Advertising
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                Our healthcare paid marketing services deliver immediate results through strategic 
                advertising campaigns that target qualified patients and drive appointment bookings.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Ad Platforms:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Google Ads</li>
                    <li>• Facebook Ads</li>
                    <li>• Instagram Ads</li>
                    <li>• LinkedIn Ads</li>
                    <li>• YouTube Ads</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Campaign Types:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Search campaigns</li>
                    <li>• Display advertising</li>
                    <li>• Video campaigns</li>
                    <li>• Remarketing</li>
                    <li>• Local campaigns</li>
                  </ul>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Launch Ad Campaign
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaidMarketing;