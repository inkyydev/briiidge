import "./Integrity.css";

import col1Img1 from "../../../assets/integrity-col-1-img-1.png";
import col1Img2 from "../../../assets/integrity-col-1-img-2.png";
import col1Img3 from "../../../assets/integrity-col-1-img-3.png";
import col1Img4 from "../../../assets/integrity-col-1-img-4.png";
import col1Img5 from "../../../assets/integrity-col-1-img-5.png";
import col1Img6 from "../../../assets/integrity-col-1-img-6.png";

import col2Img1 from "../../../assets/integrity-col-2-img-1.png";
import col2Img2 from "../../../assets/integrity-col-2-img-2.png";
import col2Img3 from "../../../assets/integrity-col-2-img-3.png";
import col2Img4 from "../../../assets/integrity-col-2-img-4.png";
import col2Img5 from "../../../assets/integrity-col-2-img-5.png";

import col3Img1 from "../../../assets/integrity-col-3-img-1.png";
import col3Img3 from "../../../assets/integrity-col-3-img-3.png";
import col3Img4 from "../../../assets/integrity-col-3-img-4.png";
import col3Img5 from "../../../assets/integrity-col-3-img-5.png";
import col3Img6 from "../../../assets/integrity-col-3-img-6.png";

import col4Img1 from "../../../assets/integrity-col-4-img-1.png";
import col4Img2 from "../../../assets/integrity-col-4-img-2.png";
import col4Img3 from "../../../assets/integrity-col-4-img-3.png";
import col4Img4 from "../../../assets/integrity-col-4-img-4.png";
import col4Img5 from "../../../assets/integrity-col-4-img-5.png";

export default function Integrity() {
  // zamijeni src-ove svojim slikama; dupliramo programatski
  const cols = [
    [col1Img1, col1Img2, col1Img3, col1Img4, col1Img5, col1Img6],
    [col2Img1, col2Img2, col2Img3, col2Img4, col2Img5],
    [col3Img1, col3Img3, col3Img4, col3Img5, col3Img6],
    [col4Img1, col4Img2, col4Img3, col4Img4, col4Img5],
  ];

  return (
    <div className="integrity-wrapper-div">
      {cols.map((imgs, i) => (
        <div className="col" data-dir={i % 2 === 0 ? "up" : "down"} key={i}>
          <div className="col__track">
            {[...imgs, ...imgs].map((src, j) => (
              <figure className="tile" key={j}>
                <img src={src} alt="" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
