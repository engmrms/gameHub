import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} borderRadius={"4px"} paddingX={2} fontSize={"14px"}>
      {score}
    </Badge>
  );
};

export default CriticScore;
