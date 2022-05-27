import { faker } from '@faker-js/faker';
import type { UserData } from './types';

export const fakeUsers: UserData[] = new Array(10).fill(null).map(() => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
}));
