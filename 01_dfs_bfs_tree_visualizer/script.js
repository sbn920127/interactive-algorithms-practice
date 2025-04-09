const tree = {
  value: 'A',
  children: [
    {
      value: 'B',
      children: [{ value: 'D', children: [] }],
    },
    {
      value: 'C',
      children: [{ value: 'E', children: [] }],
    },
  ]
};

function clearVisited() {
  document.querySelectorAll('.node').forEach(node => {
    node.classList.remove('visited');
  });
}

function runDFS() {
  clearVisited();
  const result = [];
  function dfs(node) {
    if (!node) return;
    result.push(node.value);
    for (const child of node.children) {
      dfs(child);
    }
  }
  dfs(tree);
  animate(result);
}

function runBFS() {
  clearVisited();
  const result = [];
  const queue = [tree];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.value);
    for (const child of node.children) {
      queue.push(child);
    }
  }
  animate(result);
}

function animate(order) {
  order.forEach((id, i) => {
    setTimeout(() => {
      document.getElementById(id).classList.add('visited');
    }, i * 500);
  });
}