class ProjectCardNoImage extends HTMLElement {
    connectedCallback() {
        this.classList.add("w-full");
        const title = this.getAttribute("title") || "";
        const description = this.getAttribute("description") || "";
        const btnTitle = this.getAttribute("btn-title") || "View";
        const link = this.getAttribute("link") || "#";

        this.innerHTML = `
         <div class="w-full rounded-3xl bg-white shadow-custom
        flex flex-col justify-center items-center text-center max-w-[350px] h-auto py-10 gap-6 px-10
        xl:flex-row xl:items-center xl:text-left xl:h-[175px] xl:py-0 xl:gap-0 xl:px-12 xl:max-w-full">
            <!-- Title -->
            <div class="w-full xl:w-[150px] mx-auto xl:mx-0 shrink-0 text-center">
                <h3 class="text-md font-bold md:text-base xl:text-base text-primary-900">${title}</h3>
            </div>

            <!-- Divider -->
            <div class="hidden xl:block w-[2px] h-36 rounded-full bg-primary-400 mx-10"></div>

            <!-- Description -->
            <div class="text-center xl:text-left xl:flex-1 w-full xl:pr-10">
                <p class="text-sm  text-primary-900">${description}</p>
            </div>

            <!-- Button -->
            <a href="${link}" target="_blank" class="group inline-flex items-center 
            justify-center rounded-full border-2 border-primary-900
            bg-primary-900 text-sm md:text-base text-white
            font-medium px-5 py-3 w-[125px] shrink-0 shadow-primary-900
            hover:bg-white hover:text-primary-900 
            transition-all duration-300">
                <div class="flex items-center">
                    <svg class="w-0 opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:w-2 group-hover:opacity-100 group-hover:mr-2 transition-all duration-300"
                        width="10" height="20" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 21L11 11L1 1" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <p>${btnTitle}</p>
                </div>
            </a>
        </div>
        `;
    }
}

class ProjectCard extends HTMLElement {
    connectedCallback() {
        this.classList.add("w-full");
        const title = this.getAttribute("title") || "";
        const description = this.getAttribute("description") || "";
        const btnTitle = this.getAttribute("btn-title") || "View";
        const link = this.getAttribute("link") || "#";
        const imageSrc = this.getAttribute("image-src") || "";

        this.innerHTML = `
         <div class="w-full rounded-3xl bg-white shadow-custom
        flex flex-col max-w-[350px] h-auto overflow-hidden
        xl:flex-row xl:h-[175px] xl:max-w-full">
                <!-- Image -->
                <div class="w-full h-[220px] xl:w-[240px] xl:h-full shrink-0">
                    <img src="${imageSrc}" alt="Compast Picture"
                        class="w-full h-full object-cover rounded-3xl">
                </div>

                <!-- Content Wrapper -->
                <div class="flex flex-col justify-center items-center text-center gap-6 p-10 w-full
                xl:flex-row xl:items-center xl:text-left xl:p-0 xl:pr-12 xl:pl-8 xl:gap-8 xl:h-full">

                    <!-- Title + Description -->
                    <div class="flex flex-col justify-center items-center xl:items-start gap-2 xl:flex-1">
                        <h3 class="text-base font-bold md:text-lg xl:text-lg text-primary-900">${title}</h3>
                        <p class="text-xs md:text-sm font-light text-primary-900">${description}</p>
                    </div>

                    <!-- Button -->
                    <a href="${link}" target="_blank" class="btn-title group inline-flex items-center 
                    justify-center rounded-full border-2 border-primary-900
                    bg-primary-900 text-sm md:text-base text-white
                    font-medium px-5 py-3 w-[125px] shrink-0 shadow-primary-900
                    hover:bg-white hover:text-primary-900 
                    transition-all duration-300">
                        <div class="flex items-center">
                            <svg class="w-0 opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:w-2 group-hover:opacity-100 group-hover:mr-2 transition-all duration-300"
                                width="10" height="20" viewBox="0 0 12 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 21L11 11L1 1" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <p>${btnTitle}</p>
                        </div>
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define("project-card", ProjectCard);
customElements.define("project-card-no-image", ProjectCardNoImage)