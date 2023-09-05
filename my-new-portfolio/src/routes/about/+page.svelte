<script lang="ts">
    import { getImageLink } from "$lib/images";
</script>

<div>
    <div class="about-section-container">
        <h2 class="text-center text-7xl">About Me</h2>
    </div>

    <div class="about-section-container">
        <img class="h-auto max-w-full rounded-lg" src={getImageLink({ id: 'qucYweSE3ZY', w: 1280, h: 512 })} alt="" />
    </div>

    <div class="about-section-container">
        <span class="grid gap-8 grid-cols-1">

            <p class="heading-font">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam vero ab maiores harum. Delectus deserunt doloremque soluta mollitia enim pariatur inventore, eius quam hic, explicabo similique, nemo asperiores sunt.
            </p>
            <p class="body-paragraph-font">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quaerat exercitationem facere harum itaque non voluptas. Doloremque nobis, maxime eligendi nesciunt, laboriosam qui quisquam sint odit ipsum, nostrum tenetur esse!
            </p>
            <p class="body-paragraph-font">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quaerat exercitationem facere harum itaque non voluptas. Doloremque nobis, maxime eligendi nesciunt, laboriosam qui quisquam sint odit ipsum, nostrum tenetur esse!
            </p>
            <p class="body-paragraph-font">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quaerat exercitationem facere harum itaque non voluptas. Doloremque nobis, maxime eligendi nesciunt, laboriosam qui quisquam sint odit ipsum, nostrum tenetur esse!
            </p>
            <p class="body-paragraph-font">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quaerat exercitationem facere harum itaque non voluptas. Doloremque nobis, maxime eligendi nesciunt, laboriosam qui quisquam sint odit ipsum, nostrum tenetur esse!
            </p>
        </span>
    </div>
    <div class="resume-button-container">
        <a
        class="btn btn-xl variant-filled-primary"
        href="https://stackblitz.com/"
        target="_blank"
        rel="noreferrer"
    >
        <i class="fa-solid fa-envelope"></i>
        <span>Download Resume</span>
    </a>
    </div>
</div>

<style lang="postcss">
    .about-section-container {
    @apply w-full max-w-7xl mx-auto p-4 py-16 md:py-20;
    }
    .resume-button-container {
    @apply flex justify-center w-full max-w-7xl mx-auto p-4 py-16 md:py-20;
    }
    .heading-font {
    @apply text-3xl;
    }
    .body-paragraph-font {
    @apply text-xl opacity-80;
    }
</style>