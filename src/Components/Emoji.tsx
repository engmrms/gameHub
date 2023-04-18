import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/Emojis/bulls-eye.webp";
import meh from "../assets/Emojis/meh.webp";
import thumbsUp from "../assets/Emojis/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return <></>;
  const emojiMap: { [key: string]: ImageProps } = {
    3: { src: meh, alt: "moh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommebdation", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
