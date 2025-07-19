import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";
interface UserProfileProps {
  img: string;
}

export default function UserProfile({ img }: UserProfileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      {/* Profile Picture - Click to Open Dropdown */}
      <div
        className="cursor-pointer rounded-full border-4 border-blue-500 hover:border-blue-700 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={img}
          width={100}
          height={100}
          alt="profile-image"
          className="rounded-full w-16 h-16 object-cover border-4 border-blue-500"
        />
      </div>

      {/* Dropdown Box */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute capitalize font-medium text-xl flex justify-center items-center right-0 mt-3 bg-white rounded-lg shadow-lg border border-gray-200"
        >
          <ul className="py-2 flex  gap-1  flex-col text-gray-700">
            <Link href={"/user"}>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                account
              </li>
            </Link>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Settings
            </li>
            <li
              onClick={() => signOut()}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
