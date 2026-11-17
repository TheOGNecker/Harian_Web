// @ts-nocheck
import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Search,
  MapPin,
  Clock,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  User,
  Building2,
  FileText,
  Plus,
  Download,
  ShieldCheck,
  Check,
  X,
  Calendar,
  Wallet,
  ArrowRight,
  SlidersHorizontal,
  PlayCircle,
  Sparkles,
  TrendingUp,
  Award,
  Layers,
  ChevronRight,
  ChevronDown,
  RefreshCw,
  FileSpreadsheet,
  MessageSquareOff,
  HelpCircle
} from 'lucide-react';

// ============================================================================
// 1. SINGLE-SOURCE CSS VARIABLES (:root) & GLOBAL 60FPS MATTE FROSTED GLASS STYLES
// ============================================================================
const GlobalLightThemeStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap');

    :root {
      --bg: #F3F7FF;
      --bg-soft: #EBF2FF;
      --surface: rgba(255, 255, 255, 0.72);
      --surface-strong: rgba(255, 255, 255, 0.86);
      --surface-input: rgba(244, 248, 255, 0.78);
      --border: rgba(255, 255, 255, 0.88);
      --border-subtle: rgba(203, 220, 252, 0.65);
      --primary: #1D6FE8;
      --primary-dark: #1555B8;
      --primary-light: rgba(220, 232, 253, 0.75);
      --text: #0F1B33;
      --text-muted: #526382;
      --gradient-accent: linear-gradient(92deg, #1E90FF 0%, #246BFD 52%, #3949FF 100%);
      --shadow-card:
        0 24px 64px rgba(32, 84, 198, 0.10),
        0 4px 16px rgba(32, 84, 198, 0.04),
        inset 0 1.5px 2px rgba(255, 255, 255, 0.95);
      --shadow-card-hover:
        0 30px 76px rgba(32, 84, 198, 0.16),
        0 8px 24px rgba(32, 84, 198, 0.07),
        inset 0 1.5px 3px rgba(255, 255, 255, 1);
      --shadow-btn: 0 12px 28px rgba(36, 107, 253, 0.30);
    }

    * {
      box-sizing: border-box;
    }

    html {
      margin: 0;
      padding: 0;
      background-color: var(--bg);
      overflow-x: hidden;
      overflow-y: auto;
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 100%;
      background-color: var(--bg);
      color: var(--text-muted);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow: visible;
    }

    #root {
      width: 100%;
      overflow-x: clip;
    }

    h1, h2, h3, h4, .heading-tight {
      color: var(--text);
      font-weight: 600;
      letter-spacing: -0.035em;
    }

    .font-mono-metric {
      font-family: 'JetBrains Mono', monospace;
      font-variant-numeric: tabular-nums;
    }

    .text-accent-primary {
      color: var(--primary);
    }

    /* Ambient Clarity-Engine Cobalt Blue, Periwinkle & Warm Ivory Mesh Canvas */
    .navos-ambient-canvas {
      background:
        radial-gradient(circle at 15% 18%, rgba(26, 86, 219, 0.28) 0%, rgba(26, 86, 219, 0) 46%),
        radial-gradient(circle at 84% 22%, rgba(59, 130, 246, 0.26) 0%, rgba(59, 130, 246, 0) 48%),
        radial-gradient(circle at 72% 58%, rgba(255, 244, 228, 0.85) 0%, rgba(255, 244, 228, 0) 45%),
        radial-gradient(circle at 24% 76%, rgba(37, 99, 235, 0.24) 0%, rgba(37, 99, 235, 0) 52%),
        linear-gradient(135deg, #DCE9FF 0%, #EAF2FF 38%, #F4F6FB 70%, #E2ECFF 100%);
      background-attachment: fixed;
    }

    /* Pastel Sky, Cobalt Glow & Acrylic Hero Mist */
    .hero-pastel-sky {
      background:
        radial-gradient(circle at 22% 62%, rgba(24, 90, 219, 0.26) 0%, rgba(24, 90, 219, 0) 48%),
        radial-gradient(circle at 78% 68%, rgba(255, 243, 224, 0.78) 0%, rgba(255, 243, 224, 0) 46%),
        radial-gradient(circle at 50% 24%, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0) 55%);
    }

    /* Smooth Section Gradient Blending (Translucent so Acrylic Backdrop Shines Through) */
    .section-blend-soft {
      background:
        radial-gradient(circle at 72% 50%, rgba(29, 111, 232, 0.22) 0%, rgba(29, 111, 232, 0) 52%),
        radial-gradient(circle at 28% 60%, rgba(255, 246, 232, 0.75) 0%, rgba(255, 246, 232, 0) 50%);
    }

    /* Translucent Frosted Acrylic Glass Card (Clarity Engine Style) */
    .harian-surface-card {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.56) 0%,
        rgba(255, 255, 255, 0.34) 52%,
        rgba(240, 247, 255, 0.50) 100%
      );
      backdrop-filter: blur(36px) saturate(190%);
      -webkit-backdrop-filter: blur(36px) saturate(190%);
      border: 1.5px solid rgba(255, 255, 255, 0.78);
      outline: 1px solid rgba(255, 255, 255, 0.28);
      border-radius: 28px;
      box-shadow:
        0 28px 68px rgba(18, 56, 142, 0.14),
        0 6px 20px rgba(18, 56, 142, 0.06),
        inset 0 1.5px 2px rgba(255, 255, 255, 0.92),
        inset 0 -1px 2px rgba(255, 255, 255, 0.45);
      transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.28s ease, box-shadow 0.28s ease;
      will-change: transform, opacity;
    }

    .harian-blog-card {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.58) 0%,
        rgba(255, 255, 255, 0.36) 54%,
        rgba(240, 247, 255, 0.52) 100%
      );
      backdrop-filter: blur(36px) saturate(190%);
      -webkit-backdrop-filter: blur(36px) saturate(190%);
      border: 1.5px solid rgba(255, 255, 255, 0.82);
      outline: 1px solid rgba(255, 255, 255, 0.30);
      border-radius: 28px;
      box-shadow:
        0 28px 68px rgba(18, 56, 142, 0.14),
        0 6px 20px rgba(18, 56, 142, 0.06),
        inset 0 1.5px 2px rgba(255, 255, 255, 0.95),
        inset 0 -1px 2px rgba(255, 255, 255, 0.45);
      transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.28s ease, box-shadow 0.28s ease;
      will-change: transform;
    }

    .harian-blog-card:hover {
      transform: translate3d(0, -4px, 0);
      border-color: rgba(255, 255, 255, 0.98);
      box-shadow:
        0 34px 80px rgba(18, 56, 142, 0.19),
        0 10px 26px rgba(18, 56, 142, 0.08),
        inset 0 2px 3px rgba(255, 255, 255, 1);
    }

    /* Frosted Matte Input Fields (Translucent Acrylic) */
    .frosted-input {
      background: rgba(255, 255, 255, 0.48) !important;
      backdrop-filter: blur(18px) saturate(170%);
      -webkit-backdrop-filter: blur(18px) saturate(170%);
      border: 1px solid rgba(255, 255, 255, 0.78) !important;
      color: var(--text) !important;
      box-shadow: inset 0 1px 2px rgba(15, 27, 51, 0.04), 0 1px 0 rgba(255, 255, 255, 0.85);
      transition: all 0.2s ease;
    }

    .frosted-input:focus {
      background: rgba(255, 255, 255, 0.74) !important;
      border-color: var(--primary) !important;
      box-shadow: 0 0 0 4px rgba(29, 111, 232, 0.14);
    }

    /* Floating Frosted Chat Bubble (Acrylic Pill) */
    .navos-chat-bubble {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.36) 100%);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.86);
      box-shadow: 0 14px 34px rgba(20, 64, 160, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.92);
      border-radius: 16px;
      color: var(--text);
    }

    /* Primary & Secondary Pill Buttons */
    .btn-pill-primary {
      background: var(--gradient-accent);
      color: #FFFFFF;
      border-radius: 14px;
      font-weight: 600;
      border: 1px solid rgba(255, 255, 255, 0.28);
      box-shadow: var(--shadow-btn), inset 0 1px 1px rgba(255, 255, 255, 0.35);
      transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.22s ease, opacity 0.22s ease;
      will-change: transform;
    }

    .btn-pill-primary:hover {
      transform: translate3d(0, -2px, 0);
      box-shadow: 0 16px 34px rgba(36, 107, 253, 0.38), inset 0 1px 2px rgba(255, 255, 255, 0.45);
    }

    .btn-pill-secondary {
      background: rgba(255, 255, 255, 0.76);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      color: var(--text);
      border: 1.5px solid rgba(255, 255, 255, 0.92);
      outline: 1px solid rgba(190, 212, 250, 0.45);
      border-radius: 14px;
      font-weight: 600;
      box-shadow: 0 8px 24px rgba(32, 84, 198, 0.06);
      transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.22s ease, background-color 0.22s ease, color 0.22s ease;
      will-change: transform;
    }

    .btn-pill-secondary:hover {
      transform: translate3d(0, -2px, 0);
      background: rgba(255, 255, 255, 0.94);
      color: var(--primary);
    }

    .btn-pill-navy {
      background: linear-gradient(135deg, #16284C 0%, #0F1B33 100%);
      color: #FFFFFF;
      border-radius: 14px;
      font-weight: 600;
      border: 1px solid rgba(255, 255, 255, 0.18);
      box-shadow: 0 12px 28px rgba(15, 27, 51, 0.18);
      transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.22s ease;
      will-change: transform;
    }

    .btn-pill-navy:hover {
      transform: translate3d(0, -2px, 0);
      background: var(--gradient-accent);
    }

    /* Sticky Matte Frosted White Navbar */
    .sticky-glass-nav {
      background: rgba(255, 255, 255, 0.68);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.85);
      box-shadow: 0 8px 32px rgba(32, 84, 198, 0.05);
      transition: padding 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease;
    }

    .nav-link-animated {
      position: relative;
      color: var(--text-muted);
      font-weight: 500;
      transition: color 0.2s ease;
    }

    .nav-link-animated:hover,
    .nav-link-animated.active {
      color: var(--primary);
    }

    .nav-link-animated::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 2px;
      background: var(--primary);
      border-radius: 2px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    }

    /* CreateUI-Style Animated Vertical Step Indicator (Translucent Frosted Acrylic) */
    .createui-stepper-card {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.58) 0%,
        rgba(255, 255, 255, 0.34) 52%,
        rgba(238, 246, 255, 0.52) 100%
      );
      backdrop-filter: blur(38px) saturate(195%);
      -webkit-backdrop-filter: blur(38px) saturate(195%);
      border: 1.5px solid rgba(255, 255, 255, 0.82);
      outline: 1px solid rgba(255, 255, 255, 0.30);
      border-radius: 32px;
      box-shadow:
        0 30px 76px rgba(18, 56, 142, 0.15),
        0 8px 24px rgba(18, 56, 142, 0.06),
        inset 0 1.5px 3px rgba(255, 255, 255, 0.95),
        inset 0 -1px 2px rgba(255, 255, 255, 0.45);
      position: relative;
      overflow: hidden;
    }

    .createui-step-node {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        background-color 0.25s cubic-bezier(0.22, 1, 0.36, 1),
        border-radius 0.25s cubic-bezier(0.22, 1, 0.36, 1),
        transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
        box-shadow 0.25s ease;
      will-change: transform, background-color, border-radius;
    }

    .createui-step-node.is-completed {
      background-color: #16A34A;
      color: #FFFFFF;
      border-radius: 9999px;
      transform: scale(1);
      box-shadow: 0 6px 16px rgba(22, 163, 74, 0.25);
    }

    .createui-step-node.is-active {
      background-color: var(--primary);
      color: #FFFFFF;
      border-radius: 9px;
      transform: scale(1.04);
      box-shadow:
        0 0 0 4px rgba(29, 111, 232, 0.16),
        0 8px 18px rgba(29, 111, 232, 0.28);
    }

    .createui-step-node.is-upcoming {
      background-color: rgba(216, 227, 246, 0.72);
      color: #94A3B8;
      border-radius: 9px;
      border: 1px solid rgba(255, 255, 255, 0.85);
      transform: scale(0.94);
    }

    .createui-connector-track {
      width: 2px;
      background-color: rgba(203, 218, 245, 0.65);
      border-radius: 999px;
      overflow: hidden;
      position: relative;
    }

    .createui-connector-fill {
      width: 100%;
      border-radius: 999px;
      transition: height 0.32s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.25s ease;
    }

    /* GPU-Only View Switch Transition */
    .view-transition-enter {
      animation: viewEnter 0.32s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      will-change: transform, opacity;
    }

    @keyframes viewEnter {
      from {
        opacity: 0;
        transform: translate3d(0, 14px, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    /* Smooth Scroll-Down Reveal & Stagger Transitions (60fps GPU) */
    .scroll-reveal-section {
      opacity: 0;
      transform: translate3d(0, 44px, 0) scale(0.985);
      transition:
        opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1),
        transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
      will-change: transform, opacity;
    }

    .scroll-reveal-section.is-inview {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
    }

    .scroll-reveal-card {
      opacity: 0;
      transform: translate3d(0, 36px, 0) scale(0.97);
      transition:
        opacity 0.78s cubic-bezier(0.22, 1, 0.36, 1),
        transform 0.78s cubic-bezier(0.22, 1, 0.36, 1),
        border-color 0.28s ease,
        box-shadow 0.28s ease;
      transition-delay: var(--stagger-delay, 0ms);
      will-change: transform, opacity;
    }

    .scroll-reveal-card.is-inview {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
    }

    .hero-scroll-layer {
      transition: transform 0.12s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.12s linear;
      will-change: transform, opacity;
    }

    @media (prefers-reduced-motion: reduce) {
      *, ::before, ::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
      .scroll-reveal-section,
      .scroll-reveal-card {
        opacity: 1 !important;
        transform: none !important;
      }
    }
  `}</style>
);

// ============================================================================
// 1B. IRIDESCENT 3D SILK RIBBON WAVE & COBALT ACRYLIC BACKDROP
// ============================================================================
const NavosSilkWaveBackdrop = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
    {/* Deep Cobalt & Sapphire Orbs + Warm Ivory Glow Behind Acrylic Cards */}
    <div
      className="absolute -top-20 left-[6%] w-[540px] h-[540px] rounded-full opacity-80"
      style={{
        background:
          'radial-gradient(circle, rgba(25, 92, 226, 0.34) 0%, rgba(25, 92, 226, 0) 68%)'
      }}
    />
    <div
      className="absolute top-[18%] right-[4%] w-[620px] h-[620px] rounded-full opacity-85"
      style={{
        background:
          'radial-gradient(circle, rgba(37, 99, 235, 0.32) 0%, rgba(96, 165, 250, 0) 70%)'
      }}
    />
    <div
      className="absolute top-[42%] right-[18%] w-[520px] h-[520px] rounded-full opacity-90"
      style={{
        background:
          'radial-gradient(circle, rgba(255, 241, 218, 0.85) 0%, rgba(255, 241, 218, 0) 68%)'
      }}
    />
    <div
      className="absolute bottom-[-8%] left-[14%] w-[680px] h-[480px] rounded-full opacity-80"
      style={{
        background:
          'radial-gradient(circle, rgba(29, 78, 216, 0.30) 0%, rgba(147, 197, 253, 0) 72%)'
      }}
    />

    {/* Flowing Translucent 3D Silk Wave SVG */}
    <svg
      className="absolute bottom-0 left-0 w-full h-[54vh] min-h-[360px]"
      viewBox="0 0 1440 600"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="navosWaveMain" x1="0%" y1="20%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#9AB8FF" stopOpacity="0.22" />
          <stop offset="42%" stopColor="#5D87FF" stopOpacity="0.52" />
          <stop offset="76%" stopColor="#7DA3FF" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#DCE8FF" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="navosWaveFrost" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.88" />
          <stop offset="50%" stopColor="#E6F0FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.92" />
        </linearGradient>
        <linearGradient id="navosRimGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#BFD6FF" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Deep Iridescent Blue-Periwinkle Silk Fold */}
      <path
        d="M-80 470 C 210 460, 430 170, 770 210 C 1080 245, 1240 410, 1520 350 L 1520 620 L -80 620 Z"
        fill="url(#navosWaveMain)"
      />

      {/* Secondary Translucent Frosted Ribbon */}
      <path
        d="M-60 530 C 260 490, 510 240, 860 280 C 1140 312, 1290 450, 1520 420 L 1520 620 L -60 620 Z"
        fill="url(#navosWaveFrost)"
      />

      {/* Specular White Glass Highlight Edge Along the Wave Crest */}
      <path
        d="M-80 470 C 210 460, 430 170, 770 210 C 1080 245, 1240 410, 1520 350"
        stroke="url(#navosRimGlow)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M-60 530 C 260 490, 510 240, 860 280 C 1140 312, 1290 450, 1520 420"
        stroke="#FFFFFF"
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

// ============================================================================
// 2. OFFICIAL "har/an" LOGO SVG (WITH MAGNIFYING GLASS SLASH)
// ============================================================================
const HarianLogo = ({ size = 'md' }) => {
  const dims = {
    sm: { w: 98, h: 34 },
    md: { w: 118, h: 42 },
    lg: { w: 148, h: 52 }
  }[size] || { w: 118, h: 42 };

  return (
    <span className="inline-flex items-center select-none">
      <svg
        width={dims.w}
        height={dims.h}
        viewBox="0 0 232 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <text
          x="2"
          y="76"
          fill="var(--primary)"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: '66px',
            letterSpacing: '-0.045em'
          }}
        >
          har
        </text>
        <path
          d="M111 76 L127 40"
          stroke="var(--primary)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <circle
          cx="143"
          cy="21"
          r="18.5"
          stroke="var(--primary)"
          strokeWidth="6.5"
          fill="var(--surface)"
        />
        <path
          d="M131.5 16.5 A12.5 12.5 0 0 1 139.5 9.5"
          stroke="var(--primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="144.5" cy="9" r="2.2" fill="var(--primary)" />
        <text
          x="133"
          y="76"
          fill="var(--text)"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: '66px',
            letterSpacing: '-0.045em'
          }}
        >
          an
        </text>
      </svg>
    </span>
  );
};

// ============================================================================
// 3. INITIAL RKPL APPLICATION DATA
// ============================================================================
const INITIAL_JOBS = [
  {
    id: 'job-1',
    title: 'Warehouse Packer (Night Shift)',
    company: 'FastLogistics ID',
    location: 'Bekasi',
    rate: 175000,
    workTime: '22:00 - 06:00',
    scheduleType: 'Night Shift',
    category: 'Logistics & Warehouse',
    quota: 15,
    applicantsCount: 12,
    integrityScore: '4.9 / 5.0 (Verified Partner)',
    escrowHeld: 2625000,
    escrowStage: 'HELD',
    matchScore: 98,
    picName: 'Budi Hartono (Supervisor Shift Malam)',
    picPhone: '+62 812-8890-1122',
    dresscode: 'Sepatu tertutup (safety shoes diutamakan), celana panjang rapi.',
    description:
      'Mencari tenaga packer harian cekatan untuk memenuhi lonjakan pesanan kampanye bulanan di gudang utama Bekasi. Melakukan pemindaian barcode dan pelabelan paket sesuai SOP.'
  },
  {
    id: 'job-2',
    title: 'SPG Event Pameran',
    company: 'PT Karya Maju',
    location: 'ICE BSD',
    rate: 250000,
    workTime: '09:00 - 17:00',
    scheduleType: 'Morning Shift',
    category: 'Event Staff',
    quota: 10,
    applicantsCount: 24,
    integrityScore: '4.8 / 5.0 (Top Employer)',
    escrowHeld: 2500000,
    escrowStage: 'HELD',
    matchScore: 92,
    picName: 'Rina Wijaya (Event Coordinator)',
    picPhone: '+62 811-9021-3344',
    dresscode: 'Kemeja putih bersih, celana bahan rapi, sepatu kets bersih.',
    description:
      'Menyambut pengunjung booth pameran elektronik nasional, menjelaskan katalog promo produk, serta membantu registrasi pengunjung di aplikasi acara.'
  },
  {
    id: 'job-3',
    title: 'Banquet Waiter / Waitress',
    company: 'Hotel Mulia Senayan',
    location: 'Jakarta',
    rate: 185000,
    workTime: '07:00 - 15:00',
    scheduleType: 'Morning Shift',
    category: 'Hospitality',
    quota: 20,
    applicantsCount: 9,
    integrityScore: '4.9 / 5.0 (Verified Partner)',
    escrowHeld: 3700000,
    escrowStage: 'HELD',
    matchScore: 95,
    picName: 'Hendra Kusuma (Banquet Captain)',
    picPhone: '+62 813-7788-9900',
    dresscode: 'Kemeja putih lengan panjang, celana kain formal, pantofel.',
    description:
      'Melayani jamuan konferensi nasional di ballroom utama, menata table set-up standar perhotelan bintang lima, dan menjaga kerapihan area prasmanan.'
  },
  {
    id: 'job-4',
    title: 'Kitchen Helper Harian',
    company: 'Restoran FGH Sudirman',
    location: 'Jakarta',
    rate: 150000,
    workTime: '10:00 - 18:00',
    scheduleType: 'Morning Shift',
    category: 'Hospitality',
    quota: 8,
    applicantsCount: 8,
    integrityScore: '4.7 / 5.0 (Verified)',
    escrowHeld: 1200000,
    escrowStage: 'PAID_H2',
    matchScore: 89,
    picName: 'Chef Antonius',
    picPhone: '+62 815-4433-2211',
    dresscode: 'Kaos polos rapi, apron disediakan di lokasi, sepatu anti-slip.',
    description:
      'Membantu persiapan bahan masakan dapur utama, menjaga sanitasi peralatan masak, dan membantu pengemasan pesanan pesan-antar.'
  }
];

const INITIAL_APPLICATIONS = [
  {
    id: 'app-1',
    jobId: 'job-1',
    jobTitle: 'Warehouse Packer (Night Shift)',
    company: 'FastLogistics ID',
    rate: 175000,
    status: 'Pending',
    appliedAt: 'Hari ini, 14:20 WIB'
  },
  {
    id: 'app-2',
    jobId: 'job-4',
    jobTitle: 'Kitchen Helper Harian',
    company: 'Restoran FGH Sudirman',
    rate: 150000,
    status: 'Gaji Cair H+2',
    appliedAt: '2 Hari Lalu'
  }
];

const INITIAL_CANDIDATES = [
  {
    id: 'cand-1',
    name: 'Budi Santoso',
    roleTarget: 'Warehouse Packer (Night Shift)',
    exp: 95,
    avail: 92,
    dist: 90,
    doc: 100,
    status: 'Pending'
  },
  {
    id: 'cand-2',
    name: 'Gede Bagus Teguh Saka Phalguna',
    roleTarget: 'Warehouse Packer (Night Shift)',
    exp: 89,
    avail: 90,
    dist: 86,
    doc: 95,
    status: 'Diterima'
  },
  {
    id: 'cand-3',
    name: 'Ida Bagus Ngurah Sanjaya',
    roleTarget: 'SPG Event Pameran',
    exp: 84,
    avail: 86,
    dist: 82,
    doc: 90,
    status: 'Pending'
  },
  {
    id: 'cand-4',
    name: 'Dwito Fajar Septianto',
    roleTarget: 'Banquet Waiter / Waitress',
    exp: 78,
    avail: 82,
    dist: 79,
    doc: 88,
    status: 'Pending'
  }
];

const CARA_KERJA_STEPS = {
  worker: [
    {
      step: '01',
      title: 'Buat akun Harian kamu',
      desc: 'Akun kamu langsung siap dipakai. Cukup daftar dengan email aktif dan setujui simulasi nota upah bersih 90% di awal tanpa perlu instal aplikasi.',
      badge: null,
      hasActions: false
    },
    {
      step: '02',
      title: 'Lengkapi pengalaman & rekening H+2',
      desc: 'Terkonfirmasi. Kami menyimpan riwayat kerja harian dan nomor rekening bank/e-wallet kamu agar pencairan gaji berjalan otomatis.',
      badge: null,
      hasActions: false
    },
    {
      step: '03',
      title: 'Pilih lowongan & satu klik lamar',
      desc: 'Saring kerjaan harian sesuai lokasi, jam shift, dan upah minimum, lalu kirim lamaran beserta dokumen KTP dalam satu klik.',
      badge: null,
      hasActions: true,
      primaryActionLabel: 'Lanjutkan',
      secondaryActionLabel: 'Coba Daftar Sekarang'
    },
    {
      step: '04',
      title: 'Pantau status lamaran real-time',
      desc: 'Begitu HRD mengevaluasi berkasmu dengan metode MFEP, status Pending, Diterima, atau Ditolak langsung ter-update di layar.',
      badge: 'Real-Time',
      hasActions: false
    },
    {
      step: '05',
      title: 'Kerja selesai, gaji cair maksimal H+2',
      desc: 'Dana upah yang sudah dikunci di Escrow Payment Gateway otomatis ditransfer ke rekening kamu maksimal 2 hari setelah shift selesai.',
      badge: 'Jaminan H+2',
      hasActions: false
    }
  ],
  hrd: [
    {
      step: '01',
      title: 'Daftarkan akun instansi / HRD',
      desc: 'Profil perusahaan Anda siap digunakan. Anda dapat mengatur identitas instansi dan kontak PIC lapangan kapan saja di pengaturan.',
      badge: null,
      hasActions: false
    },
    {
      step: '02',
      title: 'Pasang lowongan & kunci dana Escrow',
      desc: 'Terkonfirmasi. Sistem memvalidasi standar upah layak dan mengunci total dana upah (Kuota × Upah Harian) di HarianPay sebelum lowongan tayang.',
      badge: null,
      hasActions: false
    },
    {
      step: '03',
      title: 'Seleksi kandidat otomatis dengan MFEP',
      desc: 'Tentukan bobot pengalaman, ketersediaan shift, domisili, dan berkas. Sistem otomatis mengurutkan skor kelayakan pelamar secara transparan.',
      badge: null,
      hasActions: true,
      primaryActionLabel: 'Lanjutkan',
      secondaryActionLabel: 'Buka Simulasi HRD'
    },
    {
      step: '04',
      title: 'Terima pelamar dalam satu klik',
      desc: 'Pilih kandidat terbaik dari tabel peringkat MFEP dan kirimkan notifikasi penerimaan otomatis secara real-time ke pekerja.',
      badge: 'Upcoming',
      hasActions: false
    },
    {
      step: '05',
      title: 'Cairkan gaji H+2 & unduh laporan CSV',
      desc: 'Tandai shift pekerjaan selesai untuk mencairkan dana ke pekerja dan ekspor rekapitulasi laporan rekrutmen resmi dalam hitungan detik.',
      badge: 'Laporan Instan',
      hasActions: false
    }
  ]
};

const KENAPA_HARIAN_POINTS = [
  {
    id: 'kh-1',
    title: 'Gaji maksimal 2 hari setelah kerja selesai.',
    desc: 'Dana upah dikelola secara aman lewat payment gateway sehingga kamu nggak perlu cemas gaji ditahan berminggu-minggu.'
  },
  {
    id: 'kh-2',
    title: 'Status lamaran real-time, jadi nggak perlu menebak-nebak.',
    desc: 'Begitu HRD memproses berkasmu, status Pending, Diterima, atau Ditolak langsung ter-update otomatis di layar kamu.'
  },
  {
    id: 'kh-3',
    title: 'Seleksi transparan dengan skor yang bisa ditelusuri.',
    desc: 'Sistem menggunakan perhitungan metode MFEP berdasarkan pengalaman, ketersediaan waktu, domisili, dan kelengkapan dokumen.'
  },
  {
    id: 'kh-4',
    title: 'Integritas perusahaan ditampilkan sebelum kamu melamar.',
    desc: 'Setiap lowongan memuat rating rekam jejak pemberi kerja dan rincian tugas yang jelas sejak awal.'
  }
];

const WA_VS_HARIAN_ROWS = [
  {
    wa: 'Info tenggelam di chat',
    harian: 'Lowongan rapi dan bisa difilter'
  },
  {
    wa: 'Status lamaran nggak jelas',
    harian: 'Status terlihat real-time'
  },
  {
    wa: 'Gaji tergantung kepercayaan',
    harian: 'Pembayaran lewat payment gateway'
  }
];

const FAQ_ITEMS = [
  {
    q: 'Ada potongan?',
    a: 'Ada service fee 10%. Contoh: upah Rp150.000, kamu terima Rp135.000.'
  },
  {
    q: 'Perlu instal aplikasi?',
    a: 'Nggak, cukup buka di browser.'
  },
  {
    q: 'Lamaran ditolak?',
    a: 'Tenang, kamu langsung bisa lihat lowongan lain.'
  },
  {
    q: 'Kapan gaji cair?',
    a: 'Maksimal 2 hari setelah pekerjaan ditandai selesai.'
  }
];

const FOOTER_INFO_CONTENT = {
  Tentang: {
    title: 'Tentang Harian',
    body: 'Harian adalah platform web pencari kerja harian (daily worker) yang mempertemukan pekerja harian dan instansi pemberi kerja secara transparan, dilengkapi filter pencarian cepat, seleksi metode MFEP, dan pembayaran via payment gateway.'
  },
  Kontak: {
    title: 'Kontak Kami',
    body: 'Butuh bantuan operasional atau kerjasama instansi? Hubungi tim Harian melalui email halo@harian.id atau WhatsApp Layanan Pengguna di +62 811-3000-2026 (Aktif 24 Jam).'
  },
  'Syarat dan Ketentuan': {
    title: 'Syarat dan Ketentuan',
    body: 'Setiap lowongan wajib mencantumkan upah layak, jam kerja jelas, serta mengunci dana pembayaran melalui payment gateway sebelum pekerjaan dimulai. Potongan biaya layanan (service fee) sebesar 10% dikenakan saat pencairan upah.'
  },
  'Kebijakan Privasi': {
    title: 'Kebijakan Privasi',
    body: 'Data identitas KTP, nomor rekening, dan riwayat pengalaman kerja Anda dienkripsi dan hanya digunakan untuk keperluan verifikasi rekrutmen serta pencairan upah maksimal H+2.'
  }
};

// ============================================================================
// 4. MAIN REACT APPLICATION COMPONENT
// ============================================================================
export default function App() {
  // Navigation & View State
  // 'landing' | 'login' | 'register' | 'onboarding-worker' | 'onboarding-hrd' | 'profile' | 'worker' | 'hrd'
  const [activeView, setActiveView] = useState('landing');
  const [authenticatedRole, setAuthenticatedRole] = useState(null); // null | 'worker' | 'hrd'
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Landing Page (Versi Gaya D) Interactive States
  const [caraKerjaTab, setCaraKerjaTab] = useState('worker'); // 'worker' | 'hrd'
  const [activeAccessStep, setActiveAccessStep] = useState(0);
  const [footerModalKey, setFooterModalKey] = useState(null);
  const [showHowItWorksModal, setShowHowItWorksModal] = useState(false);

  // Auto-advance the CreateUI Step Indicator in a 7-second infinite loop (7000ms per full cycle)
  useEffect(() => {
    if (activeView !== 'landing') return;
    const stepsLen =
      (CARA_KERJA_STEPS[caraKerjaTab] || CARA_KERJA_STEPS.worker).length;
    const stepIntervalMs = Math.round(7000 / (stepsLen + 1)); // ~1167ms per state -> 7.0s full cycle loop
    const interval = setInterval(() => {
      setActiveAccessStep((prev) => (prev >= stepsLen ? 0 : prev + 1));
    }, stepIntervalMs);
    return () => clearInterval(interval);
  }, [activeView, caraKerjaTab]);

  // Registration & Post-Register Onboarding States (With Receipt & Service Fee Consent)
  const [registerRole, setRegisterRole] = useState('worker'); // 'worker' | 'hrd'
  const [registerEmail, setRegisterEmail] = useState('budi.santoso@gmail.com');
  const [registerPassword, setRegisterPassword] = useState('harian123');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('harian123');
  const [sampleReceiptRate, setSampleReceiptRate] = useState(150000);
  const [agreeServiceFee, setAgreeServiceFee] = useState(false);
  const [showTermsServiceModal, setShowTermsServiceModal] = useState(false);
  const [workerOnboardStep, setWorkerOnboardStep] = useState(1);
  const [workerFavLocation, setWorkerFavLocation] = useState('Bekasi');
  const [workerFavCategory, setWorkerFavCategory] = useState(
    'Logistics & Warehouse'
  );
  const [hrdOnboardStep, setHrdOnboardStep] = useState(1);
  const [hrdProfile, setHrdProfile] = useState({
    companyName: 'PT Karya Maju',
    industry: 'Event & Logistik Terpadu',
    picContact: 'Admin HRD (+62 811-2233-4455)',
    paymentMethod: 'Virtual Account BCA (Escrow HarianPay)'
  });

  // Auth & Profile Wizard State (UC-01 & UC-02)
  const [loginRole, setLoginRole] = useState('worker'); // 'worker' | 'hrd'
  const [loginEmail, setLoginEmail] = useState('budisantoso@gmail.com');
  const [loginPassword, setLoginPassword] = useState('harian123');
  const [loginError, setLoginError] = useState('');
  const [profileStep, setProfileStep] = useState(1);
  const [workerProfile, setWorkerProfile] = useState({
    fullName: 'Budi Santoso',
    phone: '+62 812-3456-7890',
    city: 'Bekasi, Jawa Barat',
    bankAccount: 'BCA - 7410889210 (Budi Santoso)',
    experiences: [
      {
        id: 'exp-1',
        role: 'Delivery Driver & Warehouse Helper',
        company: 'Speedy Deliveries Inc',
        period: 'Jan 2025 - Des 2025'
      }
    ]
  });
  const [newExpRole, setNewExpRole] = useState('');
  const [newExpCompany, setNewExpCompany] = useState('');

  // Core Portal Data State (Jobs, Applications, Candidates, Filters)
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  const [candidates, setCandidates] = useState(INITIAL_CANDIDATES);
  const [selectedJobId, setSelectedJobId] = useState(INITIAL_JOBS[0].id);
  const [workerSubTab, setWorkerSubTab] = useState('explore'); // 'explore' | 'applications'
  const [hrdSubTab, setHrdSubTab] = useState('jobs'); // 'jobs' | 'mfep' | 'escrow'
  const [hrdWalletBalance, setHrdWalletBalance] = useState(25000000);

  // Filter State (UC-05)
  const [filterKeyword, setFilterKeyword] = useState('');
  const [filterLocation, setFilterLocation] = useState('ALL');
  const [filterCategory, setFilterCategory] = useState('ALL');
  const [filterShift, setFilterShift] = useState('ALL');
  const [filterMinRate, setFilterMinRate] = useState('');

  // MFEP Weights State (UC-08)
  const [mfepWeights, setMfepWeights] = useState({
    exp: 40,
    avail: 30,
    dist: 20,
    doc: 10
  });

  // Create Job Modal State (UC-03)
  const [showCreateJobModal, setShowCreateJobModal] = useState(false);
  const [createJobError, setCreateJobError] = useState('');
  const [newJobForm, setNewJobForm] = useState({
    title: 'Crew Gudang & Logistik Harian',
    location: 'Bekasi',
    rate: 175000,
    quota: 10,
    workTime: '08:00 - 16:00',
    scheduleType: 'Morning Shift',
    category: 'Logistics & Warehouse',
    picName: 'Budi Hartono (Supervisor)',
    picPhone: '+62 812-8890-1122',
    dresscode: 'Kaos rapi, celana panjang, sepatu tertutup.',
    description:
      'Membantu proses sortir barang masuk, pelabelan paket harian, dan menjaga kerapihan area gudang sesuai SOP.'
  });

  // Scroll & Animation Refs
  const landingRootRef = useRef(null);
  const heroSectionRef = useRef(null);
  const heroHeadlineRef = useRef(null);
  const heroMockupRef = useRef(null);
  const cloudLayerSlowRef = useRef(null);
  const cloudLayerFastRef = useRef(null);
  const footerSectionRef = useRef(null);
  const footerPeekMockupRef = useRef(null);
  const toastTimerRef = useRef(null);

  const formatRupiah = (num) =>
    'Rp ' + Number(num || 0).toLocaleString('id-ID');

  const triggerToast = (message) => {
    setToastMessage(String(message || ''));
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3400);
  };

  // Sticky Navbar Shrink Listener + Smooth Scroll Parallax & Reveal Observer (60fps)
  useEffect(() => {
    let rafId = null;

    const updateScrollTransforms = () => {
      const y = window.scrollY || window.pageYOffset;
      const scrolled = y > 24;
      setIsNavScrolled((prev) => (prev !== scrolled ? scrolled : prev));

      // Apply smooth GPU parallax on Landing Hero elements while scrolling down
      if (heroHeadlineRef.current) {
        const progress = Math.min(1, Math.max(0, y / 520));
        const translateY = y * 0.22;
        const scale = 1 - progress * 0.06;
        const opacity = Math.max(0.15, 1 - progress * 0.82);
        heroHeadlineRef.current.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
        heroHeadlineRef.current.style.opacity = opacity.toFixed(3);
      }

      if (heroMockupRef.current) {
        const progress = Math.min(1, Math.max(0, y / 460));
        const liftY = (1 - progress) * 18 - progress * 14;
        const scale = 0.97 + progress * 0.03;
        heroMockupRef.current.style.transform = `translate3d(0, ${liftY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
      }

      if (cloudLayerSlowRef.current) {
        cloudLayerSlowRef.current.style.transform = `translate3d(0, ${(y * 0.14).toFixed(1)}px, 0)`;
      }

      if (cloudLayerFastRef.current) {
        cloudLayerFastRef.current.style.transform = `translate3d(0, ${(y * -0.10).toFixed(1)}px, 0)`;
      }

      if (footerPeekMockupRef.current && footerSectionRef.current) {
        const rect = footerSectionRef.current.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        const enterRatio = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.75)));
        const peekY = (1 - enterRatio) * 42;
        const peekScale = 0.95 + enterRatio * 0.05;
        footerPeekMockupRef.current.style.transform = `translate3d(0, ${peekY.toFixed(1)}px, 0) scale(${peekScale.toFixed(3)})`;
        footerPeekMockupRef.current.style.opacity = (0.35 + enterRatio * 0.65).toFixed(3);
      }

      rafId = null;
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateScrollTransforms);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollTransforms();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [activeView]);

  // IntersectionObserver for Scroll-Down Section & Card Reveal Transitions
  useEffect(() => {
    const rootEl = document;
    const targets = rootEl.querySelectorAll(
      '.scroll-reveal-section, .scroll-reveal-card'
    );
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-inview'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
          } else if (entry.boundingClientRect.top > 0) {
            // Re-animate smoothly when scrolling back down again
            entry.target.classList.remove('is-inview');
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -48px 0px'
      }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeView, workerSubTab, hrdSubTab]);

  // ============================================================================
  // 6. COMPUTED FILTERED JOBS (PORTAL) + MFEP RANKINGS
  // ============================================================================
  const filteredJobs = useMemo(() => {
    const kw = filterKeyword.trim().toLowerCase();
    const minRate = Number(filterMinRate || 0);
    return jobs.filter((job) => {
      const matchKw =
        !kw ||
        job.title.toLowerCase().includes(kw) ||
        job.company.toLowerCase().includes(kw);
      const matchLoc =
        filterLocation === 'ALL' ||
        job.location.toLowerCase().includes(filterLocation.toLowerCase());
      const matchCat =
        filterCategory === 'ALL' || job.category === filterCategory;
      const matchShift =
        filterShift === 'ALL' || job.scheduleType === filterShift;
      const matchRate = job.rate >= minRate;
      return matchKw && matchLoc && matchCat && matchShift && matchRate;
    });
  }, [
    jobs,
    filterKeyword,
    filterLocation,
    filterCategory,
    filterShift,
    filterMinRate
  ]);

  const selectedJob = useMemo(
    () => jobs.find((j) => j.id === selectedJobId) || jobs[0],
    [jobs, selectedJobId]
  );

  const rankedCandidates = useMemo(() => {
    const totalWeight =
      mfepWeights.exp +
        mfepWeights.avail +
        mfepWeights.dist +
        mfepWeights.doc || 100;
    return candidates
      .map((c) => {
        const weightedExp = (c.exp * (mfepWeights.exp / totalWeight)) / 100;
        const weightedAvail =
          (c.avail * (mfepWeights.avail / totalWeight)) / 100;
        const weightedDist = (c.dist * (mfepWeights.dist / totalWeight)) / 100;
        const weightedDoc = (c.doc * (mfepWeights.doc / totalWeight)) / 100;
        const totalScore =
          weightedExp + weightedAvail + weightedDist + weightedDoc;
        return {
          ...c,
          weightedExp: weightedExp.toFixed(3),
          weightedAvail: weightedAvail.toFixed(3),
          weightedDist: weightedDist.toFixed(3),
          weightedDoc: weightedDoc.toFixed(3),
          mfepScore: totalScore.toFixed(3)
        };
      })
      .sort((a, b) => Number(b.mfepScore) - Number(a.mfepScore));
  }, [candidates, mfepWeights]);

  // ============================================================================
  // 7. INTERACTIVE HANDLERS (ALL RKPL USE CASES + GAYA D ONBOARDING)
  // ============================================================================
  const switchView = (targetView) => {
    setActiveView(targetView);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const openRoleLogin = (role) => {
    setLoginRole(role);
    setLoginError('');
    setLoginEmail(
      role === 'worker' ? 'budisantoso@gmail.com' : 'hrd@karyamaju.co.id'
    );
    setLoginPassword('harian123');
    switchView('login');
  };

  const openRoleRegister = (role) => {
    setRegisterRole(role);
    setRegisterEmail(
      role === 'worker' ? 'budi.santoso@gmail.com' : 'rekrutmen@karyamaju.co.id'
    );
    setRegisterPassword('harian123');
    setRegisterConfirmPassword('harian123');
    setAgreeServiceFee(false);
    switchView('register');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!agreeServiceFee) {
      triggerToast('Harap centang persetujuan Syarat & Ketentuan (S&K) serta Service Charge 10%.');
      return;
    }
    if (!registerEmail.includes('@') || registerPassword.length < 4) {
      triggerToast('Masukkan email yang valid dan kata sandi minimal 4 karakter.');
      return;
    }
    if (registerPassword !== registerConfirmPassword) {
      triggerToast('Konfirmasi kata sandi tidak cocok.');
      return;
    }
    if (registerRole === 'worker') {
      if (!workerProfile.fullName.trim() || !workerProfile.phone.trim()) {
        triggerToast('Mohon lengkapi biodata Nama Lengkap dan Nomor WhatsApp.');
        return;
      }
      if (newExpRole.trim() && newExpCompany.trim()) {
        setWorkerProfile((prev) => ({
          ...prev,
          experiences: [
            ...prev.experiences,
            {
              id: 'exp-' + Date.now(),
              role: newExpRole.trim(),
              company: newExpCompany.trim(),
              period: '2026 (Terverifikasi)'
            }
          ]
        }));
      }
      setFilterLocation(workerFavLocation);
      setFilterCategory(workerFavCategory);
      setAuthenticatedRole('worker');
      triggerToast(
        `Pendaftaran selesai! Selamat datang, ${workerProfile.fullName}.`
      );
      switchView('worker');
    } else {
      if (!hrdProfile.companyName.trim()) {
        triggerToast('Mohon isi Nama Perusahaan / Instansi.');
        return;
      }
      setAuthenticatedRole('hrd');
      triggerToast(
        `Akun Instansi ${hrdProfile.companyName} berhasil didaftarkan!`
      );
      switchView('hrd');
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginPassword === 'salah123' || !loginEmail.includes('@')) {
      setLoginError('Email atau Password salah, silahkan coba lagi.');
      return;
    }
    setLoginError('');
    if (loginRole === 'hrd') {
      setAuthenticatedRole('hrd');
      triggerToast('Berhasil masuk ke Portal Instansi PT Karya Maju.');
      switchView('hrd');
    } else {
      setAuthenticatedRole('worker');
      triggerToast('Berhasil masuk sebagai Budi Santoso (Pekerja Harian).');
      switchView('worker');
    }
  };

  const handleLogout = () => {
    setAuthenticatedRole(null);
    triggerToast('Anda telah keluar dari sesi akun Harian.');
    switchView('landing');
  };

  const handleDownloadTermsPdfFile = () => {
    const docContent = [
      '====================================================================',
      'DOKUMEN RESMI: SYARAT DAN KETENTUAN PENGGUNAAN PLATFORM HARIAN 2026',
      'No. Dokumen: SK-HARIAN/ESCROW/2026/V1.4',
      '====================================================================',
      '',
      'PASAL 1 - DEFINISI & RUANG LINGKUP LAYANAN',
      'Platform Harian ("Sistem") adalah aplikasi web murni yang mempertemukan',
      'Pekerja Harian (Daily Worker) dengan Instansi Pemberi Kerja secara transparan.',
      '',
      'PASAL 2 - MEKANISME ESCROW & JAMINAN PENCAIRAN GAJI MAKSIMAL H+2',
      '1. Instansi wajib menyetorkan 100% dana upah (Kuota Pekerja x Upah Harian)',
      '   ke rekening bersama (Escrow HarianPay) sebelum lowongan dipublikasikan.',
      '2. Pencairan upah ke rekening Pekerja Harian dilakukan secara otomatis',
      '   selambat-lambatnya 2x24 jam (H+2) setelah pekerjaan ditandai selesai.',
      '',
      'PASAL 3 - KETENTUAN POTONGAN BIAYA LAYANAN (SERVICE CHARGE 10%)',
      '1. Setiap transaksi pencairan upah dikenakan biaya layanan platform',
      '   (Service Charge) sebesar 10% dari nominal upah kotor harian.',
      '2. Pekerja Harian menerima bersih 90% dari nominal upah yang tertera.',
      '   Contoh: Upah Rp 150.000 -> Service Charge Rp 15.000 -> Bersih Rp 135.000.',
      '',
      'PASAL 4 - SELEKSI OBJEKTIF METODE MFEP & KEAKURATAN BIODATA',
      '1. Pengguna wajib mendaftarkan identitas KTP dan rekening bank/e-wallet valid.',
      '2. Seleksi kandidat dilakukan menggunakan algoritma Multi-Factor Evaluation',
      '   Process (MFEP) berdasarkan pengalaman, jam shift, domisili, dan dokumen.',
      '',
      'PASAL 5 - PEMBATALAN LAMARAN & SANKSI PELANGGARAN',
      '1. Pekerja dapat membatalkan lamaran selama status masih "Pending".',
      '2. Ketidakhadiran tanpa keterangan setelah status "Diterima" akan menurunkan',
      '   skor reputasi akun pada sistem Harian.',
      '===================================================================='
    ].join('\n');

    const blob = new Blob([docContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Syarat_dan_Ketentuan_Harian_2026.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    triggerToast('File PDF Syarat & Ketentuan berhasil diunduh.');
  };

  const handleAddExperience = () => {
    if (!newExpRole.trim() || !newExpCompany.trim()) {
      triggerToast('Mohon isi posisi dan nama perusahaan pengalaman kerja.');
      return;
    }
    setWorkerProfile((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          id: 'exp-' + Date.now(),
          role: newExpRole.trim(),
          company: newExpCompany.trim(),
          period: '2026 (Terverifikasi)'
        }
      ]
    }));
    setNewExpRole('');
    setNewExpCompany('');
    triggerToast('Pengalaman kerja berhasil ditambahkan untuk algoritma rekomendasi.');
  };

  const handleApplyToJob = (job) => {
    const exists = applications.some(
      (a) => a.jobId === job.id && a.status !== 'Dibatalkan'
    );
    if (exists) {
      triggerToast('Anda sudah melamar pekerjaan ini sebelumnya.');
      return;
    }
    if (job.applicantsCount >= job.quota + 20) {
      triggerToast('Kuota pelamar penuh untuk lowongan ini.');
      return;
    }
    const newApp = {
      id: 'app-' + Date.now(),
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      rate: job.rate,
      status: 'Pending',
      appliedAt: 'Baru saja'
    };
    setApplications((prev) => [newApp, ...prev]);
    setJobs((prev) =>
      prev.map((j) =>
        j.id === job.id ? { ...j, applicantsCount: j.applicantsCount + 1 } : j
      )
    );
    triggerToast(
      `Lamaran & berkas KTP untuk "${job.title}" berhasil disimpan! Status: Pending.`
    );
  };

  const handleCancelApplication = (appId) => {
    const target = applications.find((a) => a.id === appId);
    if (!target) return;
    if (target.status !== 'Pending') {
      triggerToast('Lamaran sudah diproses dan tidak dapat dibatalkan.');
      return;
    }
    setApplications((prev) =>
      prev.map((a) => (a.id === appId ? { ...a, status: 'Dibatalkan' } : a))
    );
    triggerToast('Lamaran berhasil dibatalkan dan antrean dikosongkan.');
  };

  const handleCandidateDecision = (candId, decision) => {
    const target = candidates.find((c) => c.id === candId);
    if (!target) return;
    setCandidates((prev) =>
      prev.map((c) => (c.id === candId ? { ...c, status: decision } : c))
    );
    if (target.name === 'Budi Santoso') {
      setApplications((prev) =>
        prev.map((a, idx) => (idx === 0 ? { ...a, status: decision } : a))
      );
    }
    triggerToast(
      `Status kandidat ${target.name} diperbarui menjadi "${decision}" secara real-time!`
    );
  };

  const handleReleaseEscrowH2 = (jobId) => {
    const targetJob = jobs.find((j) => j.id === jobId);
    if (!targetJob) return;
    setJobs((prev) =>
      prev.map((j) => (j.id === jobId ? { ...j, escrowStage: 'PAID_H2' } : j))
    );
    setApplications((prev) =>
      prev.map((a) =>
        a.jobId === jobId ? { ...a, status: 'Gaji Cair H+2' } : a
      )
    );
    triggerToast(
      `Pekerjaan "${targetJob.title}" selesai! Gaji H+2 otomatis ditransfer ke rekening pekerja (potong Service Fee 10%).`
    );
  };

  const handleCreateJobSubmit = (e) => {
    e.preventDefault();
    const rateNum = Number(newJobForm.rate || 0);
    const quotaNum = Number(newJobForm.quota || 0);
    if (rateNum < 100000) {
      setCreateJobError(
        'Peringatan: Nominal upah harian berada di bawah standar kelayakan minimum (Rp 100.000).'
      );
      return;
    }
    const totalEscrow = rateNum * quotaNum;
    if (totalEscrow > hrdWalletBalance) {
      setCreateJobError(
        'Saldo HarianPay Korporat tidak mencukupi untuk menahan dana Escrow di awal.'
      );
      return;
    }
    setCreateJobError('');
    const createdJob = {
      id: 'job-' + Date.now(),
      title: newJobForm.title || 'Crew Operasional Harian',
      company: 'PT Karya Maju',
      location: newJobForm.location,
      rate: rateNum,
      workTime: newJobForm.workTime,
      scheduleType: newJobForm.scheduleType,
      category: newJobForm.category,
      quota: quotaNum,
      applicantsCount: 1,
      integrityScore: '4.9 / 5.0 (Verified Partner)',
      escrowHeld: totalEscrow,
      escrowStage: 'HELD',
      matchScore: 94,
      picName: newJobForm.picName,
      picPhone: newJobForm.picPhone,
      dresscode: newJobForm.dresscode,
      description: newJobForm.description
    };
    setJobs((prev) => [createdJob, ...prev]);
    setHrdWalletBalance((prev) => prev - totalEscrow);
    setSelectedJobId(createdJob.id);
    setShowCreateJobModal(false);
    triggerToast(
      `Lowongan "${createdJob.title}" dipublikasikan & dana Escrow ${formatRupiah(totalEscrow)} berhasil ditahan!`
    );
  };

  const handleDownloadCsv = () => {
    const accepted = rankedCandidates.filter((c) => c.status === 'Diterima');
    if (accepted.length === 0) {
      triggerToast(
        'Laporan kosong. Belum ada kandidat yang diterima untuk diekspor.'
      );
      return;
    }
    const headers = [
      'Nama Kandidat',
      'Posisi',
      'Skor MFEP',
      'Pengalaman',
      'Ketersediaan Shift',
      'Domisili',
      'Dokumen',
      'Status'
    ];
    const rows = rankedCandidates.map((c) => [
      `"${c.name}"`,
      `"${c.roleTarget}"`,
      c.mfepScore,
      c.exp,
      c.avail,
      c.dist,
      c.doc,
      c.status
    ]);
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Laporan_Rekrutmen_Harian_MFEP.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    triggerToast('Laporan Rekrutmen (CSV) berhasil diunduh dalam < 2 detik!');
  };

  const scrollToSection = (sectionId) => {
    if (activeView !== 'landing') {
      setActiveView('landing');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ============================================================================
  // 8. RENDER STICKY GLASS NAVBAR
  // ============================================================================
  const renderStickyNavbar = () => (
    <header
      className={`sticky-glass-nav fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 ${
        isNavScrolled ? 'py-2.5' : 'py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => switchView('landing')}
          className="flex items-center gap-2 focus:outline-none"
        >
          <HarianLogo size="sm" />
        </button>

        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm">
          <button
            type="button"
            onClick={() => switchView('landing')}
            className={`nav-link-animated ${
              activeView === 'landing' ? 'active' : ''
            }`}
          >
            Get Started
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('caraAksesSection')}
            className="nav-link-animated"
          >
            Cara Akses
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('kenapaHarianSection')}
            className="nav-link-animated"
          >
            Kenapa Harian?
          </button>

          {/* Menu Portal HANYA muncul sesuai role setelah user login */}
          {authenticatedRole === 'worker' && (
            <>
              <button
                type="button"
                onClick={() => switchView('worker')}
                className={`nav-link-animated font-semibold ${
                  activeView === 'worker' ? 'active' : ''
                }`}
              >
                Portal Pekerja
              </button>
              <button
                type="button"
                onClick={() => switchView('profile')}
                className={`nav-link-animated ${
                  activeView === 'profile' ? 'active' : ''
                }`}
              >
                Profil Saya
              </button>
            </>
          )}

          {authenticatedRole === 'hrd' && (
            <button
              type="button"
              onClick={() => switchView('hrd')}
              className={`nav-link-animated font-semibold ${
                activeView === 'hrd' ? 'active' : ''
              }`}
            >
              Portal Instansi (HRD)
            </button>
          )}
        </nav>

        <div className="flex items-center gap-2.5">
          {!authenticatedRole ? (
            <>
              <button
                type="button"
                onClick={() => switchView('login')}
                className="btn-pill-secondary px-4 py-2 text-xs sm:text-sm"
              >
                Masuk
              </button>
              <button
                type="button"
                onClick={() => openRoleRegister('worker')}
                className="btn-pill-primary px-4 sm:px-5 py-2 text-xs sm:text-sm"
              >
                Daftar
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() =>
                  switchView(authenticatedRole === 'worker' ? 'worker' : 'hrd')
                }
                className="btn-pill-primary px-4 py-2 text-xs sm:text-sm"
              >
                {authenticatedRole === 'worker'
                  ? 'Buka Portal Pekerja'
                  : 'Buka Portal Instansi'}
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="btn-pill-secondary px-3.5 py-2 text-xs sm:text-sm"
              >
                Keluar
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );

  // ============================================================================
  // 9A. RENDER VIEW 1: GET STARTED LANDING VIEW (VERSI GAYA D + ACRYLIC + SCROLL)
  // ============================================================================
  const renderLandingView = () => {
    const activeSteps =
      CARA_KERJA_STEPS[caraKerjaTab] || CARA_KERJA_STEPS.worker;

    return (
      <main ref={landingRootRef} className="pt-20 pb-20 overflow-x-clip">
        {/* 1. HERO + PILIH PERAN */}
        <section
          ref={heroSectionRef}
          className="hero-pastel-sky relative pt-10 pb-20 px-4 sm:px-8 overflow-hidden"
        >
          <div
            ref={cloudLayerSlowRef}
            className="pointer-events-none absolute -top-10 left-[8%] w-72 h-32 rounded-full bg-white/55 blur-2xl"
          />
          <div
            ref={cloudLayerFastRef}
            className="pointer-events-none absolute top-24 right-[10%] w-80 h-36 rounded-full bg-[#DCE8FD]/60 blur-2xl"
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <div
              ref={heroHeadlineRef}
              className="hero-scroll-layer text-center max-w-3xl mx-auto mb-12"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 border"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.72)',
                  borderColor: 'var(--border)',
                  color: 'var(--primary)'
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Platform Kerja Harian &amp; Escrow Payment Gateway</span>
              </span>

              <h1 className="heading-tight text-4xl sm:text-6xl leading-[1.08] mb-4">
                Butuh cuan hari ini?{' '}
                <span className="text-accent-primary">Cari di Harian.</span>
              </h1>

              <p className="text-sm sm:text-lg max-w-xl mx-auto leading-relaxed mb-7">
                Banyak kerjaan harian, satu klik lamar. Gaji aman, nggak perlu nunggu lama.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3.5">
                <button
                  type="button"
                  onClick={() => openRoleRegister('worker')}
                  className="btn-pill-primary px-7 py-3.5 text-sm inline-flex items-center gap-2"
                >
                  <span>Cari Kerja</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => openRoleRegister('hrd')}
                  className="btn-pill-secondary px-7 py-3.5 text-sm inline-flex items-center gap-2"
                >
                  <span>Cari Pekerja</span>
                  <Building2 className="w-4 h-4 text-accent-primary" />
                </button>
              </div>
            </div>

            {/* 2. DUA KARTU PILIH PERAN (AKRILIK) */}
            <div
              ref={heroMockupRef}
              className="hero-scroll-layer grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              <div className="harian-surface-card p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white flex items-center justify-center text-accent-primary mb-5 shadow-sm">
                    <User className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase text-accent-primary">
                    UNTUK PENCARI KERJA HARIAN
                  </span>
                  <h2 className="heading-tight text-2xl sm:text-3xl mt-1 mb-2">
                    Cari Kerja
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed mb-6">
                    &ldquo;Temukan kerjaan harian sesuai lokasi dan jam kamu.&rdquo;
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openRoleRegister('worker')}
                  className="btn-pill-primary w-full py-3.5 text-sm inline-flex items-center justify-center gap-2"
                >
                  <span>Daftar sebagai Pekerja</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="harian-surface-card p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white flex items-center justify-center text-accent-primary mb-5 shadow-sm">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase text-accent-primary">
                    UNTUK PERUSAHAAN / INSTANSI
                  </span>
                  <h2 className="heading-tight text-2xl sm:text-3xl mt-1 mb-2">
                    Cari Pekerja
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed mb-6">
                    &ldquo;Dapatkan pekerja harian tanpa ribet bolak-balik chat.&rdquo;
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openRoleRegister('hrd')}
                  className="btn-pill-secondary w-full py-3.5 text-sm inline-flex items-center justify-center gap-2"
                >
                  <span>Daftar sebagai Instansi</span>
                  <ArrowRight className="w-4 h-4 text-accent-primary" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CARA AKSES (CREATEUI 7-SECOND INFINITE LOOP STEPPER) */}
        <section
          id="caraAksesSection"
          className="scroll-reveal-section section-blend-soft py-16 sm:py-24 px-4 sm:px-8"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span
                className="inline-block text-xs font-semibold px-3.5 py-1 rounded-full"
                style={{
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)'
                }}
              >
                Cara Akses Ekosistem Harian
              </span>
              <h2 className="heading-tight text-3xl sm:text-4xl leading-tight">
                Alur akses cepat dari{' '}
                <span className="text-accent-primary">daftar</span> sampai{' '}
                <span className="text-accent-primary">gaji cair H+2</span>.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Pilih tab peran di bawah untuk melihat tahapan otomatis mulai dari pengisian biodata hingga pencairan dana Escrow.
              </p>

              <div className="inline-flex p-1.5 rounded-2xl bg-white/60 border border-white backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => {
                    setCaraKerjaTab('worker');
                    setActiveAccessStep(0);
                  }}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                    caraKerjaTab === 'worker'
                      ? 'bg-[#1D6FE8] text-white shadow-sm'
                      : 'text-[#526382]'
                  }`}
                >
                  Alur Pekerja
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCaraKerjaTab('hrd');
                    setActiveAccessStep(0);
                  }}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                    caraKerjaTab === 'hrd'
                      ? 'bg-[#1D6FE8] text-white shadow-sm'
                      : 'text-[#526382]'
                  }`}
                >
                  Alur Instansi
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="createui-stepper-card p-6 sm:p-9 pointer-events-none select-none">
                <div className="space-y-1">
                  {activeSteps.map((item, idx) => {
                    const isCompleted = idx < activeAccessStep;
                    const isActive = idx === activeAccessStep;
                    const isLast = idx === activeSteps.length - 1;

                    return (
                      <div key={item.step} className="flex items-stretch gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`createui-step-node shrink-0 ${
                              isCompleted
                                ? 'is-completed'
                                : isActive
                                ? 'is-active'
                                : 'is-upcoming'
                            }`}
                          >
                            {isCompleted ? (
                              <Check className="w-4 h-4 stroke-[2.6]" />
                            ) : (
                              <span className="text-[11px] font-mono-metric font-bold">
                                {item.step}
                              </span>
                            )}
                          </div>
                          {!isLast && (
                            <div className="createui-connector-track flex-1 my-1.5 min-h-[26px]">
                              <div
                                className="createui-connector-fill"
                                style={{
                                  height: isCompleted
                                    ? '100%'
                                    : isActive
                                    ? '55%'
                                    : '0%',
                                  backgroundColor: isCompleted
                                    ? '#16A34A'
                                    : 'var(--primary)'
                                }}
                              />
                            </div>
                          )}
                        </div>

                        <div className="pb-5 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3
                              className="text-sm sm:text-base font-semibold transition-colors"
                              style={{
                                color:
                                  isCompleted || isActive
                                    ? 'var(--text)'
                                    : '#8A9AB8'
                              }}
                            >
                              {item.title}
                            </h3>
                            {item.badge && (
                              <span
                                className="text-[10px] font-mono-metric font-semibold px-2.5 py-0.5 rounded-full"
                                style={{
                                  backgroundColor: 'var(--primary-light)',
                                  color: 'var(--primary)'
                                }}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p
                            className="text-xs sm:text-sm mt-1 leading-relaxed transition-opacity"
                            style={{
                              opacity: isCompleted || isActive ? 0.92 : 0.55
                            }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. KENAPA HARIAN? (4 POIN) */}
        <section
          id="kenapaHarianSection"
          className="scroll-reveal-section py-16 sm:py-24 px-4 sm:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span
                className="inline-block text-xs font-semibold px-3.5 py-1 rounded-full mb-3"
                style={{
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)'
                }}
              >
                Kenapa Harian?
              </span>
              <h2 className="heading-tight text-3xl sm:text-4xl">
                Dirancang agar kerja harian lebih{' '}
                <span className="text-accent-primary">pasti &amp; transparan</span>.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {KENAPA_HARIAN_POINTS.map((pt, idx) => (
                <div
                  key={pt.id}
                  style={{ '--stagger-delay': `${idx * 110}ms` }}
                  className="scroll-reveal-card harian-blog-card p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="w-10 h-10 rounded-2xl flex items-center justify-center font-mono-metric font-bold text-xs"
                      style={{
                        backgroundColor: 'var(--primary-light)',
                        color: 'var(--primary)'
                      }}
                    >
                      0{idx + 1}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-accent-primary" />
                  </div>
                  <h3 className="heading-tight text-lg sm:text-xl mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CTA PENUTUP & FOOTER */}
        <section
          ref={footerSectionRef}
          className="scroll-reveal-section pt-8 pb-12 px-4 sm:px-8"
        >
          <div
            ref={footerPeekMockupRef}
            className="max-w-5xl mx-auto harian-surface-card p-8 sm:p-12 text-center"
          >
            <h2 className="heading-tight text-2xl sm:text-4xl mb-3">
              Siap kerja hari ini? Daftar sekarang, isi biodata &amp; sandi sekaligus.
            </h2>
            <p className="text-xs sm:text-base max-w-xl mx-auto mb-6">
              Transparan sejak awal dengan simulasi nota Service Charge 10% di dalam Syarat &amp; Ketentuan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => openRoleRegister('worker')}
                className="btn-pill-primary px-8 py-3.5 text-sm"
              >
                Daftar Gratis
              </button>
              <button
                type="button"
                onClick={() => switchView('login')}
                className="btn-pill-secondary px-7 py-3.5 text-sm"
              >
                Sudah Punya Akun? Masuk
              </button>
            </div>

            <div className="mt-10 pt-6 border-t border-white/70 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <HarianLogo size="sm" />
                <span>&copy; 2026 Harian</span>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {Object.keys(FOOTER_INFO_CONTENT).map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => {
                      if (label === 'Syarat dan Ketentuan') {
                        setShowTermsServiceModal(true);
                      } else {
                        setFooterModalKey(label);
                      }
                    }}
                    className="hover:text-[#1D6FE8] font-medium transition"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };

  // ============================================================================
  // 9B. RENDER VIEW: REGISTER DENGAN BIODATA LENGKAP + MODAL LINK S&K (SERVICE CHARGE 10%)
  // ============================================================================
  const renderRegisterView = () => {
    const grossWage = Number(sampleReceiptRate || 150000);
    const serviceFeeAmount = Math.round(grossWage * 0.1);
    const netReceivedAmount = grossWage - serviceFeeAmount;

    return (
      <section className="min-h-screen pt-24 pb-20 px-4 sm:px-8 flex items-center relative z-10 view-transition-enter">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Side: Navos-Style Brand Showcase & Floating Frosted Bubbles */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2.5 max-w-sm">
              <div className="navos-chat-bubble px-4 py-2.5 text-xs opacity-60 w-fit">
                &ldquo;Daftar akun langsung isi biodata lengkap?&rdquo;
              </div>
              <div className="navos-chat-bubble px-4 py-2.5 text-xs opacity-80 w-fit ml-4">
                &ldquo;Iya, sekali isi langsung siap lamar kerja &amp; terima gaji H+2.&rdquo;
              </div>
              <div className="navos-chat-bubble px-4 py-2.5 text-xs font-semibold w-fit ml-8 border-[#1D6FE8]/30">
                &ldquo;Cek rincian Service Charge 10% lewat link S&amp;K di bawah!&rdquo;
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-mono-metric tracking-[0.22em] uppercase text-[#526382] mb-2">
                THE FUTURE OF DAILY WORK
              </div>
              <div className="mb-3">
                <HarianLogo size="lg" />
              </div>
              <p className="text-sm sm:text-base leading-relaxed max-w-md">
                Lengkapi biodata dan kata sandi Anda dalam satu langkah. Rincian potongan layanan dan simulasi upah bersih tersedia transparan di halaman Syarat &amp; Ketentuan.
              </p>
            </div>
          </div>

          {/* Right Side: Matte Frosted White Glass Complete Biodata + Password Registration Card */}
          <div className="lg:col-span-7 harian-surface-card p-7 sm:p-10">
            <div className="mb-5">
              <h2 className="heading-tight text-2xl">Daftar Akun Harian</h2>
              <p className="text-xs sm:text-sm mt-1">
                Isi biodata lengkap dan buat kata sandi Anda untuk langsung mengakses ekosistem Harian.
              </p>
            </div>

            {/* Underline Tab Switcher Like Navos */}
            <div className="flex items-center gap-6 border-b border-[#DCE8FD] mb-6">
              <button
                type="button"
                onClick={() => {
                  setRegisterRole('worker');
                  setRegisterEmail('budi.santoso@gmail.com');
                  setAgreeServiceFee(false);
                }}
                className={`pb-3 text-sm font-semibold transition relative ${
                  registerRole === 'worker'
                    ? 'text-[#1D6FE8]'
                    : 'text-[#526382]'
                }`}
              >
                Daftar sebagai Pekerja
                {registerRole === 'worker' && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#1D6FE8] rounded-full" />
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setRegisterRole('hrd');
                  setRegisterEmail('rekrutmen@karyamaju.co.id');
                  setAgreeServiceFee(false);
                }}
                className={`pb-3 text-sm font-semibold transition relative ${
                  registerRole === 'hrd' ? 'text-[#1D6FE8]' : 'text-[#526382]'
                }`}
              >
                Daftar sebagai Instansi
                {registerRole === 'hrd' && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#1D6FE8] rounded-full" />
                )}
              </button>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              {registerRole === 'worker' ? (
                <>
                  {/* Biodata Lengkap Pekerja Harian */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Nama Lengkap (Sesuai KTP) *
                      </label>
                      <input
                        type="text"
                        required
                        value={workerProfile.fullName}
                        onChange={(e) =>
                          setWorkerProfile({
                            ...workerProfile,
                            fullName: e.target.value
                          })
                        }
                        placeholder="Contoh: Budi Santoso"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        type="text"
                        required
                        value={workerProfile.phone}
                        onChange={(e) =>
                          setWorkerProfile({
                            ...workerProfile,
                            phone: e.target.value
                          })
                        }
                        placeholder="+62 812-xxxx-xxxx"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Domisili Saat Ini *
                      </label>
                      <input
                        type="text"
                        required
                        value={workerProfile.city}
                        onChange={(e) =>
                          setWorkerProfile({
                            ...workerProfile,
                            city: e.target.value
                          })
                        }
                        placeholder="Contoh: Bekasi, Jawa Barat"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Rekening Bank / E-Wallet (Pencairan H+2) *
                      </label>
                      <input
                        type="text"
                        required
                        value={workerProfile.bankAccount}
                        onChange={(e) =>
                          setWorkerProfile({
                            ...workerProfile,
                            bankAccount: e.target.value
                          })
                        }
                        placeholder="BCA - No. Rekening (Atas Nama)"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Pengalaman Kerja Terakhir
                      </label>
                      <input
                        type="text"
                        value={newExpRole}
                        onChange={(e) => setNewExpRole(e.target.value)}
                        placeholder="Contoh: Warehouse Helper / SPG"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Kategori Kerja Favorit
                      </label>
                      <select
                        value={workerFavCategory}
                        onChange={(e) => setWorkerFavCategory(e.target.value)}
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      >
                        <option value="Logistics & Warehouse">
                          Logistics &amp; Warehouse
                        </option>
                        <option value="Event Staff">Event Staff</option>
                        <option value="Hospitality">Hospitality</option>
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Biodata Lengkap Instansi / Perusahaan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Nama Perusahaan / Instansi *
                      </label>
                      <input
                        type="text"
                        required
                        value={hrdProfile.companyName}
                        onChange={(e) =>
                          setHrdProfile({
                            ...hrdProfile,
                            companyName: e.target.value
                          })
                        }
                        placeholder="Contoh: PT Karya Maju"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Bidang Industri *
                      </label>
                      <input
                        type="text"
                        required
                        value={hrdProfile.industry}
                        onChange={(e) =>
                          setHrdProfile({
                            ...hrdProfile,
                            industry: e.target.value
                          })
                        }
                        placeholder="Contoh: Logistik / Event / Perhotelan"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Nama &amp; WhatsApp PIC HRD *
                      </label>
                      <input
                        type="text"
                        required
                        value={hrdProfile.picContact}
                        onChange={(e) =>
                          setHrdProfile({
                            ...hrdProfile,
                            picContact: e.target.value
                          })
                        }
                        placeholder="Nama PIC (+62 811-xxxx-xxxx)"
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: 'var(--text)' }}
                      >
                        Metode Pembayaran Escrow Default *
                      </label>
                      <select
                        value={hrdProfile.paymentMethod}
                        onChange={(e) =>
                          setHrdProfile({
                            ...hrdProfile,
                            paymentMethod: e.target.value
                          })
                        }
                        className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      >
                        <option value="Virtual Account BCA (Escrow HarianPay)">
                          Virtual Account BCA (Escrow HarianPay)
                        </option>
                        <option value="Virtual Account Mandiri (Escrow HarianPay)">
                          Virtual Account Mandiri (Escrow HarianPay)
                        </option>
                        <option value="QRIS Korporat Instan">
                          QRIS Korporat Instan
                        </option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* Email & Kata Sandi Sekaligus */}
              <div className="pt-2 border-t border-[#DCE8FD]/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: 'var(--text)' }}
                  >
                    Email Aktif *
                  </label>
                  <input
                    type="email"
                    required
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: 'var(--text)' }}
                  >
                    Buat Kata Sandi *
                  </label>
                  <input
                    type="password"
                    required
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    placeholder="Min. 4 karakter"
                    className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: 'var(--text)' }}
                  >
                    Konfirmasi Sandi *
                  </label>
                  <input
                    type="password"
                    required
                    value={registerConfirmPassword}
                    onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                    placeholder="Ulangi kata sandi"
                    className="frosted-input w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Kotak Persetujuan S&K dengan Link Klik untuk Rincian Service Charge 10% */}
              <div
                className="p-4 rounded-2xl border transition"
                style={{
                  background: 'rgba(255, 255, 255, 0.72)',
                  borderColor: agreeServiceFee
                    ? 'var(--primary)'
                    : 'var(--border)'
                }}
              >
                <div className="flex items-start gap-3">
                  <input
                    id="agreeTermsCheckbox"
                    type="checkbox"
                    checked={agreeServiceFee}
                    onChange={(e) => setAgreeServiceFee(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-[#1D6FE8] rounded cursor-pointer"
                  />
                  <div className="text-xs leading-relaxed" style={{ color: 'var(--text)' }}>
                    <label htmlFor="agreeTermsCheckbox" className="cursor-pointer">
                      Saya menyatakan data biodata di atas benar dan menyetujui{' '}
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowTermsServiceModal(true)}
                      className="font-bold text-accent-primary underline hover:opacity-80"
                    >
                      Syarat &amp; Ketentuan (S&amp;K) serta Ketentuan Service Charge 10%
                    </button>{' '}
                    <span>
                      (contoh simulasi: dari upah{' '}
                      <strong className="font-mono-metric">
                        {formatRupiah(grossWage)}
                      </strong>
                      , saldo bersih diterima{' '}
                      <strong className="font-mono-metric text-accent-primary">
                        {formatRupiah(netReceivedAmount)}
                      </strong>{' '}
                      cair maksimal H+2).
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn-pill-primary w-full py-3.5 text-sm"
                style={{
                  opacity: agreeServiceFee ? 1 : 0.68
                }}
              >
                {registerRole === 'worker'
                  ? 'Daftar & Masuk sebagai Pekerja'
                  : 'Daftar & Masuk sebagai Instansi'}
              </button>
            </form>

            <div className="mt-5 text-center text-xs">
              <span>Sudah punya akun? </span>
              <button
                onClick={() => switchView('login')}
                className="font-semibold text-accent-primary hover:underline"
              >
                Masuk di sini
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderWorkerOnboardingView = () => (
    <section
      className="min-h-screen pt-28 pb-20 px-4 sm:px-8 view-transition-enter"
      style={{ backgroundColor: 'var(--bg-soft)' }}
    >
      <div className="max-w-2xl mx-auto harian-surface-card p-7 sm:p-10">
        <div className="mb-6">
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2"
            style={{
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary)'
            }}
          >
            Onboarding Pekerja Baru
          </span>
          <h2 className="heading-tight text-2xl">
            Siapkan akunmu biar gampang lamar kerja
          </h2>
          <p className="text-xs sm:text-sm mt-1">
            Lengkapi 3 langkah singkat berikut sebelum masuk ke beranda lowongan.
          </p>
        </div>

        {/* 3 Steps Header */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { s: 1, label: '1. Isi Pengalaman' },
            { s: 2, label: '2. Tambah Rekening' },
            { s: 3, label: '3. Lokasi & Favorit' }
          ].map((st) => (
            <button
              key={st.s}
              onClick={() => setWorkerOnboardStep(st.s)}
              className="p-3 rounded-2xl border text-left text-xs font-semibold transition"
              style={{
                backgroundColor:
                  workerOnboardStep === st.s
                    ? 'var(--bg-soft)'
                    : 'var(--surface)',
                borderColor:
                  workerOnboardStep === st.s
                    ? 'var(--primary)'
                    : 'var(--border)',
                color:
                  workerOnboardStep === st.s ? 'var(--primary)' : 'var(--text)'
              }}
            >
              {st.label}
            </button>
          ))}
        </div>

        {workerOnboardStep === 1 && (
          <div className="space-y-4">
            <div>
              <label
                className="block text-xs font-semibold mb-1"
                style={{ color: 'var(--text)' }}
              >
                Nama Lengkap (Sesuai KTP)
              </label>
              <input
                type="text"
                value={workerProfile.fullName}
                onChange={(e) =>
                  setWorkerProfile({
                    ...workerProfile,
                    fullName: e.target.value
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border text-sm"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)'
                }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Pengalaman Kerja Terakhir
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Crew Gudang / Waiter"
                  value={newExpRole}
                  onChange={(e) => setNewExpRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Tempat / Perusahaan
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Gudang Logistik Bekasi"
                  value={newExpCompany}
                  onChange={(e) => setNewExpCompany(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button
                onClick={() => {
                  if (newExpRole.trim() && newExpCompany.trim()) {
                    handleAddExperience();
                  }
                  setWorkerOnboardStep(2);
                }}
                className="btn-pill-primary px-6 py-2.5 text-sm"
              >
                Lanjut Tambah Rekening &rarr;
              </button>
            </div>
          </div>
        )}

        {workerOnboardStep === 2 && (
          <div className="space-y-4">
            <div>
              <label
                className="block text-xs font-semibold mb-1"
                style={{ color: 'var(--text)' }}
              >
                Rekening Bank / E-Wallet Pencairan Gaji (Maksimal H+2)
              </label>
              <input
                type="text"
                value={workerProfile.bankAccount}
                onChange={(e) =>
                  setWorkerProfile({
                    ...workerProfile,
                    bankAccount: e.target.value
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border text-sm"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)'
                }}
              />
              <p className="text-[11px] mt-1.5">
                Gaji kamu otomatis ditransfer ke rekening ini maksimal 2 hari setelah kerja selesai (dipotong service fee 10%).
              </p>
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setWorkerOnboardStep(1)}
                className="btn-pill-secondary px-5 py-2.5 text-sm"
              >
                &larr; Kembali
              </button>
              <button
                onClick={() => setWorkerOnboardStep(3)}
                className="btn-pill-primary px-6 py-2.5 text-sm"
              >
                Lanjut Pilih Lokasi Favorit &rarr;
              </button>
            </div>
          </div>
        )}

        {workerOnboardStep === 3 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Pilih Lokasi Kerja Favorit
                </label>
                <select
                  value={workerFavLocation}
                  onChange={(e) => setWorkerFavLocation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                >
                  <option value="ALL">Semua Lokasi</option>
                  <option value="Bekasi">Bekasi</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="ICE BSD">ICE BSD / Tangerang</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Pilih Jenis Kerja Favorit
                </label>
                <select
                  value={workerFavCategory}
                  onChange={(e) => setWorkerFavCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                >
                  <option value="ALL">Semua Kategori</option>
                  <option value="Logistics & Warehouse">
                    Logistics &amp; Warehouse
                  </option>
                  <option value="Event Staff">Event Staff</option>
                  <option value="Hospitality">Hospitality</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setWorkerOnboardStep(2)}
                className="btn-pill-secondary px-5 py-2.5 text-sm"
              >
                &larr; Kembali
              </button>
              <button
                onClick={() => {
                  setFilterLocation(workerFavLocation);
                  setFilterCategory(workerFavCategory);
                  triggerToast(
                    'Onboarding selesai! Menampilkan lowongan sesuai lokasi & jenis kerja favoritmu.'
                  );
                  switchView('worker');
                }}
                className="btn-pill-primary px-7 py-3 text-sm"
              >
                Selesai &amp; Mulai Cari Kerja &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );

  const renderHrdOnboardingView = () => (
    <section
      className="min-h-screen pt-28 pb-20 px-4 sm:px-8 view-transition-enter"
      style={{ backgroundColor: 'var(--bg-soft)' }}
    >
      <div className="max-w-2xl mx-auto harian-surface-card p-7 sm:p-10">
        <div className="mb-6">
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2"
            style={{
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary)'
            }}
          >
            Onboarding Instansi Baru
          </span>
          <h2 className="heading-tight text-2xl">
            Siapkan akun instansi untuk mulai merekrut
          </h2>
          <p className="text-xs sm:text-sm mt-1">
            Lengkapi profil perusahaan, draf lowongan pertama, dan metode pembayaran.
          </p>
        </div>

        {/* 3 Steps Header */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { s: 1, label: '1. Profil Perusahaan' },
            { s: 2, label: '2. Lowongan Pertama' },
            { s: 3, label: '3. Metode Pembayaran' }
          ].map((st) => (
            <button
              key={st.s}
              onClick={() => setHrdOnboardStep(st.s)}
              className="p-3 rounded-2xl border text-left text-xs font-semibold transition"
              style={{
                backgroundColor:
                  hrdOnboardStep === st.s ? 'var(--bg-soft)' : 'var(--surface)',
                borderColor:
                  hrdOnboardStep === st.s ? 'var(--primary)' : 'var(--border)',
                color:
                  hrdOnboardStep === st.s ? 'var(--primary)' : 'var(--text)'
              }}
            >
              {st.label}
            </button>
          ))}
        </div>

        {hrdOnboardStep === 1 && (
          <div className="space-y-4">
            <div>
              <label
                className="block text-xs font-semibold mb-1"
                style={{ color: 'var(--text)' }}
              >
                Nama Perusahaan / Instansi
              </label>
              <input
                type="text"
                value={hrdProfile.companyName}
                onChange={(e) =>
                  setHrdProfile({ ...hrdProfile, companyName: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl border text-sm"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)'
                }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Bidang Industri
                </label>
                <input
                  type="text"
                  value={hrdProfile.industry}
                  onChange={(e) =>
                    setHrdProfile({ ...hrdProfile, industry: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Kontak Penanggung Jawab (PIC)
                </label>
                <input
                  type="text"
                  value={hrdProfile.picContact}
                  onChange={(e) =>
                    setHrdProfile({ ...hrdProfile, picContact: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setHrdOnboardStep(2)}
                className="btn-pill-primary px-6 py-2.5 text-sm"
              >
                Lanjut Buat Lowongan Pertama &rarr;
              </button>
            </div>
          </div>
        )}

        {hrdOnboardStep === 2 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Judul Lowongan Pertama
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Helper Gudang Harian"
                  value={newJobForm.title}
                  onChange={(e) =>
                    setNewJobForm({ ...newJobForm, title: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Upah Harian (Rp)
                </label>
                <input
                  type="number"
                  value={newJobForm.rate}
                  onChange={(e) =>
                    setNewJobForm({ ...newJobForm, rate: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border text-sm font-mono-metric"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setHrdOnboardStep(1)}
                className="btn-pill-secondary px-5 py-2.5 text-sm"
              >
                &larr; Kembali
              </button>
              <button
                onClick={() => setHrdOnboardStep(3)}
                className="btn-pill-primary px-6 py-2.5 text-sm"
              >
                Lanjut Metode Pembayaran &rarr;
              </button>
            </div>
          </div>
        )}

        {hrdOnboardStep === 3 && (
          <div className="space-y-4">
            <div>
              <label
                className="block text-xs font-semibold mb-1"
                style={{ color: 'var(--text)' }}
              >
                Pilih Metode Pembayaran Payment Gateway
              </label>
              <select
                value={hrdProfile.paymentMethod}
                onChange={(e) =>
                  setHrdProfile({
                    ...hrdProfile,
                    paymentMethod: e.target.value
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border text-sm"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)'
                }}
              >
                <option value="Virtual Account BCA (Escrow HarianPay)">
                  Virtual Account BCA (Escrow HarianPay)
                </option>
                <option value="Virtual Account Mandiri (Escrow HarianPay)">
                  Virtual Account Mandiri (Escrow HarianPay)
                </option>
                <option value="QRIS Korporat Instan">
                  QRIS Korporat Instan
                </option>
              </select>
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setHrdOnboardStep(2)}
                className="btn-pill-secondary px-5 py-2.5 text-sm"
              >
                &larr; Kembali
              </button>
              <button
                onClick={() => {
                  triggerToast(
                    'Onboarding Instansi selesai! Selamat datang di Dasbor HRD.'
                  );
                  switchView('hrd');
                }}
                className="btn-pill-primary px-7 py-3 text-sm"
              >
                Masuk ke Dasbor Instansi &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );

  // ============================================================================
  // 10. RENDER VIEW 2: LOGIN & ROLE SWITCHER (GAYA NAVOS 2-KOLOM KACA PUTIH DOFF)
  // ============================================================================
  const renderLoginView = () => (
    <section className="min-h-screen pt-24 pb-20 px-4 sm:px-8 flex items-center relative z-10 view-transition-enter">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Navos-Inspired Brand Showcase & Floating Frosted Bubbles */}
        <div className="lg:col-span-6 space-y-6 text-left">
          {/* Staggered Frosted Glass Conversation Pills (Like Navos Reference) */}
          <div className="space-y-2.5 max-w-md">
            <div className="navos-chat-bubble px-4 py-2 text-xs opacity-50 w-fit">
              Of course, ada lowongan shift malam hari ini?
            </div>
            <div className="navos-chat-bubble px-4 py-2.5 text-xs opacity-75 w-fit ml-4">
              Ada 15 posisi Warehouse Packer di Bekasi, upah Rp175.000/hari.
            </div>
            <div className="navos-chat-bubble px-4 py-2.5 text-xs opacity-90 w-fit ml-8">
              Tunggu sebentar, dana Escrow perusahaan sudah dikunci 100%.
            </div>
            <div className="navos-chat-bubble px-4 py-2.5 text-xs font-semibold w-fit ml-12 border-[#1D6FE8]/30">
              Silakan masuk ke akun Harian Anda untuk langsung melamar.
            </div>
          </div>

          <div className="pt-2">
            <div className="text-xs font-mono-metric tracking-[0.24em] uppercase text-[#526382] mb-2">
              THE FUTURE OF DAILY WORK
            </div>
            <div className="mb-3">
              <HarianLogo size="lg" />
            </div>
            <p className="text-sm sm:text-base leading-relaxed max-w-md">
              Solusi cepat untuk kebutuhan tenaga kerja harian dengan seleksi objektif MFEP dan pencairan upah maksimal H+2.
            </p>
          </div>
        </div>

        {/* Right Column: Matte Frosted White Glass Login Card (Like Navos Card) */}
        <div className="lg:col-span-6">
          <div className="max-w-md mx-auto lg:ml-auto harian-surface-card p-8 sm:p-10">
            <div className="mb-6">
              <h2 className="heading-tight text-2xl">Masuk ke Akun Harian</h2>
              <p className="text-xs sm:text-sm mt-1">
                Pilih peran akses Anda di bawah ini.
              </p>
            </div>

            {/* Clean Underline Role Tabs Matching Navos */}
            <div className="flex items-center gap-7 border-b border-[#DCE8FD] mb-6">
              <button
                type="button"
                onClick={() => {
                  setLoginRole('worker');
                  setLoginEmail('budisantoso@gmail.com');
                  setLoginError('');
                }}
                className={`pb-3 text-sm font-semibold transition relative ${
                  loginRole === 'worker'
                    ? 'text-[#1D6FE8]'
                    : 'text-[#526382]'
                }`}
              >
                Pekerja Harian
                {loginRole === 'worker' && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#1D6FE8] rounded-full" />
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setLoginRole('hrd');
                  setLoginEmail('hrd@karyamaju.co.id');
                  setLoginError('');
                }}
                className={`pb-3 text-sm font-semibold transition relative ${
                  loginRole === 'hrd' ? 'text-[#1D6FE8]' : 'text-[#526382]'
                }`}
              >
                Perusahaan / HRD
                {loginRole === 'hrd' && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#1D6FE8] rounded-full" />
                )}
              </button>
            </div>

            {loginError && (
              <div
                className="mb-4 p-3.5 rounded-2xl border text-xs font-semibold flex items-center gap-2"
                style={{
                  backgroundColor: 'var(--primary-light)',
                  borderColor: 'var(--primary)',
                  color: 'var(--primary-dark)'
                }}
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: 'var(--text)' }}
                >
                  Email / ID Akun
                </label>
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="frosted-input w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none"
                />
              </div>

              <div>
                <label
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: 'var(--text)' }}
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="frosted-input w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 accent-[#1D6FE8] rounded"
                  />
                  <span>Saya menyetujui </span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowTermsServiceModal(true)}
                  className="font-semibold text-accent-primary underline hover:opacity-80 ml-1 mr-auto"
                >
                  Syarat &amp; Ketentuan Harian (PDF)
                </button>
              </div>

              <button
                type="submit"
                className="btn-pill-primary w-full py-3.5 text-sm mt-2"
              >
                {loginRole === 'worker'
                  ? 'Masuk ke Portal Pekerja'
                  : 'Masuk ke Portal Perusahaan (HRD)'}
              </button>
            </form>

            <div className="mt-5 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => {
                  setLoginPassword('salah123');
                  setLoginError(
                    'Email atau Password salah, silahkan coba lagi.'
                  );
                }}
                className="text-[#526382] hover:text-[#1D6FE8] transition"
              >
                Simulasi Sandi Salah
              </button>
              <div>
                <span>Belum punya akun? </span>
                <button
                  onClick={() => openRoleRegister(loginRole)}
                  className="font-semibold text-accent-primary hover:underline"
                >
                  Daftar sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // ============================================================================
  // 11. RENDER VIEW 3: KELOLA PROFIL DASAR 3-STEP WIZARD (UC-02)
  // ============================================================================
  const renderProfileView = () => (
    <section
      className="min-h-screen pt-28 pb-20 px-4 sm:px-8 view-transition-enter"
      style={{ backgroundColor: 'var(--bg-soft)' }}
    >
      <div className="max-w-2xl mx-auto harian-surface-card p-7 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="heading-tight text-2xl">Complete Your Profile</h2>
            <p className="text-xs sm:text-sm">
              Data pengalaman kerja menjadi referensi algoritma rekomendasi lowongan.
            </p>
          </div>
          <button
            onClick={() => switchView('worker')}
            className="text-xs font-semibold text-accent-primary hover:underline"
          >
            Ke Portal Pekerja &rarr;
          </button>
        </div>

        {/* 3-Step Bar */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { s: 1, title: '01 • Personal Data', sub: 'Identitas & Rekening' },
            { s: 2, title: '02 • Experience', sub: 'Riwayat Kerja Harian' },
            { s: 3, title: '03 • Completed', sub: 'Siap Melamar' }
          ].map((item) => (
            <button
              key={item.s}
              onClick={() => setProfileStep(item.s)}
              className="p-3.5 rounded-2xl border text-left transition"
              style={{
                backgroundColor:
                  profileStep === item.s ? 'var(--bg-soft)' : 'var(--surface)',
                borderColor:
                  profileStep === item.s ? 'var(--primary)' : 'var(--border)'
              }}
            >
              <div className="text-[11px] font-mono-metric font-bold text-accent-primary">
                {item.title}
              </div>
              <div
                className="text-xs font-semibold mt-0.5"
                style={{ color: 'var(--text)' }}
              >
                {item.sub}
              </div>
            </button>
          ))}
        </div>

        {profileStep === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Nama Lengkap (Sesuai KTP) *
                </label>
                <input
                  type="text"
                  value={workerProfile.fullName}
                  onChange={(e) =>
                    setWorkerProfile({
                      ...workerProfile,
                      fullName: e.target.value
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  type="text"
                  value={workerProfile.phone}
                  onChange={(e) =>
                    setWorkerProfile({
                      ...workerProfile,
                      phone: e.target.value
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Domisili Saat Ini *
                </label>
                <input
                  type="text"
                  value={workerProfile.city}
                  onChange={(e) =>
                    setWorkerProfile({ ...workerProfile, city: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Rekening Pencairan Gaji H+2 *
                </label>
                <input
                  type="text"
                  value={workerProfile.bankAccount}
                  onChange={(e) =>
                    setWorkerProfile({
                      ...workerProfile,
                      bankAccount: e.target.value
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => {
                  if (!workerProfile.fullName.trim()) {
                    triggerToast('Kolom wajib isi tidak boleh kosong!');
                    return;
                  }
                  triggerToast('Profil dasar berhasil diperbarui.');
                  setProfileStep(2);
                }}
                className="btn-pill-primary px-6 py-2.5 text-sm"
              >
                Simpan &amp; Lanjut ke Pengalaman &rarr;
              </button>
            </div>
          </div>
        )}

        {profileStep === 2 && (
          <div className="space-y-4">
            <div className="space-y-2.5">
              {workerProfile.experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-4 rounded-2xl border flex items-center justify-between"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: 'var(--text)' }}
                    >
                      {exp.role}
                    </div>
                    <div className="text-xs">
                      {exp.company} &bull; {exp.period}
                    </div>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: 'var(--primary-light)',
                      color: 'var(--primary)'
                    }}
                  >
                    Tersimpan
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Tambah Posisi Pengalaman
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Staff Gudang Harian"
                  value={newExpRole}
                  onChange={(e) => setNewExpRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Nama Instansi / Perusahaan
                </label>
                <input
                  type="text"
                  placeholder="Contoh: PT Logistik Cepat"
                  value={newExpCompany}
                  onChange={(e) => setNewExpCompany(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddExperience}
              className="btn-pill-secondary px-4 py-2 text-xs inline-flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5 text-accent-primary" />
              <span>Tambahkan ke Portofolio Digital</span>
            </button>

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setProfileStep(1)}
                className="btn-pill-secondary px-5 py-2.5 text-sm"
              >
                &larr; Kembali
              </button>
              <button
                onClick={() => setProfileStep(3)}
                className="btn-pill-primary px-6 py-2.5 text-sm"
              >
                Selesaikan Profil &rarr;
              </button>
            </div>
          </div>
        )}

        {profileStep === 3 && (
          <div className="text-center py-6">
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              style={{
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)'
              }}
            >
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Your profile has been successfully completed!
            </h3>
            <p className="text-sm max-w-md mx-auto mb-6">
              Data profil dan riwayat kerja Anda sudah aktif. Sistem algoritma siap menyodorkan rekomendasi lowongan yang sesuai.
            </p>
            <button
              onClick={() => switchView('worker')}
              className="btn-pill-primary px-7 py-3 text-sm"
            >
              Lihat Rekomendasi Lowongan Sekarang
            </button>
          </div>
        )}
      </div>
    </section>
  );

  // ============================================================================
  // 12. RENDER VIEW 4: PORTAL PEKERJA HARIAN (UC-04, UC-05, UC-06, UC-07, UC-12, UC-13)
  // ============================================================================
  const renderWorkerPortalView = () => {
    const alreadyApplied = applications.some(
      (a) => a.jobId === selectedJob.id && a.status !== 'Dibatalkan'
    );

    return (
      <section
        className="min-h-screen pt-24 pb-20 px-4 sm:px-8 view-transition-enter"
        style={{ backgroundColor: 'var(--bg-soft)' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top Worker Header Card */}
          <div className="harian-surface-card p-6 sm:p-7 mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent-primary mb-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--primary)' }}
                />
                <span>
                  Portal Pekerja Harian &bull; {workerProfile.fullName} (
                  {workerProfile.city})
                </span>
              </div>
              <h2 className="heading-tight text-2xl sm:text-3xl">
                Temukan Kerja Harian Sekarang
              </h2>
              <p className="text-xs sm:text-sm mt-0.5">
                Rekomendasi diurutkan otomatis berdasarkan pengalaman kerja Anda. Dana upah telah diamankan di Escrow dan cair maksimal H+2.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => setWorkerSubTab('explore')}
                className={
                  workerSubTab === 'explore'
                    ? 'btn-pill-primary px-5 py-2.5 text-xs sm:text-sm'
                    : 'btn-pill-secondary px-5 py-2.5 text-xs sm:text-sm'
                }
              >
                Cari &amp; Filter Lowongan
              </button>
              <button
                onClick={() => setWorkerSubTab('applications')}
                className={
                  workerSubTab === 'applications'
                    ? 'btn-pill-primary px-5 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2'
                    : 'btn-pill-secondary px-5 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2'
                }
              >
                <span>Status Lamaran &amp; Gaji H+2</span>
                <span
                  className="px-2 py-0.5 rounded-full text-[11px] font-mono-metric font-bold"
                  style={{
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary)'
                  }}
                >
                  {applications.length}
                </span>
              </button>
            </div>
          </div>

          {workerSubTab === 'explore' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Sidebar Filter (UC-05) */}
              <aside className="lg:col-span-3 harian-surface-card p-5 sm:p-6 self-start space-y-4">
                <div
                  className="flex items-center justify-between pb-3 border-b"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <h3 className="text-sm font-semibold">Filter Pencarian</h3>
                  <button
                    onClick={() => {
                      setFilterKeyword('');
                      setFilterLocation('ALL');
                      setFilterCategory('ALL');
                      setFilterShift('ALL');
                      setFilterMinRate('');
                    }}
                    className="text-xs font-semibold text-accent-primary hover:underline"
                  >
                    Reset
                  </button>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Kata Kunci Posisi / Perusahaan
                  </label>
                  <input
                    type="text"
                    placeholder="Packer, SPG, Waiter..."
                    value={filterKeyword}
                    onChange={(e) => setFilterKeyword(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border text-xs"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Lokasi Kerja
                  </label>
                  <select
                    value={filterLocation}
                    onChange={(e) => setFilterLocation(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border text-xs"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  >
                    <option value="ALL">Semua Lokasi</option>
                    <option value="Bekasi">Bekasi</option>
                    <option value="Jakarta">Jakarta</option>
                    <option value="ICE BSD">ICE BSD / Tangerang</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Kategori Pekerjaan
                  </label>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border text-xs"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  >
                    <option value="ALL">Semua Kategori</option>
                    <option value="Logistics & Warehouse">
                      Logistics &amp; Warehouse
                    </option>
                    <option value="Event Staff">Event Staff</option>
                    <option value="Hospitality">Hospitality</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Jadwal Shift
                  </label>
                  <select
                    value={filterShift}
                    onChange={(e) => setFilterShift(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border text-xs"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  >
                    <option value="ALL">Semua Shift</option>
                    <option value="Morning Shift">Shift Pagi</option>
                    <option value="Night Shift">Shift Malam</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Upah Minimum Harian (Rp)
                  </label>
                  <input
                    type="number"
                    step="10000"
                    placeholder="Contoh: 160000"
                    value={filterMinRate}
                    onChange={(e) => setFilterMinRate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border text-xs font-mono-metric"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  />
                </div>
              </aside>

              {/* Right Column: Job List + Selected Job Detail */}
              <div className="lg:col-span-9 space-y-6">
                {filteredJobs.length === 0 ? (
                  <div className="harian-surface-card p-8 text-center">
                    <h4 className="text-base font-semibold mb-1">
                      Tidak ada lowongan yang sesuai dengan filter Anda.
                    </h4>
                    <p className="text-xs mb-4">
                      Silakan ubah parameter filter lokasi, shift, atau nominal upah minimum.
                    </p>
                    <button
                      onClick={() => {
                        setFilterKeyword('');
                        setFilterLocation('ALL');
                        setFilterCategory('ALL');
                        setFilterShift('ALL');
                        setFilterMinRate('');
                      }}
                      className="btn-pill-secondary px-5 py-2 text-xs"
                    >
                      Reset Filter Pencarian
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredJobs.map((job) => {
                      const isSelected = job.id === selectedJob.id;
                      return (
                        <div
                          key={job.id}
                          onClick={() => setSelectedJobId(job.id)}
                          className="harian-surface-card p-5 cursor-pointer"
                          style={{
                            borderColor: isSelected
                              ? 'var(--primary)'
                              : 'var(--border)',
                            borderWidth: isSelected ? '2px' : '1px'
                          }}
                        >
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span
                              className="text-[11px] font-mono-metric font-semibold px-2.5 py-0.5 rounded-full"
                              style={{
                                backgroundColor: 'var(--primary-light)',
                                color: 'var(--primary)'
                              }}
                            >
                              Match {job.matchScore}% &bull; Escrow Lunas
                            </span>
                            <span className="text-[11px] font-medium">
                              {job.location}
                            </span>
                          </div>
                          <h4 className="text-base font-semibold">
                            {job.title}
                          </h4>
                          <p className="text-xs mt-0.5">{job.company}</p>

                          <div
                            className="flex items-center justify-between pt-3 mt-3 border-t"
                            style={{ borderColor: 'var(--border)' }}
                          >
                            <div>
                              <div className="text-sm font-bold font-mono-metric text-accent-primary">
                                {formatRupiah(job.rate)}/hari
                              </div>
                              <div className="text-[11px]">{job.workTime}</div>
                            </div>
                            <span className="text-xs font-semibold text-accent-primary">
                              Detail &amp; Lamar &rarr;
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Selected Job Detail Box (UC-06 & FR-004 / FR-005 / FR-009) */}
                {selectedJob && (
                  <div className="harian-surface-card p-6 sm:p-8">
                    <div
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span
                            className="text-xs font-semibold px-3 py-0.5 rounded-full"
                            style={{
                              backgroundColor: 'var(--primary-light)',
                              color: 'var(--primary)'
                            }}
                          >
                            {selectedJob.category}
                          </span>
                          <span className="text-xs font-medium">
                            Integritas Perusahaan:{' '}
                            <strong style={{ color: 'var(--text)' }}>
                              {selectedJob.integrityScore}
                            </strong>
                          </span>
                        </div>
                        <h3 className="heading-tight text-2xl">
                          {selectedJob.title}
                        </h3>
                        <p className="text-xs sm:text-sm">
                          {selectedJob.company} &bull; Lokasi:{' '}
                          {selectedJob.location}
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        <div className="text-2xl font-bold font-mono-metric text-accent-primary">
                          {formatRupiah(selectedJob.rate)}{' '}
                          <span className="text-xs font-normal text-[#5B6B88]">
                            / hari
                          </span>
                        </div>
                        <div className="text-xs">
                          Bersih diterima H+2:{' '}
                          <strong
                            className="font-mono-metric"
                            style={{ color: 'var(--text)' }}
                          >
                            {formatRupiah(selectedJob.rate * 0.9)}
                          </strong>{' '}
                          (Fee 10%)
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-5">
                      <div
                        className="p-3.5 rounded-2xl border"
                        style={{
                          backgroundColor: 'var(--bg-soft)',
                          borderColor: 'var(--border)'
                        }}
                      >
                        <div className="text-[11px]">Jadwal Shift</div>
                        <div
                          className="text-sm font-semibold font-mono-metric"
                          style={{ color: 'var(--text)' }}
                        >
                          {selectedJob.workTime}
                        </div>
                      </div>
                      <div
                        className="p-3.5 rounded-2xl border"
                        style={{
                          backgroundColor: 'var(--bg-soft)',
                          borderColor: 'var(--border)'
                        }}
                      >
                        <div className="text-[11px]">Kuota &amp; Pelamar</div>
                        <div
                          className="text-sm font-semibold font-mono-metric"
                          style={{ color: 'var(--text)' }}
                        >
                          {selectedJob.applicantsCount} Pelamar /{' '}
                          {selectedJob.quota} Kuota
                        </div>
                      </div>
                      <div
                        className="p-3.5 rounded-2xl border"
                        style={{
                          backgroundColor: 'var(--bg-soft)',
                          borderColor: 'var(--border)'
                        }}
                      >
                        <div className="text-[11px]">
                          Dana Escrow Terkunci di Awal
                        </div>
                        <div className="text-sm font-semibold font-mono-metric text-accent-primary">
                          {formatRupiah(selectedJob.escrowHeld)}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm leading-relaxed mb-6">
                      <p>
                        <strong style={{ color: 'var(--text)' }}>
                          Deskripsi Tugas:
                        </strong>{' '}
                        {selectedJob.description}
                      </p>
                      <p>
                        <strong style={{ color: 'var(--text)' }}>
                          Perlengkapan / Dresscode Wajib:
                        </strong>{' '}
                        {selectedJob.dresscode}
                      </p>
                      <p>
                        <strong style={{ color: 'var(--text)' }}>
                          Kontak Penanggung Jawab (PIC):
                        </strong>{' '}
                        {selectedJob.picName} ({selectedJob.picPhone})
                      </p>
                    </div>

                    <div
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <div className="text-xs">
                        Unggah Berkas Syarat:{' '}
                        <strong style={{ color: 'var(--text)' }}>
                          KTP_BudiSantoso_Verified.pdf (Siap Kirim)
                        </strong>
                      </div>
                      {alreadyApplied ? (
                        <button
                          onClick={() => setWorkerSubTab('applications')}
                          className="btn-pill-secondary px-6 py-3 text-xs sm:text-sm"
                        >
                          Sudah Dilamar &bull; Pantau Status Real-Time &rarr;
                        </button>
                      ) : (
                        <button
                          onClick={() => handleApplyToJob(selectedJob)}
                          className="btn-pill-primary px-7 py-3 text-xs sm:text-sm"
                        >
                          Lamar Sekarang &amp; Unggah Dokumen
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Worker Sub-Tab: Real-Time Application Tracking & H+2 Salary Payout (UC-07 & UC-12) */
            <div className="harian-surface-card p-6 sm:p-8">
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b"
                style={{ borderColor: 'var(--border)' }}
              >
                <div>
                  <h3 className="heading-tight text-xl">
                    Pelacakan Status Lamaran Real-Time &amp; Pencairan Gaji H+2
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Lamaran berstatus Pending dapat dibatalkan kapan saja. Setelah pekerjaan ditandai selesai, upah cair otomatis maksimal H+2.
                  </p>
                </div>
                <span
                  className="text-xs font-mono-metric font-semibold px-3.5 py-1.5 rounded-full"
                  style={{
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary)'
                  }}
                >
                  Rekening Tujuan: {workerProfile.bankAccount}
                </span>
              </div>

              <div className="space-y-4">
                {applications.map((app) => {
                  const netSalary = app.rate * 0.9;
                  return (
                    <div
                      key={app.id}
                      className="p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      style={{
                        backgroundColor: 'var(--bg-soft)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-xs font-semibold px-3 py-0.5 rounded-full"
                            style={{
                              backgroundColor: 'var(--primary-light)',
                              color: 'var(--primary)'
                            }}
                          >
                            Status: {app.status}
                          </span>
                          <span className="text-xs">{app.appliedAt}</span>
                        </div>
                        <h4 className="text-base font-semibold">
                          {app.jobTitle}
                        </h4>
                        <div className="text-xs mt-0.5">
                          {app.company} &bull; Upah Kotor:{' '}
                          <span className="font-mono-metric">
                            {formatRupiah(app.rate)}
                          </span>{' '}
                          &bull; Bersih Diterima H+2 (Potong 10%):{' '}
                          <strong className="font-mono-metric text-accent-primary">
                            {formatRupiah(netSalary)}
                          </strong>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {app.status === 'Pending' ? (
                          <button
                            onClick={() => handleCancelApplication(app.id)}
                            className="btn-pill-secondary px-4 py-2 text-xs"
                          >
                            Batalkan Lamaran
                          </button>
                        ) : (
                          <span
                            className="text-xs font-semibold px-4 py-2 rounded-full border bg-white"
                            style={{
                              borderColor: 'var(--border)',
                              color: 'var(--primary)'
                            }}
                          >
                            {app.status === 'Gaji Cair H+2'
                              ? 'Telah Ditransfer ke BCA'
                              : 'Keputusan Terkunci'}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  // ============================================================================
  // 13. RENDER VIEW 5: PORTAL PERUSAHAAN / HRD (UC-03, UC-08, UC-09, UC-10, UC-11)
  // ============================================================================
  const renderHrdPortalView = () => (
    <section
      className="min-h-screen pt-24 pb-20 px-4 sm:px-8 view-transition-enter"
      style={{ backgroundColor: 'var(--bg-soft)' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar HRD */}
        <aside className="lg:col-span-3 harian-surface-card p-6 self-start flex flex-col justify-between min-h-[520px]">
          <div className="space-y-5">
            <div
              className="pb-4 border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="text-xs font-bold text-accent-primary">
                PORTAL INSTANSI &amp; HRD
              </div>
              <div
                className="text-lg font-semibold mt-0.5"
                style={{ color: 'var(--text)' }}
              >
                PT Karya Maju
              </div>
              <div className="text-xs mt-2">Saldo HarianPay Korporat:</div>
              <div className="text-lg font-bold font-mono-metric text-accent-primary">
                {formatRupiah(hrdWalletBalance)}
              </div>
            </div>

            <div className="space-y-2">
              {[
                {
                  id: 'jobs',
                  label: 'Kelola Lowongan',
                  badge: jobs.length
                },
                {
                  id: 'mfep',
                  label: 'Seleksi Kandidat MFEP',
                  badge: 'Otomatis'
                },
                {
                  id: 'escrow',
                  label: 'Escrow & Gaji H+2',
                  badge: 'HarianPay'
                }
              ].map((tab) => {
                const active = hrdSubTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setHrdSubTab(tab.id)}
                    className="w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-between"
                    style={{
                      backgroundColor: active
                        ? 'var(--primary)'
                        : 'transparent',
                      color: active ? '#FFFFFF' : 'var(--text)'
                    }}
                  >
                    <span>{tab.label}</span>
                    <span
                      className="text-[11px] font-mono-metric px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: active
                          ? 'rgba(255,255,255,0.2)'
                          : 'var(--primary-light)',
                        color: active ? '#FFFFFF' : 'var(--primary)'
                      }}
                    >
                      {tab.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="pt-6 border-t space-y-2.5"
            style={{ borderColor: 'var(--border)' }}
          >
            <button
              onClick={() => {
                setCreateJobError('');
                setShowCreateJobModal(true);
              }}
              className="btn-pill-primary w-full py-3 text-xs sm:text-sm inline-flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Pasang Lowongan Baru</span>
            </button>
            <button
              onClick={handleDownloadCsv}
              className="btn-pill-secondary w-full py-2.5 text-xs inline-flex items-center justify-center gap-1.5"
            >
              <Download className="w-4 h-4 text-accent-primary" />
              <span>Unduh Laporan Rekrutmen (CSV)</span>
            </button>
          </div>
        </aside>

        {/* Right Main HRD Content */}
        <div className="lg:col-span-9">
          {hrdSubTab === 'jobs' && (
            <div className="harian-surface-card p-6 sm:p-8">
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b"
                style={{ borderColor: 'var(--border)' }}
              >
                <div>
                  <h2 className="heading-tight text-2xl">
                    Kelola Lowongan Pekerjaan
                  </h2>
                  <p className="text-xs sm:text-sm">
                    Setiap publikasi lowongan baru otomatis mengunci dana upah (Kuota &times; Upah) di rekening bersama HarianPay.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setCreateJobError('');
                    setShowCreateJobModal(true);
                  }}
                  className="btn-pill-primary px-5 py-2.5 text-xs sm:text-sm self-start sm:self-auto"
                >
                  + Pasang Lowongan Baru
                </button>
              </div>

              <div className="space-y-3.5">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className="text-xs font-semibold px-3 py-0.5 rounded-full"
                          style={{
                            backgroundColor: 'var(--primary-light)',
                            color: 'var(--primary)'
                          }}
                        >
                          {job.escrowStage === 'PAID_H2'
                            ? 'SELESAI • GAJI CAIR H+2'
                            : 'AKTIF • ESCROW TERKUNCI'}
                        </span>
                        <span className="text-xs font-mono-metric">
                          Dana Ditahan: {formatRupiah(job.escrowHeld)}
                        </span>
                      </div>
                      <h4 className="text-base font-semibold">{job.title}</h4>
                      <div className="text-xs mt-0.5">
                        {job.location} &bull;{' '}
                        <strong className="font-mono-metric text-accent-primary">
                          {formatRupiah(job.rate)}/hari
                        </strong>{' '}
                        &bull; {job.applicantsCount} Pelamar ({job.quota} Kuota)
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setHrdSubTab('mfep')}
                        className="btn-pill-secondary px-4 py-2 text-xs"
                      >
                        Seleksi MFEP
                      </button>
                      <button
                        onClick={() => setHrdSubTab('escrow')}
                        className="btn-pill-primary px-4 py-2 text-xs"
                      >
                        Pencairan H+2
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {hrdSubTab === 'mfep' && (
            <div className="harian-surface-card p-6 sm:p-8">
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b"
                style={{ borderColor: 'var(--border)' }}
              >
                <div>
                  <span className="text-xs font-semibold text-accent-primary">
                    Multi-Factor Evaluation Process (MFEP)
                  </span>
                  <h2 className="heading-tight text-2xl">
                    Kalkulator &amp; Pemeringkatan Kandidat Otomatis
                  </h2>
                  <p className="text-xs sm:text-sm">
                    Sesuaikan bobot kriteria di bawah untuk melihat transparansi perhitungan matematika MFEP secara langsung.
                  </p>
                </div>
                <button
                  onClick={handleDownloadCsv}
                  className="btn-pill-secondary px-4 py-2.5 text-xs inline-flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <FileSpreadsheet className="w-4 h-4 text-accent-primary" />
                  <span>Generate Laporan CSV (&le; 10s)</span>
                </button>
              </div>

              {/* Interactive MFEP Weight Sliders */}
              <div
                className="p-4 sm:p-5 rounded-2xl border mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)'
                }}
              >
                {[
                  { key: 'exp', label: 'Pengalaman' },
                  { key: 'avail', label: 'Ketersediaan Shift' },
                  { key: 'dist', label: 'Jarak Domisili' },
                  { key: 'doc', label: 'Kelengkapan Berkas' }
                ].map((f) => (
                  <div key={f.key}>
                    <div className="flex items-center justify-between text-xs font-semibold mb-1">
                      <span style={{ color: 'var(--text)' }}>{f.label}</span>
                      <span className="font-mono-metric text-accent-primary">
                        {mfepWeights[f.key]}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="70"
                      step="5"
                      value={mfepWeights[f.key]}
                      onChange={(e) =>
                        setMfepWeights({
                          ...mfepWeights,
                          [f.key]: Number(e.target.value)
                        })
                      }
                      className="w-full accent-[#1D6FE8]"
                    />
                  </div>
                ))}
              </div>

              {/* Ranked Candidates List */}
              <div className="space-y-3.5">
                {rankedCandidates.map((cand, idx) => (
                  <div
                    key={cand.id}
                    className="p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className="text-xs font-mono-metric font-bold px-3 py-0.5 rounded-full"
                          style={{
                            backgroundColor: 'var(--primary-light)',
                            color: 'var(--primary)'
                          }}
                        >
                          Rank #{idx + 1} &bull; Skor MFEP: {cand.mfepScore}
                        </span>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: 'var(--text)' }}
                        >
                          Status: {cand.status}
                        </span>
                      </div>
                      <h4 className="text-base font-semibold">{cand.name}</h4>
                      <div className="text-xs font-mono-metric mt-1">
                        Rumus: Exp({cand.weightedExp}) + Shift(
                        {cand.weightedAvail}) + Jarak({cand.weightedDist}) +
                        Berkas({cand.weightedDoc}) ={' '}
                        <strong className="text-accent-primary">
                          {cand.mfepScore}
                        </strong>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() =>
                          handleCandidateDecision(cand.id, 'Diterima')
                        }
                        className="btn-pill-primary px-4 py-2 text-xs"
                      >
                        Terima
                      </button>
                      <button
                        onClick={() =>
                          handleCandidateDecision(cand.id, 'Ditolak')
                        }
                        className="btn-pill-secondary px-4 py-2 text-xs"
                      >
                        Tolak
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {hrdSubTab === 'escrow' && (
            <div className="harian-surface-card p-6 sm:p-8">
              <div
                className="pb-5 mb-6 border-b"
                style={{ borderColor: 'var(--border)' }}
              >
                <span className="text-xs font-semibold text-accent-primary">
                  Integrasi Payment Gateway &amp; Rekening Bersama
                </span>
                <h2 className="heading-tight text-2xl">
                  Monitoring Dana Ditahan &amp; Pencairan Gaji H+2
                </h2>
                <p className="text-xs sm:text-sm">
                  Tandai pekerjaan selesai untuk mencairkan dana Escrow ke rekening pekerja maksimal H+2 (dipotong Service Tax 10%).
                </p>
              </div>

              <div className="space-y-3.5">
                {jobs.map((job) => {
                  const serviceFee = job.escrowHeld * 0.1;
                  const workerNet = job.escrowHeld * 0.9;
                  return (
                    <div
                      key={job.id}
                      className="p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      style={{
                        backgroundColor: 'var(--bg-soft)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      <div>
                        <div className="text-xs font-mono-metric font-semibold text-accent-primary mb-1">
                          {job.escrowStage === 'PAID_H2'
                            ? 'STATUS: DANA TELAH DICAIRKAN KE PEKERJA (H+2)'
                            : 'STATUS: DANA TERKUNCI DI ESCROW HARIANPAY'}
                        </div>
                        <h4 className="text-base font-semibold">
                          {job.title} ({job.quota} Kuota Pekerja)
                        </h4>
                        <div className="text-xs font-mono-metric mt-1">
                          Total Ditahan: {formatRupiah(job.escrowHeld)} &rarr;
                          Bersih ke Pekerja (90%):{' '}
                          <strong style={{ color: 'var(--text)' }}>
                            {formatRupiah(workerNet)}
                          </strong>{' '}
                          | Biaya Layanan (10%): {formatRupiah(serviceFee)}
                        </div>
                      </div>

                      <div className="shrink-0">
                        {job.escrowStage === 'PAID_H2' ? (
                          <span
                            className="inline-block text-xs font-semibold px-4 py-2 rounded-full"
                            style={{
                              backgroundColor: 'var(--primary-light)',
                              color: 'var(--primary)'
                            }}
                          >
                            Lunas Terdistribusi
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleReleaseEscrowH2(job.id)}
                            className="btn-pill-primary px-5 py-2.5 text-xs"
                          >
                            Tandai Selesai &amp; Cairkan Gaji H+2
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );

  // ============================================================================
  // 14. MAIN COMPONENT RETURN & MODALS
  // ============================================================================
  return (
    <div className="navos-ambient-canvas min-h-screen relative">
      <GlobalLightThemeStyles />
      <NavosSilkWaveBackdrop />
      {renderStickyNavbar()}

      <div className="relative z-10">
        {activeView === 'landing' && renderLandingView()}
        {activeView === 'register' && renderRegisterView()}
        {activeView === 'onboarding-worker' && renderWorkerOnboardingView()}
        {activeView === 'onboarding-hrd' && renderHrdOnboardingView()}
        {activeView === 'login' && renderLoginView()}
        {activeView === 'profile' && renderProfileView()}
        {activeView === 'worker' && renderWorkerPortalView()}
        {activeView === 'hrd' && renderHrdPortalView()}
      </div>

      {/* MODAL: FOOTER INFO (TENTANG, KONTAK, KEBIJAKAN PRIVASI) */}
      {footerModalKey && FOOTER_INFO_CONTENT[footerModalKey] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(15, 27, 51, 0.45)' }}
        >
          <div className="harian-surface-card max-w-md w-full p-6 sm:p-8 view-transition-enter">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E4EAF5]">
              <h3 className="heading-tight text-lg">
                {FOOTER_INFO_CONTENT[footerModalKey].title}
              </h3>
              <button
                type="button"
                onClick={() => setFooterModalKey(null)}
                className="p-1.5 rounded-full hover:bg-white/60"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed mb-6">
              {FOOTER_INFO_CONTENT[footerModalKey].body}
            </p>
            <button
              type="button"
              onClick={() => setFooterModalKey(null)}
              className="btn-pill-primary w-full py-2.5 text-xs sm:text-sm"
            >
              Tutup Informasi
            </button>
          </div>
        </div>
      )}

      {/* MODAL: SYARAT & KETENTUAN (S&K) BERGAYA DOKUMEN PDF VIEWER */}
      {showTermsServiceModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
          style={{ backgroundColor: 'rgba(15, 27, 51, 0.55)' }}
        >
          <div className="harian-surface-card max-w-2xl w-full overflow-hidden flex flex-col max-h-[92vh] view-transition-enter">
            {/* PDF Viewer Top Toolbar */}
            <div
              className="px-5 py-3.5 flex items-center justify-between border-b"
              style={{
                backgroundColor: '#0F1B33',
                borderColor: 'rgba(255,255,255,0.14)',
                color: '#FFFFFF'
              }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="px-2 py-0.5 rounded bg-red-600 text-[10px] font-mono-metric font-bold tracking-wider uppercase text-white">
                  PDF
                </span>
                <span className="text-xs sm:text-sm font-mono-metric truncate">
                  Syarat_dan_Ketentuan_Harian_2026.pdf
                </span>
                <span className="hidden sm:inline-block text-[11px] text-slate-300 font-mono-metric">
                  (Halaman 1 / 1 &bull; 100%)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadTermsPdfFile}
                  className="px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-xs font-semibold inline-flex items-center gap-1.5 text-white transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Unduh PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowTermsServiceModal(false)}
                  className="p-1.5 rounded-lg hover:bg-white/20 text-white transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* PDF Gray Canvas Area with A4 Document Paper */}
            <div
              className="p-4 sm:p-7 overflow-y-auto flex-1 space-y-5"
              style={{ backgroundColor: '#DCE4F2' }}
            >
              <div className="bg-white text-[#0F1B33] rounded-xl shadow-xl border border-slate-200 p-6 sm:p-9 mx-auto max-w-xl font-sans">
                {/* Document Header / Letterhead */}
                <div className="flex items-start justify-between pb-4 mb-5 border-b-2 border-[#0F1B33]">
                  <div>
                    <HarianLogo size="sm" />
                    <div className="text-[11px] text-[#526382] mt-1 font-mono-metric">
                      DOKUMEN LEGAL &bull; SK-HARIAN/ESCROW/2026/V1.4
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#DCE8FD] text-[#1D6FE8] text-[10px] font-mono-metric font-bold">
                      BERLAKU RESMI 2026
                    </span>
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-center uppercase tracking-tight mb-4">
                  Syarat dan Ketentuan Penggunaan Platform Harian &amp; Ketentuan Service Charge 10%
                </h4>

                <div className="space-y-3.5 text-xs leading-relaxed text-slate-700">
                  <div>
                    <div className="font-bold text-[#0F1B33]">
                      PASAL 1 &mdash; DEFINISI &amp; RUANG LINGKUP PLATFORM
                    </div>
                    <p>
                      Platform Harian (&ldquo;Sistem&rdquo;) adalah ekosistem rekrutmen pekerja harian (<em>daily worker</em>) berbasis web yang menghubungkan Pencari Kerja Harian dengan Instansi Pemberi Kerja secara transparan tanpa perantara tidak resmi.
                    </p>
                  </div>

                  <div>
                    <div className="font-bold text-[#0F1B33]">
                      PASAL 2 &mdash; PENAHANAN DANA ESCROW &amp; JAMINAN CAIR H+2
                    </div>
                    <p>
                      Instansi Pemberi Kerja wajib menyetorkan 100% total anggaran upah harian ke Rekening Bersama (<em>Escrow HarianPay</em>) pada saat membuka lowongan. Sistem menjamin pencairan upah ke rekening pekerja maksimal <strong>2&times;24 jam (H+2)</strong> setelah shift pekerjaan ditandai selesai.
                    </p>
                  </div>

                  <div>
                    <div className="font-bold text-[#0F1B33]">
                      PASAL 3 &mdash; KETENTUAN BIAYA LAYANAN (SERVICE CHARGE 10%)
                    </div>
                    <p>
                      Setiap pencairan upah pekerja harian dikenakan potongan biaya layanan platform (<em>Service Charge</em>) sebesar <strong>10% (sepuluh persen)</strong> untuk biaya kliring <em>Payment Gateway</em>, proteksi <em>Escrow</em>, dan pemeliharaan infrastruktur 24 jam. Pekerja menerima bersih <strong>90%</strong> dari upah kotor harian.
                    </p>
                  </div>

                  {/* Embedded Official Receipt Box inside PDF Page */}
                  <div className="p-4 rounded-xl bg-[#F5F8FF] border border-[#BFD6FA] my-3">
                    <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-dashed border-[#BFD6FA]">
                      <span className="text-[11px] font-bold text-[#0F1B33]">
                        LAMPIRAN SIMULASI NOTA UPAH &amp; SERVICE CHARGE 10%
                      </span>
                      <span className="text-[10px] font-mono-metric font-bold text-[#1D6FE8]">
                        90% Net Pekerja
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-2.5">
                      {[150000, 175000, 250000].map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setSampleReceiptRate(preset)}
                          className="py-1 px-2 rounded-lg text-[11px] font-mono-metric font-semibold border transition"
                          style={{
                            backgroundColor:
                              Number(sampleReceiptRate) === preset
                                ? '#1D6FE8'
                                : '#FFFFFF',
                            borderColor:
                              Number(sampleReceiptRate) === preset
                                ? '#1D6FE8'
                                : '#CBDDFC',
                            color:
                              Number(sampleReceiptRate) === preset
                                ? '#FFFFFF'
                                : '#0F1B33'
                          }}
                        >
                          {formatRupiah(preset)}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-1 text-xs font-mono-metric">
                      <div className="flex justify-between">
                        <span className="font-sans text-slate-600">
                          Upah Kotor Harian (Escrow Instansi)
                        </span>
                        <span className="font-semibold text-[#0F1B33]">
                          {formatRupiah(Number(sampleReceiptRate || 0))}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-sans text-slate-600">
                          Potongan Service Charge Harian (10%)
                        </span>
                        <span className="font-semibold text-red-600">
                          &minus;{' '}
                          {formatRupiah(
                            Math.round(Number(sampleReceiptRate || 0) * 0.1)
                          )}
                        </span>
                      </div>
                      <div className="pt-1.5 mt-1.5 border-t border-dashed border-[#BFD6FA] flex justify-between text-xs font-bold">
                        <span className="font-sans text-[#0F1B33]">
                          Saldo Bersih Diterima Pekerja (H+2)
                        </span>
                        <span className="text-[#1D6FE8]">
                          {formatRupiah(
                            Number(sampleReceiptRate || 0) -
                              Math.round(Number(sampleReceiptRate || 0) * 0.1)
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-[#0F1B33]">
                      PASAL 4 &mdash; SELEKSI OBJEKTIF METODE MFEP &amp; KEAKURATAN DATA
                    </div>
                    <p>
                      Pemeringkatan kandidat dilakukan secara otomatis menggunakan metode matematika <em>Multi-Factor Evaluation Process (MFEP)</em> berdasarkan bobot pengalaman kerja, kecocokan jadwal shift, jarak domisili, dan kelengkapan dokumen KTP.
                    </p>
                  </div>

                  <div>
                    <div className="font-bold text-[#0F1B33]">
                      PASAL 5 &mdash; PEMBATALAN LAMARAN &amp; KETENTUAN PENUTUP
                    </div>
                    <p>
                      Pekerja berhak membatalkan lamaran secara mandiri selama status masih <em>Pending</em>. Apabila lamaran telah berstatus <em>Diterima</em>, pembatalan sepihak tanpa konfirmasi PIC akan tercatat pada riwayat reputasi pekerja.
                    </p>
                  </div>
                </div>

                {/* Digital Stamp Footer inside PDF */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono-metric">
                  <span>Disahkan secara elektronik oleh Harian Legal &amp; Escrow</span>
                  <span>Halaman 1 dari 1</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="px-6 py-4 bg-white border-t border-[#E4EAF5] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-[#526382]">
                Dengan menekan tombol setuju, kotak persetujuan S&amp;K otomatis tercentang.
              </span>
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowTermsServiceModal(false)}
                  className="btn-pill-secondary px-4 py-2 text-xs sm:text-sm"
                >
                  Tutup Pratinjau PDF
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAgreeServiceFee(true);
                    setShowTermsServiceModal(false);
                    triggerToast(
                      'Anda telah menyetujui dokumen PDF Syarat & Ketentuan serta Service Charge 10%.'
                    );
                  }}
                  className="btn-pill-primary px-5 py-2 text-xs sm:text-sm"
                >
                  Saya Setuju dengan Isi PDF S&amp;K
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: PASANG LOWONGAN BARU + PENAHANAN DANA ESCROW DI AWAL */}
      {showCreateJobModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(15, 27, 51, 0.35)' }}
        >
          <div className="harian-surface-card max-w-xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div
              className="flex items-center justify-between pb-4 mb-5 border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              <div>
                <h3 className="heading-tight text-xl">
                  Pasang Lowongan Harian Baru
                </h3>
                <p className="text-xs">
                  Isi deskripsi permintaan tenaga kerja; dana upah langsung ditahan di awal.
                </p>
              </div>
              <button
                onClick={() => setShowCreateJobModal(false)}
                className="p-2 rounded-full hover:bg-[#F5F8FF]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {createJobError && (
              <div
                className="mb-4 p-3.5 rounded-xl border text-xs font-semibold"
                style={{
                  backgroundColor: 'var(--primary-light)',
                  borderColor: 'var(--primary)',
                  color: 'var(--primary-dark)'
                }}
              >
                {createJobError}
              </div>
            )}

            <form onSubmit={handleCreateJobSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Judul Posisi Pekerjaan *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Crew Event Pameran"
                    value={newJobForm.title}
                    onChange={(e) =>
                      setNewJobForm({ ...newJobForm, title: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Lokasi Kerja *
                  </label>
                  <input
                    type="text"
                    required
                    value={newJobForm.location}
                    onChange={(e) =>
                      setNewJobForm({ ...newJobForm, location: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Upah / Hari (Rp) *
                  </label>
                  <input
                    type="number"
                    required
                    value={newJobForm.rate}
                    onChange={(e) =>
                      setNewJobForm({ ...newJobForm, rate: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-mono-metric"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Kuota Pekerja *
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={newJobForm.quota}
                    onChange={(e) =>
                      setNewJobForm({ ...newJobForm, quota: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-mono-metric"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Jam Kerja Shift *
                  </label>
                  <input
                    type="text"
                    required
                    value={newJobForm.workTime}
                    onChange={(e) =>
                      setNewJobForm({ ...newJobForm, workTime: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm"
                    style={{
                      backgroundColor: 'var(--bg-soft)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  Deskripsi Permintaan &amp; Rincian Tugas *
                </label>
                <textarea
                  rows="2"
                  required
                  value={newJobForm.description}
                  onChange={(e) =>
                    setNewJobForm({
                      ...newJobForm,
                      description: e.target.value
                    })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm"
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                />
              </div>

              <div
                className="p-4 rounded-2xl border flex items-center justify-between"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--primary-light)'
                }}
              >
                <div>
                  <div
                    className="text-xs font-semibold"
                    style={{ color: 'var(--text)' }}
                  >
                    Total Dana Escrow Ditahan di Awal
                  </div>
                  <div className="text-[11px]">
                    Otomatis cair ke pekerja maksimal H+2 setelah pekerjaan selesai
                  </div>
                </div>
                <div className="text-lg font-bold font-mono-metric text-accent-primary">
                  {formatRupiah(
                    Number(newJobForm.rate || 0) * Number(newJobForm.quota || 0)
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateJobModal(false)}
                  className="btn-pill-secondary px-5 py-2.5 text-xs sm:text-sm"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="btn-pill-primary px-6 py-2.5 text-xs sm:text-sm"
                >
                  Kunci Dana Escrow &amp; Publikasikan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: RINGKASAN CARA KERJA HARIAN */}
      {showHowItWorksModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(15, 27, 51, 0.35)' }}
        >
          <div className="harian-surface-card max-w-lg w-full p-6 sm:p-8">
            <div
              className="flex items-center justify-between pb-4 mb-4 border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              <h3 className="heading-tight text-lg">
                Ringkasan Ekosistem Kerja Harian
              </h3>
              <button
                onClick={() => setShowHowItWorksModal(false)}
                className="p-2 rounded-full hover:bg-[#F5F8FF]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs sm:text-sm mb-6">
              <div
                className="p-3.5 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)'
                }}
              >
                <strong style={{ color: 'var(--text)' }}>
                  1. Instansi Pasang Loker &amp; Kunci Escrow:
                </strong>{' '}
                Dana upah ditahan di awal sebelum lowongan tampil di beranda pekerja.
              </div>
              <div
                className="p-3.5 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)'
                }}
              >
                <strong style={{ color: 'var(--text)' }}>
                  2. Pekerja Filter &amp; Lamar Online:
                </strong>{' '}
                Cari lowongan sesuai lokasi, waktu shift, dan upah lalu unggah dokumen KTP.
              </div>
              <div
                className="p-3.5 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)'
                }}
              >
                <strong style={{ color: 'var(--text)' }}>
                  3. Penilaian Otomatis MFEP:
                </strong>{' '}
                Sistem menghitung skor kelayakan kandidat secara objektif untuk membantu keputusan HRD.
              </div>
              <div
                className="p-3.5 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-soft)',
                  borderColor: 'var(--border)'
                }}
              >
                <strong style={{ color: 'var(--text)' }}>
                  4. Gaji Cair Maksimal H+2:
                </strong>{' '}
                Begitu shift selesai, dana otomatis ditransfer ke pekerja (dipotong biaya layanan 10%).
              </div>
            </div>
            <button
              onClick={() => setShowHowItWorksModal(false)}
              className="btn-pill-primary w-full py-3 text-sm"
            >
              Mengerti, Tutup Panduan
            </button>
          </div>
        </div>
      )}

      {/* LIGHT-THEME TOAST NOTIFICATION */}
      {toastMessage && (
        <div
          className="fixed bottom-5 right-5 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl border shadow-lg view-transition-enter"
          style={{
            backgroundColor: 'var(--surface)',
            borderColor: 'var(--primary)'
          }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: 'var(--primary)' }}
          />
          <span
            className="text-xs sm:text-sm font-semibold"
            style={{ color: 'var(--text)' }}
          >
            {toastMessage}
          </span>
        </div>
      )}
    </div>
  );
}