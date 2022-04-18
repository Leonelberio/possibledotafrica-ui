import { useBaseFontSize } from '@leafygreen-ui/leafygreen-provider';
import { BaseFontSize } from '@leafygreen-ui/tokens';

/**
 * A temporary wrapper around {@link useBaseFontSize}
 *
 * Returns a font size token consistent with the visual brand refresh.
 *
 * Once all components have been updated for the refresh,
 * this hook will be removed, and {@link useBaseFontSize} updated
 * to return the updated tokens.
 *
 * @deprecated
 *
 * @returns - {@link BaseFontSize}
 */
export const useUpdatedBaseFontSize = (): BaseFontSize => {
  const baseFontSize = useBaseFontSize();
  return baseFontSize === 16 ? BaseFontSize.Body2 : BaseFontSize.Body1;
};