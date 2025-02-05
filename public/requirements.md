# AI Image Generation Website Requirements

## Description
A web application that allows users to generate images from text prompts using AI technology.
## folder structures
.
├── app
│   ├── dashboard
│   │   └── page.jsx
│   ├── layout.js
│   └── page.js
├── components
│   ├── ui/
│   ├── app-sidebar.jsx
│   ├── nav-main.jsx
│   ├── nav-projects.jsx
│   ├── nav-secondary.jsx
│   └── nav-user.jsx
├── hooks/
├── lib/
├── node_modules/
├── public/
├── .env.local
├── .gitignore
├── components.json
├── jsconfig.json
├── favicon.ico
└── globals.css

## Core Features
1. Text-to-Image Generation
   - Input field for users to enter detailed text prompts
   - Loading indicator while image is being generated

2. User Interface
   - Clean, modern, and intuitive design
   - Responsive layout for mobile and desktop
   - Easy-to-use prompt input system

3. Image Management
   - Download generated images
   - Share images via link

## Technical Requirements
1. Frontend
   - Modern web framework (Next.js and javascript)
   - Responsive design(shadcn)
   - Image optimization
   - Loading states and error handling


2. Backend
   - Integration with AI image generation API these are the apis give the user the choice of these two models(
        -https://api-inference.huggingface.co/models/Shakker-Labs/FLUX.1-dev-LoRA-AntiBlur
        -https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0)

   - User authentication system(using Clerk)





## User Experience
1. Accessibility
   - Screen reader support
   - Keyboard navigation
   - High contrast options
   - Multi-language support

2. Performance
   - Fast initial load time
   - Optimized image loading
   - Smooth transitions
   - Offline support

