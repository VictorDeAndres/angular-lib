interface IProgressBarStyle {
  lineWidth?: number;
  color?: string;
  fontColor?: string;
}

export interface IProgressBar {
  value: number;
  style?: IProgressBarStyle;
}
