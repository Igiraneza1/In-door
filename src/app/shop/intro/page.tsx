 import Image from "next/image";
 import Link from "next/link";
 
 
 export default function Intro(){
    return(
        
    <section className="h-86 bg-white">
      <div className="relative h-86 bg-gray-300 mb-6">
        <Image
          src="/image/Living-room/sofa4.jpg"
          alt="Shop Hero"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-gray-900 gap-6">
          <div className="flex flex-row space-x-5 items-center">
            <Link href={"/inDoor"} className="text-sm">Home</Link>
            <p>/</p>
            <p>Shop</p>
          </div>
          <p className="text-5xl font-bold">Shop Page</p>
          <h2 className="text-2xl mt-2 text-gray-700">
            Let`s design the place you always imagined
          </h2>
        </div>
      </div>
      </section>
    )
 }
    