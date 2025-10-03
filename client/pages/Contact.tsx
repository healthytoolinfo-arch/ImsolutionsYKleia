import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FFFFFC] flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="font-gill-sans font-bold text-4xl lg:text-6xl text-black mb-8">
          Contact Us
        </h1>
        <p className="font-gill-sans text-lg text-black mb-8">
          This page is under construction. Please continue prompting to add content here.
        </p>
        <Link 
          to="/"
          className="inline-block px-6 py-3 bg-black text-white font-inter font-bold text-base rounded-lg hover:bg-gray-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
