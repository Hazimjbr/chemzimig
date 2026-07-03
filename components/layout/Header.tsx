"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import LoginModal from "@/components/auth/LoginModal";
import { Lock, User as UserIcon, LogOut, LayoutDashboard, ChevronDown, Bell } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [boardOpen, setBoardOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifMenuOpen, setNotifMenuOpen] = useState(false);

  const { user, isAuthenticated, logout } = useAuth();

  const boards = [
    { id: 'cie-igcse', label: 'CIE IGCSE', code: '0620', color: 'gold' },
    { id: 'cie-as', label: 'CIE AS-Level', code: '9701', color: 'teal' },
    { id: 'cie-alevel', label: 'CIE A-Level', code: '9701', color: 'purple' },
    { id: 'edexcel-igcse', label: 'Edexcel IGCSE', code: '4CH1', color: 'purple' },
    { id: 'edexcel-as', label: 'Edexcel AS', code: 'XCH11', color: 'purple' },
    { id: 'edexcel-a2', label: 'Edexcel A2', code: 'YCH11', color: 'purple' },
  ];

  const [selectedBoard, setSelectedBoard] = useState(boards[0]);

  // Fetch announcements for notifications
  useEffect(() => {
    if (!isAuthenticated) return;
    const fetchAnnouncements = async () => {
      try {
        const track = user?.track || 'cie-igcse';
        const res = await fetch(`/api/announcements?curriculum=${track}`);
        const data = await res.json();
        if (data.success) {
          const list = data.announcements || [];
          setAnnouncements(list);
          
          // Count unread from localStorage
          const readIds = JSON.parse(localStorage.getItem('read_announcements') || '[]');
          const unread = list.filter((ann: any) => !readIds.includes(ann.id)).length;
          setUnreadCount(unread);
        }
      } catch (e) {
        console.error('Failed to fetch header announcements:', e);
      }
    };
    fetchAnnouncements();
  }, [isAuthenticated, user]);

  const handleOpenNotif = () => {
    setNotifMenuOpen(!notifMenuOpen);
    setProfileMenuOpen(false);
    
    // Mark all as read when opening notifications menu
    if (announcements.length > 0) {
      const readIds = announcements.map((ann: any) => ann.id);
      localStorage.setItem('read_announcements', JSON.stringify(readIds));
      setUnreadCount(0);
    }
  };

  // Update selected board to user's track if logged in
  useEffect(() => {
    if (isAuthenticated && user?.track) {
      const userBoard = boards.find(b => b.id === user.track);
      if (userBoard) {
        setSelectedBoard(userBoard);
      }
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setBoardOpen(false);
    if (boardOpen) {
      const timer = setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 50);
      return () => {
        clearTimeout(timer);
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [boardOpen]);

  useEffect(() => {
    const handleClickOutside = () => setProfileMenuOpen(false);
    if (profileMenuOpen) {
      const timer = setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 50);
      return () => {
        clearTimeout(timer);
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [profileMenuOpen]);

  const navLinks = [
    { href: "#curriculum", label: "Curriculum" },
    { href: "#stats", label: "Stats" },
    { href: "#tools", label: "Tools" },
  ];

  // Resolve user display name or first character
  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "S";

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-bright shadow-lg shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" id="logo-link">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-500 to-teal-500 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="relative z-10"
                >
                  <path
                    d="M9 3L9 8L6 14L8 14L10 18L14 18L16 14L18 14L15 8L15 3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="6" r="1" fill="white" opacity="0.8" />
                  <circle cx="10" cy="12" r="0.8" fill="white" opacity="0.6" />
                  <circle cx="14" cy="11" r="0.8" fill="white" opacity="0.6" />
                </svg>
              </div>
            </div>
            <span className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight">
              <span className="text-white">Chem</span>
              <span className="text-gradient-gold">Zim</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {/* Board Switcher */}
            <div className="relative">
              <button
                onClick={() => setBoardOpen(!boardOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass border border-border hover:border-gold-500/30 transition-all text-sm cursor-pointer"
                id="board-switcher-btn"
              >
                <div className={`w-2 h-2 rounded-full ${
                  selectedBoard.color === 'gold' ? 'bg-gold-500' :
                  selectedBoard.color === 'teal' ? 'bg-teal-500' : 'bg-purple-500'
                }`} />
                <span className="text-gold-300 font-medium">{selectedBoard.label}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${boardOpen ? 'rotate-180' : ''}`}>
                  <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              
              {boardOpen && (
                <div className="absolute top-full mt-2 left-0 w-64 glass-bright rounded-xl border border-border-bright shadow-2xl shadow-black/40 overflow-hidden z-50 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
                  {boards.map((board) => {
                    const isAllowed = !isAuthenticated || (user?.isAdmin || user?.track === board.id);

                    return (
                      <button
                        key={board.id}
                        disabled={isAuthenticated && !isAllowed}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all text-left cursor-pointer ${
                          isAllowed 
                            ? "text-slate-200 hover:text-white hover:bg-white/[0.05]" 
                            : "text-slate-600 cursor-not-allowed opacity-40 hover:bg-transparent"
                        }`}
                        onClick={() => {
                          if (!isAuthenticated) {
                            setIsLoginOpen(true);
                            setBoardOpen(false);
                            return;
                          }

                          if (isAllowed) {
                            setSelectedBoard(board);
                            setBoardOpen(false);
                            window.location.href = `/dashboard/curriculum`;
                          }
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            board.color === 'gold' ? 'bg-gold-500' :
                            board.color === 'teal' ? 'bg-teal-500' : 'bg-purple-500'
                          }`} />
                          <div>
                            <div className="font-medium">{board.label}</div>
                            <div className="text-[10px] text-slate-500">{board.code}</div>
                          </div>
                        </div>
                        
                        {isAuthenticated && !isAllowed && (
                          <Lock className="h-3 w-3 text-slate-600" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons / User Menu */}
          <div className="hidden md:flex items-center gap-3" id="header-cta">
            {isAuthenticated ? (
              /* User Notification Bell & Profile Menu Wrapper */
              <div className="relative flex items-center gap-3">
                {/* Notification Bell */}
                <div className="relative">
                  <button
                    onClick={handleOpenNotif}
                    className="p-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-gold-500/20 text-slate-300 hover:text-white transition-all cursor-pointer relative flex items-center justify-center"
                    id="announcements-bell-btn"
                  >
                    <Bell className="w-5 h-5" />
                    {unreadCount > 0 && (
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
                    )}
                  </button>

                  {/* Announcements Menu Popover */}
                  {notifMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-80 glass-bright rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
                      <div className="p-4 border-b border-white/5 bg-white/[0.01] flex justify-between items-center">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Announcements</span>
                        {announcements.length > 0 && (
                          <span className="text-[10px] bg-gold-500/10 border border-gold-500/20 text-gold-400 font-bold px-2 py-0.5 rounded-full">
                            {announcements.length} New
                          </span>
                        )}
                      </div>
                      <div className="max-h-80 overflow-y-auto p-2 space-y-1.5 custom-scrollbar">
                        {announcements.length > 0 ? (
                          announcements.map((ann) => (
                            <div 
                              key={ann.id} 
                              className={`p-3 rounded-xl border transition-all ${
                                ann.category === 'Important' 
                                  ? 'bg-rose-500/10 border-rose-500/20 text-rose-200' 
                                  : ann.category === 'Event'
                                  ? 'bg-amber-500/10 border-amber-500/20 text-amber-200'
                                  : ann.category === 'Update'
                                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-200'
                                  : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-200'
                              }`}
                            >
                              <div className="flex justify-between items-start gap-2">
                                <span className="font-bold text-xs text-white truncate max-w-[170px]">{ann.title}</span>
                                <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase ${
                                  ann.category === 'Important' ? 'bg-rose-500/25 text-rose-300' :
                                  ann.category === 'Event' ? 'bg-amber-500/25 text-amber-300' :
                                  ann.category === 'Update' ? 'bg-emerald-500/25 text-emerald-300' :
                                  'bg-indigo-500/25 text-indigo-300'
                                }`}>{ann.category}</span>
                              </div>
                              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed line-clamp-3">{ann.content}</p>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-8 text-xs text-slate-500 font-medium">
                            No announcements to show.
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* User Profile Menu */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setProfileMenuOpen(!profileMenuOpen);
                      setNotifMenuOpen(false);
                    }}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-gold-500/20 transition-all cursor-pointer"
                    id="profile-dropdown-btn"
                  >
                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-gold-500 to-teal-500 p-[1.5px] shadow-lg shadow-gold-500/10">
                      <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                        {user?.image ? (
                          (user.image.startsWith('http') || user.image.startsWith('/') || user.image.startsWith('data:')) ? (
                            <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-lg">{user.image}</span>
                          )
                        ) : (
                          userInitial
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-slate-200 max-w-[100px] truncate">
                      {user?.name?.split(' ')[0] || 'Student'}
                    </span>
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  </button>

                  {profileMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-64 glass-bright rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
                      {/* User Header */}
                      <div className="p-4 border-b border-white/5 bg-white/[0.01]">
                        <p className="text-xs text-slate-400 font-medium">Signed in as</p>
                        <p className="text-sm font-bold text-white truncate mt-0.5">{user?.name || 'Student'}</p>
                        <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gold-500/10 border border-gold-500/20 text-gold-400 uppercase">
                          {selectedBoard.label}
                        </span>
                      </div>

                      {/* Menu Items */}
                      <div className="p-1.5 space-y-0.5">
                        <Link
                          href="/dashboard"
                          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all"
                          onClick={() => setProfileMenuOpen(false)}
                        >
                          <LayoutDashboard className="h-4 w-4 text-slate-400" />
                          <span>My Dashboard</span>
                        </Link>
                        
                        <Link
                          href="/dashboard/profile"
                          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all"
                          onClick={() => setProfileMenuOpen(false)}
                        >
                          <UserIcon className="h-4 w-4 text-slate-400" />
                          <span>Profile Settings</span>
                        </Link>
                      </div>

                      <div className="p-1.5 border-t border-white/5 bg-white/[0.01]">
                        <button
                          onClick={() => {
                            logout();
                            setProfileMenuOpen(false);
                          }}
                          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all cursor-pointer"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="px-5 py-2.5 text-sm text-muted hover:text-white transition-colors duration-300 cursor-pointer"
                  id="login-btn"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="px-5 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-105 cursor-pointer"
                  id="get-started-btn"
                >
                  Start Practicing
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  mobileMenuOpen
                    ? "rotate-45 translate-y-2"
                    : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  mobileMenuOpen
                    ? "-rotate-45 -translate-y-2"
                    : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          id="mobile-menu"
        >
          <div className="px-6 pb-6 pt-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-border" />
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-3 px-3 py-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-500 to-teal-500 p-[1px]">
                    <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                      {user?.image ? (
                        (user.image.startsWith('http') || user.image.startsWith('/') || user.image.startsWith('data:')) ? (
                          <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-lg">{user.image}</span>
                        )
                      ) : (
                        userInitial
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-white truncate">{user?.name}</span>
                    <span className="text-[10px] text-gold-400 font-semibold uppercase">{selectedBoard.label}</span>
                  </div>
                </div>
                <Link
                  href="/dashboard"
                  className="text-center py-3 rounded-xl bg-navy-900 border border-border text-white font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-center py-3 rounded-xl border border-white/10 text-slate-300 font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsLoginOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="text-center py-3 rounded-xl border border-border text-white font-medium cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setIsLoginOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="text-center py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-medium cursor-pointer"
                >
                  Start Practicing
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
