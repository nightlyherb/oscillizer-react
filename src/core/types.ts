export type Update<T> = (oldState: T) => T;

type UpdateByKey<T> = {
  [K in keyof T]?: Update<T[K]>;
};

export const updateOf =
  <T>(updateByKey: UpdateByKey<T>): Update<T> =>
  (oldState) => {
    const newState = { ...oldState };
    // Iterate the keys of `newState` NOT `updateByKey`
    // because updateByKey may have additional keys not in newState.
    // for ... in ... loop is used to avoid a type cast
    for (const key in newState) {
      const updateOrUndefined = updateByKey[key];
      if (updateOrUndefined !== undefined) {
        newState[key] = updateOrUndefined(newState[key]);
      }
    }
    return newState;
  };
