
import Image from 'next/image';
import Link from 'next/link';

export default function Newsletter() {
    const image=[
        {Image: "/image/furniture/bedroom.png"},
        {Image: "/image/furniture/chair1.png"}
    ]
  return (
   
         <section className="relative h-72 flex items-center justify-center bg-gray-100 mt-8">
                 <div className="absolute left-0 h-full w-1/3">
                   <Image
                     src="/image/furniture/bedroom.png"
                     alt="dresser"
                     fill
                     className="object-cover"
                   />
                 </div>
                 <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-md rounded-lg py-8 mx-4">
                   <h2 className="text-4xl font-semibold text-gray-900 mb-2">Join Our Newsletter</h2>
                   <p className="text-gray-700 mb-6 text-lg">Sign up for deals, new products and promotions</p>
                   <div className="flex items-center border-b border-gray-800 w-full max-w-md">
                     <input
                       type="email"
                       placeholder="Email address"
                       className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-600 text-sm py-2 px-1"
                     />
                     <Link href={"/sign-up"} className="ml-4 text-sm font-medium text-gray-900 cursor-pointer hover:text-gray-600 transition-colors">
                       Signup
                     </Link>
                   </div>
                 </div>
                 <div className="absolute right-0 h-full w-1/3">
                   <Image
                     src="/image/furniture/chair1.png"
                     alt="chair"
                     fill
                     className="object-cover"
                   />
                 </div>
               </section>
  );
}