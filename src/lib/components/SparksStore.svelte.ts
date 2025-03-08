let hidden = $state(false);
export const showSparks = () => (hidden = false);
export const hideSparks = () => (hidden = true);
export const isSparksVisible = () => !hidden;
