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

class CustomHeader extends HTMLElement {
    connectedCallback() {
        const isAboutPage = window.location.pathname.includes("about.html");
        const logoLink = isAboutPage ? "../index.html" : "#";

        this.innerHTML = `
        <header class="w-full flex justify-between items-center relative z-50">
            <a href="${logoLink}" id="nav-logo"
                class="text-lg md:text-xl xl:text-2xl 2xl:text-5xl font-bold text-primary-900 transition-colors duration-500">Wikananda.</a>

            <!-- Burger Button -->
            <button id="nav-icon2"
                class="relative w-10 h-6 md:w-12 md:h-10 2xl:w-14 2xl:h-12 text-primary-900 transition-colors duration-500 [--bar-height:3px] md:[--bar-height:4px] 2xl:[--bar-height:6px] [--bar-spacing:10px] md:[--bar-spacing:14px] 2xl:[--bar-spacing:20px]"
                aria-label="Open menu">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
        `;
    }
}

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="mt-48 bg-primary-50 w-full py-20 px-6 text-primary-900">
            <div
                class="w-full py-7 px-10 xl:px-[200px] 2xl:py-14 2xl:px-[400px] md:px-[80px] mx-auto flex flex-col items-center lg:items-start gap-12">
                <h2 class="text-2xl md:text-3xl xl:text-5xl 2xl:text-7xl font-bold text-primary-900">Get in touch</h2>
                <div class="w-full flex flex-col lg:flex-row items-center md:justify-center gap-10 lg:justify-between">

                    <!-- Email -->
                    <a href="mailto:nandasantana276@gmail.com" class="px-6 py-4 xl:px-10 xl:py-4 rounded-full border border-primary-900 text-primary-900 
                                text-xs xl:text-base 2xl:text-2xl font-light hover:bg-primary-900 hover:text-white focus:bg-primary-900 focus:text-white
                                transition">
                        nandasantana276@gmail.com
                    </a>

                    <!-- Location -->
                    <div class="flex items-center gap-3 text-primary-900 font-light text-xs xl:text-base 2xl:text-2xl">
                        <!-- Globe Icon -->
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7"
                            stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path
                                d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>

                        <span>Located in Bali, Indonesia</span>
                    </div>

                    <!-- Socials -->
                    <div class="flex flex-col items-center lg:items-end">
                        <p class="text-sm xl:text-base 2xl:text-3xl text-primary-400 font-medium mb-1">Socials</p>
                        <div class="flex gap-6 text-primary-900 font-light transition-all">
                            <a href="https://www.linkedin.com/in/wikananda-s" target="_blank"
                                class="hover:opacity-70 transition hover:underline text-xs xl:text-base 2xl:text-2xl">LinkedIn</a>
                            <a href="https://www.instagram.com/komang_nws/" target="_blank"
                                class="hover:opacity-70 transition hover:underline text-xs xl:text-base 2xl:text-2xl">Instagram</a>
                            <a href="https://drive.google.com/file/d/1PDiXc6aaLOuUVC30Qh0plwimiEx2Dnnf/view?usp=sharing"
                                target="_blank"
                                class="hover:opacity-70 transition hover:underline text-xs xl:text-base 2xl:text-2xl">Resume</a>
                        </div>
                    </div>
                </div>
                <div class="font-light text-xs md:text-sm xl:text-base 2xl:text-2xl text-primary-400 text-center">
                    &copy; 2025 Nyoman Wikananda Santana
                </div>
            </div>
        </footer>
        `;
    }
}

class MenuOverlay extends HTMLElement {
    connectedCallback() {
        const isAboutPage = window.location.pathname.includes("about.html");
        const projectsLink = isAboutPage ? "../index.html#projects" : "#projects";
        const aboutLink = isAboutPage ? "#" : "./src/about.html";

        this.innerHTML = `
        <div id="menu-overlay"
            class="fixed inset-0 bg-primary-900 z-40 flex flex-col justify-center items-center transition-transform duration-500 translate-x-full">
            <nav class="flex flex-col items-center gap-10 2xl:gap-20">
                <a href="${projectsLink}"
                    class="menu-link text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl font-bold text-primary-400 hover:text-white transition-colors">Projects</a>
                <a href="${aboutLink}"
                    class="menu-link text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl font-bold text-primary-400 hover:text-white transition-colors">About</a>
                <a href="https://drive.google.com/file/d/1PDiXc6aaLOuUVC30Qh0plwimiEx2Dnnf/view?usp=sharing"
                    target="_blank"
                    class="menu-link text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl font-bold text-primary-400 hover:text-white transition-colors">Resume</a>
                <a href="mailto:nandasantana276@gmail.com"
                    class="menu-link text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl font-bold text-primary-400 hover:text-white transition-colors">Contact</a>
            </nav>

            <div class="absolute bottom-10 text-xs md:text-sm 2xl:text-xl text-primary-400 tracking-widest text-center">
                &copy; 2025 Nyoman Wikananda Santana
            </div>
        </div>
        `;
    }
}

customElements.define("custom-footer", CustomFooter)
customElements.define("custom-header", CustomHeader);
customElements.define("project-card", ProjectCard);
customElements.define("project-card-no-image", ProjectCardNoImage)
customElements.define("menu-overlay", MenuOverlay)