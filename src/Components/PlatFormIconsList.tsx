import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../entities/Platform";

const PlatFormIconsList = ({ platforms }: { platforms: Platform[] }) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map(platform => (
        <Icon key={platform.id} as={iconsMap[platform.slug]} color={"gray.500"} />
      ))}
    </HStack>
  );
};

export default PlatFormIconsList;
