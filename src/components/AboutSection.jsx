import SectionHeading from "./SectionHeading";
import { aboutCards } from "../data/portfolio";

export default function AboutSection() {
  return (
    <section className="section-shell about-grid" id="about">
      <div>
        <SectionHeading
          className="section-heading-compact"
          eyebrow="Tentang Saya"
          title="Saya menikmati proses mengubah kebutuhan produk menjadi sistem yang rapi dan layak digunakan."
        />
      </div>

      <div className="about-cards">
        {aboutCards.map((card) => (
          <article className="info-card surface-panel" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
