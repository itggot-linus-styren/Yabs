export default function convertList(payload: any[], typeOfId: string): object { //eslint-disable-line
  const res = payload.reduce((acc, item) => {
    acc[item[typeOfId]] = item;
    return acc;
  }, {});
  return res;
}
