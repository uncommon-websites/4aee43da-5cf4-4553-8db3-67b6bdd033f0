<script lang="ts">
  // Social proof section showing media/publication logos
  
  // Placeholder logos - these would be replaced with actual company logos
  const publications = [
    { name: 'TechCrunch', logo: '/logos/techcrunch.svg' },
    { name: 'Forbes', logo: '/logos/forbes.svg' },
    { name: 'Wired', logo: '/logos/wired.svg' },
    { name: 'Fast Company', logo: '/logos/fastcompany.svg' },
    { name: 'The Verge', logo: '/logos/theverge.svg' },
    { name: 'Business Insider', logo: '/logos/businessinsider.svg' }
  ];
</script>

<section class="py-16 md:py-20 bg-white border-t border-gray-100">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">
        Might've seen Reform on
      </p>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center max-w-6xl mx-auto">
      {#each publications as pub}
        <div class="flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity grayscale hover:grayscale-0">
          <!-- Placeholder for logo - using text for now -->
          <div class="text-gray-400 font-semibold text-lg">
            {pub.name}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
