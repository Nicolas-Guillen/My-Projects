window.alert('Bebê eu me esforçei muito para criar isso para você... Espero que goste!');
window.alert('Uma flor para meu amor!!')
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};