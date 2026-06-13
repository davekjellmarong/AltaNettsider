"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { sendContactEmail } from "@/src/server_actions/sendEmail";
import { toast } from "sonner";
import posthog from "posthog-js";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: FormData) => {
      posthog.capture("contact_form_submitted", {
        has_email: !!formData.get("email"),
        message_length: (formData.get("message") as string)?.length ?? 0,
      });
      const email = formData.get("email") as string | null;
      if (email) {
        posthog.identify(email, { email });
      }
      return sendContactEmail(formData);
    },
    onSuccess: () => {
      posthog.capture("contact_form_success");
      toast.success("Takk! Jeg svarer innen 24 timer 🚀", {
        description: "Hold øye med innboksen din – forslaget kommer snart!",
      });
    },
    onError: (error) => {
      posthog.capture("contact_form_error", {
        error_message: error instanceof Error ? error.message : String(error),
      });
      toast.error("Ops, noe gikk galt. Prøv igjen eller ring meg direkte!");
      console.log(error);
    },
  });

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Kontakt
          </span>
          <h1 className="mt-4 text-balance text-5xl font-extrabold tracking-tighter md:text-6xl">
            La oss starte en samtale.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Klar for å se hvordan nettsiden deres kan se ut? La meg sende deg
            et gratis forslag innen 24 timer.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Form */}
          <div className="glass rounded-3xl p-8 md:p-10">
            <h2 className="mb-2 text-xl font-bold">Send meg en melding</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Svar innen 24 timer · uforpliktende
            </p>
            <form action={mutate} className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="firstname"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Navn
                </label>
                <Input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="Ditt navn"
                  required
                  className="border-white/10 bg-white/[0.03] text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-accent"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  E-post
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="din@email.no"
                  required
                  className="border-white/10 bg-white/[0.03] text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-accent"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Melding
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Fortell meg om bedriften din og hva slags nettside du trenger..."
                  required
                  className="min-h-[140px] border-white/10 bg-white/[0.03] text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-accent"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-tight text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-60 shadow-[0_10px_40px_-10px_color-mix(in_oklab,hsl(var(--accent))_50%,transparent)]"
              >
                {isPending ? (
                  "Sender..."
                ) : (
                  <>
                    Send gratis forespørsel
                    <ArrowRight className="size-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Direct contact */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-8 md:p-10">
              <h2 className="mb-6 text-xl font-bold">Kontakt meg direkte</h2>

              <div className="space-y-5">
                <a
                  href="mailto:kontakt@altanettsider.no"
                  onClick={() =>
                    posthog.capture("contact_email_clicked", {
                      location: "contact_section",
                    })
                  }
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.05]"
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-accent/10">
                    <Mail className="size-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      E-post
                    </div>
                    <div className="text-sm">kontakt@altanettsider.no</div>
                  </div>
                </a>

                <a
                  href="tel:+4746807041"
                  onClick={() =>
                    posthog.capture("contact_phone_clicked", {
                      location: "contact_section",
                    })
                  }
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.05]"
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-accent/10">
                    <Phone className="size-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Telefon
                    </div>
                    <div className="text-sm">+47 468 07 041</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-accent/10">
                    <MapPin className="size-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Lokasjon
                    </div>
                    <div className="text-sm">Myrveien 18B, 9511 Alta</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="size-2 animate-pulse rounded-full bg-accent" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    Vanligvis online
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Jeg svarer som regel innen 24 timer, og du får alltid en
                  ærlig vurdering av om jeg kan hjelpe deg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
