import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import { AppThemeProvider } from "./shared/context";
import { DrawerProvider } from "./shared/context";
import { MenuLateral } from "./shared/components";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
