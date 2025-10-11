import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

const initialState: DashboardState = {
  title: '',
  titleDescription: null,
};

type DashboardState = {
  title: string;
  titleDescription: string | null;
};

export const DashboardStore = signalStore(
  withState(initialState),
  withMethods((store) => {
    /**
     * Sets current title and title description
     *
     * @param title
     * @param titleDescription
     */
    const setTitle = (
      title: string,
      titleDescription: string | null = null
    ) => {
      patchState(store, { title, titleDescription });
    };

    return {
      setTitle,
    };
  })
);
