<script lang="ts">
  const coachTypes = [
    'Powerlifting',
    'Bodybuilding',
    'General Fitness',
    'CrossFit',
    'Sports Performance',
    'Nutrition',
    'Online Coaching',
    'Other'
  ];
</script>

<svelte:head>
  <title>Get Access - Reform</title>
</svelte:head>

<section class="min-h-screen pt-32 pb-20 bg-gradient-to-b from-gray-50 via-white to-white">
  <div class="container mx-auto px-4 max-w-2xl">
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
        Get Access
      </h1>
      <p class="text-lg text-gray-600">
        Join the waitlist and be among the first to experience Reform.
      </p>
    </div>

    <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
      <form action="https://api.web3forms.com/submit" method="POST" class="space-y-6">
        <input type="hidden" name="access_key" value="56bb2e3b-bab6-49e7-a584-737fa294ec35">
        <input type="hidden" name="subject" value="New Get Access Request - Reform">
        <input type="hidden" name="from_name" value="Reform Get Access Form">

        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="John Smith"
          >
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            Email Address <span class="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="john@example.com"
          >
        </div>

        <div>
          <label for="clients" class="block text-sm font-medium text-gray-700 mb-2">
            Number of Clients <span class="text-red-500">*</span>
          </label>
          <select
            id="clients"
            name="number_of_clients"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
          >
            <option value="">Select range</option>
            <option value="1-10">1-10 clients</option>
            <option value="11-25">11-25 clients</option>
            <option value="26-50">26-50 clients</option>
            <option value="51-100">51-100 clients</option>
            <option value="100+">100+ clients</option>
          </select>
        </div>

        <div>
          <label for="country" class="block text-sm font-medium text-gray-700 mb-2">
            Country <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="United States"
          >
        </div>

        <div>
          <label for="coach_type" class="block text-sm font-medium text-gray-700 mb-2">
            Type of Coach <span class="text-red-500">*</span>
          </label>
          <select
            id="coach_type"
            name="coach_type"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
          >
            <option value="">Select your specialty</option>
            {#each coachTypes as type}
              <option value={type}>{type}</option>
            {/each}
          </select>
        </div>

        <div>
          <label for="features" class="block text-sm font-medium text-gray-700 mb-2">
            What features are you looking for? <span class="text-gray-400">(optional)</span>
          </label>
          <textarea
            id="features"
            name="features_requested"
            rows="4"
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
            placeholder="Tell us what features would help your coaching business..."
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] text-lg"
        >
          Request Access
        </button>

        <p class="text-center text-sm text-gray-500">
          We'll reach out to you shortly after reviewing your application.
        </p>
      </form>
    </div>

    <div class="mt-8 text-center">
      <a href="/" class="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Back to home
      </a>
    </div>
  </div>
</section>
