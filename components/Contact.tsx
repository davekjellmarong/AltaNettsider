"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { addContactToHubspot } from "@/src/server_actions/Hubspot";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: addContactToHubspot,
    onSuccess: () => {
      toast.success("Allt godt!"); 
      // router.push("/tilbud/takk");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  return (
    <section id="contact" className="section bg-alta-blue">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-4">Kontakt</h2>
          <p className="text-alta-blue-light max-w-2xl mx-auto text-lg">
            Klar for å se hvordan nettsiden deres kan se ut? Jeg sender deg et gratis forslag uten forpliktelser.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-alta-dark mb-6">Send meg en melding</h3>
            <form action={mutate} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Navn
                  </label>
                  <Input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="Ditt navn"
                    className="w-full"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    E-post
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="din@email.no"
                    className="w-full"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Melding
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Fortell meg om bedriften din og hva slags nettside du trenger..."
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-alta-blue hover:bg-alta-blue/90 text-white py-3 text-lg font-medium"
              >
                {isPending ? "Sender..." : "Send gratis forespørsel"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Kontakt meg direkte</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">E-post</p>
                    <a href="mailto:dave@altanettsider.no" className="text-alta-blue-light hover:text-white transition-colors">
                      dave@altanettsider.no
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Telefon</p>
                    <a href="tel:+4741234567" className="text-alta-blue-light hover:text-white transition-colors">
                      +47 412 34 567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Lokasjon</p>
                    <p className="text-alta-blue-light">Alta, Finnmark</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-alta-blue-light text-sm">
                  Jeg svarer som regel innen 24 timer, og du får alltid en ærlig vurdering av om jeg kan hjelpe deg.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-alta-dark mb-4">
                Kontaktinformasjon
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-alta-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">Adresse</p>
                    <p className="text-gray-600">Markedsgata 3, 9510 Alta</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-alta-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">E-post</p>
                    <p className="text-gray-600">kontakt@altanettsider.no</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-alta-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">Telefon</p>
                    <p className="text-gray-600">+47 123 45 678</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-alta-dark mb-4">
                Åpningstider
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Mandag - Fredag</span>
                  <span className="text-gray-700 font-medium">
                    09:00 - 17:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lørdag</span>
                  <span className="text-gray-700 font-medium">Stengt</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Søndag</span>
                  <span className="text-gray-700 font-medium">Stengt</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44082.55487039007!2d23.21966611345908!3d69.96886783532798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45cf4b5b0664dd19%3A0x7851433247fdba16!2sAlta!5e0!3m2!1sen!2sno!4v1650000000000!5m2!1sen!2sno"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Alta map"
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
