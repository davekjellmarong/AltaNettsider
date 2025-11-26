import React from "react";
import Link from "next/link";
import PriceCard from "./PriceCard";
import { PRICING_PLANS } from "@/src/utils/pricing";

const Pricing = () => {
  return (
    <section id="pricing" className="section bg-alta-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-alta-dark mb-4">Pris og løsninger</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparente priser uten skjulte kostnader. Velg løsningen som
            passer din bedrift best.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {PRICING_PLANS.map((plan) => (
            <PriceCard key={plan.id} plan={plan} variant="compact" />
          ))}
        </div>

        <div className="text-center bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-alta-dark mb-4">
            Alle løsninger inkluderer
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-600 mb-6">
            <div className="flex items-center justify-center">
              <svg
                className="w-5 h-5 text-alta-blue mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Domenehjelp
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-5 h-5 text-alta-blue mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Hosting
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-5 h-5 text-alta-blue mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Trygg oppfølging
            </div>
          </div>

          {/* Trust reassurance */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-alta-blue font-medium flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Du betaler ingenting før du har godkjent første forslag.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
