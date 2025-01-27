import { PropsWithChildren } from 'react';

import { DarkModeProps } from '@leafygreen-ui/lib';

import { LeafyGreenTableOptions, LGRowData } from '../useLeafyGreenTable';
import { TableProps } from '..';

export type V11AdapterProps<T extends LGRowData> = PropsWithChildren<
  Pick<LeafyGreenTableOptions<T>, 'useVirtualScrolling' | 'hasSelectableRows'> &
    Pick<TableProps<T>, 'shouldAlternateRowColor'> &
    DarkModeProps & {
      /**
       * Mapping of TableHeader label to the key of the field in the Table's data
       */
      headerLabels?: { [key: string]: string };
    }
>;
