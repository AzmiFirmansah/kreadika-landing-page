import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function inlineCssPlugin() {
  return {
    name: "inline-css-plugin",
    apply: "build",
    enforce: "post",
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return html;

      let updatedHtml = html;
      for (const [fileName, asset] of Object.entries(ctx.bundle)) {
        if (asset.type === "asset" && fileName.endsWith(".css")) {
          const escaped = fileName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const linkRegex = new RegExp(
            `<link[^>]+rel=["']stylesheet["'][^>]+href=["']/?${escaped}["'][^>]*>`,
            "i"
          );
          if (linkRegex.test(updatedHtml)) {
            const cssSource =
              typeof asset.source === "string"
                ? asset.source
                : new TextDecoder().decode(asset.source);
            updatedHtml = updatedHtml.replace(
              linkRegex,
              `<style>${cssSource}</style>`
            );
            delete ctx.bundle[fileName];
          }
        }
      }
      return updatedHtml;
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCssPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom")
          ) {
            return "vendor";
          }
        },
      },
    },
  },
});
