import { story as defaultStory } from "../data/siteContent";

export default function Story({ story = defaultStory }) {
  return (
    <section id="story" className="py-24 px-6 md:px-12 bg-[#F9F5F0]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-square overflow-hidden rounded-tl-[100px]">
            <img
              src={story.image}
              alt={story.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          {/* decorative border */}
          <div
            className="absolute -bottom-8 -right-8 w-48 h-48 border-2 -z-10"
            style={{ borderColor: "rgba(197,160,127,0.3)" }}
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <span
              className="material-symbols-outlined text-xl"
              style={{ color: "#C5A07F" }}
            >
              auto_awesome
            </span>
            <span
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: "#C5A07F" }}
            >
              Our Philosophy
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {story.title1}
            <br />
            <span style={{ fontStyle: "italic" }}>{story.title2}</span>
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">{story.body}</p>

          <a
            href="#contact"
            className="inline-block border-b border-[#2D2926] pb-1 text-sm font-medium uppercase tracking-widest hover:text-[#C5A07F] hover:border-[#C5A07F] transition-colors"
          >
            Read Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
