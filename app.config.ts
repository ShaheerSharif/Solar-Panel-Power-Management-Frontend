import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "solar-panel-management-system-frontend",
  slug: "solar-panel-management-system-frontend",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "solarpanelmanagementsystemfrontend",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    [
      "expo-font",
      {
        fonts: ["./assets/fonts/JetBrainsMonoNLNerdFontPropo-Regular.ttf"],
        android: {
          fonts: [
            {
              fontFamily: "JetBrainsMono Nerd Font Propo",
              fontDefinitions: [
                {
                  path: "./assets/fonts/JetBrainsMonoNerdFontPropo-Bold.ttf",
                  weight: 700,
                  style: "bold",
                },
                {
                  path: "./assets/fonts/JetBrainsMonoNerdFontPropo-Italic.ttf",
                  weight: 700,
                  style: "italic",
                },
              ],
            },
          ],
        },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
};

export default config;
