// rsbuild.config.ts
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  server: {
    port: 3000,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:3000",
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      config.output!.uniqueName = "app_shell";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "app_shell",
          remotes: {
            team_red: "team_red@http://localhost:3001/mf-manifest.json",
            team_green: "team_green@http://localhost:3002/mf-manifest.json",
            team_blue: "team_blue@http://localhost:3003/mf-manifest.json",
          },
          shared: ["react", "react-dom"],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
