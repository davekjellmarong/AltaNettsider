import React from "react";
import { Check } from "lucide-react";
import PricingCtaLink from "@/components/PricingCtaLink";
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
  const popular = !!plan.popular;

  return (
    <div
      className={`glass relative flex h-full flex-col rounded-2xl p-8 ${
        popular ? "glow-accent border-accent/30 bg-accent/[0.03]" : ""
      } ${className}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-foreground">
            Mest populær
          </span>
        </div>
      )}

      <div className="mb-6">
        <div
          className={`mb-4 flex size-12 items-center justify-center rounded-full ${
            popular ? "bg-accent/20" : "bg-white/[0.04]"
          }`}
        >
          <IconComponent
            className={`size-5 ${popular ? "text-accent" : "text-foreground"}`}
          />
        </div>
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold tracking-tight">
            {plan.price}
          </span>
          <span className="font-mono text-xs text-muted-foreground">kr</span>
        </div>
        {plan.deliveryTime && (
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Leveringstid: {plan.deliveryTime}
          </p>
        )}
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <Check
              className={`mt-0.5 size-4 shrink-0 ${
                feature.highlight ? "text-accent" : "text-accent/70"
              }`}
            />
            <span
              className={
                feature.highlight
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              }
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <PricingCtaLink
        href={plan.ctaLink || "/kontakt"}
        planName={plan.name}
        planPrice={plan.price}
        planPopular={popular}
        variant={variant}
        className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-colors ${
          popular
            ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_10px_40px_-10px_color-mix(in_oklab,hsl(var(--accent))_50%,transparent)]"
            : "border border-border bg-transparent text-foreground hover:bg-white/5"
        }`}
      >
        {plan.buttonText || "Velg denne"}
      </PricingCtaLink>
    </div>
  );
}
