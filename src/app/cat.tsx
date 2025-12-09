"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import cat from "../../public/cat.gif";

interface coordinate {
  x: number;
  y: number;
}
export const Cat = () => {
  const [mousecoordinates, setmousecoordinates] = useState<coordinate>();
  const [catc,setcat]=useState<coordinate>({x:10,y:10});


   useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setmousecoordinates({
        x: e.pageX,  
        y: e.pageY,
      });
    };
    setInterval(() => {
        const handlecatMove = (e: MouseEvent) => {
        setcat({ x: e.pageX, y: e.pageY });
      };
      document.addEventListener('mousemove',handlecatMove)
    }, );
    document.addEventListener("mousemove", handleMove);

  return () => {
    document.removeEventListener("mousemove", handleMove);
  }
  }, []);
  return (

      <div
      style={{position:'absolute',
        left:0,
        top:0,
        overflow:"hidden",
        animation:'linear',
        transform: `translate(${catc.x}px, ${catc.y}px)`,
        transition: "transform 0.05s linear",
      }}
        id="cat"
        className="cat overflow-hidden z-999 "
      >
        <Image src={cat} width={50} height={50} alt="cat" />
      </div>

  );
};

export default cat;
