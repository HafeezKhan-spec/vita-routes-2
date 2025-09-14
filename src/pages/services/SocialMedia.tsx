import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SocialMedia = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Social Media Marketing</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Build Trust Through Professional Social Media
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                Our healthcare social media marketing services help medical practices build meaningful 
                connections with patients while maintaining professionalism and HIPAA compliance.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Services Include:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Content strategy development</li>
                    <li>• HIPAA-compliant posting</li>
                    <li>• Patient education content</li>
                    <li>• Community management</li>
                    <li>• Social media advertising</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Platforms:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Facebook</li>
                    <li>• Instagram</li>
                    <li>• LinkedIn</li>
                    <li>• YouTube</li>
                    <li>• Twitter</li>
                  </ul>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Social Strategy
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;