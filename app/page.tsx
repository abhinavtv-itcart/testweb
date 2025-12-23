

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: '5px'
//       }}
//     >
//       <Image src="/download.jpg" width={500} height={500} alt="image" />

//       <P>

//         Dear Syed Sir,
//         Some things are best expressed quietly.
//         This portrait was created with time, patience, and sincere care.
//         Not just as a gift, but as a moment thoughtfully captured in art.
//         I hope it brings a sense of warmth and a gentle smile whenever you see it.
//         Wishing you a joyful Christmas and a wonderful year ahead.

//         With warm regards,
//         Dona Zacharias
//       </P>
//     </div>
//   );
// }



import Image from "next/image";
// import "./home.css";

export default function Home() {
  return (
    <div className="page">
      <div className="card">

        <div className="imageSection">
          <Image
            src="/alisirimage.jpg"
            width={400}
            height={400}
            alt="Portrait"
            className="image"
          />
        </div>

        <div className="textSection">
          <p className="greeting">Dear Syed Sir,</p>

          <p>
            Some things are best expressed quietly. This portrait was created
            with time, patience, and sincere care.
          </p>

          <p>
            Not just as a gift, but as a moment thoughtfully captured in art.
            I hope it brings a sense of warmth and a gentle smile whenever you see it.
          </p>

          <p>
            Wishing you a joyful Christmas and a wonderful year ahead.
          </p>

          <p className="signature">
            With warm regards,<br />
            <strong>Dona Zacharias</strong>
          </p>
        </div>

      </div>
    </div>
  );
}
