import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MarketingAutomation = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Marketing Automation</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Streamline Patient Communication with Smart Automation
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                Our healthcare marketing automation services help medical practices nurture patient 
                relationships, improve communication efficiency, and increase appointment bookings through 
                intelligent automation workflows.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Automation Features:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Email drip campaigns</li>
                    <li>• Appointment reminders</li>
                    <li>• Follow-up sequences</li>
                    <li>• Patient onboarding</li>
                    <li>• Review requests</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Benefits:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Reduced no-shows</li>
                    <li>• Improved patient retention</li>
                    <li>• Increased efficiency</li>
                    <li>• Better patient engagement</li>
                    <li>• HIPAA-compliant communication</li>
                  </ul>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Automate Marketing
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MarketingAutomation;