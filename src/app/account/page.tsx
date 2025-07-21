"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
    if (status === "authenticated") {
      axios.get("/api/user").then((res) => {
        const { firstName, lastName, displayName, email } = res.data;
        setFormData((prev) => ({
          ...prev,
          firstName,
          lastName,
          displayName,
          email,
        }));
      });
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await axios.put("/api/users/profile", formData);
    alert("Account updated");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 bg-white text-black">
      {/* Sidebar */}
      <aside className="md:col-span-1 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src="/placeholder-profile.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">
              {session?.user?.name ??
                `${formData.firstName} ${formData.lastName}` ??
                "My Name"}
            </p>
          </div>
        </div>
        <nav className="mt-8 space-y-4">
          <a href="#" className="block font-medium text-black">
            Account
          </a>
          <a href="#" className="block text-gray-600 hover:text-black">
            Addresses
          </a>
          <a href="#" className="block text-gray-600 hover:text-black">
            Orders
          </a>
          <a href="#" className="block text-gray-600 hover:text-black">
            Wishlist
          </a>
          <a
            href="/api/auth/signout"
            className="block text-gray-600 hover:text-black"
          >
            Log Out
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="md:col-span-3 space-y-10">
        <h1 className="text-4xl font-semibold">My Account</h1>

        {/* Account Details Section */}
        <div>
          <h2 className="text-lg font-medium mb-4">Account Details</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-64 border p-2 rounded"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-64 border p-2 rounded"
            />
            <input
              type="text"
              name="displayName"
              placeholder="Display name"
              value={formData.displayName}
              onChange={handleChange}
              className="w-64 border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-64 border p-2 rounded"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            This will be how your name will be displayed in account section and
            reviews
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Password</h2>
          <div className="flex flex-col gap-4">
            <input
              type="password"
              name="currentPassword"
              placeholder="Old password"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-64 border p-2 rounded"
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New password"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-64 border p-2 rounded"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repeat new password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-64 border p-2 rounded"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Save Changes
        </button>
      </section>
    </div>
  );
}
