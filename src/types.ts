import type { MouseEvent } from "react";

export type NavigateFn = (path: string) => void;

export interface PageProps {
  onNavigate?: NavigateFn;
}

export type LinkClickEvent = MouseEvent<HTMLAnchorElement | HTMLButtonElement>;

