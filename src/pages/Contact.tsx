import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            Contact Us
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-medical-gray mb-8">
                Ready to transform your healthcare practice's digital presence? 
                Contact us today for a free consultation and discover how we can 
                help you achieve your patient growth goals.
              </p>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="practice">Practice Name</Label>
                      <Input id="practice" placeholder="Your practice or clinic name" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your marketing goals..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Schedule a Call
              </h2>
              
              <Card className="shadow-soft mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Free Strategy Consultation
                  </h3>
                  <p className="text-medical-gray mb-4">
                    Book a 30-minute strategy call with our healthcare marketing experts.
                  </p>
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                    BOOK A CALL
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="bg-medical-gray-light p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-medical-gray">contact@advanceedge.com</p>
                </div>
                
                <div className="bg-medical-gray-light p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                  <p className="text-medical-gray">+1 (555) 123-4567</p>
                </div>
                
                <div className="bg-medical-gray-light p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                  <p className="text-medical-gray">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;