import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
