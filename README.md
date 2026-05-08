# portfolio-v3

This project is a personal portfolio website built with Next.js. It serves as a showcase of skills, projects, and experience. The portfolio provides an interactive and visually appealing way to present information to potential employers or clients. It leverages modern web development practices and aims for optimal performance and user experience.

**Features**

*   **Project Showcase:** Dedicated sections to highlight various projects with descriptions and details.
*   **Dynamic Routing:** Utilizes Next.js dynamic routes for individual project pages.
*   **Responsive Design:** Built with Tailwind CSS to ensure responsiveness across different devices.
*   **Optimized Fonts:** Employs `next/font` to optimize and load custom fonts for improved performance and aesthetics.
*   **WakaTime Integration (Potential):** Appears to have an API endpoint for fetching WakaTime statistics (usage not detailed).
*   **Resume Integration:** Resume PDF available for download.
*   **Customizable UI Components:** Reusable UI components for consistent styling and ease of maintenance.

**Tech Stack**

*   **Frontend:**
    *   Next.js: v14.1.0
    *   React: v18
*   **Styling:**
    *   Tailwind CSS: v4+

**Project Structure**

```
├── README.md
├── bun.lock
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public
│   ├── Fontfinder.png
│   ├── Law Journal .jpeg
│   ├── Myob.png
│   ├── Next Hire.jpeg
│   ├── Nexthire.png
│   ├── Nikhil_Dhanda_Resume.pdf
│   ├── Nikhil_Dhanda_Resume_FullStack_Dev.pdf
│   ├── Profile.png
│   ├── Roadmap Gen.jpeg
│   ├── Roadmap.png
│   ├── Vitb Notes.jpeg
│   ├── file.svg
│   ├── fonts
│   │   ├── IBMPlexMono-Regular.ttf
│   │   └── PoltawskiNowy-VariableFont_wght.ttf
│   ├── globe.svg
│   ├── logo.png
│   ├── news19.png
│   ├── next.svg
│   ├── oneko.gif
│   ├── oscode.svg
│   ├── quote.jpg
│   ├── recipelab.png
│   ├── vercel.svg
│   ├── vitb-notes.png
│   ├── warm-reach.png
│   ├── wcm-.png
│   └── window.svg
├── src
│   ├── app
│   │   ├── api
│   │   │   └── wakatime-status
│   │   ├── components
│   │   │   ├── common
│   │   │   ├── landingpage
│   │   │   ├── svgs
│   │   │   └── ui
│   │   ├── globals.css
│   │   ├── icon.png
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── projects
│   │       └── [slug]
│   └── lib
│       └── utils.ts
└── tsconfig.json
```

*   `app`: Contains the Next.js application logic, including pages, layouts, and API routes.
*   `app/api`: Includes API routes, potentially for fetching data. `wakatime-status` suggests integration with WakaTime.
*   `app/components`: Houses reusable UI components, organized into categories like `common`, `landingpage`, `svgs`, and `ui`.
*   `app/projects/[slug]`: Implements dynamic routes for individual project pages.
*   `public`: Stores static assets such as images, fonts, and other media files.
*   `src/lib`: Contains utility functions.

**Getting Started**

**Prerequisites**

*   Node.js (version 18 or higher recommended, check Next.js documentation for precise version compatibility)
*   bun (Package manager)

**Installation**

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd portfolio-v3
    ```

3.  Install dependencies using bun:

    ```bash
    bun install
    ```

**Running Locally**

1.  Start the development server:

    ```bash
    bun run dev
    ```

2.  Open your browser and navigate to `http://localhost:3000` to view the application.

**Usage**

The application will be running locally, and you can navigate through the portfolio website to view the projects and other information. The project pages are dynamically generated based on the files in the `app/projects/[slug]` directory.

**License**

Not detected.

**Contact**

Your Name - your@email.com - Your LinkedIn/GitHub link
