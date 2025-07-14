import type { NextPage } from "next";
import { FaTruck, FaUndo, FaLock, FaPhoneAlt } from "react-icons/fa";

export default function Icon() {
  return (
    <div className="bg-gray-100 py-6 flex justify-around items-center text-black">
      <div className="text-center">
        <FaTruck className="w-12 h-12 mx-auto mb-2 text-gray-800" />
        <h3 className="text-lg font-semibold">Free Shipping</h3>
        <p className="text-gray-500 text-sm">Order above $200</p>
      </div>
      <div className="text-center">
        <FaUndo className="w-12 h-12 mx-auto mb-2 text-gray-800" />
        <h3 className="text-lg font-semibold">Money-back</h3>
        <p className="text-gray-500 text-sm">30 days guarantee</p>
      </div>
      <div className="text-center">
        <FaLock className="w-12 h-12 mx-auto mb-2 text-gray-800" />
        <h3 className="text-lg font-semibold">Secure Payments</h3>
        <p className="text-gray-500 text-sm">Secured by Stripe</p>
      </div>
      <div className="text-center">
        <FaPhoneAlt className="w-12 h-12 mx-auto mb-2 text-gray-800" />
        <h3 className="text-lg font-semibold">24/7 Support</h3>
        <p className="text-gray-500 text-sm">Phone and Email support</p>
      </div>
    </div>
  );
};

