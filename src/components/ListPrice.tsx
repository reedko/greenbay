import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const listPrice = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      KES {score}
    </Badge>
  );
};

export default listPrice;
