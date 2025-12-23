// import Image from "next/image";

// export default function Home() {
//   return (
//     <div style={
//     }>
//       <Image
//         src={"/download.jpg"}
//         width={500}
//         height={500}
//         alt="image"
//       />
//     </div >
//   );
// }


import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding:'5px'
      }}
    >
      <Image src="/download.jpg" width={500} height={500} alt="image" />
    </div>
  );
}
