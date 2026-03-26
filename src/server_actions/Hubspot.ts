"use server";

import { HubSpotMethods } from "../queryFactory/HubSpot";

const hubspotApiKey = String(process.env.HUBSPOT_TOKEN);
export const addCompanyToHubspot = async (formdata: FormData) => {
  const payload = {
    properties: {
      name: formdata.get("companyName"),
      phone: formdata.get("phone"),
      address: formdata.get("address"),
      city: formdata.get("city"),
      zip: formdata.get("postalCode"),
      country: "Norway",
      website: formdata.get("website"),
    },
  };
  const response = await HubSpotMethods.addCompany(payload, hubspotApiKey);
  return response;
};

export const addContactToHubspot = async (formdata: FormData) => {
  const payload = {
    properties: {
      firstname: formdata.get("firstname"),
      email: formdata.get("email"),
      message: formdata.get("message"),
    },
  };
  const response = await HubSpotMethods.addContact(payload, hubspotApiKey);
  return response;
};
