export const addScore = (where) => {
  const li = document.createElement('li');
  const score = document.querySelector('#score').value;
  const name = document.querySelector('#name').value;
  li.innerHTML = `${name} : ${score}`;
  where.appendChild(li);
  document.querySelector('#score').value = '';
  document.querySelector('#name').value = '';
};

export const refresher = (where) => {
  where.innerHTML = '';
};
