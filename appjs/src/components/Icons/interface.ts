export interface IconSwitchProps {
  type: "watchlist" | "watched" | "ignore";
}

export interface IconProps {
  type: "watchlist" | "watched" | "ignore";
  title: string;
  checked: boolean;
  onClick: (type: "watchlist" | "watched" | "ignore") => void;
}
