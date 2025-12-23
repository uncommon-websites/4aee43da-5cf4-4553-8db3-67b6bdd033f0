<script lang="ts">
  let isAnnual = $state(true);
</script>

<svelte:head>
  <title>Pricing - Reform</title>
</svelte:head>

<div style="min-height: 100vh; background: #FAFAFA;">
  <!-- Hero Section -->
  <section style="padding: 144px 16px 64px 16px;">
    <div style="max-width: 768px; margin: 0 auto; text-align: center;">
      <h1 style="font-size: 3rem; font-weight: 700; letter-spacing: -0.03em; color: #111; line-height: 1.1; margin: 0;">
        Simple, transparent pricing
      </h1>
      <p style="margin-top: 20px; font-size: 1.125rem; color: #6b7280; max-width: 512px; margin-left: auto; margin-right: auto;">
        Choose the plan that fits your coaching practice. Scale as you grow.
      </p>

      <!-- Billing Toggle -->
      <div style="margin-top: 40px; display: inline-flex; align-items: center; padding: 4px; background: white; border-radius: 9999px; border: 1px solid #e5e7eb; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
        <button
          onclick={() => isAnnual = false}
          style="padding: 10px 24px; font-size: 14px; font-weight: 500; border-radius: 9999px; border: none; cursor: pointer; transition: all 0.2s; background: {!isAnnual ? '#111' : 'transparent'}; color: {!isAnnual ? 'white' : '#6b7280'};"
        >
          Monthly
        </button>
        <button
          onclick={() => isAnnual = true}
          style="padding: 10px 24px; font-size: 14px; font-weight: 500; border-radius: 9999px; border: none; cursor: pointer; transition: all 0.2s; background: {isAnnual ? '#111' : 'transparent'}; color: {isAnnual ? 'white' : '#6b7280'};"
        >
          Annual <span style="margin-left: 4px; font-size: 12px; color: {isAnnual ? '#86efac' : '#22c55e'};">-20%</span>
        </button>
      </div>
    </div>
  </section>

  <!-- Pricing Cards -->
  <section style="padding: 0 16px 96px 16px;">
    <div style="max-width: 1152px; margin: 0 auto;">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start;">

        <!-- Pro Plan -->
        <div style="background: white; border-radius: 16px; border: 1px solid #e5e7eb; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <div style="margin-bottom: 32px;">
            <h3 style="font-size: 1.125rem; font-weight: 600; color: #111; margin: 0;">Pro Plan</h3>
            <p style="margin-top: 4px; font-size: 14px; color: #6b7280;">For solo coaches and practitioners</p>
          </div>

          <div style="margin-bottom: 32px;">
            <div style="display: flex; align-items: baseline; gap: 8px;">
              {#if isAnnual}
                <span style="font-size: 1.25rem; font-weight: 500; color: #dc2626; text-decoration: line-through;">$99</span>
              {/if}
              <span style="font-size: 3rem; font-weight: 700; letter-spacing: -0.02em; color: #111;">
                ${isAnnual ? '79' : '99'}
              </span>
              <span style="color: #6b7280; font-size: 14px;">/month</span>
            </div>
            <p style="margin-top: 8px; font-size: 14px; color: #9ca3af;">$1.60 - $3.17 per client</p>
          </div>

          <a
            href="/get-access"
            style="display: block; width: 100%; padding: 14px 24px; text-align: center; font-size: 14px; font-weight: 600; border-radius: 9999px; border: 2px solid #e5e7eb; color: #374151; text-decoration: none; background: white; box-sizing: border-box;"
          >
            Get access
          </a>

          <div style="margin-top: 40px; display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #22c55e; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #4b5563;">Up to 25 clients</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #22c55e; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #4b5563;">1 coach seat included</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #22c55e; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #4b5563;">Full access to Reform</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #22c55e; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #4b5563;">Program builder</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #22c55e; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #4b5563;">Client messaging</span>
            </div>
          </div>
        </div>

        <!-- Growth Plan (Featured) -->
        <div style="position: relative; background: #111; border-radius: 16px; padding: 32px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); transform: scale(1.05); margin: -16px 0;">
          <div style="position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%);">
            <span style="display: inline-block; padding: 6px 16px; font-size: 11px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; background: #22c55e; color: white; border-radius: 9999px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
              Most Popular
            </span>
          </div>

          <div style="margin-bottom: 32px; padding-top: 8px;">
            <h3 style="font-size: 1.125rem; font-weight: 600; color: white; margin: 0;">Growth Plan</h3>
            <p style="margin-top: 4px; font-size: 14px; color: #9ca3af;">For growing coaching practices</p>
          </div>

          <div style="margin-bottom: 32px;">
            <div style="display: flex; align-items: baseline; gap: 8px;">
              {#if isAnnual}
                <span style="font-size: 1.25rem; font-weight: 500; color: #f87171; text-decoration: line-through;">$199</span>
              {/if}
              <span style="font-size: 3rem; font-weight: 700; letter-spacing: -0.02em; color: white;">
                ${isAnnual ? '159' : '199'}
              </span>
              <span style="color: #9ca3af; font-size: 14px;">/month</span>
            </div>
            <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">$1.06 - $2.12 per client</p>
          </div>

          <a
            href="/get-access"
            style="display: block; width: 100%; padding: 14px 24px; text-align: center; font-size: 14px; font-weight: 600; border-radius: 9999px; border: none; color: #111; text-decoration: none; background: white; box-sizing: border-box;"
          >
            Get access
          </a>

          <div style="margin-top: 40px; display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #4ade80; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #d1d5db;">Up to 75 clients</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #4ade80; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #d1d5db;">3 coach seats included</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #4ade80; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #d1d5db;">Everything in Pro</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #4ade80; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #d1d5db;">Team collaboration</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #4ade80; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #d1d5db;">Advanced analytics</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #4ade80; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #d1d5db;">Priority support</span>
            </div>
          </div>
        </div>

        <!-- Business Plan -->
        <div style="background: white; border-radius: 16px; border: 1px solid #e5e7eb; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <div style="margin-bottom: 32px;">
            <h3 style="font-size: 1.125rem; font-weight: 600; color: #111; margin: 0;">Business Plan</h3>
            <p style="margin-top: 4px; font-size: 14px; color: #6b7280;">For established coaching businesses</p>
          </div>

          <div style="margin-bottom: 32px;">
            <div style="display: flex; align-items: baseline; gap: 8px;">
              {#if isAnnual}
                <span style="font-size: 1.25rem; font-weight: 500; color: #dc2626; text-decoration: line-through;">$399</span>
              {/if}
              <span style="font-size: 3rem; font-weight: 700; letter-spacing: -0.02em; color: #111;">
                ${isAnnual ? '319' : '399'}
              </span>
              <span style="color: #6b7280; font-size: 14px;">/month</span>
            </div>
            <p style="margin-top: 8px; font-size: 14px; color: #9ca3af;">Best value at scale</p>
          </div>

          <a
            href="/get-access"
            style="display: block; width: 100%; padding: 14px 24px; text-align: center; font-size: 14px; font-weight: 600; border-radius: 9999px; border: 2px solid #e5e7eb; color: #374151; text-decoration: none; background: white; box-sizing: border-box;"
          >
            Get access
          </a>

          <div style="margin-top: 40px; display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #22c55e; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #4b5563;">Unlimited clients</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #22c55e; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #4b5563;">10 coach seats included</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #22c55e; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #4b5563;">Everything in Growth</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #22c55e; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #4b5563;">White-label options</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #22c55e; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #4b5563;">API access</span>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <svg style="width: 20px; height: 20px; color: #22c55e; flex-shrink: 0; margin-top: 2px;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span style="font-size: 14px; color: #4b5563;">Dedicated account manager</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Footer Section -->
  <section style="padding: 0 16px 80px 16px;">
    <div style="max-width: 512px; margin: 0 auto; text-align: center;">
      <p style="color: #6b7280; margin: 0;">
        All plans include a 14-day free trial. No credit card required.
      </p>
      <a
        href="/"
        style="display: inline-flex; align-items: center; gap: 8px; margin-top: 24px; font-size: 14px; font-weight: 500; color: #4b5563; text-decoration: none;"
      >
        <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Back to home
      </a>
    </div>
  </section>
</div>

<style>
  @media (max-width: 1024px) {
    section:nth-child(2) > div > div {
      grid-template-columns: 1fr !important;
      max-width: 400px;
      margin: 0 auto;
    }
    section:nth-child(2) > div > div > div:nth-child(2) {
      transform: none !important;
      margin: 0 !important;
    }
  }
</style>
