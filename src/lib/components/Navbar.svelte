<script>
  import NavLink from './NavLink.svelte';
</script>

<nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-transparent transition-all duration-200">
  <div class="flex items-center gap-8">
    <a href="/" class="flex items-center gap-2">
      <svg width="24" height="30" viewBox="0 0 78 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45.5105 63.889C63.2296 63.889 77.5938 49.5868 77.5938 31.9444C77.5938 14.302 63.2296 0 45.5105 0H0.59375V63.889H45.5105Z" fill="black"/>
        <path d="M0.59375 0L77.5938 95.8333H26.2605L0.59375 63.889L0.59375 0Z" fill="black"/>
        <path d="M51.4831 63.3363C49.5479 63.6992 47.5515 63.889 45.5105 63.889H0.59375V0L51.4831 63.3363Z" fill="black"/>
      </svg>
      <span class="text-xl font-bold tracking-tight">Reform</span>
    </a>
    
    <div class="hidden md:flex items-center gap-6">
      <NavLink>Features</NavLink>
      <NavLink>For Trainers</NavLink>
      <NavLink>Pricing</NavLink>
    </div>
  </div>

  <div class="flex items-center gap-4">
    <a href="#" class="text-sm font-medium text-gray-600 hover:text-black transition-colors px-3 py-2">Sign In</a>
    <a href="#" class="text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors px-5 py-2.5 rounded-full">Start Free Trial</a>
  </div>
</nav>
