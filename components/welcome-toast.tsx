'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export function WelcomeToast() {
  useEffect(() => {
    // ignore if screen height is too small
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes('welcome-toast=2')) {
      toast('🛍️ Velkommen til Smokely!', {
        id: 'welcome-toast',
        duration: Infinity,
        onDismiss: () => {
          document.cookie = 'welcome-toast=2; max-age=31536000; path=/';
        },
        description: (
          <>
            Vi specialiserer os i at sælge snus, vapes, og CBD produkter. Vi er glade for at have
            dig på besøg og giver dig 10% rabat på dit første køb. Brug koden "SMOKELY1ST" ved
            checkout!
          </>
        )
      });
    }
  }, []);

  return null;
}
