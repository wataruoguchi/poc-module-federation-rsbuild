import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  server: {
    port: 3002,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:3002",
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output!.uniqueName = "team_green";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "team_green",
          exposes: {
            "./Recommendations": "./src/Recommendations.tsx",
          },
          shared: ["react", "react-dom"],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
