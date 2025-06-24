import Image, { ImageProps } from "next/image";

interface Props extends ImageProps {
  className?: string;
}
const ImageViewr = ({ src, alt, ...props }: Props) => {
  return (
    
    <Image
      src={src}
      alt={alt}
      sizes="(max-width: 640px) 100vw, 50vw"
      {...props}
    />
    
  );
};

export default ImageViewr;
