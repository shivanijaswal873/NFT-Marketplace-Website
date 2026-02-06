import ImageworkSection from "./ImageworkSection";
import data from "../utils.json";

export default function Feature() {
  return (
    <ImageworkSection
      title={data.featuredTitle}
      imagesData={data.featured}
      showTabs={false}
    />
  );
}