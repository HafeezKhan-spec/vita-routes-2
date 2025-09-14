import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const EyeClinics = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Marketing for Eye Clinics</h1>
          
          <Card className="shadow-soft mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Clear Vision for Your Ophthalmology Practice Growth
              </h2>
              <p className="text-medical-gray leading-relaxed mb-6">
                We help eye care professionals attract patients seeking comprehensive vision care, 
                from routine eye exams to specialized surgical procedures.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Services We Promote:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Comprehensive eye exams</li>
                    <li>• LASIK surgery</li>
                    <li>• Cataract treatment</li>
                    <li>• Glaucoma management</li>
                    <li>• Retinal care</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Marketing Strategies:</h3>
                  <ul className="text-medical-gray space-y-2">
                    <li>• Educational content</li>
                    <li>• Before/after showcases</li>
                    <li>• Technology highlights</li>
                    <li>• Insurance coordination</li>
                    <li>• Community outreach</li>
                  </ul>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Improve Visibility
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EyeClinics;