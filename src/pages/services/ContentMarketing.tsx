import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContentMarketing = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Content Marketing</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Educate and Engage Patients with Quality Content
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                Our medical content marketing services help healthcare providers establish authority, 
                educate patients, and drive organic traffic through high-quality, medically accurate content.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Content Types:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Medical blog articles</li>
                    <li>• Patient education guides</li>
                    <li>• Health newsletters</li>
                    <li>• Video content</li>
                    <li>• Infographics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Focus Areas:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Medical accuracy</li>
                    <li>• Patient-friendly language</li>
                    <li>• SEO optimization</li>
                    <li>• Compliance standards</li>
                    <li>• Engagement metrics</li>
                  </ul>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Plan Content Strategy
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentMarketing;