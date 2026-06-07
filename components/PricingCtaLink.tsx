"use client";

import Link from "next/link";
import posthog from "posthog-js";
import React from "react";

interface Props {
  href: string;
  className?: string;
  planName: string;
  planPrice: string | number;
  planPopular?: boolean;
  variant: "default" | "compact";
  children: React.ReactNode;
}

export default function PricingCtaLink({
  href,
  className,
  planName,
  planPrice,
  planPopular,
  variant,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        posthog.capture("pricing_cta_clicked", {
          plan_name: planName,
          plan_price: planPrice,
          plan_popular: !!planPopular,
          variant,
        })
      }
    >
      {children}
    </Link>
  );
}
