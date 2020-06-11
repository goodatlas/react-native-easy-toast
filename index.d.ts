import { Component, ReactNode } from "react";
// https://github.com/Darmody/react-native-easy-toast/commits/fix-typescript-type-definition
interface ToastComponentProps {
  position?: "bottom" | "center" | "top";
  textStyle?: {};
  positionValue?: number;
  fadeInDuration?: number;
  fadeOutDuration?: number;
  opacity?: number;
}

declare module "react-native-easy-toast" {
  interface IDuration {
    LENGTH_SHORT: number;
    FOREVER: number;
  }

  export var DURATION: IDuration;

  export default class Toast extends Component<ToastComponentProps> {
    show: (
      text: string | ReactNode,
      duration?: number,
      callback?: () => void
    ) => void;
    close: (duration?: number) => void;
  }
}

