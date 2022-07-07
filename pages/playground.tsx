import { Box, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

let video;
let p5Instance;
function sketch(p5) {
  const density = ".:-i|=+%O#@Ñ";

  //let asciiDiv;

  p5Instance = p5;

  p5.setup = () => {
    //p5.noCanvas();
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    video = p5.createVideo(["vid/test2.mp4"]);
    video.size(192, 108);
    video.loop();
    video.hide();
    //asciiDiv = p5.createElement("pre");
  };

  p5.draw = () => {
    p5.background(0);
    video.loadPixels();
    //let asciiImage = "";
    for (let y = 0; y < video.height; y++) {
      for (let x = 0; x < video.width; x++) {
        let offset = (x + y * video.width) * 4;
        const r = video.pixels[offset + 0];
        const g = video.pixels[offset + 1];
        const b = video.pixels[offset + 2];
        const avg = (r + g + b) / 3;
        const len = density.length;
        const charIndex = p5.floor(p5.map(avg, 0, 255, 0, len));
        p5.fill(
          video.pixels[offset],
          video.pixels[offset + 1],
          video.pixels[offset + 2]
        );
        p5.text(
          density.charAt(charIndex),
          x * (p5.windowWidth / 192),
          y * (p5.windowHeight / 108)
        );
        //const c = density.charAt(charIndex);
        //asciiImage += c;
      }
      //asciiImage += "\n";
    }
    //asciiDiv.html(asciiImage);
  };
}

export default function Playground() {
  useEffect(() => {
    return () => p5Instance.remove();
  }, []);
  return (
    <Box
      background="black"
      sx={{
        div: {
          pre: {
            color: "green !important",
            letterSpacing: "8px !important",
            fontSize: "10px !important",
            background: "black !important",
          },
        },
      }}
    >
      <ReactP5Wrapper sketch={sketch} />
      <Button onClick={() => video.pause()}>{"||"}</Button>
      <Button onClick={() => video.play()}>{"|>"}</Button>
    </Box>
  );
}
