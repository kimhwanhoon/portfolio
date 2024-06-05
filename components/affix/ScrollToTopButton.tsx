"use client";

import { ActionIcon, Affix, Transition, rem } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUp } from "@tabler/icons-react";

export const ScrollToTopButton = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ActionIcon
              size={"lg"}
              variant="light"
              aria-label="Settings"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  );
};
