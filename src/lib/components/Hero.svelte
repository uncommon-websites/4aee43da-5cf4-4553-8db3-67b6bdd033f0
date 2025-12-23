<script lang="ts">
  // Modern hero section with enhanced visual hierarchy
</script>

<section class="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white">
  <!-- Enhanced Background Elements -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <!-- Large gradient orbs -->
    <div class="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary-200 to-primary-100 rounded-full opacity-30 blur-3xl"></div>
    <div class="absolute -top-20 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-primary-100 to-transparent rounded-full opacity-20 blur-3xl"></div>
    
    <!-- Accent shapes -->
    <div class="absolute top-32 left-[15%] w-32 h-32 bg-primary-200 rounded-3xl rotate-12 opacity-20 blur-xl"></div>
    <div class="absolute top-48 right-[20%] w-24 h-24 bg-primary-300 rounded-full opacity-15 blur-2xl"></div>
    
    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
  </div>

  <div class="container mx-auto px-4 text-center max-w-5xl relative z-10">
    <!-- Badge/Label -->
    <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 mb-8 backdrop-blur-sm">
      <span class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
      Trusted by professional coaches worldwide
    </div>
    
    <h1 class="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
      The coaching OS for<br />
      <span class="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">modern personal trainers.</span>
    </h1>
    
    <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
      Unify training, nutrition, and health data into one powerful platform. Deliver personalized coaching with complete client context.
    </p>
    
    <div class="flex items-center justify-center mb-16">
      <a href="/get-access" class="group flex items-center gap-2 bg-gray-900 text-white px-10 py-5 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 text-lg">
        Get Access
        <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
        </svg>
      </a>
    </div>
    
    <!-- Stats or trust indicators -->
    <div class="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm text-gray-500">
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <span>4.9/5 rating</span>
      </div>
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
        <span>10,000+ coaches</span>
      </div>
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
        <span>HIPAA compliant</span>
      </div>
    </div>
  </div>
</section>
