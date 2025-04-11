const stackContainer = document.getElementById('stack');

const input = document.getElementById('stackValue');

const stack = [];

function push() {
  const value = input.value.trim();

  if (value === '') return;
  stack.push(value);
  render();
  input.value = '';
}

function pop() {
  if (stack.length === 0) return;
  stack.pop();
  render();
}

function render() {
    stackContainer.innerHTML = '';
  stack.forEach(value => {
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = value;
    stackContainer.appendChild(box);
  });
}
