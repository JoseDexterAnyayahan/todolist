"use client";

import { useState } from "react";
import { 
  ArrowLeft, 
  Camera, 
  Mail, 
  User, 
  Calendar, 
  MapPin, 
  Edit2, 
  Check, 
  X, 
  Trophy,
  Zap,
  Target,
  TrendingUp,
  Clock,
  Star,
  Award,
  Flame
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    username: "@johndoe",
    bio: "Productivity enthusiast | Task master | Coffee lover ☕",
    location: "San Francisco, CA",
    joinDate: "January 2024",
  });

  const [editData, setEditData] = useState(profileData);

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  // Achievement data
 const achievements: Array<{
  icon: any;
  label: string;
  color: 'orange' | 'yellow' | 'blue' | 'purple';
  unlocked: boolean;
}> = [
  { icon: Flame, label: "7 Day Streak", color: "orange", unlocked: true },
  { icon: Trophy, label: "100 Tasks", color: "yellow", unlocked: true },
  { icon: Target, label: "Perfect Week", color: "blue", unlocked: true },
  { icon: Zap, label: "Speed Demon", color: "purple", unlocked: true },
];

  // Activity data
  const weeklyActivity = [
    { day: "Mon", tasks: 8 },
    { day: "Tue", tasks: 12 },
    { day: "Wed", tasks: 6 },
    { day: "Thu", tasks: 15 },
    { day: "Fri", tasks: 10 },
    { day: "Sat", tasks: 4 },
    { day: "Sun", tasks: 7 },
  ];

  const maxTasks = Math.max(...weeklyActivity.map(d => d.tasks));

  return (
    <div className="min-h-screen pb-24 bg-white dark:bg-black">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between p-4 max-w-sm mx-auto">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ArrowLeft size={20} className="text-zinc-900 dark:text-white" />
          </button>
          <h1 className="text-lg font-bold text-zinc-900 dark:text-white">Profile</h1>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="w-10 h-10 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Edit2 size={18} className="text-amber-600 dark:text-amber-400" />
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="w-10 h-10 rounded-xl bg-red-500/10 hover:bg-red-500/20 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <X size={18} className="text-red-600 dark:text-red-400" />
              </button>
              <button
                onClick={handleSave}
                className="w-10 h-10 rounded-xl bg-green-500/10 hover:bg-green-500/20 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Check size={18} className="text-green-600 dark:text-green-400" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Profile Content */}
      <div className="p-4 space-y-6 max-w-sm mx-auto">
        {/* Avatar Section with Level Badge */}
        <div className="flex flex-col items-center py-6 relative">
          <div className="relative group">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl shadow-amber-500/25 ring-4 ring-white dark:ring-zinc-900">
              JD
            </div>
            <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Camera size={18} className="text-zinc-900 dark:text-white" />
            </button>
            {/* Level Badge */}
            <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 border-4 border-white dark:border-zinc-900">
              <div className="text-center">
                <div className="text-xs font-bold text-white">LVL</div>
                <div className="text-sm font-bold text-white -mt-1">12</div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-4">{profileData.name}</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{profileData.username}</p>
          
          {/* XP Progress Bar */}
          <div className="w-full max-w-xs mt-4">
            <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-1">
              <span>Level 12</span>
              <span>2,340 / 3,000 XP</span>
            </div>
            <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: '78%' }}
              />
            </div>
          </div>
        </div>

        {/* Stats Cards with Icons */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 rounded-2xl p-4 text-center border border-green-200 dark:border-green-800/50 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center mx-auto mb-2">
              <Check className="text-green-600 dark:text-green-400" size={16} strokeWidth={3} />
            </div>
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">127</div>
            <div className="text-xs text-green-700 dark:text-green-300 mt-1">Completed</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 rounded-2xl p-4 text-center border border-blue-200 dark:border-blue-800/50 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center mx-auto mb-2">
              <Clock className="text-blue-600 dark:text-blue-400" size={16} strokeWidth={3} />
            </div>
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">23</div>
            <div className="text-xs text-blue-700 dark:text-blue-300 mt-1">Active</div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/20 rounded-2xl p-4 text-center border border-amber-200 dark:border-amber-800/50 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="text-amber-600 dark:text-amber-400" size={16} strokeWidth={3} />
            </div>
            <div className="text-2xl font-bold text-amber-900 dark:text-amber-100">85%</div>
            <div className="text-xs text-amber-700 dark:text-amber-300 mt-1">Success</div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
              Achievements
            </h3>
            <Award size={16} className="text-amber-500" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const colorClasses = {
                orange: "from-orange-400 to-orange-500",
                yellow: "from-yellow-400 to-yellow-500",
                blue: "from-blue-400 to-blue-500",
                purple: "from-purple-400 to-purple-500",
              };
              
              return (
                <div key={index} className="text-center">
                  <div className={`
                    w-full aspect-square rounded-2xl flex items-center justify-center mb-1 transition-all duration-300 hover:scale-105
                    ${achievement.unlocked 
                      ? `bg-gradient-to-br ${colorClasses[achievement.color]} shadow-lg` 
                      : 'bg-zinc-200 dark:bg-zinc-800'
                    }
                  `}>
                    <Icon 
                      size={24} 
                      className={achievement.unlocked ? "text-white" : "text-zinc-400 dark:text-zinc-600"} 
                      strokeWidth={2.5}
                    />
                  </div>
                  <p className={`text-[10px] font-medium leading-tight ${
                    achievement.unlocked 
                      ? "text-zinc-900 dark:text-white" 
                      : "text-zinc-400 dark:text-zinc-600"
                  }`}>
                    {achievement.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly Activity Chart */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide px-1">
            This Week's Activity
          </h3>
          <div className="bg-zinc-50 dark:bg-zinc-950 rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-end justify-between h-32 gap-2">
              {weeklyActivity.map((day, index) => {
                const height = (day.tasks / maxTasks) * 100;
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full relative flex items-end" style={{ height: '100px' }}>
                      <div 
                        className="w-full bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-lg transition-all duration-500 hover:from-amber-600 hover:to-amber-500"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{day.day}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide px-1">
            Information
          </h3>

          {/* Name */}
          <div className="bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                <User size={18} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Full Name</div>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    className="w-full bg-transparent text-sm font-medium text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 focus:border-amber-400 outline-none pb-1"
                  />
                ) : (
                  <div className="text-sm font-semibold text-zinc-900 dark:text-white">{profileData.name}</div>
                )}
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950/30 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Email</div>
                {isEditing ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    className="w-full bg-transparent text-sm font-medium text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 focus:border-amber-400 outline-none pb-1"
                  />
                ) : (
                  <div className="text-sm font-semibold text-zinc-900 dark:text-white truncate">{profileData.email}</div>
                )}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Location</div>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.location}
                    onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                    className="w-full bg-transparent text-sm font-medium text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 focus:border-amber-400 outline-none pb-1"
                  />
                ) : (
                  <div className="text-sm font-semibold text-zinc-900 dark:text-white">{profileData.location}</div>
                )}
              </div>
            </div>
          </div>

          {/* Join Date */}
          <div className="bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center flex-shrink-0">
                <Calendar size={18} className="text-amber-600 dark:text-amber-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Member Since</div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-white">{profileData.joinDate}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide px-1">
            About
          </h3>
          <div className="bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800 transition-all duration-300">
            {isEditing ? (
              <textarea
                value={editData.bio}
                onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                rows={3}
                className="w-full bg-transparent text-sm text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 focus:border-amber-400 outline-none resize-none"
                placeholder="Tell us about yourself..."
              />
            ) : (
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{profileData.bio}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}