import { Project, ProcessStep } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'atrium-house',
    index: '01',
    title: 'The Atrium House',
    category: 'Residential',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz882htREllD1Dv6hfQYcYQoJG112CLWOlCpgZeIYGuQaT4y6sH7XcTKvqStKOXaEXLH-PhvPMP2x0P5fOupxqafHWuiXVXIMI0cJxl20XTJnXRho6uVHtoagrWrZ5GnOOcK5jXt04VxJjd5orqQtgV1JR1CtmDIuSpLaaehKlf6AayCDZVdOqcRzWhxQf-QU864wROLVBS9OFodaEqnWDoj8Av1vOQsPRtAjRs3fKz__ZDq0bkmGvvAlOUTeiySf0O26m44Cb_-bB',
    location: 'Pune, Maharashtra',
    description: 'A split-level residential masterpiece designed around a central double-height open atrium. Features sweeping curved balconies, structured minimalist glass handrails, and large vertical glazing to harmonize natural light with premium material finishes.',
    year: '2022',
    area: '6,200 sqft'
  },
  {
    id: 'crimson-suite',
    index: '02',
    title: 'The Crimson Suite',
    category: 'Hospitality',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG-F0rwG5KYfbjCERR8XARRLCwiAyUP2E0UlhvDVImmd1bZRCj08wPzW72AdJCbFYkP1y8HYnfW41v7SHlDJcQLbL4hh1OYAXBYlMxrtxovarMr1YzD_eBAvLkwoGVPCWQCLUyFj6iAe-2Pio9NvpJIPXc3zzx5SYiaNo2EJu8JJGKaZZcIsp8j8g2FmiivgsVzA5aV26QDVfuWcEl6SQ82DcOt_0sZBAGTyXVs2x4m5cwC55zVitHEQkTPk5DWOQnFQSwXBcOCIv7',
    location: 'Pune, Maharashtra',
    description: 'A high-end luxury hospitality bedroom suite that balances warm backlit fabric panelling, structural ceiling grids, and a custom sliding geometric feature wall, establishing a warm and tactile escape.',
    year: '2023',
    area: '1,200 sqft'
  },
  {
    id: 'onyx-dining-lab',
    index: '03',
    title: 'Onyx Dining Lab',
    category: 'Commercial',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXnaWf3LnTugCZrLFT4s6i2Dzbgs-knPznOe9O9JecFQ7XaXWOAPvqW0H_3wvgalE7ziQ-oc6kvOVEeQEGSRRnz6iCQGEC4ClIDVt8RGgqIo8ThJCeDYOBF7vr9A03sOqrsMFMIFz9zOn8IiVYNujxdh0OKYm-uDVGi9rpXZIBbmlrfDB0onY8hVwpqp_tslMPB9YJgUN_9ZiH3jBSCz8JmQmwi-LIJFpr3Nq2_vxd21Aml6GikuAGUuYKcshB7SFjJypE8gJVj9Wy',
    location: 'Pune, Maharashtra',
    description: 'An elite dining showcase designed to blend natural elements with stark contemporary features. Anchored by a customized intricate organic partition screen and high-contrast dark paneling.',
    year: '2023',
    area: '2,800 sqft'
  },
  {
    id: 'skyline-loft',
    index: '04',
    title: 'Skyline Loft',
    category: 'Residential',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC27ypjZfVXu8itqC5niEsFU7lB0-NhSUlYwFl96Z2zTbi76SMNF2whzWpd5LbVuSspbEcasLcY7jMWQcpS4u_uYfvxnCQA1xs31ue8erBAWAtkMsG7iRem28nj-pD1zyfxbQUwHiOACVXQcxc_3RmsRc2k_JuF_TAmz3XSk4Atish7I1zCGm7KudTPxySrEI7cn1PsxneAcX5cJt3mcoDtBkSCnk2WalMhX5a8T-zvK7ns9EvMGbdtX0OllB24VbmjzdZRXF6bsW8A',
    location: 'Kothrud, Pune',
    description: 'A vibrant penthouse combining warm timber ceiling arrays, bright canary yellow reading armchairs, and smart workspace storage, emphasizing geometric framing and expansive glass integration.',
    year: '2024',
    area: '4,500 sqft'
  },
  {
    id: 'boardroom',
    index: '05',
    title: 'The Boardroom',
    category: 'Institutional',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_s-tVSzYvezxTsTjeIQGXieV2IE_fYavEvQcuQL8qqbEbL6T_w3iLdHJuYJGLUgurTbkWthGCNCnL6IlgNaAGtCipZ969duxVRjarWCxDd0UOWMnij2ffcsg3Q3kCSA9WcUNxizK2h421b2tUJU_BsomhggTuoeZekY6gMNtF91E0B3ULtvZaEVPa2GRkEhx3OY0JwbIECtiF7w850yguNtK5rijv67Fo4tcb0tmDgMpTYdcMTssGAzmyVDB-98TufFcwmu5QbzhW',
    location: 'Pune, Maharashtra',
    description: 'A stately institutional conference facility featuring a massive natural wood table, luxurious classic carpets, geometric inset ceiling light bars, and an architectural feature wall illustrating classic blueprints.',
    year: '2021',
    area: '1,800 sqft'
  },
  {
    id: 'verde-living-room',
    index: '06',
    title: 'Verde Living Room',
    category: 'Residential',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBshhfYDAkUY1pOx0_B4sNHMnSDv6dqpSJvl49-hCBMVV3aCUpZwN4u8UratAdAUWz8-jtYYWNEABz4GGVQhBc3KEG7QvR_7HGW9TNGq1ddXfOHudCCbJObWEltix27G7rwnFQhEJ4COz5moI0XEUVKhxoGyk_AAVel8qnSvs8qZSwdTPgFJ5UCrLOCkAYhgiRO1oF5ODC8e8VMblmKgx0pvvtLrQHwt6F6PIQvodV7M9Cj3dP36XXdmp0sn5H4YKEgCAI4sJU2vu4V',
    location: 'Pune, Maharashtra',
    description: 'A luxurious living space showing deep teal and forest elements, rich walnut wooden wall storage, decorative tribal wall accents, and warm geometric drop ceiling lighting arrays.',
    year: '2022',
    area: '3,100 sqft'
  },
  {
    id: 'vellum-heights',
    index: '07',
    title: 'Vellum Heights Residence',
    category: 'Residential',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZq1P0Z7vadA5V402oGenL3UDur6O2cOf_NikUujrmteDxxtctDRLWIsC0KSwkT-y29Te-GoB8BBXGvg0Oxlulv60MfkN94XBRC8HGdHPFiApobpHmB4FQeqsrP72veaMs8o5AfmSKDyuTnFn_uzfaAfi9OBFPNK6clIhXWdI30n46vcPlshmH7dXmXlyXsn_LHxIxE3ro-ynpaYKUbm8fMqVQ6YCzBmWUObpFSMnNzZOoRzOs-u7j4RLcGq0MT1bCDjIDz_wES9EZ',
    location: 'Pune, Maharashtra',
    description: 'An monochromatic, dramatic residential design built around an imposing crystal chandelier. Highlighted by structural dark charcoal wall panels, minimalist couches, and a bespoke TV floating console.',
    year: '2023',
    area: '5,000 sqft'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: '01',
    title: 'Conceptual Curation',
    description: "We begin by distilling the client's aspirations into a cohesive architectural narrative, focusing on spatial flow and materiality before the first line is even drawn."
  },
  {
    index: '02',
    title: 'Structural Precision',
    description: 'Our technical teams leverage advanced BIM modeling to ensure every millimeter aligns with the vision, prioritizing structural honesty and sustainable innovation.'
  },
  {
    index: '03',
    title: 'Interior Synthesis',
    description: 'The final layer of our process involves bespoke interior curation—sourcing rare materials and custom furniture to breathe life into the structural shell.'
  }
];
