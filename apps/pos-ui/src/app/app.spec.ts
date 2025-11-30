import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app';

describe('App', () => {
  it('successfully initializes', async () => {
    await render(AppComponent);
    expect(screen).toBeTruthy();
  });
});
