<script>
  // Testimonials
  const testimonials = [
    {
      name: "Marcus Chen",
      handle: "NASM-CPT",
      role: "Independent Trainer",
      text: "Reform finally gives me the complete picture. I can see training, nutrition, and health data all in one place. My clients are seeing better results because I can make smarter adjustments."
    },
    {
      name: "Jessica Rodriguez",
      handle: "CSCS",
      role: "Strength Coach",
      text: "I was juggling 4 different apps before Reform. Now everything is unified. The time I save on admin work goes directly into coaching my clients."
    },
    {
      name: "David Thompson",
      handle: "ACE-CPT",
      role: "Online Coach",
      text: "The health data integration is a game-changer. Being able to reference blood work and DEXA scans while programming makes my coaching so much more effective."
    },
    {
      name: "Sarah Mitchell",
      handle: "RD, CSSD",
      role: "Sports Nutritionist",
      text: "Photo-based nutrition logging has transformed client accountability. I can see exactly what they're eating, not just what they report. It's made a huge difference."
    },
    {
      name: "Alex Kumar",
      handle: "NSCA-CPT",
      role: "Personal Trainer",
      text: "Reform scales with my business. Started with 5 clients, now managing 30+. The platform handles it effortlessly while keeping everything organized."
    },
    {
      name: "Emily Foster",
      handle: "MS, CSCS",
      role: "Performance Coach",
      text: "This is what coaching software should have been from the start. Intuitive, powerful, and actually built for how coaches work. My clients love it too."
    }
  ];
</script>

<section class="py-24 px-4 bg-white overflow-hidden">
  <div class="container mx-auto max-w-6xl mb-12 flex justify-between items-end">
    <div>
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">Trusted by coaches</h2>
      <p class="text-gray-500">See what trainers are saying about Reform.</p>
    </div>
  </div>

  <!-- Marquee / Horizontal Scroll -->
  <div class="flex overflow-x-auto pb-8 gap-6 px-4 snap-x snap-mandatory scrollbar-hide">
    {#each testimonials as t}
      <div class="min-w-[350px] bg-gray-50 p-6 rounded-2xl border border-gray-100 snap-center">
        <div class="flex items-start mb-4">
          <div class="flex items-center gap-3 flex-1">
            <div class="w-10 h-10 bg-primary-100 rounded-full overflow-hidden flex items-center justify-center">
               <div class="w-full h-full bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center text-white font-bold">
                 {t.name.charAt(0)}
               </div>
            </div>
            <div>
              <div class="font-bold text-sm">{t.name}</div>
              <div class="text-xs text-gray-500">{t.handle}</div>
            </div>
          </div>
          <div class="text-xs text-gray-400 bg-white px-2 py-1 rounded">{t.role}</div>
        </div>
        <p class="text-gray-600 text-sm leading-relaxed">
          {t.text}
        </p>
      </div>
    {/each}
  </div>
</section>

<style>
  .scrollbar-hide::-webkit-scrollbar {
      display: none;
  }
  .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
  }
</style>
