
import React from 'react';
import IPAgentLogo from '@/components/IPAgentLogo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LogoShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">IPAgent Logo Options</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <LogoCard 
            title="Conversation Variant" 
            description="Features wave lines to represent conversation with the agent"
            variant="conversation"
          />
          
          <LogoCard 
            title="Coaster Variant" 
            description="Designed like a drink coaster with a message bubble"
            variant="coaster"
          />
          
          <LogoCard 
            title="Simple Variant" 
            description="A minimal design with a solid circle accent"
            variant="simple"
          />
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Size Variations</h2>
        <div className="flex flex-wrap items-end gap-8 bg-white p-8 rounded-lg shadow mb-12">
          <div>
            <p className="text-sm text-gray-500 mb-2">Small (30px)</p>
            <IPAgentLogo variant="conversation" size={30} />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Medium (50px)</p>
            <IPAgentLogo variant="conversation" size={50} />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Large (70px)</p>
            <IPAgentLogo variant="conversation" size={70} />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Header Usage</CardTitle>
              <CardDescription>How the logo appears in website header</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-4 rounded flex items-center justify-between border">
                <div className="flex items-center">
                  <IPAgentLogo variant="conversation" size={40} />
                </div>
                <div className="flex gap-4">
                  <span className="text-sm">Features</span>
                  <span className="text-sm">Pricing</span>
                  <span className="text-sm">Contact</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Footer Usage</CardTitle>
              <CardDescription>How the logo appears in website footer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 p-4 rounded flex items-center justify-between">
                <div className="flex items-center">
                  <IPAgentLogo variant="coaster" size={40} className="mr-2" />
                  <span className="text-white">IPAgent</span>
                </div>
                <div className="text-sm text-gray-400">
                  © 2025 IPAgent
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white" onClick={() => window.history.back()}>
            Back to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

const LogoCard = ({ title, description, variant }: { 
  title: string, 
  description: string, 
  variant: 'conversation' | 'coaster' | 'simple' 
}) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-white p-6 rounded-lg flex justify-center items-center h-40 mb-4">
          <IPAgentLogo variant={variant} size={60} />
        </div>
        <div className="bg-gray-100 p-6 rounded-lg flex justify-center items-center h-40">
          <IPAgentLogo variant={variant} size={60} />
        </div>
      </CardContent>
    </Card>
  );
};

export default LogoShowcase;
