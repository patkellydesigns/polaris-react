import React from 'react';
import {mountWithAppProvider} from 'test-utilities/legacy';

import {Secondary} from '../Secondary';

describe('Secondary()', () => {
  it('mounts', () => {
    const secondary = mountWithAppProvider(<Secondary expanded />);
    expect(secondary.exists()).toBe(true);
  });
});
