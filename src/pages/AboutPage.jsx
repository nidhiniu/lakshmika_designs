import { story as defaultStory } from "../data/siteContent";

export default function AboutPage({ story = defaultStory, about }) {
  const aboutContent = about || {
    intro:
      "Lakshmika Designs is a boutique destination for jewellery, sarees, and dresses designed for elegant everyday wear and special celebrations.",
    body: story.body,
    outro:
      "We work closely with trusted makers and weavers, and every product is selected for quality, comfort, and timeless style.",
  };

  return (
    <section className="py-14 px-6 md:px-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            About Us
          </h1>
          <p className="text-gray-700 mb-4 leading-relaxed">{aboutContent.intro}</p>
          <p className="text-gray-700 mb-4 leading-relaxed">{aboutContent.body}</p>
          <p className="text-gray-700 leading-relaxed">{aboutContent.outro}</p>
        </div>

        <div className="aspect-[4/5] overflow-hidden bg-white border border-[#EFE4DA]">
          <img src={story.image} alt={story.imageAlt} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
