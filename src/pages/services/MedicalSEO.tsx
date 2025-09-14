import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MedicalSEO = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Medical SEO Services</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Dominate Local Medical Search Results
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                Our specialized medical SEO services help healthcare providers rank higher in search 
                results, attract more qualified patients, and build online authority in their medical specialty.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">What We Offer:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Local SEO optimization</li>
                    <li>• Medical keyword research</li>
                    <li>• HIPAA-compliant content creation</li>
                    <li>• Technical SEO audits</li>
                    <li>• Google My Business optimization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Benefits:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Increased patient inquiries</li>
                    <li>• Higher search rankings</li>
                    <li>• Better online visibility</li>
                    <li>• Improved website traffic</li>
                    <li>• Enhanced credibility</li>
                  </ul>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get SEO Analysis
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MedicalSEO;