import ImageworkSection from "./ImageworkSection";
import data from "../utils.json";
import "../styles/ImageworkSection.css";


export default function Feature() {
  return (
    <ImageworkSection id="feature"
      title={data.featuredTitle}
      imagesData={data.featured}
      showTabs={false}
    />
  );
}