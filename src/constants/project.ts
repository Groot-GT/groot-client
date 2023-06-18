export const OWNED_BY_ANYONE = 'Owned by anyone';
export const OWNED_BY_ME = 'Owned by me';
export const UPDATED_AT = 'updatedAt';
export const CREATED_AT = 'createdAt';
export const NAME = 'name';
export const NEWEST_FIRST = 'newest first';
export const OLDEST_FIRST = 'oldest first';
export const A_Z = 'A-Z';
export const Z_A = 'Z-A';

export const projectsOwnerFilterOptions = {
  0: OWNED_BY_ANYONE,
  1: OWNED_BY_ME,
} as const;

export const projectOrderings = {
  0: UPDATED_AT,
  1: CREATED_AT,
  2: NAME,
} as const;

export const dateOrderings = {
  0: NEWEST_FIRST,
  1: OLDEST_FIRST,
} as const;

export const nameOrderings = {
  0: A_Z,
  1: Z_A,
} as const;

export const projectOrderingWithOptions = {
  [CREATED_AT]: {
    0: NEWEST_FIRST,
    1: OLDEST_FIRST,
  },
  [UPDATED_AT]: {
    0: NEWEST_FIRST,
    1: OLDEST_FIRST,
  },
  [NAME]: {
    0: A_Z,
    1: Z_A,
  },
};
