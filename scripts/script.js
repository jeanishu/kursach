const blocks = [
    document.getElementById('block1'),
    document.getElementById('block2'),
    document.getElementById('block3'),
  ];

  let currentIndex = 0;

  function showNextBlock() {
    blocks.forEach((block, i) => {
      block.style.display = i === currentIndex ? 'block' : 'none';
    });
    currentIndex = (currentIndex + 1) % blocks.length;
  }

  showNextBlock(); 
  setInterval(showNextBlock, 500); 



