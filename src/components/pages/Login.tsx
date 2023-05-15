import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { ChangeEvent, memo, useState } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login = memo(() => {
  const { login, loading } = useAuth();

  const [userId, setUserID] = useState(""); //初期値から型が推論されるため型の設定は不要

  const onchangeUserID = (e: ChangeEvent<HTMLInputElement>) =>
    setUserID(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onchangeUserID}
          />
          <PrimaryButton
            loading={loading}
            isDisabled={userId === "" || loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
