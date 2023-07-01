/**
 * Merges 2 sorted integer arrays into a single, sorted array
 * @param collection_1 - A sorted integer array
 * @param collection_2 - A sorted integer array

 */
export function merge(
  collection_1: number[],
  collection_2: number[]
): number[] {
  let ptr1: number = 0;
  let ptr2: number = 0;

  let mergedList: number[] = new Array(
    collection_1.length + collection_2.length
  );

  while (ptr1 < collection_1.length && ptr2 < collection_2.length) {
    // add smallest element first
    if (collection_1[ptr1] < collection_2[ptr2]) {
      mergedList[ptr1 + ptr2] = collection_1[ptr1];
      ptr1++;
    } else {
      mergedList[ptr1 + ptr2] = collection_2[ptr2];
      ptr2++;
    }
  }
  // add remaining elements
  while (ptr1 < collection_1.length) {
    mergedList[ptr1 + ptr2] = collection_1[ptr1];
    ptr1++;
  }

  while (ptr2 < collection_2.length) {
    mergedList[ptr1 + ptr2] = collection_2[ptr2];
    ptr2++;
  }

  return mergedList;
}
