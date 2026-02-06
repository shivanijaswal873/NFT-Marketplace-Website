import ImageworkSection from "./ImageworkSection";
import data from "../utils.json";

export default function Collection() {
  return (
    <ImageworkSection
      title={data.collectionTitle}
      imagesData={data.collection}
      showTabs={true}
    />
  );
}
