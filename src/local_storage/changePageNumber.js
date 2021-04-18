export function changePage(number, ref) {
  localStorage.pageNumber = `${number + 1}`;
  ref.innerText = `${number + 1}`;
}

export function resetPage(ref) {
  localStorage.pageNumber = "1";
  ref.innerText = "1";
}
