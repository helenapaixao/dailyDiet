import { type ReactNode } from "react";
import {   Label as LabelComponent } from "./styles";


interface LabelProps {
  children: ReactNode
}

export function Label ({children}: LabelProps) {
  return (
    <LabelComponent>
      {children}
    </LabelComponent>
  )
}