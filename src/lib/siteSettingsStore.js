import { brand, hero, story } from "../data/siteContent";

const defaultSettings = {
  brand,
  hero,
  story,
  about: {
    intro:
      "Lakshmika Designs is a boutique destination for jewellery, sarees, and dresses designed for elegant everyday wear and special celebrations.",
    body: story.body,
    outro:
      "We work closely with trusted makers and weavers, and every product is selected for quality, comfort, and timeless style.",
  },
};

function normalizeSettings(data) {
  return {
    brand: {
      ...defaultSettings.brand,
      ...(data?.brand || {}),
    },
    hero: {
      ...defaultSettings.hero,
      ...(data?.hero || {}),
    },
    story: {
      ...defaultSettings.story,
      ...(data?.story || {}),
    },
    about: {
      ...defaultSettings.about,
      ...(data?.about || {}),
    },
  };
}

export async function loadSiteSettings() {
  try {
    const response = await fetch("/data/site-settings.json", { cache: "no-store" });
    if (!response.ok) {
      return normalizeSettings({});
    }

    const parsed = await response.json();
    return normalizeSettings(parsed);
  } catch (error) {
    return normalizeSettings({});
  }
}

export { defaultSettings };
