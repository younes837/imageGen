export const models = [
  {
    id: "flux",
    name: "FLUX Anti-Blur",
    apiEndpoint:
      "https://api-inference.huggingface.co/models/Shakker-Labs/FLUX.1-dev-LoRA-AntiBlur",
  },
  {
    id: "sdxl",
    name: "Stable Diffusion XL",
    apiEndpoint:
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
  },
  {
    id: "midj",
    name: "Midjourney",
    apiEndpoint:
      "https://api-inference.huggingface.co/models/strangerzonehf/Flux-Midjourney-Mix2-LoRA",
  },
  {
    id: "fofr",
    name: "fofr",
    apiEndpoint: "https://api-inference.huggingface.co/models/fofr/sdxl-emoji",
  },
  {
    id: "svenn",
    name: "SvenN",
    apiEndpoint: "https://api-inference.huggingface.co/models/SvenN/sdxl-emoji",
  },
  // Add new models here following the same structure
  // {
  //   id: "unique-id",
  //   name: "Display Name",
  //   description: "Short description of the model",
  //   apiEndpoint: "API endpoint URL",
  // },
];
