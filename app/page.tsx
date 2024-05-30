import { Hero } from "@/components/heroes/Hero";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <Hero
        key={"home"}
        title="Hwanhoon Kim"
        subtitle="Frontend Developer | React, Next"
        content="I'm a passionate frontend developer with a strong focus on creating
        visually stunning and user-friendly web applications. Let's bring your
        ideas to life!"
        firstButton={{ title: "View Portfolio", href: "/#projects" }}
        secondButton={{ title: "Contact Me", href: "/#contact" }}
      />
    </main>
  );
};

export default HomePage;
