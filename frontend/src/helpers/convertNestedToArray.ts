export default function convertList(payload: object, typeOfId: string): any[] { //eslint-disable-line
  return Object.keys(payload).map((id) => payload[id]);
}
