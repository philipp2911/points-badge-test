import { getUsersBadge } from './index';
import { Icon } from './types/icon.enum';
import { User } from './types/user.interface';

describe('getUsersBadge', () => {

  it(`get Platinum`, async function () {
    expect(await getUsersBadge(getUserMock(101))).toEqual(Icon.BADGE_PLATINUM);
    expect(await getUsersBadge(getUserMock(2000))).toEqual(Icon.BADGE_PLATINUM);
    expect(await getUsersBadge(getUserMock(1000))).toEqual(Icon.BADGE_PLATINUM);
  });

  it(`get Gold`, async function () {
    expect(await getUsersBadge(getUserMock(100))).toEqual(Icon.BADGE_GOLD);
    expect(await getUsersBadge(getUserMock(75))).toEqual(Icon.BADGE_GOLD);
    expect(await getUsersBadge(getUserMock(50))).toEqual(Icon.BADGE_GOLD);
  });

  it(`get Silver`, async function () {
    expect(await getUsersBadge(getUserMock(25))).toEqual(Icon.BADGE_SILVER);
    expect(await getUsersBadge(getUserMock(49))).toEqual(Icon.BADGE_SILVER);
    expect(await getUsersBadge(getUserMock(30))).toEqual(Icon.BADGE_SILVER);
  });

  it(`get Bronze`, async function () {
    expect(await getUsersBadge(getUserMock(5))).toEqual(Icon.BADGE_BRONZE);
    expect(await getUsersBadge(getUserMock(24))).toEqual(Icon.BADGE_BRONZE);
    expect(await getUsersBadge(getUserMock(10))).toEqual(Icon.BADGE_BRONZE);
  });

  it(`get Startet`, async function () {
    expect(await getUsersBadge(getUserMock(4))).toEqual(Icon.BADGE_STARTER);
    expect(await getUsersBadge(getUserMock(1))).toEqual(Icon.BADGE_STARTER);
  });

  it(`get Bad Ass`, async function () {
    expect(await getUsersBadge(getUserMock(-1))).toEqual(Icon.BADGE_BAD_ASS);
    expect(await getUsersBadge(getUserMock(-1000))).toEqual(Icon.BADGE_BAD_ASS);
  });

  it(`get null`, async function () {
    expect(await getUsersBadge(getUserMock(-0))).toEqual(null);
  });

});

function getUserMock(count: number): User {
  return {
    id: '___',
    username: '___',
    solution_count: count
  };
}
