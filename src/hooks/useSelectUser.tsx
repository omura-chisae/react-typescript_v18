import { useCallback, useState } from "react";
import { useToast } from "@chakra-ui/react";

import { User } from "../types/api/User";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// 選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser);
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
