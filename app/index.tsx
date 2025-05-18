import { useFonts } from "expo-font";
import { SplashScreen, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const router = useRouter();
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    "JetBrainsMono Nerd Font Propo": require("@/assets/fonts/JetBrainsMonoNLNerdFontPropo-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        SplashScreen.preventAutoHideAsync();
        // ! isme app ready krne ke liye mazeed code dalna hoga (API calls etc)
        // ! ye sirf aik delay simulate krwata hai, `setTimeout` wala function hatega
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    async function hideSplashAndRedirect() {
      if (appIsReady && fontsLoaded) {
        await SplashScreen.hideAsync();
        // ! user login check krna hoga alag se, ye sirf hardcoded hai
        const isLoggedIn = true;
        if (isLoggedIn) {
          router.replace("/(home)/dashboard");
        } else {
          router.replace("/(auth)/login");
        }
      }
    }

    hideSplashAndRedirect();
  }, [appIsReady, fontsLoaded]);

  return;
}
