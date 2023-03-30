function generateCalendar() {
  let month = 1;
  let year = 2023;

  const header = document.querySelector('header');
  const days = document.querySelector('.days');
  const dates = document.querySelector('.dates');
  const weekdays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];
  const output = document.querySelector('.output');
  const reset = document.querySelector('.reset');

  const backMonth = document.createElement('div');
  const nextMonth = document.createElement('div');
  const monthName = document.createElement('p');

  reset.addEventListener('click',() =>{
    startPointFlag = false 
    endPointFlag = false;
    output.textContent = "Choose first date";
  })

  backMonth.textContent = '<';
  backMonth.addEventListener('click',() => {
    month -= 1;
    if(month < 0){
      year -= 1;
      month = 11;
    }
    updateCalendar(dates, year, month, monthName, output);
  });

  nextMonth.textContent = '>';
  nextMonth.addEventListener('click',() => {
    month += 1;
    if(month> 11){
      year += 1;
      month = 0;
    }
    updateCalendar(dates, year, month, monthName, output);
  });

  header.appendChild(backMonth);
  header.appendChild(monthName);
  header.appendChild(nextMonth);

  weekdays.forEach(day => {
    const div = document.createElement('div');
    div.textContent = day;
    days.appendChild(div);
  });

  updateCalendar(dates, year, month, monthName, output);
}

function updateCalendar(dates, year, month, monthName, output) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  monthName.textContent = `${new Date(year, month).toLocaleString('uk-UA', { month: 'long' })} ${year}`;

  dates.textContent = '';
  let date = 1;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      const div = document.createElement('div');
      if (i === 0 && j < new Date(year, month, 0).getDay()) {
        div.classList.add('empty');
      } else if (date > daysInMonth) {
        div.classList.add('empty');
      } else {
        div.textContent = date;
        date++;
      }

      div.addEventListener('click', () =>{
        let date = new Date(year, month, div.textContent, 0);

        if(!startPointFlag){
          startPointFlag = true;
          startPointDate = date;
          output.textContent = "Оберіть другу дату";
        }
        else{
          endPointFlag = true;
          endPointDate = date;
        }

        if(startPointFlag && endPointFlag){
          output.textContent = `${startPointDate.toLocaleDateString()} - ${endPointDate.toLocaleDateString()} (${Math.round(Math.abs(startPointDate.getTime() - endPointDate.getTime())/1000/60/60/24)})`;
        }
      });
      dates.appendChild(div);
    }
  }
}

let startPointFlag = false;
let endPointFlag = false;
let startPointDate = new Date();
let endPointDate = new Date();

generateCalendar()