<script>
  import Card from './Card.svelte';
</script>

<section class="py-20 px-4">
  <div class="container mx-auto max-w-6xl">
    <h2 class="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">Everything you need to coach smarter.</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <!-- Card 1: Unified Data (Dark) -->
      <div class="bg-black text-white rounded-3xl p-8 flex flex-col justify-between h-full min-h-[320px] col-span-1 lg:row-span-2">
        <div class="space-y-4">
          <div class="flex items-center gap-4 bg-gray-900/50 p-3 rounded-2xl border border-gray-800">
            <div class="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div>
              <div class="font-bold">Training</div>
              <div class="text-xs text-gray-400">Track workouts, sets, reps, and progress all in one place.</div>
            </div>
          </div>
          
          <div class="flex items-center gap-4 p-3 rounded-2xl opacity-50">
            <div class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <div>
              <div class="font-bold">Nutrition</div>
              <div class="text-xs text-gray-400">Photo logging and meal tracking for complete accountability.</div>
            </div>
          </div>

          <div class="flex items-center gap-4 p-3 rounded-2xl opacity-50">
             <div class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <div>
              <div class="font-bold">Health Data</div>
              <div class="text-xs text-gray-400">Secure storage for blood tests and medical information.</div>
            </div>
          </div>
        </div>
        
        <div class="mt-8">
          <h3 class="font-bold text-lg">Unified</h3>
          <p class="text-gray-400 text-sm mt-2">All your client data in one place. No more juggling apps.</p>
        </div>
      </div>

      <!-- Card 2: Private -->
      <Card className="min-h-[320px]">
        <div class="flex justify-center items-center flex-grow">
          <button class="bg-gray-900 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-gray-200 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            HIPAA Compliant
          </button>
        </div>
        <div>
          <h3 class="font-bold text-lg">Private</h3>
          <p class="text-gray-500 text-sm mt-2">Secure infrastructure for sensitive health data. Privacy first.</p>
        </div>
      </Card>

      <!-- Card 3: Adaptive -->
      <Card className="min-h-[320px]">
        <div class="space-y-3 mb-4">
          <div class="flex items-center gap-2 text-xs text-primary-600">
            <div class="w-4 h-4 rounded-full border border-primary-500 flex items-center justify-center">✓</div>
            <span class="font-medium">Client uploads workout</span>
            <span class="ml-auto text-gray-300">2 min ago</span>
          </div>
          <div class="flex items-center gap-2 text-xs text-primary-600">
             <div class="w-4 h-4 rounded-full border border-primary-500 flex items-center justify-center">✓</div>
            <span class="font-medium">Meal photo logged</span>
            <span class="ml-auto text-gray-300">1 hr ago</span>
          </div>
           <div class="flex items-center gap-2 text-xs text-primary-600">
             <div class="w-4 h-4 rounded-full border border-primary-500 flex items-center justify-center">✓</div>
            <span class="font-medium">Program adjusted</span>
             <span class="ml-auto text-gray-300">Today</span>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-lg">Adaptive</h3>
          <p class="text-gray-500 text-sm mt-2">Real-time updates let you adjust programs faster with complete context.</p>
        </div>
      </Card>

      <!-- Card 4: Insightful -->
      <Card className="min-h-[320px]">
        <div class="flex justify-center items-center flex-grow">
           <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
             <div class="text-xs text-gray-400 uppercase tracking-wide">Client Progress</div>
             <div class="text-2xl font-bold text-gray-900">+12.5 lbs</div>
             <div class="flex justify-center mt-2 gap-1">
               <div class="w-1 h-1 bg-primary-400 rounded-full"></div>
                <div class="w-1 h-1 bg-primary-500 rounded-full"></div>
                 <div class="w-1 h-1 bg-primary-600 rounded-full"></div>
             </div>
           </div>
        </div>
        <div>
          <h3 class="font-bold text-lg">Insightful</h3>
          <p class="text-gray-500 text-sm mt-2">Data-driven insights help you make informed coaching decisions.</p>
        </div>
      </Card>

      <!-- Card 5: Scalable -->
      <Card className="min-h-[320px]">
        <div class="flex justify-center items-center flex-grow -space-x-2">
           <img src="https://i.pravatar.cc/150?img=33" alt="Client" class="w-12 h-12 rounded-full border-2 border-white object-cover" />
           <img src="https://i.pravatar.cc/150?img=47" alt="Client" class="w-12 h-12 rounded-full border-2 border-white object-cover" />
           <img src="https://i.pravatar.cc/150?img=29" alt="Client" class="w-12 h-12 rounded-full border-2 border-white object-cover" />
           <div class="w-12 h-12 rounded-full bg-primary-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">+24</div>
        </div>
        <div>
          <h3 class="font-bold text-lg">Scalable</h3>
          <p class="text-gray-500 text-sm mt-2">Built to grow with your practice. From 1 to 100+ clients.</p>
        </div>
      </Card>

    </div>
  </div>
</section>
