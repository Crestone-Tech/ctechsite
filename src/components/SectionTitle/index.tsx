import "./section-title.css";

interface SectionTitleProps {
  sectionTitle: string;
  style?: React.CSSProperties;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ sectionTitle, style }) => {
  return <h2 className="sectionTitle" style={style}>{sectionTitle}</h2>;
};
export default SectionTitle;
