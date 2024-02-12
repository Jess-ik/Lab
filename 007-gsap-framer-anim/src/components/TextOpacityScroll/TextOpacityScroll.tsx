import Character from "./Character";
import Paragraph from "./Paragraph";
import Words from "./Words";
import "./style.css";

const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

export default function TextOpacityScroll() {

  return (
    <main className="bg-[#fff] flex-none h-screen">
          {/* <Paragraph>{paragraph}</Paragraph>  */}
          <Words>{paragraph}</Words>
          {/* <Character>{paragraph}</Character> */}
      <div className="h-[50vh]"></div>
    </main>
  );
}
