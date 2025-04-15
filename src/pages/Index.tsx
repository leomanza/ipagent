
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightCircle, Zap, Shield, Coins, LineChart } from "lucide-react";
import Isologo from "@/components/Isologo";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto pt-24 pb-16 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="inline-block mb-4 px-4 py-1 bg-amber-100 rounded-full">
              <span className="text-amber-800 font-medium text-sm">Powered by Meta Pool Multi Chain DAO</span>
            </div>
            
            <div className="mb-6">
              <Isologo size="xl" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              <span className="text-amber-600">Brewing</span> the agentic future of token staking
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              IPAgent simplifies the process of staking IP tokens through conversational AI, 
              powered by the Story Protocol Liquid Staking SDK. Stake your IP tokens to receive stIP and let our agent handle the technical details.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-6 rounded-lg">
                Get Started <ArrowRightCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 font-medium px-6 py-6 rounded-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full blur opacity-75"></div>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-amber-600"></div>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">IPAgent</p>
                  <p className="text-sm text-gray-500">How can I help you today?</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-gray-800">I want to stake my IP tokens</p>
                </div>
                <div className="bg-amber-100 rounded-lg p-3 ml-auto max-w-[80%]">
                  <p className="text-amber-800">I can help you stake your IP tokens! You'll receive stIP tokens in return. How many would you like to stake?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Features Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Craft Intelligence, Unleashed Potential</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our agent harnesses cutting-edge AI with the Meta Pool Story Protocol Liquid Staking SDK - an innovative technology 
            <span className="font-semibold text-amber-600"> built in-house</span> by our dedicated team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-amber-600" />}
            title="Simple Commands"
            description="Stake tokens using natural language — no technical jargon required."
          />
          <FeatureCard 
            icon={<Shield className="h-8 w-8 text-amber-600" />}
            title="Secure Transactions"
            description="Enterprise-grade security for your assets and transactions."
          />
          <FeatureCard
            icon={<Coins className="h-8 w-8 text-amber-600" />}
            title="Liquid Staking"
            description="Receive stIP tokens when you stake your IP tokens, maintaining liquidity while earning rewards."
          />
          <FeatureCard
            icon={<LineChart className="h-8 w-8 text-amber-600" />}
            title="Smart Strategies"
            description="Get personalized staking recommendations based on market conditions."
          />
        </div>
      </section>
      
      {/* How It Works */}
      <section className="bg-amber-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">The Brewing Process</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our process is as simple as enjoying your favorite craft beer.
              Just chat with IPAgent and let us handle the technical details.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="01"
              title="Connect Your Wallet"
              description="Simply connect your wallet to get started. No complicated setup."
            />
            <StepCard
              number="02"
              title="Chat with IPAgent"
              description="Tell our AI what you want to do in plain language. Request to stake your IP tokens and receive stIP in return."
            />
            <StepCard
              number="03" 
              title="Confirm & Earn"
              description="Approve the transaction and start earning staking rewards with your liquid stIP tokens."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="bg-gradient-to-r from-amber-600 to-amber-400 rounded-xl p-8 md:p-12 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to start brewing passive income?</h2>
            <p className="text-amber-50 mb-8">
              Join the Meta Pool community of IP token stakers who are simplifying their crypto journey with IPAgent. Stake IP, receive stIP, and earn rewards.
            </p>
            <Button className="bg-white text-amber-600 hover:bg-amber-50 font-medium px-8 py-6 rounded-lg text-lg">
              Launch IPAgent
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <Isologo size="md" className="text-white" />
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-400">Twitter</a>
              <a href="#" className="hover:text-amber-400">Discord</a>
              <a href="#" className="hover:text-amber-400">GitHub</a>
              <a href="#" className="hover:text-amber-400">Documentation</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm">
            <p>© 2025 IPAgent. Brewing the agentic future. All rights reserved.</p>
            <p className="mt-2">Powered by <a href="#" className="text-amber-400 hover:underline">Meta Pool</a> using the <a href="https://github.com/leomanza/metapool-story-liquid-staking-sdk" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">Story Protocol Liquid Staking SDK</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};

// Step Card Component
const StepCard = ({ number, title, description }: { number: string, title: string, description: string }) => {
  return (
    <div className="text-center p-6">
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-600 text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Index;
