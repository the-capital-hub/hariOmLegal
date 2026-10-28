Hari Om Legal Our Team page matching About page

Files:
  src/pages/OurTeam.jsx
  src/pages/OurTeam.css

Integration:
1. Copy both files to your project's src/pages folder.
2. Import in App.jsx/router:
   import OurTeam from "./pages/OurTeam";
3. Add route:
   <Route path="/our-team" element={<OurTeam />} />
4. Add a navbar link to /our-team if desired.

The CSS mirrors About.css design tokens and section patterns: #cf3329 red,
#f7f4ee cream, #171512 ink, DM Sans, Playfair Display, dark stats strip,
numbered side labels and the same hero/CTA backgrounds. It reuses existing
assets under ../../assets/about/. Portraits are illustrative placeholders
made from existing project images; swap to approved individual portraits
when available. If the asset folder path differs, update the three imports
and hero/CTA CSS image URLs accordingly.
