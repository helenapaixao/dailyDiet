import React from "react";
import { SafeAreaView, Container, ScrollView } from "./styles";

interface ScreenContainerProps {
  children: React.ReactNode;
  isChildrenInsideScrollView?: boolean;
}

export default function ScreenContainer({
  children,
  isChildrenInsideScrollView = true,
}: ScreenContainerProps) {
  const renderChildren = (children: React.ReactNode) => {
    if (isChildrenInsideScrollView) {
      return (
        <ScrollView keyboardShouldPersistTaps={"handled"} horizontal={false}>
          {children}
        </ScrollView>
      );
    } else {
      return children;
    }
  };
  return (
    <SafeAreaView>
      {renderChildren(<Container>{children}</Container>)}
    </SafeAreaView>
  );
}
