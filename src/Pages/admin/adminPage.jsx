import { useState } from "react";
import {
  BsGraphUp,        // changed to Up for positive vibe
  BsClipboardData,
} from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { MdOutlineSpeaker, MdAddCircleOutline } from "react-icons/md";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import AdminItemPage from "./adminItems";
import AddItemPage from "./addItemPage";

const navItems = [
  { path: "/admin", label: "Dashboard", icon: BsGraphUp, exact: true },
  { path: "/admin/bookings", label: "Bookings", icon: FaRegBookmark },
  { path: "/admin/items", label: "Items", icon: MdOutlineSpeaker },
  { path: "/admin/users", label: "Users", icon: FaRegUser },
];

export default function AdminPage() {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Helper to check if route is active (better matching than default NavLink sometimes)
  const isActive = (path, exact = false) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 transform bg-gradient-to-b from-indigo-700 to-indigo-900 
          text-white transition-transform duration-300 lg:relative lg:translate-x-0
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-16 items-center justify-center border-b border-indigo-600/30 px-6">
          <h1 className="text-2xl font-bold tracking-tight">Admin Panel</h1>
        </div>

        <nav className="mt-6 flex flex-col gap-1 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.exact}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-lg px-4 py-3 text-lg font-medium transition-all
                ${
                  isActive
                    ? "bg-indigo-800/70 text-white shadow-md"
                    : "text-indigo-100 hover:bg-indigo-800/40 hover:text-white"
                }`
              }
            >
              <item.icon className="text-xl" />
              <span>{item.label}</span>
            </NavLink>
          ))}

          {/* Quick Add Item Button */}
          <NavLink
            to="/admin/items/add"
            className={({ isActive }) =>
              `mt-4 flex items-center justify-center gap-2 rounded-xl bg-indigo-500/90 py-3.5 text-base font-semibold text-white transition-all hover:bg-indigo-600 hover:shadow-lg active:scale-98
              ${isActive ? "ring-2 ring-indigo-300 ring-offset-2 ring-offset-indigo-900" : ""}`
            }
          >
            <MdAddCircleOutline className="text-xl" />
            Add New Item
          </NavLink>
        </nav>
      </aside>

      {/* Mobile menu toggle */}
      <button
        className="fixed left-4 top-4 z-50 rounded-full bg-indigo-600 p-3 text-white lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <span className="sr-only">Toggle menu</span>
        {isMobileOpen ? "✕" : "☰"}
      </button>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto">
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800">
            {navItems.find((item) => isActive(item.path, item.exact))?.label ||
              "Admin"}
          </h2>
        </header>

        <div className="p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<DashboardPlaceholder />} />
            <Route path="/bookings" element={<BookingsPlaceholder />} />
            <Route path="/items" element={<AdminItemPage />} />
            <Route path="/items/add" element={<AddItemPage />} />
            <Route path="/users" element={<UsersPlaceholder />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

// Simple placeholder components — replace with real ones later
function DashboardPlaceholder() {
  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h3 className="mb-4 text-2xl font-bold text-gray-800">Welcome to Dashboard</h3>
      <p className="text-gray-600">Overview • Stats • Recent activity coming soon...</p>
    </div>
  );
}

function BookingsPlaceholder() {
  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h3 className="mb-4 text-2xl font-bold text-gray-800">Bookings Management</h3>
      <p className="text-gray-600">List of all bookings, filters, status updates...</p>
    </div>
  );
}

function UsersPlaceholder() {
  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h3 className="mb-4 text-2xl font-bold text-gray-800">Users</h3>
      <p className="text-gray-600">User list, roles, permissions management...</p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center text-center">
      <h2 className="text-5xl font-bold text-gray-300">404</h2>
      <p className="mt-4 text-xl text-gray-600">Page not found</p>
    </div>
  );
}