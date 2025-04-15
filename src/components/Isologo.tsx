
import React from "react";
import { Droplets, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface IsologoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Isologo = ({ size = "md", className }: IsologoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full blur opacity-75"></div>
        <div className="relative bg-amber-600 text-white p-2 rounded-full flex items-center justify-center">
          <div className="absolute">
            <Droplets className={cn("text-amber-100 opacity-80", sizeClasses[size])} />
          </div>
          <Zap className={cn("relative z-10", sizeClasses[size])} />
        </div>
      </div>
      <div className={cn("font-bold tracking-tight", sizeClasses[size])}>
        <span className="text-amber-600">IP</span>
        <span className="text-gray-900">Agent</span>
      </div>
    </div>
  );
};

export default Isologo;
