import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WebsiteDesign = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Website Design</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                HIPAA-Compliant Websites That Convert Visitors Into Patients
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                Our healthcare website design services create professional, user-friendly websites 
                that comply with HIPAA regulations while effectively converting visitors into patients.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Design Features:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• HIPAA compliance</li>
                    <li>• Mobile responsive design</li>
                    <li>• Patient portal integration</li>
                    <li>• Online appointment booking</li>
                    <li>• Secure contact forms</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Technical Specs:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Fast loading speeds</li>
                    <li>• SEO optimization</li>
                    <li>• SSL security</li>
                    <li>• Analytics integration</li>
                    <li>• Content management system</li>
                  </ul>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Design My Website
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesign;