import SectionHeading from "./SectionHeading";
import { processItems } from "../data/portfolio";

export default function ProcessSection() {
  return (
    <section className="section-shell process-grid" id="process">
      <div>
        <SectionHeading
          className="section-heading-compact"
          eyebrow="Nilai Yang Saya Bawa"
          title="Saya tidak hanya mengejar fitur selesai, tetapi juga kualitas implementasi dan kejelasan sistemnya."
        />
      </div>

      <div className="process-list">
        {processItems.map((item) => (
          <article className="process-card surface-panel" key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
