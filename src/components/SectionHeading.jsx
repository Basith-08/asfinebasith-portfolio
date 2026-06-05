export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className = "",
}) {
  const classes = ["section-heading", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <div className="section-intro">
        <p className="section-kicker">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      {action ? <div className="section-heading-action">{action}</div> : null}
    </div>
  );
}
