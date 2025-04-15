
import React from "react";
import { MessageCircle, Droplets, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface IsologoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "default" | "ring" | "bubble";
}

const Isologo = ({ size = "md", className, variant = "default" }: IsologoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {variant === "default" && (
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full blur opacity-75"></div>
          <div className="relative bg-amber-600 text-white p-2 rounded-full flex items-center justify-center">
            <div className="absolute">
              <Droplets className={cn("text-amber-100 opacity-80", sizeClasses[size])} />
            </div>
            <Zap className={cn("relative z-10", sizeClasses[size])} />
          </div>
        </div>
      )}
      
      {variant === "ring" && (
        <div className="relative">
          {/* Outer ring to simulate conversation */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full opacity-75"></div>
          <div className="absolute -inset-1 bg-white rounded-full"></div>
          
          {/* Inner circle with droplet and zap */}
          <div className="relative bg-amber-600 text-white p-2 rounded-full flex items-center justify-center">
            <div className="absolute">
              <Droplets className={cn("text-amber-100 opacity-80", sizeClasses[size])} />
            </div>
            <Zap className={cn("relative z-10", sizeClasses[size])} />
          </div>
        </div>
      )}
      
      {variant === "bubble" && (
        <div className="relative">
          {/* Message bubble shape */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full blur opacity-75"></div>
          <div className="relative bg-white border-2 border-amber-600 p-1 rounded-full flex items-center justify-center">
            <MessageCircle className={cn("text-amber-600", sizeClasses[size])} />
            <div className="absolute bottom-0 right-0 bg-amber-600 rounded-full p-1">
              <Zap className={cn("text-white", size === "sm" ? "text-xs" : size === "md" ? "text-sm" : size === "lg" ? "text-base" : "text-lg")} />
            </div>
          </div>
        </div>
      )}
      
      <div className={cn("font-bold tracking-tight", sizeClasses[size])}>
        <span className="text-amber-600">IP</span>
        <span className="text-gray-900">Agent</span>
      </div>
    </div>
  );
};

export default Isologo;
