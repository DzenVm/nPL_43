import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Blimjoo — spokojna strategia na skraju mapy",
    short_name: "Blimjoo",
    description:
      "Serwis informacyjny opisujący przeglądarkową grę strategiczną dla jednego gracza.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3ecdd",
    theme_color: "#2a2218",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
