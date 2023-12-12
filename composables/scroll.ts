const scrollData: Record<string, number> = {};
const HEADER_HEIGHT = 60;
const CORRECTION = 50;

export const setScrollData = (key: string, element: HTMLElement | null) => {
  if (element) {
    scrollData[key] = element.offsetTop - HEADER_HEIGHT - CORRECTION;
  }
};
export const scrollToEle = (key: string) => {
  window.scrollTo({ top: scrollData[key], behavior: "smooth" });
};
