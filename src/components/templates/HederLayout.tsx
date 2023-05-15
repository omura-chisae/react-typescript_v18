import { memo } from "react";

import { Header } from "../organisms/layouts/Heder";

type Props = {
  children: React.ReactNode;
};

export const HeaderLayout: React.FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
