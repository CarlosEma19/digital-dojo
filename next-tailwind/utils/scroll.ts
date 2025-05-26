type ScrollCallback = (scrollY: number) => void;

const SCROLL_OFFSET_SCALE = 0.3;

export const onScroll = (callback: ScrollCallback) => {
  const updatePosition = () => {
    const scrollY =
      typeof window.scrollY === "undefined"
        ? window.pageYOffset
        : window.scrollY;
    callback(scrollY);
  };
  updatePosition();
  window.addEventListener("scroll", updatePosition);
  return () => {
    window.removeEventListener("scroll", updatePosition);
  };
};

export function smoothScrollTo(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const elementTop = element.getBoundingClientRect().top;
    const scrollTop = window.scrollY;
    const offset = window.innerHeight * SCROLL_OFFSET_SCALE;
    window.scrollTo({
      top: elementTop + scrollTop - offset,
      behavior: "smooth",
    });
  }
}
