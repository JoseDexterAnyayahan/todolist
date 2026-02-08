"use client";

import { useState } from "react";
import BottomNav from "@/components/bottom-nav";
import SettingsCard from "@/components/settings/settings-card";
import ThemeToggle from "@/components/settings/theme-toggle";
import SectionTitle from "@/components/settings/settings-section-title";
import NotificationSettings from "@/components/settings/notification-settings";
import PrioritySelector from "@/components/settings/priority-selector";
import AutoDeleteToggle from "@/components/settings/auto-delete-toggle";
import SoundToggle from "@/components/settings/sound-toggle";
import LanguageSelector from "@/components/settings/language-selector";
import { 
  Bell, 
  User, 
  Palette, 
  CheckCircle2, 
  Trash2, 
  Download, 
  Upload, 
  Shield, 
  HelpCircle, 
  Mail, 
  Star, 
  Info,
  Volume2,
  Globe,
  Zap,
  Cloud,
  Lock,
  Eye,
  Smartphone,
  Headphones,
  Award
} from "lucide-react";

export default function SettingsPage() {
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showPriorityModal, setShowPriorityModal] = useState(false);

  const handleExport = () => {
    console.log("Exporting data...");
    // TODO: Implement export functionality
  };

  const handleImport = () => {
    console.log("Importing data...");
    // TODO: Implement import functionality
  };

  return (
    <div className="min-h-screen pb-28 px-4 pt-6 bg-white text-zinc-900 dark:bg-black dark:text-white">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight mb-1">
          Settings
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Customize your experience
        </p>
      </div>

      {/* ACCOUNT */}
      <SectionTitle>Account</SectionTitle>
      <div className="space-y-3 mb-6">
        <SettingsCard 
          title="Profile" 
          description="Manage your account info" 
          icon={<User size={18} />}
        />
        <SettingsCard 
          title="Notifications" 
          description="Push & reminder settings" 
          icon={<Bell size={18} />}
          onClick={() => setShowNotificationModal(true)}
        />
        <SettingsCard 
          title="Privacy & Security" 
          description="Manage your data" 
          icon={<Shield size={18} />}
        />
        <SettingsCard 
          title="Connected Devices" 
          description="2 devices synced" 
          icon={<Smartphone size={18} />}
        />
      </div>

      {/* APPEARANCE */}
      <SectionTitle>Appearance</SectionTitle>
      <div className="space-y-3 mb-6">
        <SettingsCard
          title="Theme"
          description="Light or dark mode"
          icon={<Palette size={18} />}
          right={<ThemeToggle />}
        />
        <SettingsCard
          title="Language"
          description="English (US)"
          icon={<Globe size={18} />}
          right={<LanguageSelector />}
        />
        <SettingsCard
          title="Sounds"
          description="Task completion sounds"
          icon={<Volume2 size={18} />}
          right={<SoundToggle />}
        />
      </div>

      {/* TASKS & PRODUCTIVITY */}
      <SectionTitle>Tasks & Productivity</SectionTitle>
      <div className="space-y-3 mb-6">
        <SettingsCard 
          title="Default Priority" 
          description="Medium priority" 
          icon={<CheckCircle2 size={18} />}
          onClick={() => setShowPriorityModal(true)}
        />
        <SettingsCard 
          title="Auto-delete Completed" 
          description="After 30 days" 
          icon={<Trash2 size={18} />}
          right={<AutoDeleteToggle />}
        />
        <SettingsCard 
          title="Smart Suggestions" 
          description="AI-powered task tips" 
          icon={<Zap size={18} />}
        />
        <SettingsCard 
          title="Focus Mode" 
          description="Hide distractions" 
          icon={<Eye size={18} />}
        />
      </div>

      {/* SYNC & BACKUP */}
      <SectionTitle>Sync & Backup</SectionTitle>
      <div className="space-y-3 mb-6">
        <SettingsCard 
          title="Cloud Sync" 
          description="Auto-sync enabled" 
          icon={<Cloud size={18} />}
        />
        <SettingsCard 
          title="Export Data" 
          description="Download all your tasks" 
          icon={<Download size={18} />}
          onClick={handleExport}
        />
        <SettingsCard 
          title="Import Data" 
          description="Restore from backup" 
          icon={<Upload size={18} />}
          onClick={handleImport}
        />
        <SettingsCard 
          title="Storage Used" 
          description="2.4 MB of 100 MB" 
          icon={<Info size={18} />}
        />
      </div>

      {/* PREMIUM */}
      <SectionTitle>Premium</SectionTitle>
      <div className="space-y-3 mb-6">
        <SettingsCard 
          title="Upgrade to Pro" 
          description="Unlock all features" 
          icon={<Award size={18} />}
          premium
        />
      </div>

      {/* SUPPORT & ABOUT */}
      <SectionTitle>Support & About</SectionTitle>
      <div className="space-y-3 mb-6">
        <SettingsCard 
          title="Help & FAQ" 
          description="Get support" 
          icon={<HelpCircle size={18} />}
        />
        <SettingsCard 
          title="Contact Us" 
          description="Send feedback" 
          icon={<Mail size={18} />}
        />
        <SettingsCard 
          title="Rate App" 
          description="Leave a review" 
          icon={<Star size={18} />}
        />
        <SettingsCard 
          title="Tutorial" 
          description="Learn the basics" 
          icon={<Headphones size={18} />}
        />
        <SettingsCard 
          title="Version" 
          description="1.0.0 (Latest)" 
          icon={<Info size={18} />}
        />
      </div>

      {/* DANGER ZONE */}
      <SectionTitle>Danger Zone</SectionTitle>
      <div className="space-y-3 mb-6">
        <SettingsCard 
          title="Clear All Tasks" 
          description="Delete everything" 
          icon={<Trash2 size={18} />}
          danger
        />
        <SettingsCard 
          title="Delete Account" 
          description="Permanently delete" 
          icon={<Lock size={18} />}
          danger
        />
      </div>

      <BottomNav />

      {/* NOTIFICATION MODAL */}
      {showNotificationModal && (
        <NotificationSettings onClose={() => setShowNotificationModal(false)} />
      )}

      {/* PRIORITY MODAL */}
      {showPriorityModal && (
        <PrioritySelector onClose={() => setShowPriorityModal(false)} />
      )}
    </div>
  );
}