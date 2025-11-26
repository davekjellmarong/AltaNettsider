import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { PricingPlan } from "@/src/utils/pricing";

interface PriceCardProps {
  plan: PricingPlan;
  variant?: "default" | "compact";
  className?: string;
}

export default function PriceCard({
  plan,
  variant = "default",
  className = "",
}: PriceCardProps) {
  const IconComponent = plan.icon;

  if (variant === "compact") {
    // Simplified version for homepage/landing pages
    return (
      <div
        className={`relative bg-white rounded-xl p-8 transition-all duration-300 border-2 ${
          plan.popular
            ? "border-alta-blue shadow-2xl shadow-alta-blue/25 transform hover:scale-105"
            : "border-gray-100 hover:border-alta-blue/30 shadow-lg hover:shadow-xl"
        } ${className}`}
      >
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-alta-blue to-alta-blue-light text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-r from-alta-blue to-alta-blue-light rounded-full blur opacity-75"></div>
              <span className="relative">⭐ Mest populær</span>
            </div>
          </div>
        )}

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-alta-dark mb-2">
            {plan.name}
          </h3>
          <div className="mb-4">
            <span className="text-4xl font-bold text-alta-blue">
              {plan.price}
            </span>
            <span className="text-gray-600"> kr</span>
          </div>
          <p className="text-gray-600">{plan.description}</p>
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start">
              <div className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0">
                <Check className="w-4 h-4 text-alta-blue" />
              </div>
              <span
                className={`text-gray-700 ${
                  feature.highlight ? "font-semibold" : ""
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={plan.ctaLink || "/#contact"}
          className={`block w-full text-center py-3 px-6 rounded-md font-medium transition-colors ${
            plan.popular
              ? "bg-alta-blue text-white hover:bg-alta-blue/90"
              : "bg-alta-white text-alta-dark border border-alta-blue hover:bg-alta-gray"
          }`}
        >
          {plan.buttonText || "Velg denne"}
        </Link>
      </div>
    );
  }

  // Full version for pricing page
  return (
    <Card
      className={`relative ${
        plan.popular
          ? "border-alta-blue ring-2 ring-alta-blue/20 scale-105"
          : "border-gray-200"
      } hover:shadow-lg transition-all duration-300 ${className}`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-alta-blue text-white px-4 py-1">
            Mest populær
          </Badge>
        </div>
      )}

      <CardHeader className="text-center pb-6">
        <div
          className={`w-16 h-16 rounded-full ${
            plan.popular ? "bg-alta-blue" : "bg-gray-100"
          } flex items-center justify-center mx-auto mb-4`}
        >
          <IconComponent
            className={`h-8 w-8 ${
              plan.popular ? "text-white" : "text-alta-blue"
            }`}
          />
        </div>
        <CardTitle className="text-2xl font-bold text-alta-dark">
          {plan.name}
        </CardTitle>
        <CardDescription className="text-gray-600 mt-2">
          {plan.description}
        </CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold text-alta-dark">
            {plan.price}
          </span>
          <span className="text-gray-500 ml-2">kr</span>
        </div>
        {plan.deliveryTime && (
          <p className="text-sm text-gray-500 mt-2">
            Leveringstid: {plan.deliveryTime}
          </p>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span
                className={`text-gray-600 text-sm ${
                  feature.highlight ? "font-semibold text-alta-blue" : ""
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className={`w-full ${
            plan.popular
              ? "bg-alta-blue hover:bg-alta-blue/90"
              : "bg-gray-900 hover:bg-gray-800"
          }`}
        >
          <Link href={plan.ctaLink || "/#contact"}>
            {plan.buttonText || "Velg denne"}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
