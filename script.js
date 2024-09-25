const url = "https://data-lesson-13.vercel.app/all";

const input = document.querySelector(".input");
const box = document.querySelector(".box");

const render = async (value) => {
  const res = await fetch(`${url}?title_like=${value}`);
  const data =  await res.json();
  box.innerHTML = data?.map((item) => `
    <div class="row">
    <img src="${item.img}" alt="">
    <h2>${item.title}</h2>
    
    </div>
   `).join("")
}

const useDebounce = () => {
  let id;
  return () => {
    box.innerHTML = "<h1>Loading....</h1>";
    clearTimeout(id);
    id = setTimeout(() => {
      render(input.value);
    }, 500);
  };
};

const debounce = useDebounce();

input.addEventListener("keyup", () => {
debounce()

})

document.addEventListener('DOMContentLoaded', () => render(''));
