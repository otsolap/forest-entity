import { getStrapiMedia } from "src/app/utils/media";
import Image from "next/image";

const NextImage = ({ image, className }) => {
  if(
    image === null || 
    image?.length === 0 ||
    image?.data === null || 
    image?.data?.length === 0 || 
    image?.data === undefined) {
    return
  }

  const imageData = Array.isArray(image.data) ? image.data[0] : image.data;
  const { url, width, height, alternativeText} = imageData.attributes;

  if(width && height) {
    return (
      <Image 
        src={getStrapiMedia(url)}
        alt={alternativeText || ""}
        width={width}
        height={height}
        priority
        quality={100}
        className={className || ''}
      />
    )
  }

  return (
    <Image
      src={getStrapiMedia(url)}
      alt={alternativeText || ""}
      fill
      sizes="100vw"
      priority
      quality={100}
      className={className || ''}
    />
  );
};

export default NextImage;