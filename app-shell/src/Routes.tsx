import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// @ts-ignore // TODO: Can we fix this?
import RedPage from "team_red/Page";
// @ts-ignore // TODO: Can we fix this?
import Recommendations from "team_green/Recommendations";
// @ts-ignore // TODO: Can we fix this?
import Buy from "team_blue/Buy";
// @ts-ignore // TODO: Can we fix this?
import Basket from "team_blue/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense>
        <RedPage Recommendations={Recommendations} Buy={Buy} Basket={Basket} />
      </React.Suspense>
    ),
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
