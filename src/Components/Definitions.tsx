import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
const Definitions = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" color={"gray.500"} fontSize="md" marginBottom={1}>
        {term}
      </Heading>
      {children}
    </Box>
  );
};

export default Definitions;
