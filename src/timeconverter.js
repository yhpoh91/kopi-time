const convert = (time) => {
  const sections = [];
  let timeLeft = time;

  const ms = timeLeft % 1000;
  timeLeft = Math.floor(timeLeft / 1000);
  sections.splice(0, 0, { unit: 'ms', value: ms});
  
  const s = timeLeft % 60;
  timeLeft = Math.floor(timeLeft / 60);
  sections.splice(0, 0, { unit: 's', value: s});

  const min = timeLeft % 60;
  timeLeft = Math.floor(timeLeft / 60);
  sections.splice(0, 0, { unit: 'min', value: min});

  const hr = timeLeft % 24;
  timeLeft = Math.floor(timeLeft / 24);
  sections.splice(0, 0, { unit: 'hr', value: hr});

  const d = timeLeft;
  sections.splice(0, 0, { unit: 'd', value: d});


  let text = '';
  let include = false;
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    if (section.value > 0) {
      include = true;
    }

    if (include) {
      text += `${section.value}${section.unit} `;
    }
  }

  return text.trim();
};

module.exports = {
  convert,
};