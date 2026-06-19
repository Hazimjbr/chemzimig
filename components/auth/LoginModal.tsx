"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { X, Lock, User as UserIcon, Eye, EyeOff } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { loginWithCredentials, isLoading } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [devicePending, setDevicePending] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const result = await loginWithCredentials({ username, password });

      if (result.success) {
        onClose();
      } else if (result.requiresDeviceApproval) {
        setDevicePending(true);
      } else {
        setError(result.error || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-navy-950/90 p-8 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Decorative Background Orbs */}
        <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-48 w-48 rounded-full bg-teal-500/10 blur-3xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500 to-teal-500 text-white text-2xl mb-4 shadow-lg shadow-gold-500/10">
            ⚗️
          </div>
          <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
            Welcome to ChemZim
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Sign in to access your registered curriculum
          </p>
        </div>

        {devicePending ? (
          <div className="text-center py-4 relative z-10">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-lg font-bold text-gold-400 mb-2">New Device Detected</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Your login attempt was flagged because this device is not recognized. Please contact your instructor to approve this device.
            </p>
            <button
              onClick={() => setDevicePending(false)}
              className="w-full py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {error && (
              <div className="rounded-xl border border-red-500/25 bg-red-500/10 p-3.5 text-xs text-red-300 flex items-start gap-2.5">
                <span className="text-sm mt-0.5">⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* Username */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">Username</label>
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full bg-navy-900/60 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-navy-900/60 border border-white/10 rounded-xl py-3 pl-11 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-bold text-sm hover:from-gold-500 hover:to-gold-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gold-500/10 mt-6"
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>

            <p className="text-[11px] text-center text-slate-500 pt-2">
              Platform access is restricted to invited students.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
