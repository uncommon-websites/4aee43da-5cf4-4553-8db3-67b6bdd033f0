<script>
  import PhoneMockup from './PhoneMockup.svelte';
</script>

<section class="py-24 px-4 bg-white">
  <div class="container mx-auto max-w-6xl">
    <div class="mb-16">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        Simple setup.<br />
        Powerful management.
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <!-- Quick Start -->
      <div class="flex flex-col items-center">
        <PhoneMockup screenClass="bg-white flex flex-col">
          <div class="p-6 pt-12 flex-1 flex flex-col items-center justify-center text-center">
             <div class="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6">
               <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
             </div>
             
             <h3 class="font-bold text-xl mb-2">Add Your First Client</h3>
             <p class="text-gray-500 text-sm mb-6">Get started in minutes. Create client profiles and begin coaching.</p>
             
             <div class="w-full bg-gray-50 p-4 rounded-xl flex items-center gap-3 text-left border border-gray-100">
               <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs">
                 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
               </div>
               <div>
                 <div class="font-bold text-sm">Quick Setup</div>
                 <div class="text-xs text-gray-500">Name, goals, and you're ready</div>
               </div>
             </div>
          </div>
        </PhoneMockup>
        <div class="mt-6 flex items-center gap-2 text-primary-600 font-medium">
          <div class="w-4 h-4 rounded-full border border-primary-500 flex items-center justify-center text-[10px]">✓</div>
          Quick Start
        </div>
      </div>

      <!-- Client Overview -->
      <div class="flex flex-col items-center">
        <PhoneMockup screenClass="bg-white flex flex-col">
          <div class="p-6 pt-12 flex-1">
             <div class="flex justify-between items-center mb-6">
               <div class="font-bold text-lg">My Clients</div>
               <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
               </div>
             </div>
             
             <div class="grid grid-cols-2 gap-3">
               <div class="bg-primary-500 text-white p-3 rounded-2xl aspect-square flex flex-col justify-between">
                 <img src="https://i.pravatar.cc/150?img=12" alt="John Davis" class="w-8 h-8 rounded-full object-cover ring-2 ring-white/30" />
                 <div>
                   <div class="font-bold text-sm">John Davis</div>
                   <div class="text-xs opacity-80">On track</div>
                 </div>
               </div>
               
               <div class="bg-gray-900 text-white p-3 rounded-2xl aspect-square flex flex-col justify-between">
                 <img src="https://i.pravatar.cc/150?img=5" alt="Sarah M." class="w-8 h-8 rounded-full object-cover ring-2 ring-white/30" />
                 <div>
                   <div class="font-bold text-sm">Sarah M.</div>
                   <div class="text-xs opacity-80">Excellent</div>
                 </div>
               </div>

               <div class="bg-primary-600 text-white p-3 rounded-2xl aspect-square flex flex-col justify-between">
                 <img src="https://i.pravatar.cc/150?img=33" alt="Mike J." class="w-8 h-8 rounded-full object-cover ring-2 ring-white/30" />
                 <div>
                   <div class="font-bold text-sm">Mike J.</div>
                   <div class="text-xs opacity-80">Active</div>
                 </div>
               </div>

               <div class="bg-gray-100 text-gray-900 p-3 rounded-2xl aspect-square flex flex-col justify-between">
                 <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-sm">+8</div>
                 <div>
                   <div class="font-bold text-sm">More</div>
                   <div class="text-xs text-gray-500">View all</div>
                 </div>
               </div>
             </div>
          </div>
        </PhoneMockup>
        <div class="mt-6 flex items-center gap-2 text-gray-700 font-medium">
           <div class="w-4 h-4 rounded-sm bg-gray-700 flex items-center justify-center text-white text-[10px]">
             <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
           </div>
          Client Dashboard
        </div>
      </div>

      <!-- Easy Customization -->
      <div class="flex flex-col items-center">
        <PhoneMockup screenClass="bg-white flex flex-col">
          <div class="p-6 pt-12 flex-1 relative">
             <div class="flex items-center gap-3 mb-6">
               <img src="https://i.pravatar.cc/150?img=12" alt="John Davis" class="w-10 h-10 rounded-full object-cover" />
               <div>
                 <div class="font-bold">John's Program</div>
                 <div class="text-xs text-gray-500">Week 4 of 12</div>
               </div>
             </div>

             <div class="space-y-3">
               <div class="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                 <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                   <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                 </div>
                 <div class="flex-1 font-bold text-sm">Upper Body</div>
                 <div class="text-xs text-gray-500">Mon</div>
               </div>

               <div class="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm opacity-50">
                 <div class="w-8 h-8 bg-gray-100 rounded-lg"></div>
                 <div class="flex-1 font-bold text-sm">Lower Body</div>
                 <div class="text-xs text-gray-500">Wed</div>
               </div>
             </div>

             <!-- Dragging Element -->
             <div class="absolute top-1/2 left-8 right-8 bg-white p-3 rounded-xl shadow-xl border-2 border-primary-500 rotate-3 z-10 flex items-center gap-3">
                <div class="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                 <div class="flex-1 font-bold text-sm">Cardio</div>
                 <div class="text-xs text-gray-500">Fri</div>
             </div>
          </div>
        </PhoneMockup>
        <div class="mt-6 flex items-center gap-2 text-primary-600 font-medium">
          <div class="w-4 h-4 border border-primary-500 rounded flex items-center justify-center text-[10px]">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
          </div>
          Easy Adjustments
        </div>
      </div>

    </div>
  </div>
</section>
