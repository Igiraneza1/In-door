export default function Intro() {
  return (
    <div className=" bg-white mx-auto justify-start  text-center p-1 m-5 max-w-7xl h-98">
      <nav className="absolute top-4 left-4 text-sm">
        <a href="#" className="text-black hover:text-blue-800 mr-6">Home</a>
        <a href="#" className="text-black hover:text-blue-800">Contact Us</a>
      </nav>
      <main className="max-w-7xl">
        <h1 className="text-7xl mb-6 leading-tight text-left text-black">
          We believe in sustainable <br />
          decor. We're passionate about <br />
          life at home.
        </h1>
        <p className="text-base text-gray-600 leading-relaxed text-left text-xl">
          Our collection features timeless furniture with natural fabrics, curved lines, plenty of mirrors, and classic  design <br/>
          which can be incorporated into any decor project. These pieces enchant with their elegance, made to last for generations <br />
          —faithful to the forms of each era with a modern touch.
        </p>
      </main>
    </div>
  );
}
