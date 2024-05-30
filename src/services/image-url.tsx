import noImage from "../assets/no-image-placeholder.webp";
import {
  Badge,
  Image,
  SimpleGrid,
  Box,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
type ImageDetails = [
  {
    id: string;
    width: number;
    height: number;
    url: string;
    filename: string;
    size: number;
    type: string;
    thumbnails: {
      small: {
        url: string;
        width: number;
        height: number;
      };
      large: {
        url: string;
        width: number;
        height: number;
      };
      full: {
        url: string;
        width: number;
        height: number;
      };
    };
  }
];

export const getCroppedImageUrl = (
  imageDetails: ImageDetails,
  desc: string
) => {
  const resizeImage = (width: number, height: number, absheight: number) => {
    const newWidth = Math.round((width / height) * absheight);
    //return ('imagine"' + ' height = "' + absheight.toString() + 'px"' + ' width="' + newWidth.toString() +"px");
    return newWidth.toString() + "px";
  };
  const imageColumns = () => {
    return imageDetails.length + 1;
  };

  const url = imageDetails[0].url;
  if (!url) return noImage;

  const imageDetail = ({
    id,
    url,
    height,
    width,
  }: {
    id: string;
    url: string;
    height: number;
    width: number;
  }) => (
    <Image src={url} height="200px" width={resizeImage(width, height, 200)} />
    //<Image src={url} alt={resizeImage(width, height, 50)} />
  );

  return (
    <SimpleGrid columns={imageColumns()} spacing="10px">
      {imageDetails.map(imageDetail)}
      <Box height="180px">
        <p>{desc}</p>
      </Box>
    </SimpleGrid>
  );
};

export default getCroppedImageUrl;
