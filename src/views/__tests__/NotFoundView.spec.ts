import { describe, it, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import NotFoundView from '../NotFoundView.vue';

describe('NotFoundView', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(NotFoundView);

    expect(wrapper.text()).toContain('404');
  });
});
