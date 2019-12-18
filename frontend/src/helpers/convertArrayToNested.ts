export default function convertList(payload: any[], typeOfId: string): object { //eslint-disable-line
  return payload.reduce((acc, item) => {
    acc[item[typeOfId]] = item;
    return acc;
  }, {});
}
