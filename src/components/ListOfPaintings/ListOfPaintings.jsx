import CardPainting from "../CardPainting/CardPainting";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListOfPaintings.css";

import painting1 from "/painting1.jpg";
import painting2 from "/painting2.jpg";
import painting3 from "/painting3.jpg";
import painting4 from "/painting4.jpg";
import painting5 from "/painting5.jpg";
import painting6 from "/painting6.jpg";
import painting7 from "/painting7.jpg";
import painting8 from "/painting8.jpg";

export default function ListOfPaintings() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <CardPainting
          description="Original Painting - 5 x 5 cm"
          title="The best sunshine"
          price="£160"
          image={painting1}
        ></CardPainting>
        <CardPainting
          description="Original Painting - 15 x 15 cm"
          title="Loferus"
          price="£590"
          image={painting2}
        ></CardPainting>
        <CardPainting
          description="Original Painting - 15 x 10 cm"
          title="One Night"
          price="£130"
          image={painting3}
        ></CardPainting>
        <CardPainting
          description="Original Painting - 45 x 20 cm"
          title="Lorie"
          price="£800"
          image={painting4}
        ></CardPainting>
        <CardPainting
          description="Original Painting - 35 x 20 cm"
          title="Sutti"
          price="£250"
          image={painting5}
        ></CardPainting>
        <CardPainting
          description="Original Painting - 55 x 40 cm"
          title="Freedom"
          price="£700"
          image={painting6}
        ></CardPainting>
        <CardPainting
          description="Original Painting - 15 x 10 cm"
          title="Fire on"
          price="£630"
          image={painting7}
        ></CardPainting>
        <CardPainting
          description="Original Painting - 55 x 20 cm"
          title="Under the Rainbow"
          price="£1230"
          image={painting8}
        ></CardPainting>
      </div>
    </div>
  );
}
