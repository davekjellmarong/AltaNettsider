"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (formdata: FormData) => {
  const firstname = formdata.get("firstname") as string;
  const email = formdata.get("email") as string;
  const message = formdata.get("message") as string;

  await resend.emails.send({
    from: "AltaNettsider <noreply@altanettsider.no>",
    to: "kontakt@altanettsider.no",
    subject: `Ny henvendelse fra ${firstname}`,
    html: `
      <h2>Ny kontaktforespørsel fra AltaNettsider</h2>
      <p><strong>Navn:</strong> ${firstname}</p>
      <p><strong>E-post:</strong> ${email}</p>
      <p><strong>Melding:</strong></p>
      <p>${message}</p>
    `,
  });
};
