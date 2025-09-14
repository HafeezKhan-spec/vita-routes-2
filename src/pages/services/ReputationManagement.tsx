import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ReputationManagement = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Reputation Management</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Protect and Enhance Your Medical Practice's Online Reputation
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                Our healthcare reputation management services help medical practices monitor, 
                manage, and improve their online reputation to build patient trust and credibility.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Our Services:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Online review monitoring</li>
                    <li>• Review response management</li>
                    <li>• Patient feedback systems</li>
                    <li>• Crisis communication</li>
                    <li>• Reputation reporting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Platforms Monitored:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Google Reviews</li>
                    <li>• Healthgrades</li>
                    <li>• Vitals</li>
                    <li>• Yelp</li>
                    <li>• Facebook Reviews</li>
                  </ul>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Monitor Reputation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReputationManagement;