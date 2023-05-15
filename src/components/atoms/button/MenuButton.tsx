import { memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onOpen: () => void;
};

export const MenuButton: React.FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      display={{ base: "block", md: "none" }}
      size="sm"
      variant="unstyled"
      onClick={onOpen}
    />
  );
});
