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
      lastname: formdata.get("lastname"),
      email: formdata.get("email"),
      topic: formdata.get("topic"),
      message: formdata.get("message"),
    },
  };
  // const payload = {
  //   properties: { ...formdata },
  // };
  console.log(payload);
  const response = await HubSpotMethods.addContact(payload, hubspotApiKey);
  return response;
};
