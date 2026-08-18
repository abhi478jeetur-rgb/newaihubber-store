'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Home, ArrowLeft, RefreshCw } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState<number>(8);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white selection:bg-amber-500 selection:text-black">
      {/* 1. Full-Cover Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ik.imagekit.io/a57jpcchpv/hubber%20web/Image_with_404_202603281855.jpeg"
          alt="404 Page Not Found Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85 scale-105 filter contrast-105"
        />
        {/* Subtle Dark Gradient Overlay for optimal contrast & text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70 backdrop-blur-[2px]" />
      </div>

      {/* 2. Glassmorphism Content Card */}
      <div className="relative z-10 container max-w-xl mx-auto px-4 py-12 text-center space-y-6">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-amber-300 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          Page Not Found · Error 404
        </div>

        {/* Big 404 Heading */}
        <div className="space-y-2">
          <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 drop-shadow-2xl">
            404
          </h1>
          <p className="text-lg sm:text-2xl font-bold text-neutral-100 tracking-tight">
            Looks like you've wandered into unknown territory.
          </p>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
            The page or digital product link you requested might have been moved, renamed, or is currently unavailable.
          </p>
        </div>

        {/* Auto Redirect Countdown */}
        <div className="p-4 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-lg max-w-sm mx-auto space-y-2 shadow-2xl">
          <div className="flex items-center justify-center gap-2 text-xs text-neutral-300 font-medium">
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
            <span>Redirecting to Homepage automatically in</span>
            <span className="font-mono font-bold text-amber-400 text-sm px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/30">
              {countdown}s
            </span>
          </div>

          <div className="w-full bg-neutral-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-500 to-amber-300 h-full transition-all duration-1000 ease-linear rounded-full"
              style={{ width: `${(countdown / 8) * 100}%` }}
            />
          </div>
        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black font-bold text-sm transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Store Home →</span>
          </Link>

          <button
            onClick={() => router.back()}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </main>
  );
}
