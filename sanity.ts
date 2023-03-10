import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2022-11-16"

export const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	apiVersion: "2022-11-16",
	useCdn: process.env.NODE_ENV !== "production",
};


export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
	createImageUrlBuilder(config).image(source);
