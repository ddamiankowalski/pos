import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

const initialState: DashboardState = {
  title: '',
  icon: null,
  titleDescription: null,
};

type DashboardState = {
  title: string;
  icon: string | null;
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
    const setModule = (
      title: string,
      titleDescription: string | null = null,
      icon: string | null = null
    ) => {
      patchState(store, { title, titleDescription, icon });
    };

    return {
      setModule,
    };
  })
);
