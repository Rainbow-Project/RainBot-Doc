import { defineClientConfig } from "@vuepress/client";
import Badge from "/Users/ass_code_root/Documents/RainBotPRoject/doc/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.79/node_modules/vuepress-plugin-components/lib/client/components/Badge";
import FontIcon from "/Users/ass_code_root/Documents/RainBotPRoject/doc/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.79/node_modules/vuepress-plugin-components/lib/client/components/FontIcon";
import { useStyleTag } from "/Users/ass_code_root/Documents/RainBotPRoject/doc/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.79/node_modules/vuepress-plugin-components/lib/client/composables";
import BackToTop from "/Users/ass_code_root/Documents/RainBotPRoject/doc/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.79/node_modules/vuepress-plugin-components/lib/client/components/BackToTop";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", Badge);
    app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    BackToTop,
    
  ],
});