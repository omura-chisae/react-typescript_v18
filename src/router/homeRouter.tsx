import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
  { path: "user_management", element: <UserManagement /> },
  { path: "setting", element: <Setting /> },
  { path: "*", element: <Page404 /> },
];
