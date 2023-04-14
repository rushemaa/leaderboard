export const addScore = async (where) => {
  const li = document.createElement('li');
  const score = document.querySelector('#score').value;
  const name = document.querySelector('#name').value;

  // creating scores
  const data = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hvbmZqZi4yU5Otj40e9k/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const messageJson = await data.text();
  const message = await JSON.parse(messageJson);
  if (message.result === 'Leaderboard score created correctly.') {
    li.innerHTML = `${name} : ${score}`;
    where.appendChild(li);
    document.querySelector('#score').value = '';
    document.querySelector('#name').value = '';
  }
};

export const refresher = async (where) => {
  let innerHtml = '';
  const data = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hvbmZqZi4yU5Otj40e9k/scores/',
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const messageJson = await data.text();
  const message = await JSON.parse(messageJson);
  let i = 0;
  let colorClass = '';
  message.result.forEach((element) => {
    i += 1;
    if (i % 2 === 0) {
      colorClass = 'color';
    } else {
      colorClass = '';
    }
    const { score, user } = element;
    innerHtml += `<li class ="${colorClass}"> ${user} : ${score} </li>`;
  });

  where.innerHTML = innerHtml;
};
