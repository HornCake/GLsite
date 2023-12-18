const scrollData: Record<string, HTMLElement> = {};
const HEADER_HEIGHT = 60;
const CORRECTION = 50;

export const setScrollData = (key: string, element: HTMLElement | null) => {
  if (element) {
    scrollData[key] = element;
  }
};
export const scrollToEle = (key: string) => {
  setTimeout(() => {
    window.scrollTo({ top: scrollData[key].offsetTop - HEADER_HEIGHT - CORRECTION, behavior: "smooth" });
  }, 10);
};
