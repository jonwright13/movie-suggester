import { ReactNode } from "react";

export interface HorizontalScrollProps {
  children: ReactNode | ReactNode[];
  setPage: any;
}

export interface Size {
  width: number;
  height: number;
}
