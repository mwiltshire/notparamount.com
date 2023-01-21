import { Document } from '@contentful/rich-text-types';

const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const ENV = 'master';
const ENTRY_ID = '7buwq7juSFdNN77VGugFQh';
const TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENV}/entries/${ENTRY_ID}?access_token=${TOKEN}`;

export interface SiteContent {
  siteHeading: string;
  siteSubheading: string;
  contactCta: string;
  servicesHeading: string;
  servicesDrumTracking: Document;
  servicesProduction: Document;
  servicesMixingMastering: Document;
  servicesAudioEditing: Document;
  audioHeading: string;
  audioContent: Document;
  aboutHeading: string;
  aboutContent: Document;
  gearHeading: string;
  gearInstruments: string;
  gearKeys: string;
  gearMicrophones: string;
  gearMonitoring: string;
  gearPreamps: string;
  gearRecordingSystem: string;
  preampsGearList: string[];
  recordingSystemGearList: string[];
  monitoringGearList: string[];
  microphonesGearList: string[];
  keysGearList: string[];
  instrumentsGearList: string[];
  effectsGearList: string[];
  drumscymbalsGearList: string[];
  gearDrumsCymbals: string;
  gearEffects: string;
  contactHeading: string;
}

export async function fetchContent(): Promise<SiteContent> {
  try {
    const res = await fetch(CONTENTFUL_URL);

    if (!res.ok) {
      throw new Error(`Error status from Contentful API: ${res.status}.`);
    }

    const json = await res.json();

    if (!json.fields) {
      throw new Error('Contentful API returned `null`.');
    }

    return json.fields;
  } catch (e) {
    const message =
      e instanceof Error
        ? e.message
        : 'Unknown error fetching from Contentful.';
    throw new Error(message);
  }
}
