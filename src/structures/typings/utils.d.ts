type SelectOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Pick<T, K> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

interface truc {
  test: string;
  prout: boolean;
  c: number;
}

type test = SelectOne<truc, 'test' | 'c'>;

const truc: test = { caca: false, prout: 5, c: '5', test: 6 };
