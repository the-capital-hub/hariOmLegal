# Hari Om Legal: Cinematic Scroll Effects

This is a small reusable animation layer for the existing React + Vite website. It does not replace routes, change the palette, or require Framer Motion. It uses IntersectionObserver and requestAnimationFrame for lightweight scroll effects.

## 1. Add the files

Copy `src/components/ScrollEffects.jsx` and `src/styles/scroll-effects.css` into the same paths in your project.

This component imports `useLocation` from `react-router-dom`, so it should be rendered inside the existing `BrowserRouter`.

## 2. Mount it once

In `src/App.jsx`, import the component:

```jsx
import ScrollEffects from "./components/ScrollEffects";
```

Render it inside your existing router and layout, without replacing your current routes. Example:

```jsx
function App() {
  return (
    <>
      <ScrollEffects />
      {/* Keep your existing Navbar, Routes, Footer and other components here. */}
    </>
  );
}
```

If `App` is already rendered inside `BrowserRouter` in `main.jsx`, this is sufficient. Do not add a second `BrowserRouter`.

## 3. Add effects to existing elements

The global component only animates elements that opt in via data attributes, so unmarked sections keep their current appearance.

### Reveal a heading or paragraph

```jsx
<h1 data-reveal="up">Clarity in law.</h1>
<p data-reveal="up" data-reveal-delay="120">
  Thoughtful legal guidance for every decision.
</p>
```

Directions accepted: `up`, `down`, `left`, `right`, `none`.

### Image zoom on entry

Put the attribute on a wrapper around an image:

```jsx
<div className="hero-image" data-image-zoom>
  <img src="/images/about-hero.png" alt="Law office" />
</div>
```

The wrapper should already have its intended dimensions and `overflow: hidden`. Existing layout styles remain in control.

### Parallax image

```jsx
<div className="hero-image" data-parallax="0.14">
  <img src="/images/home-hero.png" alt="Legal office" />
</div>
```

Use small values between `-0.35` and `0.35`. The default is `0.14`. Ensure the image fills its wrapper with `width: 100%; height: 100%; object-fit: cover;` if that matches your existing design.

### Stagger a group of cards

```jsx
<div className="practice-card" data-stagger-item="0">...</div>
<div className="practice-card" data-stagger-item="1">...</div>
<div className="practice-card" data-stagger-item="2">...</div>
```

The number controls the stagger delay. It is capped to keep the animation quick.

### Subtle card hover lift

```jsx
<article className="practice-card" data-scroll-card>...</article>
```

## 4. Recommended rollout

Add reveal attributes to section headings, short copy, CTAs, and card groups on Home, About, Practice Areas, Our Approach, Offices, Contact, and Consult an Expert. Add parallax only to large cinematic image areas and image zoom to contained image wrappers. Avoid animating every nested element in a section; that can make the page feel busy.

## Notes

- Existing routes and links are untouched.
- No palette, font, spacing, or content styles are overridden by the animation layer.
- Elements only animate once after entering view.
- Newly mounted route content is observed automatically.
- Users who request reduced motion get non-animated content.
- Test each page after adding the data attributes. This bundle cannot automatically choose the correct semantic elements in page files that were not included here.
