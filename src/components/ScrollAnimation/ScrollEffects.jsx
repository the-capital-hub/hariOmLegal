import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./scroll-effects.css";


export default function ScrollEffects() {
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealSelector = "[data-reveal], [data-stagger-item]";
    const parallaxSelector = "[data-parallax]";
    const zoomSelector = "[data-image-zoom]";

    if (reduceMotion) {
      document.querySelectorAll(revealSelector).forEach((el) => {
        el.classList.add("hol-is-visible");
      });
      document.querySelectorAll(parallaxSelector).forEach((el) => {
        el.style.setProperty("--hol-parallax-y", "0px");
      });
      return undefined;
    }

    let revealObserver;
    let zoomObserver;
    let mutationObserver;
    let rafId = 0;
    let active = true;

    const initReveal = (scope = document) => {
      scope.querySelectorAll?.(revealSelector).forEach((el) => {
        if (el.dataset.holRevealReady) return;
        el.dataset.holRevealReady = "true";
        if (el.hasAttribute("data-stagger-item")) {
          const index = Number(el.getAttribute("data-stagger-item")) || 0;
          el.style.setProperty("--hol-reveal-delay", `${Math.min(index * 90, 450)}ms`);
        } else {
          const delay = Number(el.getAttribute("data-reveal-delay")) || 0;
          el.style.setProperty("--hol-reveal-delay", `${Math.min(delay, 800)}ms`);
        }
        const direction = el.getAttribute("data-reveal") || "up";
        el.dataset.holDirection = ["up", "down", "left", "right", "none"].includes(direction) ? direction : "up";
        revealObserver?.observe(el);
      });

      scope.querySelectorAll?.(zoomSelector).forEach((el) => {
        if (el.dataset.holZoomReady) return;
        el.dataset.holZoomReady = "true";
        zoomObserver?.observe(el);
      });
    };

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("hol-is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -45px 0px" });

    zoomObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("hol-image-in-view", entry.isIntersecting);
      });
    }, { threshold: 0.08, rootMargin: "80px 0px 80px 0px" });

    const updateParallax = () => {
      if (!active) return;
      const viewportHeight = window.innerHeight || 1;
      document.querySelectorAll(parallaxSelector).forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > viewportHeight + 100) return;
        const speedValue = Number(el.getAttribute("data-parallax"));
        const speed = Number.isFinite(speedValue) ? Math.max(-0.35, Math.min(0.35, speedValue)) : 0.14;
        const distanceFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
        const maxShift = Math.min(rect.height * 0.12, 70);
        const shift = Math.max(-maxShift, Math.min(maxShift, -distanceFromCenter * speed));
        el.style.setProperty("--hol-parallax-y", `${shift.toFixed(1)}px`);
      });
    };

    const requestParallaxUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateParallax();
      });
    };

    initReveal(document);
    updateParallax();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate, { passive: true });

    mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node.nodeType === 1) initReveal(node);
        });
      });
      requestParallaxUpdate();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      active = false;
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);
      mutationObserver?.disconnect();
      revealObserver?.disconnect();
      zoomObserver?.disconnect();
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [location.pathname, location.search, location.hash]);

  return null;
}
