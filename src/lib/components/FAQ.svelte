<script lang="ts">
  let openIndex: number | null = null;

  const faqs = [
    {
      question: "Is my clients' health data secure?",
      answer: "Absolutely. Reform uses enterprise-grade, HIPAA-compliant infrastructure to protect sensitive health information. All data is encrypted in transit and at rest. We take privacy and security seriously—it's foundational to everything we build."
    },
    {
      question: "Can I migrate my existing clients to Reform?",
      answer: "Yes! We make it easy to bring your existing client data into Reform. Our team can help you migrate from other platforms, or you can start fresh and add clients as you go. There's no lock-in, your data is always yours."
    },
    {
      question: "What platforms does Reform work on?",
      answer: "Reform works seamlessly across iOS, Android, and web. Build programs on your laptop, check client progress on your phone, and everything syncs in real-time. Your coaching infrastructure goes where you go."
    },
    {
      question: "How does pricing work?",
      answer: "Reform offers simple, transparent pricing that scales with your practice. Start with a free trial to experience the platform, then choose a plan based on your number of active clients. No hidden fees, cancel anytime."
    }
  ];

  function toggle(index: number) {
    if (openIndex === index) {
      openIndex = null;
    } else {
      openIndex = index;
    }
  }
</script>

<section class="py-24 px-4 bg-white">
  <div class="container mx-auto max-w-6xl flex flex-col md:flex-row gap-16">
    <div class="md:w-1/3">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
    </div>

    <div class="md:w-2/3">
      <div class="space-y-4">
        {#each faqs as faq, i}
          <div class="border-b border-gray-100 pb-4">
            <button 
              class="w-full flex justify-between items-center py-4 text-left font-bold text-lg hover:text-blue-600 transition-colors"
              on:click={() => toggle(i)}
            >
              {faq.question}
              <span class={`transform transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''} text-primary-500 font-normal text-2xl`}>+</span>
            </button>
            {#if openIndex === i}
              <div class="pb-4 text-gray-500 leading-relaxed">
                {faq.answer}
              </div>
            {/if}
          </div>
        {/each}
      </div>
      
      <div class="mt-8">
        <a href="#" class="text-primary-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
          See More FAQs 
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </div>
  </div>
</section>
