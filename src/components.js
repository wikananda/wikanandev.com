class ProjectCardNoImage extends HTMLElement {
    connectedCallback() {
        this.classList.add("w-full");
        const title = this.getAttribute("title") || "";
        const description = this.getAttribute("description") || "";
        const btnTitle = this.getAttribute("btn-title") || "View";
        const link = this.getAttribute("link") || "#";

        this.innerHTML = `
         <div class="w-full mx-auto rounded-3xl bg-white shadow-custom max-w-[350px] lg:max-w-full
        flex flex-col justify-center items-center text-center h-auto py-10 gap-6 px-10
        lg:flex-row lg:items-center lg:text-left lg:h-[175px] 2xl:h-[350px] lg:py-0 lg:gap-0 lg:px-10 2xl:gap-6 2xl:px-20">
            <!-- Title -->
            <div class="w-full lg:w-[150px] 2xl:w-[300px] mx-auto lg:mx-0 shrink-0 text-center">
                <h3 class="text-md font-bold md:text-base lg:text-base 2xl:text-3xl text-primary-900">${title}</h3>
            </div>

            <!-- Divider -->
            <div class="hidden lg:block w-[2px] h-36 2xl:h-72 rounded-full bg-primary-400 mx-10"></div>

            <!-- Description -->
            <div class="text-center lg:text-left lg:flex-1 w-full lg:pr-10 2xl:pr-20">
                <p class="text-sm 2xl:text-2xl  text-primary-900">${description}</p>
            </div>

            <!-- Button -->
            <a href="${link}" target="_blank" class="group inline-flex items-center 
            justify-center rounded-full border-2 border-primary-900
            bg-primary-900 text-sm md:text-base 2xl:text-2xl text-white
            font-medium px-5 py-3 2xl:px-8 2xl:py-5 w-[125px] 2xl:w-[200px] shrink-0 shadow-primary-900
            hover:bg-white hover:text-primary-900 focus:bg-white focus:text-primary-900 
            transition-all duration-300">
                <div class="flex items-center">
                    <svg class="w-0 2xl:scale-150 opacity-0 translate-x-2 transition-all duration-300
                    group-hover:translate-x-0 group-hover:w-2 group-hover:opacity-100 group-hover:mr-2
                    group-focus:translate-x-0 group-focus:w-2 group-focus:opacity-100 group-focus:mr-2
                    2xl:group-hover:mr-4 2xl:group-focus:mr-4"
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
         <div class="w-full mx-auto rounded-3xl bg-white shadow-custom
        flex flex-col h-auto overflow-hidden max-w-[350px] lg:max-w-full
        lg:flex-row lg:h-[175px] 2xl:h-[350px] lg:gap-6 lg:pr-12 2xl:pr-24">
                <!-- Image -->
                <div class="w-full h-[220px] lg:w-[240px] 2xl:w-[480px] lg:h-full shrink-0">
                    <img src="${imageSrc}" alt="Compast Picture"
                        class="w-full h-full object-cover rounded-3xl">
                </div>

                <!-- Content Wrapper -->
                <div class="flex flex-col justify-center items-center text-center gap-6 p-10 w-full
                lg:flex-row lg:items-center lg:text-left lg:p-0 lg:pl-8 lg:gap-8 lg:h-full">

                    <!-- Title + Description -->
                    <div class="flex flex-col justify-center items-center lg:items-start gap-2 2xl:gap-4 lg:flex-1 lg:pr-10 2xl:pr-20">
                        <h3 class="text-base font-bold md:text-lg lg:text-lg 2xl:text-4xl text-primary-900">${title}</h3>
                        <p class="text-xs md:text-sm 2xl:text-2xl font-light text-primary-900">${description}</p>
                    </div>

                    <!-- Button -->
                    <a href="${link}" target="_blank" class="btn-title group inline-flex items-center 
                    justify-center rounded-full border-2 border-primary-900
                    bg-primary-900 text-sm md:text-base 2xl:text-2xl text-white
                    font-medium px-5 py-3 2xl:px-8 2xl:py-5 w-[125px] 2xl:w-[200px] shrink-0 shadow-primary-900
                    hover:bg-white hover:text-primary-900 focus:bg-white focus:text-primary-900 
                    transition-all duration-300">
                        <div class="flex items-center">
                            <svg class="w-0 2xl:scale-150 opacity-0 translate-x-2 transition-all duration-300
                            group-hover:translate-x-0 group-hover:w-2 group-hover:opacity-100 group-hover:mr-2 
                            group-focus:translate-x-0 group-focus:w-2 group-focus:opacity-100 group-focus:mr-2
                            2xl:group-hover:mr-4 2xl:group-focus:mr-4"
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