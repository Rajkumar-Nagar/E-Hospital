import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image src="/home.jpg" width={1000} height={1000} alt="Hospital Image" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-white">Welcome to Kalyaan Hospital</h1>
        <p className="text-xl text-white mt-4 max-w-2xl">Providing the best medical care with modern facilities and expert doctors.</p>
        <a href="/about" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Learn More</a>
      </div>
    </section>
  );
}
