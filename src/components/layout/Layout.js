import Navbar from "../navbar/Navbar.js";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
