import "./section-title.css";

interface SectionTitleProps {
  sectionTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ sectionTitle }) => {
  return <h2 className="sectionTitle">{sectionTitle}</h2>;
};
export default SectionTitle;
