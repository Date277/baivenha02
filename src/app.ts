// cách 1: giải pháp chưa tối ưu
// - xác định vấn đề của đề bài
// - xác định rõ input, output
// - xác định điều kiện của input
// - các bước xử lý vấn đề

const same = (arr1: number[], arr2: number[]): boolean => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let isCheckIndex = arr2.indexOf(arr1[i] ** 2);
    if (isCheckIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(isCheckIndex, 1);
  }
  return true;
};
console.log(same([1, 2, 3, 2], [1, 4, 4, 9]));
