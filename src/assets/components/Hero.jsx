import { Parallax } from "react-parallax";

export default function HeroSection() {
  return (
    <Parallax bgImage="/hero.jpg" strength={200}>
      <div style={{ height: 400 /* or vh units */ }} />
    </Parallax>
  );
}
