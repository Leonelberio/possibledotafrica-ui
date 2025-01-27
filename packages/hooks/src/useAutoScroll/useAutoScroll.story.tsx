import React, { useRef } from 'react';
import { range } from 'lodash';

import { css } from '@leafygreen-ui/emotion';
import { StoryMeta } from '@leafygreen-ui/lib';

import { useAutoScroll, useDynamicRefs } from '..';

// eslint-disable-next-line storybook/prefer-pascal-case
export const itemHeight = 25;
const testItems = 16;

export default StoryMeta({
  title: 'hooks/useAutoScroll',
  argTypes: {
    selected: {
      type: 'number',
      min: 0,
      max: testItems - 1,
    },
  },
  parameters: {
    default: 'Basic',
    controls: { exclude: ['as', 'darkMode'] },
  },
});

export const Basic = ({ selected }: { selected?: number }) => {
  const data = range(testItems);
  const menuRef = useRef<HTMLUListElement>(null);
  const itemRefs = useDynamicRefs<HTMLLIElement>({ prefix: 'item' });

  useAutoScroll(itemRefs(`${selected}`), menuRef);

  return (
    <div
      className={css`
        position: relative;
        width: 100px;
      `}
    >
      <ul
        ref={menuRef}
        data-testid={'menu'}
        className={css`
          position: relative;
          max-height: ${itemHeight * 4}px;
          overflow: auto;
        `}
      >
        {data.map(x => (
          <li
            key={x}
            ref={itemRefs(`${x}`)}
            data-testid={`item-${x}`}
            className={css`
              position: relative;
              height: ${itemHeight}px;
              color: ${x === selected ? 'red' : 'inherit'};
            `}
          >
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
};
