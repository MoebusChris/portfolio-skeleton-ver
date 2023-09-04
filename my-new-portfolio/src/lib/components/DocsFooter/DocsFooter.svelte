<script lang="ts">


    const cBase = 'bg-surface-50 dark:bg-surface-900 border-t border-surface-500/10 text-xs md:text-base';
	const cRowOne = 'flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0';
	const cRowTwo = 'flex flex-col md:flex-col justify-between items-center space-y-4 md:space-y-0 gap-6';

</script>

<div class="page-footer {cBase}">
    <div class="w-full max-w-7xl mx-auto p-4 py-8 md:py-12 space-y-10">
        
            <section class="{cRowTwo}">
                <div class="flex space-x-4">
                    <button type="button" class="btn-icon variant-soft-primary hover:variant-filled-primary"><i class="fa-brands fa-twitter"></i></button>
                    <button type="button" class="btn-icon variant-soft-primary hover:variant-filled-primary"><i class="fa-brands fa-github"></i></button>
                    <button type="button" class="btn-icon variant-soft-primary hover:variant-filled-primary"><i class="fa-brands fa-instagram"></i></button>
                    <button type="button" class="btn-icon variant-soft-primary hover:variant-filled-primary"><i class="fa-brands fa-linkedin"></i></button>
                    <button type="button" class="btn-icon variant-soft-primary hover:variant-filled-primary"><i class="fa-solid fa-envelope"></i></button>
                </div>
                <div class="flex space-y-4">
                    <p class="text-primary-500"><small>With Loyalty and Trust to Customers</small></p>
                </div>
            </section>
    </div>
</div>