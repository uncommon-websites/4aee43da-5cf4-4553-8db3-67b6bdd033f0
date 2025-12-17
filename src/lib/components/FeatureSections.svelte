<script>
  import FeatureSection from './FeatureSection.svelte';
  import PhoneMockup from './PhoneMockup.svelte';
</script>

<!-- Client Dashboard Section -->
<FeatureSection
  subtitle="Complete View"
  title="See everything that matters about your clients."
  description="Access a unified dashboard with training progress, nutrition logs, health data, and performance metrics. Make informed decisions with complete client context."
  accentColor="text-primary-600"
  features={[
    "Training History",
    "Nutrition Tracking",
    "Health Documents",
    "Progress Photos",
    "Performance Metrics",
    "Communication Log"
  ]}
>
  <div slot="media">
    <PhoneMockup screenClass="bg-gray-50 flex flex-col">
       <div class="p-6 pt-12 flex-1 flex flex-col">
         <div class="flex justify-between items-center mb-4">
           <span class="text-xs font-medium text-gray-400">9:41</span>
         </div>
         
         <div class="bg-white rounded-2xl shadow-sm p-4 mb-4">
           <div class="flex items-center gap-3 mb-4">
             <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-lg">SM</div>
             <div>
               <div class="font-bold">Sarah Martinez</div>
               <div class="text-xs text-gray-500">Active • 12 weeks</div>
             </div>
           </div>
           
           <div class="grid grid-cols-3 gap-2 text-center text-xs">
             <div class="bg-gray-50 p-2 rounded-lg">
               <div class="font-bold text-lg">-18</div>
               <div class="text-gray-500">lbs lost</div>
             </div>
             <div class="bg-gray-50 p-2 rounded-lg">
               <div class="font-bold text-lg">94%</div>
               <div class="text-gray-500">adherence</div>
             </div>
             <div class="bg-gray-50 p-2 rounded-lg">
               <div class="font-bold text-lg">+15</div>
               <div class="text-gray-500">strength</div>
             </div>
           </div>
         </div>
         
         <div class="space-y-2">
           <div class="bg-white rounded-xl p-3 shadow-sm flex items-center gap-3">
             <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
               <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
             </div>
             <div class="flex-1">
               <div class="text-xs font-bold">Today's Workout</div>
               <div class="text-xs text-gray-500">Completed 45 min ago</div>
             </div>
           </div>
           
           <div class="bg-white rounded-xl p-3 shadow-sm flex items-center gap-3">
             <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
               <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
             </div>
             <div class="flex-1">
               <div class="text-xs font-bold">Nutrition Log</div>
               <div class="text-xs text-gray-500">1,850 / 2,000 cal</div>
             </div>
           </div>
         </div>
       </div>
    </PhoneMockup>
  </div>
  
  <div slot="extra" class="mt-8">
     <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 max-w-sm">
        <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        </div>
        <div>
          <div class="font-bold text-sm">Complete Analytics</div>
          <div class="text-xs text-gray-500">Track every metric</div>
        </div>
     </div>
  </div>
</FeatureSection>

<!-- Program Builder Section -->
<FeatureSection
  reverse={true}
  subtitle="Powerful"
  title="Build programs that adapt to your clients."
  description="Create personalized training programs with our intuitive program builder. Easily adjust based on real-time feedback, progress data, and client needs."
  accentColor="text-primary-600"
  features={[
    "Exercise Library",
    "Program Templates",
    "Quick Adjustments",
    "Progress-Based Scaling"
  ]}
>
  <div slot="media">
    <PhoneMockup screenClass="bg-white flex flex-col">
       <div class="p-6 pt-12">
         <div class="flex justify-between items-center mb-6">
           <div class="font-bold text-lg">Program Builder</div>
           <button class="text-primary-600 text-sm font-medium">Save</button>
         </div>
         
         <div class="space-y-3">
           <div class="bg-gray-50 rounded-xl p-3">
             <div class="flex items-center justify-between mb-2">
               <div class="font-bold text-sm">Day 1: Upper Body</div>
               <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
             </div>
             <div class="space-y-1 text-xs text-gray-600">
               <div class="flex justify-between">
                 <span>• Bench Press</span>
                 <span>4 × 8-10</span>
               </div>
               <div class="flex justify-between">
                 <span>• Rows</span>
                 <span>4 × 10-12</span>
               </div>
               <div class="flex justify-between">
                 <span>• Shoulder Press</span>
                 <span>3 × 12</span>
               </div>
             </div>
           </div>
           
           <div class="bg-gray-50 rounded-xl p-3">
             <div class="flex items-center justify-between mb-2">
               <div class="font-bold text-sm">Day 2: Lower Body</div>
               <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
             </div>
             <div class="space-y-1 text-xs text-gray-600">
               <div class="flex justify-between">
                 <span>• Squats</span>
                 <span>4 × 6-8</span>
               </div>
               <div class="flex justify-between">
                 <span>• Romanian DL</span>
                 <span>3 × 10</span>
               </div>
             </div>
           </div>

           <div class="bg-primary-50 border-2 border-dashed border-primary-300 rounded-xl p-3 flex items-center justify-center gap-2 text-primary-600">
             <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
             <span class="text-sm font-medium">Add Day</span>
           </div>
         </div>
       </div>
    </PhoneMockup>
  </div>
  
  <div slot="extra" class="mt-8">
     <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 max-w-sm">
        <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
        </div>
        <div>
          <div class="font-bold text-sm">Template Library</div>
          <div class="text-xs text-gray-500">Save time with templates</div>
        </div>
     </div>
  </div>
</FeatureSection>

<!-- Communication Section -->
<FeatureSection
  subtitle="Connected"
  title="Stay connected with your clients."
  description="Built-in messaging keeps all communication in context. Review workout feedback, answer nutrition questions, and provide support—all alongside the relevant data."
  accentColor="text-primary-600"
  features={[
    "In-App Messaging",
    "Contextual Threads",
    "File Sharing",
    "Push Notifications"
  ]}
>
  <div slot="media">
    <PhoneMockup screenClass="bg-white flex flex-col">
       <div class="p-6 pt-12">
         <div class="flex items-center gap-3 mb-8">
           <img src="https://i.pravatar.cc/150?img=14" alt="Mike Johnson" class="w-10 h-10 rounded-full object-cover" />
           <div class="font-bold">Mike Johnson</div>
         </div>
         
         <div class="space-y-4">
            <div class="flex gap-3">
              <div class="flex-1 bg-gray-100 rounded-2xl rounded-tl-sm p-3">
                <div class="text-sm">Hey coach, feeling really strong on squats today! Hit a new PR 💪</div>
                <div class="text-xs text-gray-400 mt-1">10:42 AM</div>
              </div>
            </div>

            <div class="flex gap-3 justify-end">
              <div class="flex-1 bg-primary-500 text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                <div class="text-sm">That's awesome! Great work. Let's add 10 lbs next week.</div>
                <div class="text-xs text-primary-100 mt-1">10:45 AM</div>
              </div>
            </div>

            <div class="flex gap-3">
              <div class="flex-1 bg-gray-100 rounded-2xl rounded-tl-sm p-3">
                <div class="text-sm">Quick question about meal timing before workouts...</div>
                <div class="text-xs text-gray-400 mt-1">11:20 AM</div>
              </div>
            </div>

            <div class="flex gap-3 justify-end">
              <div class="flex-1 bg-primary-500 text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                <div class="text-sm">Good question. Aim for 1-2 hours before. Want carbs and protein.</div>
                <div class="text-xs text-primary-100 mt-1">11:22 AM</div>
              </div>
            </div>
         </div>
       </div>
    </PhoneMockup>
  </div>
  
  <div slot="extra" class="mt-8">
     <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 max-w-sm">
        <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </div>
        <div>
          <div class="font-bold text-sm">Seamless Communication</div>
          <div class="text-xs text-gray-500">Always in context</div>
        </div>
     </div>
  </div>
</FeatureSection>

<!-- Cross-Platform Section -->
<FeatureSection
  reverse={true}
  subtitle="Accessible"
  title="Coach from anywhere, on any device."
  description="Reform works seamlessly across mobile and desktop. Review client progress on your phone, build programs on your laptop. Your coaching infrastructure goes where you go."
  accentColor="text-primary-600"
  features={[
    "iOS & Android Apps",
    "Web Dashboard",
    "Real-Time Sync",
    "Offline Access",
    "Cloud Backup"
  ]}
>
  <div slot="media" class="relative">
    <!-- Device Illustration -->
    <div class="relative w-72 h-72 flex items-center justify-center">
       <!-- Desktop Screen -->
       <div class="absolute top-0 left-0 w-48 h-32 bg-gray-900 rounded-lg border-4 border-gray-800 shadow-xl">
         <div class="w-full h-full bg-white p-2 flex flex-col gap-1">
           <div class="h-2 bg-gray-200 rounded w-3/4"></div>
           <div class="h-2 bg-gray-200 rounded w-1/2"></div>
           <div class="flex gap-1 mt-1">
             <div class="h-8 bg-primary-100 rounded flex-1"></div>
             <div class="h-8 bg-gray-100 rounded flex-1"></div>
           </div>
         </div>
       </div>
       
       <!-- Phone -->
       <div class="absolute bottom-0 right-0 w-24 h-48 bg-black rounded-[20px] border-4 border-gray-900 shadow-2xl">
         <div class="w-full h-full bg-white p-2 pt-4">
           <div class="h-1 bg-gray-200 rounded w-2/3 mb-2"></div>
           <div class="space-y-1">
             <div class="h-6 bg-primary-100 rounded"></div>
             <div class="h-6 bg-gray-100 rounded"></div>
             <div class="h-6 bg-gray-100 rounded"></div>
           </div>
         </div>
       </div>
       
       <!-- Sync Icon -->
       <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
         <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
       </div>
    </div>
  </div>
</FeatureSection>
