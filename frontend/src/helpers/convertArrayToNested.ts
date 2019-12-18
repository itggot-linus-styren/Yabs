export default function convertList(payload: any[], typeOfId: string): any { //eslint-disable-line @typescript-eslint/no-explicit-any
  return payload.reduce((acc, item) => {
    acc[item[typeOfId]] = item;
    return acc;
  }, {});
}
